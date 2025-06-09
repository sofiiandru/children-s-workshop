/*
    Виконавець: Ваше Ім'я Прізвище
    Група: Ваша Навчальна Група
    Проект: Сайт-візитка для Арт-простору "Дитяча майстерня"
*/
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); 


            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                formStatus.textContent = 'Будь ласка, заповніть всі обов\'язкові поля.';
                formStatus.className = 'form-status error';
                return;
            }

            console.log('Дані форми для відправки:');
            console.log('Ім\'я:', name);
            console.log('Email:', email);
            console.log('Повідомлення:', message);

            formStatus.textContent = 'Дякуємо! Ваше повідомлення успішно надіслано. Ми зв\'яжемося з вами найближчим часом.';
            formStatus.className = 'form-status success';


            contactForm.reset();
        });
    }
});