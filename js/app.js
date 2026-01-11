import { workouts, addWorkout } from "./data.js";
import { renderUI } from "./ui.js";
import { workoutObj } from "./utils.js";
import { ThemeSwitcher } from "./theme.js";
import { paramsUrlDefStr } from "./user.js";
import { newUrlParamStr } from "./user.js";
import { addSet } from "./data.js";
import { setsForm } from "./ui.js";
import { deleteSet } from "./data.js";
import { deleteCard } from "./data.js";
import { LangSwitcher } from "./lang-switcher.js";

renderUI(workouts)

const user = document.querySelector('.header-user--img')
const wrapper = document.querySelector('.wrapper')
const adminContainer = document.querySelector('.admin-container')
const footerElement = document.querySelector('#footer')

window.history.replaceState(
    { page: 'home' },
    '',
    `?${paramsUrlDefStr}`
)

const home = document.querySelector('.header-logo')

home.addEventListener('click', () => {

    wrapper.classList.remove('isHidden')
    adminContainer.classList.remove('isVisible')
    footerElement.classList.remove('isVisible')

    window.history.replaceState(
        { page: 'home' },
        '',
        `?${paramsUrlDefStr}`
    )
})

new ThemeSwitcher()
new LangSwitcher()

const form = document.querySelector('#workout-form')
const exerciseInput = form.exerciseName

form.addEventListener('submit', (event) => {
    event.preventDefault()
})

const addWorkoutBtn = document.querySelector('.add-btn')

addWorkoutBtn.addEventListener('click', () => {
    const exerciseName = exerciseInput.value.trim()

    if (!exerciseName) return alert('Введите название!')

    const workout = workoutObj(exerciseName)

    addWorkout(workout)

    exerciseInput.value = ''

    renderUI(workouts)
})

user.addEventListener('click', () => {

    window.history.pushState(
        { home: 'admin' },
        '',
        `?${newUrlParamStr}`
    )

    wrapper.classList.add('isHidden')

    adminContainer.classList.add('isVisible')

    footerElement.classList.add('isVisible')

})



document.addEventListener('click', (event) => {

    if (event.target.classList.contains('add-set-btn')) {

        const workoutId = event.target.dataset.workoutId;
        const exerciseId = event.target.dataset.exerciseId;

        const currentCard = event.target.closest('.card')

        const formElement = setsForm(workoutId, exerciseId)

        currentCard.append(formElement)
    }

})

document.addEventListener('submit', (event) => {
    if (event.target.classList.contains('sets-form')) {
        event.preventDefault()

        const weight = event.target.querySelector('.weight-input').value.trim()
        const reps = event.target.querySelector('.reps-input').value.trim()

        const workoutId = Number(event.target.dataset.workoutId)
        const exerciseId = Number(event.target.dataset.exerciseId)

        addSet(workoutId, exerciseId, {
            weight: weight,
            reps: reps,
        })

        renderUI(workouts)
    }
})

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('close-btn')) {
        const formElement = event.target.closest('.sets-form')

        formElement.reset()
        formElement.remove()
    }
})

document.addEventListener('click', (event) => {
    const setDeleteBtn = event.target.closest('.set-delete-btn')

    if (setDeleteBtn) {
        const workoutId = setDeleteBtn.dataset.workoutId;
        const exerciseId = setDeleteBtn.dataset.exerciseId;
        const setId = setDeleteBtn.dataset.setId;

        deleteSet(workoutId, exerciseId, setId);
        renderUI(workouts);
    }
})

document.addEventListener('click', (event) => {
    const cardDeleteBtn = event.target.closest('.card-delete-btn')

    if (cardDeleteBtn) {
        const workoutId = cardDeleteBtn.dataset.workoutId

        const confirmDelete = confirm('Вы уверены что хотите удалить тренировку?')

        if (confirmDelete) {
            deleteCard(workoutId)
            renderUI(workouts)
        }
    }
})