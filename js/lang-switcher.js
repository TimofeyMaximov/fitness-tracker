export class LangSwitcher {
    constructor() {
        this.langSwitchBtn = document.querySelector('.lang-switcher--btn')
        this.exerciseNameInp = document.querySelector('#exercise-name')
        this.addBtn = document.querySelector('.add-btn')
        this.adminH3 = document.querySelector('.admin-h3')
        this.spaText = document.querySelector('.spa-text')
        this.apiText = document.querySelector('.api-text')
        this.appearenceText = document.querySelector('.appearence-text')

        this.currentLang = localStorage.getItem('lang') || 'EN'

        this.render()
        this.bindEvents()
    }

    toggle() {
        this.currentLang = this.currentLang === 'EN' ? 'RU' : 'EN'
        localStorage.setItem('lang', this.currentLang)
    }

    render() {
        const weightInp = document.querySelector('.weight-input')
        const repsInp = document.querySelector('.reps-input')
        const applyBtn = document.querySelector('.apply-btn')

        if (this.currentLang === 'RU') {
            this.langSwitchBtn.textContent = 'RU'
            this.exerciseNameInp.placeholder = 'Название упражнения'
            this.addBtn.textContent = 'Добавить тренировку'
            this.adminH3.textContent = 'Детали базовой реализации'
            this.spaText.textContent = 'Ванильный SPA-движок'
            this.apiText.textContent = 'Маршрутизация API браузера'
            this.appearenceText.textContent = 'Динамический внешний вид'
            if (weightInp) weightInp.placeholder = 'Вес';
            if (repsInp) repsInp.placeholder = 'Повторения';
            if (applyBtn) applyBtn.textContent = 'Применить';
        } else {
            this.langSwitchBtn.textContent = 'EN'
            this.exerciseNameInp.placeholder = 'Exercise Name'
            this.addBtn.textContent = 'Add workout'
            this.adminH3.textContent = 'Core Implementation Details'
            this.spaText.textContent = 'Vanilla SPA Engine'
            this.apiText.textContent = 'Browser API Routing'
            this.appearenceText.textContent = 'Dynamic Appearance'
            if (weightInp) weightInp.placeholder = 'Weight'
            if (repsInp) repsInp.placeholder = 'Reps'
            if (applyBtn) applyBtn.textContent = 'Apply'
        }
    }

    bindEvents() {
        this.langSwitchBtn.addEventListener('click', () => {
            this.toggle()
            this.render()
        })
    }
}