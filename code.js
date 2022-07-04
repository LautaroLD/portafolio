function pushElement(classElem, name, sitio, repo, imageBg) {
    let cont = document.getElementById('list-proyects-container')
    let col = Object.assign(document.createElement('DIV'), {
        className: `${classElem} col proyect`,
    })
    let card = Object.assign(document.createElement('DIV'), {
        className: `card h-100`,
    })
    let img = Object.assign(document.createElement('IMG'), {
        className: 'card-img-top',
        src:imageBg,
        alt: classElem
    })
    let cardBody = Object.assign(document.createElement('DIV'), {
        className: `card-body`,
    })
    let title = Object.assign(document.createElement('H3'), {
        textContent: name,
        className: `card-title`
    })

    let cardFooter = Object.assign(document.createElement('DIV'), {
        className: `card-footer`,
    })

    let visitBtn = Object.assign(document.createElement('A'), {
        className: 'btn btn-primary',
        textContent: 'Visitar',
        href: sitio,
        target: '_blank'
    })
    let repoBtn = Object.assign(document.createElement('A'), {
        className: 'btn btn-link',
        textContent: 'Repositorio',
        href: repo,
        target: '_blank'
    })
    cardBody.append(title)
    cardFooter.append(visitBtn, repoBtn)
    card.append(img, cardBody, cardFooter)
    col.append(card)
    cont.append(col)
}
let list = []
fetch('./assets/proyects.json')
    .then(response => response.json())
    .then(data => {
        list = Object.entries(data)
        list.forEach(element => pushElement(element[0], element[1].name, element[1].url, element[1].repository, element[1].img))

    })
    .catch((err) => new Error(err))