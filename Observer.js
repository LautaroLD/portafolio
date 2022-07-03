const options = {
    threshold: 1.0
}
const isIntersecting = entry => {

    return entry.isIntersecting; // devuelve true si esta dentro del viewport

}
function loadBtns(entry) {
    const container = entry.target
    const btns = container.querySelectorAll('a')
    const listBtns = [...btns]

    listBtns.forEach(elem => {
        elem.classList.replace('proyects-btns-none', 'proyects-btns')
    })
    observer.unobserve(container)
    // console.log([...btn])
}
const observer = new IntersectionObserver(entries => {
    entries
        .filter(isIntersecting)
        .forEach(loadBtns);

}, options)
export const registerElement = Element => {
    observer.observe(Element);

}
