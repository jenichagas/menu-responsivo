function menuShow () {
    let menuMobile = document.querySelector ('.menu-mobile');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        // se o menu mobile tiver a classe open ele irá remove-la
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg"
        // para adicionar a imagem de abertura do Mobile Menu
    } else {
        menuMobile.classList.add('open');
        // se não, ele irá adiciona-la
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg"
        // para adicionar a imagem de fechar Mobile Menu quando ele já estiver aberto
    }
} 