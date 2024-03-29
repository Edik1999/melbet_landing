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
                let data = JSON.parse(fetchResponse);
                if (data.success) {
                    alert('Form submitted!');
                } else {
                    alert('Form submit error!');
                }
            })
            .catch(function (error) {
               alert('Form submit error');
            });
    });
}

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault()
        const form = document.querySelector(`#${btn.dataset.form}`)
        form.classList.add('visible')
    });
});

document.querySelectorAll(`a[href^="#"]`).forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        scrollToForm(50, href)
    });
});

const scrollToForm = (topOffset, href) => {
    let scrollTarget;

    href
        ? scrollTarget = document.getElementById(href)
        : scrollTarget = document.querySelector('.banner-form')

    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

const multilingialTexts = {
    'en': {
        'START EARNING': 'START EARNING',
        'ABOUT US': 'ABOUT US',
        'HOW TO START': 'HOW TO START',


        'banner1': 'Profit from partnership with Mel<span class="melbet-color">BET</span> in Venezuela, now.',
        'banner2': 'just COMPLETE THE FORM, AND GET READY FOR US TO REACH OUT TO YOU IN NO TIME!',
        'banner3': 'READY TO UNLEASH YOUR EARNING POWER?',
        'banner4': `UNLOCK THE POTENTIAL FOR SIGNIFICANT EARNINGS WITH MEL<span class="colored-text">BET</span>, — YOUR TOP CHOICE FOR THE DEPENDABLE PAYMENT SOLUTION FOR PLAYERS IN THE REGION. WE'RE NOT JUST ABOUT FUN AND GAMES: WE'RE HERE TO HELP YOU ACHIEVE YOUR FINANCIAL GOALS`,


        'info1': 'TEAM CASH',
        'info2': "Explore our payment system — TeamCash. Be a payment agent and dive into a world of opportunities. Invest a little upfront, and you can easily deposit or withdraw money from gaming accounts quickly. Earning a substantial share of 8% from each deposit and 2% from each withdraw, with Limit/Balance system you can gain up to 40% profit from one investment.",
        'info3': 'CHECK OUT THE INCREDIBLE PERKS OF OUR OFFER:',
        'info4': "Start making money with a small investment of $50! We believe in taking small steps to build big profits. Become our partner, and trust our reliable regional agent. Your journey to financial success begins – join us now!",
        'info5': "Discover a straightforward path with our easy-to-use interface! Navigating towards your goals has never been smoother – no more confusion, just clear sailing.",
        'info6': "Navigate your financial path with confidence! We've got you covered. Our team of experts is here to assist you with any issue. Think of us as your personal guides, providing lots of useful information.",
        'info7': "Don't wait for your opportunity! We're all about capturing the moment and taking control of your financial future. It's time to leave hesitation behind and hop on the path to financial success.",
        'info8': "FIND OUT MORE",


        'how1': "HOW TO BECOME AN AGENT?",
        'how2': "COMPLETE THE VERIFICATION PROCESS, AND MELBET, THE LEADING BOOKMAKER, WILL GRANT YOU THE AGENT STATUS.",
        'how3': "AUTHENTICATE AND MAKE YOUR FIRST DEPOSIT",
        'how4': "After verification, you will need to confirm your identity on the MelBet website. The next step is to obtain your unique agent account, where deposits for player account top-ups will be made.",
        'how5': "DOWNLOAD AND INSTALL THE APPLICATION",
        'how6': "Our manager will send you a download link for the mobile application. To ensure smooth operation, you will need an Android smartphone running OS version 4.4 or higher.",
        'how7': "START ENGAGING WITH PLAYERS",
        'how8': "Make sure they have a gaming account on MelBet.",
        'how9': "ASSIST PLAYERS WITH SEAMLESS ACCOUNT TOP-UPS",
        'how10': "Easily handle account top-ups and quickly transfer funds from the agent account to player accounts using the deposited funds.",
        'how11': "EARN COMMISSIONS",
        'how12': "You profit 8% from every deposit and 2% from every withdraw. Make it even more with the Limit/Balance system, allowing you to reinvest the same deposit multiple times, potentially gaining up to 40% profit from a single investment.",


        'offer1': "Seize this opportunity to become an agent and elevate your status with MelBet. Join us in providing exceptional service to players and reaping the rewards of a thriving partnership.",
        'offer2': "Let's start this journey together, and together, we'll achieve unmatched success!",
        'offer3': `LET'S GET IT STARTED <span class="melbet-color">NOW</span>`,
        'offer4': "SUCCESS LOVES CONFIDENT AND MOTIVATED. GEAR UP AND START YOUR WEALTH JOURNEY TOGETHER WITH US.",
        'offer5': "start now",


        'join us': "join us",


        'BECOME AN AGENT': `BECOME AN AGENT`,
        'name': 'name',
        'e-mail': 'e-mail',
        'phone': 'phone',
        'send': 'SEND',


        'placeholderName': 'YOUR NAME*',
        'placeholderEmail': 'YOUR E-MAIL*',
        'placeholderNumber': 'YOUR PHONE NUMBER*',
    },
    'es': {
        'START EARNING': 'COMIENZA A GANAR',
        'ABOUT US': 'SOBRE NOSOTROS',
        'HOW TO START': 'CÓMO EMPEZAR',


        'banner1': 'Benefíciese de la asociación con Mel<span class="melbet-color">BET</span> en Venezuela, ahora',
        'banner2': 'RELLENE EL FORMULARIO Y PREPÁRESE ¡PARA QUE NOS PONGAMOS EN CONTACTO CONTIGO LO ANTES POSIBLE!',
        'banner3': '¿PREPARADO PARA DAR RIENDA SUELTA A TU PODER ADQUISITIVO?',
        'banner4': "¡DESBLOQUEA EL POTENCIAL DE GANANCIAS SIGNIFICATIVAS CON MEL<span class='colored-text'>BET</span>, \"TU MEJOR OPCIÓN PARA LA SOLUCIÓN DE PAGO CONFIABLE PARA JUGADORES EN LA REGIÓN!\" NO SOMOS SÓLO DIVERSIÓN Y JUEGOS: ¡ESTAMOS AQUÍ PARA AYUDARTE A ALCANZAR TUS SUEÑOS FINANCIEROS!",


        'info1': 'EFFECTIVE TEAM',
        'info2': "¡Explore nuestro fantástico sistema de pago  — \"TeamCash\"!Sea un agente de pagos y sumérjase en un mundo de oportunidades. Invierte un poco por adelantado y podrás ingresar o retirar dinero de las cuentas de juego rápidamente. Además, ¡ganarás una buena parte de las ganancias!",
        'info3': 'Echa un vistazo a las increíbles ventajas de nuestra oferta',
        'info4': "¡Empieza a ganar dinero con una pequeña inversión! Creemos en dar pequeños pasos para obtener grandes beneficios. Conviértase en nuestro socio y confíe en nuestro fiable agente regional. Su viaje hacia el éxito financiero comienza con nosotros: ¡únase ahora!",
        'info5': "¡Descubra un camino sencillo con nuestra interfaz fácil de usar! Navegar hacia sus objetivos nunca ha sido tan fácil: se acabaron las confusiones, sólo navegar con claridad",
        'info6': "Navegue por su camino financiero con confianza. Tenemos todo lo que necesita. Nuestro equipo de expertos está aquí para ayudarle a resolver cualquier problema. Piense en nosotros como sus guías personales, que le proporcionarán mucha información útil.",
        'info7': "¡No esperes tu oportunidad! Se trata de capturar el momento y tomar las riendas de su futuro financiero. Es hora de dejar atrás las dudas y emprender el camino hacia el éxito financiero.",
        'info8': "Saber más",


        'how1': "¿CÓMO CONVERTIRSE EN UN AGENTE?",
        'how2': "Completa el proceso de verificación y MelBet, la casa de apuestas líder, te otorgará el estado de agente.",
        'how3': "AUTENTIFICATE Y REALIZA SU PRIMER DEPÓSITO",
        'how4': "Después de la verificación, deberá confirmar su identidad en el sitio web de MelBet. El siguiente paso es obtener su cuenta única de agente, donde se realizarán depósitos para recargas de cuentas de jugadores.",
        'how5': "DESCARGA E INSTALA LA APLICACIÓN",
        'how6': "Nuestro gerente te enviará un enlace de descarga para la aplicación móvil. Para garantizar un funcionamiento sin problemas, necesitarás un smartphone en Android con sistema operativo de versión 4.4 o superior.",
        'how7': "COMIENCE A INTERACTUAR CON LOS JUGADORES",
        'how8': "Asegúrese de que tengan una cuenta de jugador en MelBet.",
        'how9': "AYUDA A LOS JUGADORES CON RECARGAS DE CUENTA ININTERRUMPIDAS",
        'how10': "Gestione fácilmente las recargas de las cuentas y transfiera rápidamente fondos de la cuenta del agente a las cuentas de los jugadores utilizando los fondos depositados.",
        'how11': "GANA COMISIONES",
        'how12': "Además, disfrute de una impresionante comisión del 8% con el sistema de Balance Límite, que le permite reinvertir el mismo depósito varias veces, obteniendo potencialmente hasta un 40% de beneficios con una sola inversión.",


        'offer1': "Aprovecha esta oportunidad de convertirte en agente y eleva tu estatus con MelBet. Únase a nosotros para ofrecer un servicio excepcional a los jugadores y cosechar los frutos de una próspera asociación.",
        'offer2': "<span class='melbet-color'>¡Empecemos juntos este viaje y juntos lograremos un éxito inigualable!</span>",
        'offer3': "EMPECEMOS <span class='melbet-color'>AHORA</span>",
        'offer4': "RECUERDA, EL ÉXITO AMA A LAS PERSONAS SEGURAS DE SÍ MISMAS Y MOTIVADAS. ASÍ QUE, ¡PREPÁRATE Y CONQUISTEMOS JUNTOS EL MUNDO DE LA RIQUEZA!",
        'offer5': "EMPIEZA AHORA",


        'join us': "Únete a nosotros",


        'BECOME AN AGENT': 'Conviértase en agente',
        'name': 'nombre',
        'e-mail': 'e-mail',
        'phone': 'teléfono',
        'send': 'enviar',


        'placeholderName': 'TU NOMBRE*',
        'placeholderEmail': 'SU E-MAIL*',
        'placeholderNumber': 'TU TELÉFONO*',
    },
}

const setPlaceholders = (lang) => {
    const name = document.querySelector('.banner-form-input[name="name"]'),
        email = document.querySelector('.banner-form-input[name="email"]'),
        phone = document.querySelector('.banner-form-input[name="phone"]');

    let texts = multilingialTexts[lang]

    name.placeholder = texts.placeholderName
    email.placeholder = texts.placeholderEmail
    phone.placeholder = texts.placeholderNumber
}

const changeLanguage = (lang) => {
    // set new lang to cookie
    document.cookie = `lang=${lang}; path=/; max-age=31536000`;
    setPlaceholders(lang);
    document.documentElement.setAttribute("lang", lang);
    let texts = multilingialTexts[lang];
    let keys = Object.keys(texts);
    keys.forEach(key => {
        let elements = document.querySelectorAll(`[data-lang="${key}"]`);
        elements.forEach(element => {
            element.innerHTML = texts[key];
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // set language from cookie
    let lang = document.cookie.replace(/(?:(?:^|.*;\s*)lang\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const languageSelect = document.querySelector('.header-links-nav-select-value');
    if (lang) {
        changeLanguage(lang);
        languageSelect.textContent = lang.toUpperCase();
        document.querySelector('.header-links-nav-select-flag').src = `./img/${lang}.png`;
        setPlaceholders(lang);
    } else {
        changeLanguage('en');
        setPlaceholders('en');
    }
    const options = document.querySelectorAll('.header-links-nav-select-dropdown-option')
    options.forEach(option => {
        option.addEventListener('click', () => {
            changeLanguage(option.dataset.value)
        })
    })
});