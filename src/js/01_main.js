const form = document.querySelector(".banner-form");

const postData = async (url, fData) => {

    let fetchResponse = await fetch(url, {
        method: "POST",
        body: fData
    });

    return await fetchResponse.text();
};

if (form) {
    const action = form.getAttribute('action');

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let fData = new FormData(form);

        postData(action, fData)
            .then(fetchResponse => {
                console.log(fetchResponse);
            })
            .catch(function (error) {
                console.log(error);
            });
    });
}

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault()
        scrollToForm(70)
    });
});

document.querySelectorAll(`a[href^="#"]`).forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        scrollToForm(50, href)
    });
});

const scrollToForm = (fromTop, href) => {
    let scrollTarget;

    href
        ? scrollTarget = document.getElementById(href)
        : scrollTarget = document.querySelector('.banner-form')

    const topOffset = fromTop;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
    });
}