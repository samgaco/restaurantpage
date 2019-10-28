import about from './about.js';
import menu from './menu.js';
import contact from './contact.js';
import './style.css';

about.render();

document.getElementById('tab-1').addEventListener('click', about.render);
document.getElementById('tab-2').addEventListener('click', menu.render);
document.getElementById('tab-3').addEventListener('click', contact.render);
