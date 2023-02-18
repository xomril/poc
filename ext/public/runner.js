
console.log('hello world - runner iframe')


const iframe = document.createElement("iframe");
iframe.src = chrome.extension.getURL('index.html');
iframe.setAttribute("scrolling", "no");
iframe.setAttribute("frameborder", "0");
iframe.setAttribute("style", "display: none;");

const button1 = document.createElement("button");
button1.innerText = "Open panel"
button1.setAttribute("style", "position: absolute; top:0px;right:0px; zIndex:999999;border:solid 1px #c0c0c0;");
button1.addEventListener("click", switchFrame);

const button2 = document.createElement("button");
button2.innerText = "close panel"
button2.setAttribute("style", "display:none;position: absolute; bottom:0px;right:0px; zIndex:999999;border:solid 1px #c0c0c0;");
button2.addEventListener("click", switchFrame);


const div1 = document.createElement("div");
div1.setAttribute("style", "position: absolute; top:0px;right:0px; zIndex:999999;border:solid 1px #c0c0c0; width:250px; height:400px");
document.body.appendChild(div1);

div1.appendChild(iframe);
div1.appendChild(button1);
div1.appendChild(button2);


function switchFrame(){
    console.log('switch clicked')
    if(iframe.style.display === 'none') {
        iframe.style.display = 'block';
        button1.style.display = 'none';
        button2.style.display = 'block';
    } else {
        iframe.style.display = 'none';
        button1.style.display=  'block';
        button2.style.display = 'none';
    }
}
// const button = document.createElement('button');
// button.style.position = 'fixed';
// button.style.top = '10px';
// button.style.right = '0px';
// button.style.zIndex = 99999999999999
// button.style.backgroundColor = 'red'
// button.innerHTML = 'Click Me Omri';
// button.id = "popup-button";

// const div1 = document.createElement('div');
// div1.style.position = 'fixed';
// div1.style.display = 'none';
// div1.style.top = '10px';
// div1.style.right = '0px';
// div1.style.zIndex = 99999999999999
// div1.style.backgroundColor = 'red'
// div1.innerHTML = 'Click Me Omri';
// div1.id = "div1";
// document.body.appendChild(div1);
