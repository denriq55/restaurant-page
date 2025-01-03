import { mainContainer } from './index.js';
import avatarImg from "../src/images/avatar.png"

export const contactPage = () => {
    const contactBox = document.createElement("div");
    contactBox.classList.add("contact-box")
    mainContainer.appendChild(contactBox);

    const aboutBox = document.createElement("div");
    contactBox.appendChild(aboutBox);

    const aboutH3 = document.createElement("h3");
    aboutH3.textContent = "About Dee's Burritos"
    aboutBox.appendChild(aboutH3)

    const aboutP = document.createElement("p");
    aboutP.textContent = "This is a fictional restaurant page created for Odin Project but oh how I wish it existed. I really enjoyed creating this project but it took me looooong. I hope you enjoy my version of a veggie burrito place eventhough I recently just turned pescatarian. Peaaaace, love & burritos! /n-DEE "
    aboutBox.appendChild(aboutP)

    const avatar = document.createElement("img");
    avatar.src = avatarImg
    contactBox.appendChild(avatar);

    

}