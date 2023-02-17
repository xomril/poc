console.log('hello world')
const button = document.createElement('button');
button.style.position = 'fixed';
button.style.top = '10px';
button.style.right = '0px';
button.style.zIndex = 99999999999999
button.style.backgroundColor = 'red'
button.innerHTML = 'Click Me Omri';
button.id = "popup-button";


const div1 = document.createElement('div');
div1.style.position = 'fixed';
div1.style.display = 'none';
div1.style.top = '10px';
div1.style.right = '0px';
div1.style.zIndex = 99999999999999
div1.style.backgroundColor = 'red'
div1.innerHTML = 'Click Me Omri';
div1.id = "div1";
document.body.appendChild(div1);

document.getElementById("popup-button").addEventListener("click", function() {
  div1.style.display = 'block';
});