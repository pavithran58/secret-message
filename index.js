const {hash} = window.location;
const message = atob(hash.replace('#', ''))
if(message) {
    document.querySelector('.final').classList.remove('hide')
    document.querySelector('#message-panel').classList.add('hide')
    document.querySelector('#link-panel').classList.add('hide')
    document.querySelector('h2').innerHTML = message;
    
}


const form = document.querySelector('form');
const input = form.querySelector('.message-input');
const inut = document.querySelector('.link-input')
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const encrypted = btoa(input.value)
    
    inut.value = `${window.location.href}#${encrypted}`;
    
    document.querySelector('#message-panel').classList.add('hide')
    document.querySelector('#link-panel').classList.remove('hide')
    inut.select();

})