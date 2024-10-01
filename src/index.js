import "./style.css";
import { hello } from './components/hello';
import { mathComponent } from './components/mathComponent';
import Icon from "./icon.png";

function component() {
    const element = document.createElement("div");

    // CSS 
    element.innerHTML = hello('Webpack World');
    element.classList.add("hello");

    // imagem
    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    // tree shaking
    element.appendChild(mathComponent());

    return element;
}

document.body.appendChild(component());
