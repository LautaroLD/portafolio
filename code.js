function pushElement(classElem, name, sitio, repo, imageBg) {
    let cont = document.getElementById('list-proyects-container')
    let div = Object.assign(document.createElement('DIV'), {
        className: `${classElem} proyect`,
        
    })
    div.style.backgroundImage = `url("${imageBg}")`
    console.log(imageBg)
    let title = Object.assign(document.createElement('H3'), {
        textContent: name
    })
    let visitBtn = Object.assign(document.createElement('A'), {
        className: 'btns proyects-btns-none',
        id: 'visit-btn',
        textContent: 'Visitar',
        href: sitio,
        target: '_blank'
    })
    let repoBtn = Object.assign(document.createElement('A'), {
        className: 'btns proyects-btns-none',
        id: 'repo-btn',
        textContent: 'Repositorio',
        href: repo,
        target: '_blank'
    })
    div.append(title, visitBtn, repoBtn)
    cont.appendChild(div)
}
async function getProyects() {
    let list = []
    await fetch(`./proyects.json`)
        .then(response => response.json())
        .then(data => {
            list = Object.entries(data)
            list.forEach(element => pushElement(element[0], element[1].name, element[1].url, element[1].repository,element[1].img))
        })
        .catch((err) => new Error(err))
    elementsVisible()

}
getProyects()


function btnsVisible() {
    let btns = document.getElementsByClassName('btns')
    let listBtns = []
    listBtns = [...btns]
    listBtns.forEach(elem => {
        let position = elem.parentElement.getBoundingClientRect()
        if (position.bottom < (screen.height - (screen.height / 10)) && position.bottom > 0) {
            elem.classList.replace('proyects-btns-none', 'proyects-btns')
        }
    })
}
function elementsVisible() {
    document.addEventListener('scroll', () => {
        btnsVisible()
    })
}

