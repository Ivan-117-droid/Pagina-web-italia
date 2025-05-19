//Carrusel con flechas

const carrusel = document.querySelector(".actividades-destacados");
const izquierda = document.querySelector(".flecha.izquierda");
const derecha = document.querySelector(".flecha.derecha");

const getCardWidth = () => {
  const card = carrusel.querySelector(".actividad");
  return card.offsetWidth + 20;
};

derecha.addEventListener("click", () => {
  carrusel.scrollBy({ left: getCardWidth(), behavior: "smooth" });
});

izquierda.addEventListener("click", () => {
  carrusel.scrollBy({ left: -getCardWidth(), behavior: "smooth" });
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

const translations = {
        es: {
          headertitulo: "VIAJA POR ITALIA",
                introduccion: "Descubre las maravillosas experiencias que Italia ofrece para ti.",
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
                actividades: [
                    "Paseo en góndola por los canales de Venecia.",
                    "Degustar la comida típica italiana.",
                    "Visitar los numerosos museos que alberga Italia.",
                    "Tours por las antiguas construcciones romanas.",
                    "Senderismo por los cráteres Vesubio o al Etna",
                    "Disfrutar de las playas italianas",
                    "Cata de los maravillosos vinos producidos en la Toscana",
                    "Esquiar en los Alpes italianos."
                ],
                final: "No pierdas la oportunidad de vivir experiencias inolvidables.",
        },
        en: {
           headertitulo: "TRAVEL THROUGH ITALY",
            headerbienvenido: "Welcome!",
            introduccion: "Italy is a country that has a lot to offer, with a rich culture shaped by the civilizations and kingdoms that once inhabited it. Discover some of its treasures.",
            navInicio: "Home",
            navTurismo: "Tourism",
            navActividades: "Activities",
            footerSocial: "Social Media",
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
            contacto_telefono: "Phone number:",
            contactocorreo: "contacto@conoceitalia.com",
            contactonumero: "123456789",
            logo: "images/LogoEnglish.png",
            actividades: [
                "Gondola ride through the canals of Venice.",
                "Taste traditional Italian cuisine.",
                "Visit the many museums throughout Italy.",
                "Tours through ancient Roman constructions.",
                "Hiking around Mount Vesuvius or Mount Etna.",
                "Enjoy the Italian beaches.",
                "Wine tasting in Tuscany.",
                "Skiing in the Italian Alps."
            ],
            final: "Don’t miss the chance to live unforgettable experiences.",
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

         
            const actividadTextos = document.querySelectorAll('.actividad p');
            actividadTextos.forEach((p, i) => {
                p.textContent = t.actividades[i];
            });

          

        
            
};


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
