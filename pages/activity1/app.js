import { leftDiv } from "./info.js"
import { rightDiv } from "./img.js"

let container = document.getElementById("container")
let x = document.getElementById("btn4")

const myObj = {
    title1:   "Aoyama Yuga",
    title2:   "My Quirk",
    par1:     "Overall Abilities: While Yuga may not possess any melee combat skills, he does have a good handle on his Quirk: Navel Laser. The beams that Yuga can fire gives him a wide range of versatility, and enough firepower to penetrate through obstacles.",
    par2:     "Extravagant Hero Student In-Training. Yuga Aoyama, also known as the Shining Hero: Can't Stop Twinkling, is a student in Class 1-A at U.A. High",
    button1:  "Contact Us!",
    button2:  "Donate",
    button3:  "Home",
    button4:  "Exit",
    dogImage: "./images/dog.jpg"
}

const {title1, title2, par1, par2, button1, button2, button3, button4, dogImage} = myObj

container.append(leftDiv(title1,title2,par1,par2,button1,button2,button3,button4))
container.append(rightDiv(dogImage))



x.addEventListener("click", function(){ 
    window.close();;
});