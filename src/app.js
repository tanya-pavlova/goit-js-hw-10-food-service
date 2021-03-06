import menuTemplate from './templates/menu.hbs';
import items from './menu.json';


const markup = menuTemplate(items);    

const menuRef = document.querySelector('.js-menu');
   
menuRef.insertAdjacentHTML('beforeend', markup);