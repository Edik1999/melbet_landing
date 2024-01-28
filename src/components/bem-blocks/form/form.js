document.querySelectorAll('.form-close').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const form = btn.closest('.form')
        form.classList.remove('visible')
    });
});