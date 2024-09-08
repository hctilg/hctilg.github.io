// taking care of forEach object problem in FireFox, Internet Explorer, WaterFox
if (typeof NodeList.prototype.forEach !== 'function') NodeList.prototype.forEach = Array.prototype.forEach;

/**
 * absolute value : |number|
 * @param {number} number 
 */
const abc = number => {
    return (number < 0) ? number * -1 : number;
}

const theme = (() => {

    const get_theme = () => {
        const _theme = window.localStorage.getItem('theme');
        return _theme ? (_theme == 'light' ? 'light' : 'dark') : 'dark';
    }

    const set_theme = _theme => {
        window.localStorage.setItem('theme', _theme);
        document.querySelector('html').setAttribute('theme-mode', _theme);
    }

    set_theme(get_theme());

    window.addEventListener('storage', ev => {
        if (ev.key = 'theme') set_theme(get_theme());
    });

    document.querySelector('#mode-toggle').onclick = ev => set_theme(get_theme() == 'light' ? 'dark' : 'light');

});

const sidebar = (() => {

    const title_box = document.querySelector("#sidebar-top .title .stack");
    title_box.querySelectorAll('span').forEach(elm => {
        let _ctr = 0;
        elm.addEventListener('animationiteration', () => {
            if (_ctr % 2 == 0) elm.innerText = elm.innerText == "Glitch" ? "Hctilg" : "Glitch";
            if (_ctr >= 2) _ctr = 0;
            _ctr++;
        });
    });

    let initialTouchPosX = null;
    let initialTouchPosY = null;
    let lastTouchPosX = null;
    let lastTouchPosY = null;
    let touchMoveThreshold = 20;
    
    document.body.addEventListener('touchstart', ev => {
        initialTouchPosX = ev.touches[0].clientX;
        initialTouchPosY = ev.touches[0].clientY;
    });

    document.body.addEventListener('touchmove', ev => {
        if (initialTouchPosX !== null) lastTouchPosX = ev.touches[0].clientX;
        if (initialTouchPosY !== null) lastTouchPosY = ev.touches[0].clientY;
    });

    document.body.addEventListener('touchend', ev => {

        if (
            lastTouchPosX    !== null && lastTouchPosY    !== null &&
            initialTouchPosX !== null && initialTouchPosY !== null
        ) {
            let distanceX = lastTouchPosX - initialTouchPosX;
            let distanceY = lastTouchPosY - initialTouchPosY;

            if (abc(distanceY) <= touchMoveThreshold) {
                // console.log( distanceX >= touchMoveThreshold , distanceX <= -touchMoveThreshold );
                if (distanceX >= touchMoveThreshold) document.body.classList.add('active-sidebar');
                else if (distanceX <= -touchMoveThreshold) document.body.classList.remove('active-sidebar');
            }
        }

        initialTouchPosX = null;
        initialTouchPosY = null;
        lastTouchPosX = null;
        lastTouchPosY = null;
    });

    document.querySelector('#sidebar-menu').addEventListener('click', ev => {
        document.body.classList.remove('active-sidebar');
    });

});

document.addEventListener('DOMContentLoaded', ev => {
    
    // set the body to full height
    document.body.style.setProperty("--height", `${innerHeight}px`);

    sidebar();
    theme();
});