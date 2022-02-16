const modal = document.querySelector('#modal')

const modalUp = () => {
    modal.classList.add('display')

    setTimeout(function() {
        modal.classList.remove('display')
    }, 6000)
}