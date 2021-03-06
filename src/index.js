import './app.js';
import '../src/styles.css';
//========== theme ==========//

const CURRENT_THEME = 'current-theme';

const refs = {
    bodyRef: document.querySelector('body'),
    themeSwitchRef: document.querySelector('#theme-switch-toggle')
}

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

checkedDarktheme() 

refs.themeSwitchRef.addEventListener('change', onThemeSwitch);


function onThemeSwitch(){
    if (refs.themeSwitchRef.checked){
        refs.bodyRef.classList.add(Theme.DARK);
        refs.bodyRef.classList.remove(Theme.LIGHT);
        localStorage.setItem(CURRENT_THEME, Theme.DARK)
    } else {
        refs.bodyRef.classList.add(Theme.LIGHT);
        refs.bodyRef.classList.remove(Theme.DARK);  
        localStorage.setItem(CURRENT_THEME, Theme.LIGHT)      
    }
}


function checkedDarktheme() {
    const currentheme = localStorage.getItem(CURRENT_THEME);
    if (currentheme === Theme.DARK) {
        refs.themeSwitchRef.checked = true;    
        refs.bodyRef.classList.add(Theme.DARK);
        refs.bodyRef.classList.remove(Theme.LIGHT)   
    }
    
}


