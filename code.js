function pushElement(classElem, name, sitio, repo) {
    let cont = document.getElementById('list-proyects-container')
    let div = document.createElement('DIV')
    div.className = `${classElem} proyect`
    div.innerHTML = `
    <h3>${name}</h3>
    <a target="_blank" class="btns proyects-btns-none" id="visit-btn" href="${sitio}">Visitar</a>
    <a target="_blank" class="btns proyects-btns-none" id="repo-btn" href="${repo}">Repositorio</a>`

    cont.appendChild(div)
}
async function getProyects() {
    let list = []
    await fetch(`./proyects.json`)
        .then(response => response.json())
        .then(data => {
            list = Object.entries(data)
            list.forEach(element => pushElement(element[0], element[1].name, element[1].url, element[1].repository,))
        })
        .catch((err) => new Error(err))
    elementsVisible()

}
getProyects()

function elementsVisible() {
    document.addEventListener('scroll', () => {
        btnsVisible()
    })
}

function btnsVisible() {
    let btns = document.getElementsByClassName('btns')
    let listBtns = []
    listBtns = [...btns]
    console.log(listBtns)
    listBtns.forEach(elem => {
        let position = elem.parentElement.getBoundingClientRect()
        if (position.bottom < screen.height && position.bottom > 0) {
            elem.classList.replace('proyects-btns-none', 'proyects-btns')
            console.log(position.bottom, elem)
        } else if (position.bottom > screen.height) {
            elem.classList.replace('proyects-btns', 'proyects-btns-none')
        }
    })
}

// window.addEventListener('load', )
