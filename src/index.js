import './css/styles.scss'
import Img from './img/igor-icontract.png';


const div = document.createElement('div');
div.innerHTML = 'Hello world';
div.style = 'display: inline'
document.querySelector('body').prepend( div )