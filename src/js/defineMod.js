function defineMod() {
    if(window.matchMedia('(min-width: 768px)').matches) { // от 768
        console.log('Desktop mod');
        if (window.matchMedia( '(min-width: 1440px)').matches) { // от 1120 и больше
            return 2;
        }
        else { // от 768 до 1120
            return 1;
        }
    } else { // меньше 768
        console.log('Mobile mod');
        return 0;
    }
}

let mod = defineMod(); //0 - мобила 1 - Десктоп, 2 - Десктоп расширенный

export {mod}