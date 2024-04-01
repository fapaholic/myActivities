const cardfunc = (image, desc, button1) => {
    let div = document.createElement('div')
    div.className = "cardsec2"
    div.innerHTML = `
        <img class = "hop" src="${image}" alt="picture nako">
        <p class="hud">${desc}</p>
        <button class="but">${button1}</button>
    `
    return div;
}

export { cardfunc }