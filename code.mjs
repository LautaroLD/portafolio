import { registerElement } from "./Observer.js"

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

    // let contentText = Object.assign(document.createElement('DIV'), {
    //     className: 'contentText',
    // })


    let visitBtn = Object.assign(document.createElement('A'), {
        className: 'btn btn-primary',
        // id: 'visit-btn',
        textContent: 'Visitar',
        href: sitio,
        target: '_blank'
    })
    let repoBtn = Object.assign(document.createElement('A'), {
        className: 'btn btn-link',
        // id: 'repo-btn',
        textContent: 'Repositorio',
        href: repo,
        target: '_blank'
    })
    // contentText.append(title, visitBtn, repoBtn)
    // div.append(img, contentText)
    // cont.appendChild(div)
    cardBody.append(title)
    cardFooter.append(visitBtn, repoBtn)
    card.append(img, cardBody, cardFooter)
    col.append(card)
    cont.append(col)
    // registerElement(div)
}
let list = []
fetch(`/assets/proyects.json`)
    .then(response => response.json())
    .then(data => {
        list = Object.entries(data)
        list.forEach(element => pushElement(element[0], element[1].name, element[1].url, element[1].repository, element[1].img))

    })
    .catch((err) => new Error(err))
// elementsVisible()

// function btnsVisible() {
//     let btns = document.getElementsByClassName('btns')
//     let listBtns = []
//     listBtns = [...btns]

//     listBtns.forEach(elem => {
//         let position = elem.parentElement.getBoundingClientRect()
//         if (position.bottom < (screen.height - (screen.height / 5)) && position.bottom > 0) {
//             elem.classList.replace('proyects-btns-none', 'proyects-btns')
//         }
//     })
// }
// function seeAboutMeSection() {
//     let aboutMe = document.getElementById('about-me-container')
//     let position = aboutMe.getBoundingClientRect()
//     if (position.top < screen.height) {
//         aboutMe.classList.add('see-aboutMe')
//     }
// }
// function elementsVisible() {
//     document.addEventListener('scroll', () => {
//         // btnsVisible()
//         seeAboutMeSection()
//     })
// }
