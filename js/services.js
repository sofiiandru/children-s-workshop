/*
    Виконавець: Ваше Ім'я Прізвище
    Група: Ваша Навчальна Група
    Проект: Сайт-візитка для Арт-простору "Дитяча майстерня"
*/
document.addEventListener('DOMContentLoaded', () => {
    const services = [
        {
            name: "Малювання гуашшю",
            description: "Насичені кольори та легкість у використанні дозволяють дітям вільно експериментувати та створювати яскраві шедеври.",
            price: "120 грн/заняття"
        },
        {
            name: "Ліпка з глини/пластиліну",
            description: "Розвиває дрібну моторику, просторове мислення та креативність. Діти створюють унікальні фігурки та вироби.",
            price: "150 грн/заняття"
        },
        {
            name: "Тематичне свято",
            description: "Організація незабутнього дня народження або іншого свята з творчими майстер-класами та іграми.",
            price: "від 500 грн/захід"
        }
    ];

    const servicesContainer = document.getElementById('dynamic-services-container');

    if (servicesContainer) {
        services.forEach(service => {
            const serviceCard = document.createElement('div');
            serviceCard.classList.add('service-card');

            serviceCard.innerHTML = `
                <h3>${service.name}</h3>
                <p>${service.description}</p>
                <p class="price">${service.price}</p>
            `;
            servicesContainer.appendChild(serviceCard);
        });
    }
});