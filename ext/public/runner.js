
console.log('hello world - runner iframe')


const iframe = document.createElement("iframe");
iframe.src = chrome.extension.getURL('index.html');
iframe.setAttribute("scrolling", "no");
iframe.setAttribute("frameborder", "0");
iframe.setAttribute("style", "display: none;");

const button1 = document.createElement("img");
button1.src = chrome.extension.getURL("images/openPanel.png")
button1.setAttribute("style", "position: absolute; top:0px;right:0px;");
button1.addEventListener("click", switchFrame);

const button2 = document.createElement("img");
button2.src = chrome.extension.getURL("images/closePanel.png")
button2.setAttribute("style", "display:none;position: absolute; top:10px;right:0px;");
button2.addEventListener("click", switchFrame);




const div1 = document.createElement("div");
div1.setAttribute("style", "transition: all .5s linear;position: absolute; top:-5px;right:0px; zIndex:999999;width:60px; height:600px");
document.body.appendChild(div1);
const header = document.createElement("div");
const topImg = document.createElement("img");
topImg.src =  chrome.extension.getURL('images/Cori.png');
topImg.style.display = 'none'
header.appendChild(topImg);
div1.appendChild(header)
div1.appendChild(iframe);
div1.appendChild(button1);
div1.appendChild(button2);


function switchFrame() {
    console.log('switch clicked')
    if (iframe.style.display === 'none') {
        div1.style.width = "560px";
        iframe.style.width = "560px";
        iframe.style.display = 'block';
        button1.style.display = 'none';
        button2.style.display = 'block';
        iframe.style.height = window.innerHeight -100 +"px"
        header.style = `background-color: #485c8b;
height: 60px;
position: relative;`
topImg.style.display = 'block'
    } else {
        iframe.style.display = 'none';
        button1.style.display = 'block';
        button2.style.display = 'none';
        div1.style.width = "60px";
        header.style.background = 'none';
        topImg.style.display = 'none';
    }
}

