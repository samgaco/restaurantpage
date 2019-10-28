/* eslint-env browser */
/* eslint no-unused-vars: [1, {"argsIgnorePattern": "evt"}] */

import about from './about';
import menu from './menu';
import contact from './contact';
import './style.css';

about.render();

document.getElementById('tab-1').addEventListener('click', about.render);
document.getElementById('tab-2').addEventListener('click', menu.render);
document.getElementById('tab-3').addEventListener('click', contact.render);
