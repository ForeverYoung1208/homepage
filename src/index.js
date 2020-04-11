import './css/styles.scss'

class MyDiv{
  constructor(){
    const div = document.createElement('div');
    div.innerHTML = 'Hello world';
    div.style = 'display: inline'
    return div;

  }
  
}

document.querySelector('body').prepend( new MyDiv() )

