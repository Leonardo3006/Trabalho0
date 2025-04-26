document.addEventListener('DOMContentLoaded', () => {
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    function validateForm() {
        const form = document.querySelector('form');
        const name = form.querySelector('input[name="name"]');
        const email = form.querySelector('input[name="email"]');
        const phone = form.querySelector('input[name="phone"]');
        const cep = form.querySelector('input[name="cep"]');
        let isValid = true;

        if (name.value.trim() === '') {
            alert('Nome é obrigatório.');
            isValid = false;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email.value.trim())) {
            alert('Por favor, insira um e-mail válido.');
            isValid = false;
        }

        if (phone.value.trim() === '') {
            alert('Telefone é obrigatório.');
            isValid = false;
        }

        const cepPattern = /^[0-9]{5}-[0-9]{3}$/;
        if (!cepPattern.test(cep.value.trim())) {
            alert('Por favor, insira um CEP válido (ex: 62375-898).');
            isValid = false;
        }

        return isValid;
    }

    const submitButton = document.querySelector('form button');
    if (submitButton) {
        submitButton.addEventListener('click', (event) => {
            if (!validateForm()) {
                event.preventDefault();
            }
        });
    }

    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const toggleSectionButtons = document.querySelectorAll('.toggle-section');
    toggleSectionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.toggle('hidden');
            }
        });
    });

    function showThankYouMessage() {
        const form = document.querySelector('form');
        form.reset();
        alert('Obrigado pelo seu contato! Em breve entraremos em contato.');
    }

    if (submitButton && document.querySelector('form')) {
        const form = document.querySelector('form');
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            showThankYouMessage();
        });
    }
});