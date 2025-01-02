import heroImage from "../src/images/hero.png"
const mainContainer = document.getElementById("content");

export const createHomePage = () => {
    const heroBox = document.createElement("div");
    heroBox.classList.add("hero-container")
    mainContainer.appendChild(heroBox);

    const heroImg = document.createElement("img");
    heroImg.classList.add("heroimg");
    heroImg.src = heroImage;
    heroBox.appendChild(heroImg);

    const heroTextBox = document.createElement("div"); 
    heroTextBox.classList.add("hero-right");
    heroBox.appendChild(heroTextBox);

    const deesBurritos = document.createElement("h3");
    deesBurritos.textContent = "DEE'S BURRITOS"
    heroTextBox.appendChild(deesBurritos);

    const damnH1 = document.createElement("h1");
    damnH1.textContent = "daaaaaaamn...";
    heroTextBox.appendChild(damnH1);

    const youSure = document.createElement("h2");
    youSure.textContent = "you sure there's ";
    heroTextBox.appendChild(youSure);

    const noMeat = document.createElement("span");
    noMeat.textContent = "no meat";
    youSure.appendChild(noMeat)

    youSure.append(" in this?!")

    const menuBtn = document.createElement("button");
    menuBtn.id = "hero-menu"
    menuBtn.textContent = "MENU";
    heroTextBox.appendChild(menuBtn)

  //Freaking scroll  

    const scrollContainer = document.createElement("div");
    scrollContainer.id = "scroll-container";
    mainContainer.appendChild(scrollContainer);

    
        const text = [];
        console.log(text)

        const content = "PREMIUM VEGGIE BURRITOS () ".repeat(3)
      
        // First text block to initialize the scroll
        const scrollText = document.createElement("h3");
        scrollText.classList.add("scroll-text");
        scrollText.textContent = content;
       
   
        text.push(content)
        
       
        scrollContainer.appendChild(scrollText);

        let textWidth = scrollText.offsetWidth;
        let containerWidth = scrollContainer.offsetWidth;
        console.log(textWidth)
        const extraWidth = textWidth - containerWidth;
        console.log(extraWidth)

        if (textWidth > containerWidth) {
            text.push(content)
           scrollText.textContent = `${text.join('')}`

          
            console.log(text)
        }
      
       
     
    

   
//Hours

    const secondBox = document.createElement("div");
    secondBox.classList.add("second-container");
    mainContainer.appendChild(secondBox)

    const hoursBox = document.createElement("div");
    secondBox.appendChild(hoursBox)

    const hoursTitle = document.createElement("h2");
    hoursTitle.textContent = "Hours";
    hoursBox.appendChild(hoursTitle)

    const hoursMonSat = document.createElement("p");
    hoursMonSat.textContent = "Monday to Saturday: 6AM - 10PM\nSunday: 6AM - 6PM"
    hoursBox.appendChild(hoursMonSat);
   
//Location

    const locationBox = document.createElement("div");
    secondBox.appendChild(locationBox);

    const locationTitle = document.createElement("h2");
    locationTitle.textContent = "Location";
    locationBox.appendChild(locationTitle)

    const locationP = document.createElement("p");
    locationP.textContent = "123 Odin Ave\nLos Angeles, CA\n98765"
    

    locationBox.appendChild(locationTitle)
    locationBox.appendChild(locationP)

}