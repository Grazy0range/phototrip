// КНОПКА ДЛЯ СКРОЛЛА К СЕКЦИИ КУДА ПОЕДЕМ


$('.down__button').on('click', function() {
    $('html,body').animate({scrollTop:$('.to__go').offset().top+"px"},{duration:100});
  });


  // КНОПКА ДЛЯ СКРОЛЛА К СЕКЦИИ КУДА ПОЕДЕМ



  
// СКРОЛЛ ПО НАЖАТИЮ ВКЛАДКИ В НАВИГАЦИИ ДО БЛОКА

  function slowScroll(id) {
    var offset = 0;
    $("html, body").animate(
      {
        scrollTop: $(id).offset().top - offset,
      },
      500
    );
    return false;
  }

// СКРОЛЛ ПО НАЖАТИЮ ВКЛАДКИ В НАВИГАЦИИ ДО БЛОКА

  