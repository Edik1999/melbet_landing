document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector(".form");

    // Отправка формы
    const postData = async (url, fData) => {

        // ждём ответ, только тогда наш код пойдёт дальше
        let fetchResponse = await fetch(url, {
            method: "POST",
            body: fData
        });

        // ждём окончания операции
        return await fetchResponse.text();
    };

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            // создание объекта FormData
            let fData = new FormData(form);

            // Отправка на сервер
            postData("/", fData)
                .then(fetchResponse => {
                    console.log(fetchResponse);
                })
                .catch(function (error) {
                    console.log(error);
                });
        });
    }

});