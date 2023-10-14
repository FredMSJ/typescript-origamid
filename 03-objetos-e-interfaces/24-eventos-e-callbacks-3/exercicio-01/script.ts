const btnMobile = document.getElementById('btn-mobile');

function exibeMenu (event: PointerEvent) {
    const button = event.currentTarget;
    const nav = document.getElementById('nav'); //Também é um DOMTokenList, o que permite utilizar o classlist.contains.


    if (button instanceof HTMLElement && nav) {
        const active = nav.classList.contains('active');
        if (active) {
            nav.classList.remove('active');
            button.setAttribute('aria-expanded', 'false');
            button.setAttribute('aria-label', 'Abrir Menu');
        }   else    {
            nav.classList.add('active');
            button.setAttribute('aria-expanded', 'true');
            button.setAttribute('aria-label', 'Fechar Menu');
        }
    }
}

btnMobile?.addEventListener('pointerdown', exibeMenu);