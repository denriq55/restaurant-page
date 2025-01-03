import "./styles.css";
import { homePage } from './home.js'
import { menuPage } from './menu.js'
import { contactPage } from './contact.js'
 
export const mainContainer = document.getElementById("content");

homePage()

function loadPage(page) {
    mainContainer.replaceChildren();
    page()
}

document.getElementById("home").addEventListener("click", () => loadPage(homePage))
document.getElementById("menu").addEventListener("click", () => loadPage(menuPage))
document.getElementById("contact").addEventListener("click", () => loadPage(contactPage))


