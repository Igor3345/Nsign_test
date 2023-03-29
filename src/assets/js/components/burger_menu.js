const burger_menu = document.querySelector('.js-burger_menu');
const body = document.querySelector('body');

if(burger_menu){
    const list = document.querySelector('.js-header_nav-list');
    burger_menu.onclick = switchMenu;

    function switchMenu(){
        list.classList.toggle('header__nav-list--open');
    }

    function closeMenu(){
        list.classList.remove('header__nav-list--open');
    }

    window.onresize = () => {
        console.log(body.clientWidth);
        if(list.classList.contains('header__nav-list--open')){
            closeMenu();
        }
    }
}