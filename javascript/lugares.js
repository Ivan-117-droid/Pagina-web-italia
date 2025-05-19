//Carrusel con flechas

document.addEventListener("DOMContentLoaded", () => {
    const carruseles = document.querySelectorAll(".carrusel-ciudad");

    carruseles.forEach(carrusel => {
        const contenedor = carrusel.querySelector(".imagenes");
        const izquierda = carrusel.querySelector(".flecha.izquierda");
        const derecha = carrusel.querySelector(".flecha.derecha");

        const imagen = contenedor.querySelector("figure");
        const scrollStep = imagen.offsetWidth + 20;

        izquierda.addEventListener("click", () => {
            contenedor.scrollBy({ left: -scrollStep, behavior: "smooth" });
        });

        derecha.addEventListener("click", () => {
            contenedor.scrollBy({ left: scrollStep, behavior: "smooth" });
        });
    });
});

//Carrusel Automático

document.addEventListener("DOMContentLoaded", () => {
    const carrusel_banner = document.querySelector(".imagenes_banner");
    const imagenes = carrusel_banner.querySelectorAll(".imagen_banner");

    let index = 0;
    let sentido = 1;

    const anchoactual = () => {
        return imagenes[0].clientWidth;
    };


    let imagenAncho = anchoactual();


    setInterval(() => {
        index += sentido;


        if (index >= imagenes.length - 1 || index <= 0) {
            sentido *= -1;
        }


        carrusel_banner.scrollTo({
            left: index * imagenAncho,
            behavior: "smooth"
        });

    }, 5000);


    window.addEventListener('resize', () => {
        imagenAncho = anchoactual();
    });
});

//Cambiar idioma

const translations = {
    es: {
        headertitulo: "VIAJA POR ITALIA",
        headerbienvenido: "Conoce algunas ciudades de Italia y sus atracciones turísticas.",
        introduccion: "Conoce algunas ciudades de Italia y sus atracciones turísticas.",
        navInicio: "Inicio",
        navTurismo: "Turismo",
        navActividades: "Actividades",
        footerSocial: "Redes",
        footerseciones: "Secciones",
        footercontacto: "Contacto",
        subLugares: "Lugares turísticos",
        subActividades: "Actividades",
        submenu: {
            roma: "Roma",
            florencia: "Florencia",
            venecia: "Venecia",
            milan: "Milán",
            napoles: "Nápoles",
            pisa: "Pisa",
            verona: "Verona",
            siena: "Siena",
            genova: "Génova"
        },
        contacto_correo: "Correo:",
        contacto_telefono: "Número de teléfono",
        contactocorreo: "contacto@conoceitalia.com",
        contactonumero: "123456789",
        logo: "images/Logoblanco.png",
        lugares_interesantes: "Lugares interesantes de",
        ciudades: {
            roma: {
                nombre: "Roma",
                descripcion: "Roma la capital de Italia es una visita obligatoria para cualquier viajero que recorra el país, debido a su importancia histórica recorrerla es recorrer gran parte de la historia de la humanidad gracias a sus reliquias arquitectónicas.",
                lugares: ["Coliseo Romano", "Fontana di Trevi", "El Foro romano"]
            },
            florencia: {
                nombre: "Florencia",
                descripcion: "Florencia es la cuna del arte renacentista y neoclásico, fue un importante bastión cultural y político durante el renacimiento, por lo cual es una ciudad primordial para los amantes del arte con sus estructurar y museos que rememoran el recentismo.",
                lugares: ["Galería Uffizi", "Palazzo Pitti", "Piazzale Michelangelo"]
            },
            venecia: {
                nombre: "Venecia",
                descripcion: "Venecia es una ciudad construida sobre islas interconectadas, dando a lugar a sus famosos canales por donde se dan los paseos en góndolas, aunque este no es el único de sus atractivos también cuenta con importantes obras arquitectónicas y vistas increíbles.",
                lugares: ["Piazza San Marco", "Isla de Burano", "El Gran Canal"]
            },
            milan: {
                nombre: "Milán",
                descripcion: "Milán es una parada obligatoria para cualquier amante de la moda, donde nacieron las grandes marcas como Armani, Versace entre otras, también cuenta con la Milán fashion week uno de los eventos de moda más importantes del mundo, además de esto también cuenta con una gastronomía sorprendente.",
                lugares: ["La catedral de Milán", "Teatro alla Scala", "Galería Vittorio Emanuele II"]
            },
            napoles: {
                nombre: "Nápoles",
                descripcion: "Nápoles tiene una rica historia futbolística y alberga una gran variedad de sitios culturales e históricos que la convierten en un destino muy atractivo. Destacan especialmente sus catacumbas subterráneas, que parecen formar una ciudad bajo la ciudad.",
                lugares: ["Catacumbas de San Gennaro", "Pompeya", "Estadio Giuseppe Meazza"]
            },
            pisa: {
                nombre: "Pisa",
                descripcion: "Pisa a pesar de ser reconocida mayoritariamente por su torre inclinada, cuenta con muchas otras atracciones que resultan interesantes y atractivos para disfrutar durante la estadía en la ciudad.",
                lugares: ["Torre Inclinada de Pisa", "Duomo di Pisa", "El battistero di San Giovanni"]
            },
            verona: {
                nombre: "Verona",
                descripcion: "Verona es un recorrido por el antiguo imperio romano y además esta fuertemente ligada al arte siendo el escenario donde William Shakespeare baso su obra Romeo y Julieta.",
                lugares: ["Piazza delle Erbe", "Arena de Verona", "Balcón de Julieta"]
            },
            siena: {
                nombre: "Siena",
                descripcion: "Siena es una joya del arte y la arquitectura medieval, con imponentes torres, elegantes construcciones.",
                lugares: ["Torre del Mangia", "Piazza del Campo", "Duomo di Siena"]
            },
            genova: {
                nombre: "Génova",
                descripcion: "Génova es una ciudad costera, esto es una parte fundamental de su identidad, además de contener un casco urbano que todavía se remonta a la época renacentista.",
                lugares: ["Porto Antico", "Acuario de Génova", "Mirador Il Bigo"]
            }

          
        },

        final: "¿Qué esperas para visitar estos maravillosos lugares?",
    },

    en: {
        headertitulo: "TRAVEL THROUGH ITALY",
        headerbienvenido: "Discover some cities in Italy and their tourist attractions.",
        introduccion:"Get to know some Italian cities and their tourist attractions.",
        navInicio: "Home",
        navTurismo: "Tourism",
        navActividades: "Activities",
        footerSocial: "Social",
        footerseciones: "Sections",
        footercontacto: "Contact",
        subLugares: "Tourist places",
        subActividades: "Activities",
        submenu: {
            roma: "Rome",
            florencia: "Florence",
            venecia: "Venice",
            milan: "Milan",
            napoles: "Naples",
            pisa: "Pisa",
            verona: "Verona",
            siena: "Siena",
            genova: "Genoa"
        },
        contacto_correo: "Email:",
        contacto_telefono: "Phone number",
        contactocorreo: "contact@discoveritaly.com",
        contactonumero: "123456789",
        logo: "images/LogoEnglish.png",
        lugares_interesantes: "Interesting places in",
        ciudades: {
            roma: {
                nombre: "Rome",
                descripcion: "Rome, the capital of Italy, is a must-visit for any traveler exploring the country. Due to its historical importance, walking through it is like walking through much of human history, thanks to its architectural relics.",
                lugares: ["Roman Colosseum", "Trevi Fountain", "The Roman Forum"]
            },
            florencia: {
                nombre: "Florence",
                descripcion: "Florence is the birthplace of Renaissance and Neoclassical art, and it was a major cultural and political hub during the Renaissance. It is essential for art lovers thanks to its structures and museums that recall this period.",
                lugares: ["Uffizi Gallery", "Pitti Palace", "Michelangelo Square"]
            },
            venecia: {
                nombre: "Venice",
                descripcion: "Venice is a city built on interconnected islands, which gave rise to its famous canals and gondola rides. But this isn't its only attraction—it's also home to important architectural works and breathtaking views.",
                lugares: ["St. Mark's Square", "Burano Island", "The Grand Canal"]
            },
            milan: {
                nombre: "Milan",
                descripcion: "Milan is a must for fashion lovers. It's the birthplace of big brands like Armani and Versace, and it hosts Milan Fashion Week, one of the world’s top fashion events. It also boasts amazing cuisine.",
                lugares: ["Milan Cathedral", "La Scala Theater", "Vittorio Emanuele II Gallery"]
            },
            napoles: {
                nombre: "Naples",
                descripcion: "Naples has a rich football history and offers a wide variety of cultural and historical sites. Its underground catacombs stand out, forming what seems like a city beneath the city.",
                lugares: ["Catacombs of San Gennaro", "Pompeii", "Giuseppe Meazza Stadium"]
            },
            pisa: {
                nombre: "Pisa",
                descripcion: "Although Pisa is mostly known for its leaning tower, it has many other attractions that are interesting and enjoyable during a stay in the city.",
                lugares: ["Leaning Tower of Pisa", "Pisa Cathedral", "The Baptistery of St. John"]
            },
            verona: {
                nombre: "Verona",
                descripcion: "Verona is a journey through the Roman Empire and is also deeply tied to the arts, serving as the setting for William Shakespeare’s *Romeo and Juliet*.",
                lugares: ["Piazza delle Erbe", "Verona Arena", "Juliet's Balcony"]
            },
            siena: {
                nombre: "Siena",
                descripcion: "Siena is a gem of medieval art and architecture, with imposing towers and elegant buildings.",
                lugares: ["Torre del Mangia", "Piazza del Campo", "Siena Cathedral"]
            },
            genova: {
                nombre: "Genoa",
                descripcion: "Genoa is a coastal city, and this is a core part of its identity. It also features an old town that still reflects its Renaissance past.",
                lugares: ["Old Port", "Genoa Aquarium", "Il Bigo Viewpoint"]
            },

            
        },
        
        final: "What are you waiting for to visit these wonderful places?"
    }

    
  
};

function changeLanguage(lang) {
  const t = translations[lang];

  const logoImg = document.querySelector('.logo img');
  if (logoImg) logoImg.src = t.logo;

  document.querySelector('.header-content h1').textContent = t.headertitulo;
  document.querySelector('.introducion h2').textContent = t.introduccion;
  document.querySelector('.final h2').textContent = t.final;

  document.querySelectorAll('.nav-inici').forEach(el => el.textContent = t.navInicio);
  document.querySelectorAll('.nav-turismo').forEach(el => el.textContent = t.navTurismo);
  document.querySelectorAll('.nav-actividades').forEach(el => el.textContent = t.navActividades);
  document.querySelectorAll('.s-turismo').forEach(el => el.textContent = t.subLugares);
  document.querySelectorAll('.s-actividades').forEach(el => el.textContent = t.subActividades);

  document.querySelectorAll('.submenu li a').forEach((el) => {
    const className = el.classList[0].replace('s-', '');
    if (t.submenu[className]) {
      el.textContent = t.submenu[className];
    }
  });

  const fs = document.querySelector('.footer .redes h3');
  if (fs) fs.textContent = t.footerSocial;
  const fsec = document.querySelector('.footer .menu-pie h3');
  if (fsec) fsec.textContent = t.footerseciones;
  const fc = document.querySelector('.footer .contacto > h3');
  if (fc) fc.textContent = t.footercontacto;

  const footerLabels = document.querySelectorAll('.footer .contacto ul h3');
  if (footerLabels[0]) footerLabels[0].textContent = t.contacto_correo;
  if (footerLabels[1]) footerLabels[1].textContent = t.contacto_telefono;

    Object.keys(t.ciudades).forEach(ciudad => {
        const ciudadElement = document.querySelector(`#${ciudad}`);
        if (!ciudadElement) return;

        const nombre = ciudadElement.querySelector('h3');
        if (nombre) nombre.textContent = t.ciudades[ciudad].nombre;

        const t4 = ciudadElement.querySelector('h4');
        if (t4) t4.textContent = `${t.lugares_interesantes_de} ${t.ciudades[ciudad].nombre}`;

        const descripcion = ciudadElement.querySelector('figure figcaption');
        if (descripcion) descripcion.textContent = t.ciudades[ciudad].descripcion;

        const lugares = ciudadElement.querySelectorAll('.carrusel-ciudad .imagenes figure');
        lugares.forEach((lugar, index) => {
            const caption = lugar.querySelector('figcaption') || lugar.querySelector('p');
            if (caption) caption.textContent = t.ciudades[ciudad].lugares[index] || "";
        });
    });
}


document.querySelector('#selector-idioma')
    .addEventListener('change', e => changeLanguage(e.target.value));


window.addEventListener('DOMContentLoaded', () => {
    const lang = document.querySelector('#selector-idioma').value;
    changeLanguage(lang);
});

//Menús desplegables

document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('li');
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    listItems.forEach(item => {
        const submenu = item.querySelector('.submenu');

        if (submenu) {
            let timer;
            let isSubmenuVisible = false;

            submenu.style.display = 'none';

            if (isTouchDevice) {

                item.addEventListener('click', (event) => {
                    event.stopPropagation();

                    if (isSubmenuVisible) {
                        submenu.style.display = 'none';
                        isSubmenuVisible = false;
                    } else {
                        submenu.style.display = 'block';
                        isSubmenuVisible = true;


                        timer = setTimeout(() => {
                            submenu.style.display = 'none';
                            isSubmenuVisible = false;
                        }, 3000);
                    }
                });

                submenu.addEventListener('click', (event) => {
                    event.stopPropagation();
                });

            } else {

                item.addEventListener('mouseover', () => {
                    clearTimeout(timer);
                    submenu.style.display = 'block';
                    isSubmenuVisible = true;
                });

                item.addEventListener('mouseout', () => {
                    if (isSubmenuVisible) {
                        timer = setTimeout(() => {
                            submenu.style.display = 'none';
                            isSubmenuVisible = false;
                        }, 500);
                    }
                });

                submenu.addEventListener('click', (event) => {
                    event.stopPropagation();
                });
            }
        }
    });
});