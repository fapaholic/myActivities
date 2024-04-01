import { imgfun } from "./img.js"
import { infofunc } from "./info.js"
import { infofunc2 } from "./info.js"
import { cardfunc } from "./card.js"

let sec1 = document.getElementById('sec1')
let sec2 = document.getElementById('sec2')

let obj1 = {
    title   : "HELLO THERE!",
    par     : "My name is Jasper Vince R. Montefalcon, and I am currently 19 years old. Currently enrolled as a Bachelor of Science in Information Technology (BSIT) student at Gingoog City Colleges, I am deeply immersed in my academic pursuits. Beyond my studies, I am fueled by a passionate ambition to excel in the realm of programming. As an aspiring programmer, I am dedicated to honing my skills and leveraging them to contribute meaningfully to the ever-evolving world of technology.",
    button  : "Contact me",
    img     : "./images/img1.png"
}

const { title, par, button, img } = obj1

let obj2 = {
    image1   : "./images/img2.jpg",
    image2   : "./images/img3.jpg",
    image3   : "./images/img4.png",
    desc1    : "This is a self-obstacle-avoiding car designed and implemented utilizing an Arduino microcontroller as its processing unit. In the collaborative effort, I undertook the roles of both project manager and programmer within the team, overseeing the project's development from conception to execution while also actively contributing to its programming aspects.",
    desc2    : "This is a sophisticated Point of Sale (POS) system built using Python. I took charge as both the project manager and main programmer. My role involved leading the team from planning to execution, ensuring the system was well-designed and functional. Additionally, I actively wrote the code for its various features and functions, ensuring they worked smoothly together.",
    desc3    : "FotoTwist, spearheaded by BSIT students Jasper & Jeanne, is transforming Gingoog City's photography landscape. Our initiative engages fellow students, harnesses local demand, and emphasizes branding with minimal financial outlay. As the project manager, I orchestrated the endeavor, ensuring alignment with our vision of becoming Gingoog City's premier photography service while nurturing budding photographers.",
    button1 : "learn more",
    title2  : "Project Complete"
}

const { image1, image2, image3, desc1, desc2, desc3, button1, title2 } = obj2

sec1.append(infofunc(title, par, button))
sec1.append(imgfun(img))
sec3.append(infofunc2(title2))
sec2.append(cardfunc(image1, desc1, button1))
sec2.append(cardfunc(image2, desc2, button1))
sec2.append(cardfunc(image3, desc3, button1))

