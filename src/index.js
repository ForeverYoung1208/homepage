import './css/styles.scss'

class MyDiv{
  constructor(){
    const div = document.createElement('div');
    div.innerHTML = 'Hello world';
    div.style = 'display: inline'
    return div;

  }
  
}
const newDiv = new MyDiv()
// document.querySelector('body').prepend( newDiv )
console.log('[newDiv]', newDiv);

