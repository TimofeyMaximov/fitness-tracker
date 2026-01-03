export class ThemeSwitcher {
    constructor() {
        this.themeSwitcheBtn = document.querySelector('.theme-switcher--btn')
        this.themeLogo = document.querySelector('.theme-logo')
        this.adminH3 = document.querySelector('.admin-text')

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
        } else {
            document.documentElement.classList.remove('isDark')
            this.adminH3.style.color = 'black'
            this.themeLogo.src = "./images/header-images/moon.svg"
        }
    }

    bindEvents() {
        this.themeSwitcheBtn.addEventListener('click', () => {
            this.toggle()
            this.render()
        })
    }
}