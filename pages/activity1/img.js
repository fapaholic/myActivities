const rightDiv = (image) => {
    let div = document.createElement("div")
    div.className = "rightDiv"
    div.innerHTML = `<img src="${image}" alt="">`
    return div;
}

export { rightDiv }