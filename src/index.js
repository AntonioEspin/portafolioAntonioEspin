const iconImage = document.getElementById('iconImage');
const navBar = document.getElementById('navBar');
const headerButton = document.getElementById('headerButton');

// Evento para icon-menu de la version mobile
iconImage.addEventListener('click', ()=> {
  const getSrc = iconImage.getAttribute('src');
  if(getSrc === "../src/static/icon-menu.svg"){
    headerButton.style.display = 'none'
    iconImage.setAttribute("src", "../src/static/icon-exit.svg")
    navBar.classList.add("header__navbarMobile")
  } else {
    headerButton.style.display = 'block'
    iconImage.setAttribute("src", "../src/static/icon-menu.svg")
    navBar.classList.remove("header__navbarMobile")
  }
})