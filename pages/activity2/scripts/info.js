const infofunc = (title, par, button) => {
    let div = document.createElement('div')
    div.className = "sec1con"
    div.innerHTML = `
        <h1>${title}</h1>
        <p>${par}</p>
        <button><a href="https://www.facebook.com/ThePart2" target="_blank">${button}</a></button>
    `
    return div
}

const infofunc2 = (title2) => {
    let div = document.createElement('div')
    div.innerHTML = `<h1>${title2}</h1>`
    return div
}
export { infofunc2 }

export { infofunc }