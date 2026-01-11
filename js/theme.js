export class ThemeSwitcher {
    constructor() {
        this.themeSwitcheBtn = document.querySelector('.theme-switcher--btn')
        this.themeLogo = document.querySelector('.theme-logo')
        this.adminH3 = document.querySelector('.admin-text')
        this.langBtn = document.querySelector('.lang-switcher--btn')

        this.currentTheme = localStorage.getItem('theme') || 'light'

        this.render()
        this.bindEvents()
    }

    toggle() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light'
        localStorage.setItem('theme', this.currentTheme)
        document.documentElement.classList.toggle('isDark')
    }

    render() {
        if (this.currentTheme === 'dark') {
            document.documentElement.classList.add('isDark')
            this.adminH3.style.color = '#fff'
            this.themeLogo.src = "./images/header-images/sun.svg"
            this.langBtn.style.color = '#fff'
        } else {
            document.documentElement.classList.remove('isDark')
            this.adminH3.style.color = 'black'
            this.themeLogo.src = "./images/header-images/moon.svg"
            this.langBtn.style.color = '#324a5e'
        }
    }

    bindEvents() {
        this.themeSwitcheBtn.addEventListener('click', () => {
            this.toggle()
            this.render()
        })
    }
}