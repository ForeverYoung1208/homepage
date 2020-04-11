import './css/styles.scss'
import Img from './img/igor-icontract.png';

class MyDiv{
  constructor(){
    const div = document.createElement('div');
    div.innerHTML = 'Hello world';
    div.style = 'display: inline'
    return div;

  }
  
}

console.log('[MyDiv]', MyDiv);
document.querySelector('body').prepend( new MyDiv() )

