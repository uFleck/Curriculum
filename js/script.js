$(document).ready(function () {

  // nav
  const btnMobile = $('#btn-mobile')
  const nav = $('#nav')
  const menu = $('#menu')
  const logo = $('#logo')

  function toggleMenu() {
    $(nav).toggleClass('active')

    const active = $(nav).hasClass('active')
    let msg 

    $(btnMobile).attr('aria-expanded', active);

    if (active) {
      msg = 'Fechar menu'
    } else {
      msg = 'Abrir menu'
    }

    $(btnMobile).attr('aria-label', msg)
  }
  
  $(btnMobile).click(toggleMenu)
  $(menu).click(toggleMenu)
  $(logo).click(function () { 
    const active = $(nav).hasClass('active')

    if (active) {
      toggleMenu()
    }
  });

  // dark mode
  const toggle = $('#toggle')

  $(toggle).click(function () { 
    $(toggle).toggleClass('active')
    $('body').toggleClass('active')
  });

})