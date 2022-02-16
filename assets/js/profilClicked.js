const profileItem = document.querySelector('.profile1')

profileItem.addEventListener('click', function(event) {    
    modalUp()
    document.querySelector('#count').innerText++
})