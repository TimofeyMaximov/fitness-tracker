export class LangSwitcher {
    constructor() {
        this.langSwitchBtn = document.querySelector('.lang-switcher--btn');
        this.currentLang = localStorage.getItem('lang') || 'EN';

        this.bindEvents();
        this.render();
    }

    toggle() {
        this.currentLang = this.currentLang === 'EN' ? 'RU' : 'EN';
        localStorage.setItem('lang', this.currentLang);
    }

    render() {
        const elements = {
            exerciseNameInp: document.querySelector('#exercise-name'),
            addBtn: document.querySelector('.add-btn'),
            adminH3: document.querySelector('.admin-h3'),
            spaText: document.querySelector('.spa-text'),
            apiText: document.querySelector('.api-text'),
            appearenceText: document.querySelector('.appearence-text'),
            weightInp: document.querySelector('.weight-input'),
            repsInp: document.querySelector('.reps-input'),
            applyBtn: document.querySelector('.apply-btn')
        };

        if (this.langSwitchBtn) {
            this.langSwitchBtn.textContent = this.currentLang;
        }

        if (this.currentLang === 'RU') {
            if (elements.exerciseNameInp) elements.exerciseNameInp.placeholder = 'Название упражнения';
            if (elements.addBtn) elements.addBtn.textContent = 'Добавить тренировку';
            if (elements.adminH3) elements.adminH3.textContent = 'Детали базовой реализации';
            if (elements.spaText) elements.spaText.textContent = 'Ванильный SPA-движок';
            if (elements.apiText) elements.apiText.textContent = 'Маршрутизация API браузера';
            if (elements.appearenceText) elements.appearenceText.textContent = 'Динамический внешний вид';
            if (elements.weightInp) elements.weightInp.placeholder = 'Вес';
            if (elements.repsInp) elements.repsInp.placeholder = 'Повторения';
            if (elements.applyBtn) elements.applyBtn.textContent = 'Применить';
        } else {
            if (elements.exerciseNameInp) elements.exerciseNameInp.placeholder = 'Exercise Name';
            if (elements.addBtn) elements.addBtn.textContent = 'Add workout';
            if (elements.adminH3) elements.adminH3.textContent = 'Core Implementation Details';
            if (elements.spaText) elements.spaText.textContent = 'Vanilla SPA Engine';
            if (elements.apiText) elements.apiText.textContent = 'Browser API Routing';
            if (elements.appearenceText) elements.appearenceText.textContent = 'Dynamic Appearance';
            if (elements.weightInp) elements.weightInp.placeholder = 'Weight';
            if (elements.repsInp) elements.repsInp.placeholder = 'Reps';
            if (elements.applyBtn) elements.applyBtn.textContent = 'Apply';
        }
    }

    bindEvents() {
        if (this.langSwitchBtn) {
            this.langSwitchBtn.addEventListener('click', () => {
                this.toggle();
                this.render();
            });
        }
    }
}