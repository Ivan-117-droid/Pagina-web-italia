//Carrusel con flechas

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[id^="carrusel"]').forEach(carrusel => {
      const flechaIzq = carrusel.parentElement.querySelector('.flecha.izquierda');
      const flechaDer = carrusel.parentElement.querySelector('.flecha.derecha');
      const tarjeta = carrusel.querySelector('.actividad, .lugar');
  
      if (!tarjeta) return;
  
      const anchoTarjeta = tarjeta.offsetWidth + 20;
  
      flechaIzq.addEventListener('click', () => {
        carrusel.scrollBy({
          left: -anchoTarjeta,
          behavior: 'smooth'
        });
      });
  
      flechaDer.addEventListener('click', () => {
        carrusel.scrollBy({
          left: anchoTarjeta,
          behavior: 'smooth'
        });
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
    headerbienvenido: "¡Bienvenido!",
    headerdescripcion: "Italia es un país que tiene mucho que ofrecer teniendo una cultura muy variada por las civilizaciones y reinos que la habitaron, conoce algunos de sus tesoros.",
    lugarestitulo: "Lugares turísticos",
    lugaresdescripcion: "Conoce algunos de los maravillosos lugares que puedes encontrar en Italia.",
    actividadestitulo: "Descubre que actividades puedes realizar en Italia",
    actividadesdescripcion: "Italia tiene una gran variedad de actividades inolvidables que puedes disfrutar durante tu estancia en el país.",
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
    botonlugares: "Conocer más lugares",
    botonactividades: "Conocer más actividades",
    contacto_correo: "Correo:",
    contacto_telefono: "Número de teléfono",
    contactocorreo: "contacto@conoceitalia.com",
    contactonumero: "123456789",
    logo: "images/Logoblanco.png",
    lugares: [
      {
        titulo: "Coliseo Romano",
        descripcion: "El imponente coliseo romano donde se libraron cientos de batallas de gladiadores."
      },
      {
        titulo: "Torre de Pisa",
        descripcion: "Quizás una de las estructuras más reconocidas de todo Italia siendo ya un símbolo del país."
      },
      {
        titulo: "Venecia",
        descripcion: "Otro símbolo de Italia es Venecia con sus canales donde puedes navegar en góndolas."
      }
    ],
    actividades: [
      {
        titulo: "Tours de comida nacional",
        descripcion: "Qué puede ser mejor que probar la auténtica sazón italiana."
      },
      {
        titulo: "Practicar esquí",
        descripcion: "Esquiar en los Alpes italianos es una experiencia maravillosa."
      },
      {
        titulo: "Paseo en góndola",
        descripcion: "Un infaltable de Italia es recorrer los canales de Venecia a bordo de una góndola."
      }
    ]

  },

  en: {

    headertitulo: "TRAVEL THROUGH ITALY",
    headerbienvenido: "Welcome!",
    headerdescripcion: "Italy is a country that has a lot to offer, with a rich culture shaped by the civilizations and kingdoms that once inhabited it. Discover some of its treasures.",
    lugarestitulo: "Tourist places",
    lugaresdescripcion: "Discover some of the wonderful places you can find in Italy.",
    actividadestitulo: "Discover activities you can do in Italy",
    actividadesdescripcion: "Italy offers a wide variety of unforgettable activities that you can enjoy during your stay in the country.",
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
    botonlugares: "Explore more places",
    botonactividades: "See more activities",
    contacto_correo: "Email:",
    contacto_telefono: "Phone number:",
    contactocorreo: "contacto@conoceitalia.com",
    contactonumero: "123456789",
    logo: "images/LogoEnglish.png",
    lugares: [
      {
        titulo: "Roman Colosseum",
        descripcion: "The impressive Roman Colosseum where hundreds of gladiator battles took place."
      },
      {
        titulo: "Leaning Tower of Pisa",
        descripcion: "Perhaps one of the most recognized structures in all of Italy, already a symbol of the country."
      },
      {
        titulo: "Venice",
        descripcion: "Another symbol of Italy, Venice and its canals where you can ride a gondola."
      }
    ],
    actividades: [
      {
        titulo: "National food tours",
        descripcion: "What could be better than tasting authentic Italian flavor."
      },
      {
        titulo: "Skiing",
        descripcion: "Skiing in the Italian Alps is a wonderful experience."
      },
      {
        titulo: "Gondola ride",
        descripcion: "A must in Italy is exploring the canals of Venice aboard a gondola."
      }
    ]

  }

};

function changeLanguage(lang) {
  const t = translations[lang];

  const logoImg = document.querySelector('.logo img');
  if (logoImg) logoImg.src = t.logo;

  document.querySelector('.header-content h1').textContent = t.headertitulo;
  document.querySelector('.introducion h2').textContent = t.headerbienvenido;
  document.querySelector('.introducion p').textContent = t.headerdescripcion;

  document.querySelector('.lugares .titulo').textContent = t.lugarestitulo;
  document.querySelector('.lugares .descripcion').textContent = t.lugaresdescripcion;

  document.querySelector('.actividades .titulo').textContent = t.actividadestitulo;
  document.querySelector('.actividades .descripcion').textContent = t.actividadesdescripcion;

  document.querySelectorAll('.lugares-destacados .lugar').forEach((el, i) => {
    const h3 = el.querySelector('h3');
    const p = el.querySelector('p');
    if (h3) h3.textContent = t.lugares[i].titulo;
    if (p) p.textContent = t.lugares[i].descripcion;
  });

  document.querySelectorAll('.actividades-destacados .actividad').forEach((el, i) => {
    const h3 = el.querySelector('h3');
    const p = el.querySelector('p');
    if (h3) h3.textContent = t.actividades[i].titulo;
    if (p) p.textContent = t.actividades[i].descripcion;
  });

  const botones = document.querySelectorAll('.boton-contenedor .boton');
  if (botones[0]) botones[0].textContent = t.botonlugares;
  if (botones[1]) botones[1].textContent = t.botonactividades;

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
}


document.getElementById('selector-idioma')
  .addEventListener('change', e => changeLanguage(e.target.value));


window.addEventListener('DOMContentLoaded', () => {
  changeLanguage(document.getElementById('selector-idioma').value);
})

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




