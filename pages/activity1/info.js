const leftDiv = (title1, title2, par1, par2, button1, button2, button3, button4) => {
    let div = document.createElement("div")
    div.className = "leftDiv"
    div.innerHTML = `<h1>${title1}</h1>
                     <p>${par2}</p>
                     <h1>${title2}</h1>
                     <p>${par1}</p>
                     <button><span></span>${button1}</button>
                     <button><span></span>${button2}</button>
                     <button><span></span>${button3}</button>
                     <button><span></span>${button4}</button>
    `
    return div;
}

export { leftDiv }