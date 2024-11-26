window.addEventListener('load', ()=> {
    const btn = document.querySelector ('.playpause');

    btn.addEventListener('click', () => {
        btn.classList.toggle('playing');
    });
});