const trigger = document.querySelector('.header-links-nav-select'),
    dropdown = document.querySelector('.header-links-nav-select-dropdown'),
    value = document.querySelector('.header-links-nav-select-value'),
    flag = document.querySelector('.header-links-nav-select-flag'),
    arrow = document.querySelector('.header-links-nav-select-arrow')

trigger.addEventListener('click', () => {
    dropdown.classList.toggle('active');
    arrow.classList.toggle('active');
})

document.addEventListener('click', (e) => {
    const visible = !e.target.classList.contains('header-links-nav-select-dropdown-option') && !e.target.classList.contains('header-links-nav-select') && !e.target.parentNode.classList.contains('header-links-nav-select')
    if (visible) {
        dropdown.classList.remove('active')
        arrow.classList.remove('active')
    }
    if (e.target.classList.contains('header-links-nav-select-dropdown-option')) {
        const lang = e.target.dataset.value
        value.textContent = lang.toUpperCase()
        flag.src = `./img/${lang}.png`
        dropdown.classList.remove('active')
        arrow.classList.remove('active')
    }
})