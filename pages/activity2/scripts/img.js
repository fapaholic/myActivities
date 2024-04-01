let imgfun = (img) => {
    let div = document.createElement("div")
    div.className = "secimg1"
    div.innerHTML = `
        <img src="${img}" alt="picture nako">
    `
    return div;
}

export { imgfun }