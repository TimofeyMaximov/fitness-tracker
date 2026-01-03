const cardsContainer = document.querySelector('.workout-cards')


const deleteContainer = () => {
    cardsContainer.innerHTML = ''
}

export const createWorkoutCard = (workout) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const cardName = document.createElement('h3')
    cardName.textContent = 'Workout Card'
    card.append(cardName)

    const data = document.createElement('p')
    data.textContent = workout.date
    card.append(data)

    const cardDeleteBtn = document.createElement('button')
    cardDeleteBtn.classList.add('card-delete-btn')
    cardDeleteBtn.dataset.workoutId = workout.id

    const cardDeleteIcon = document.createElement('img')
    cardDeleteIcon.src = './images/main-images/delete-btn-trash-icon/trash.svg'
    cardDeleteIcon.style.width = '32px'
    cardDeleteIcon.style.height = '32px'

    cardDeleteBtn.append(cardDeleteIcon)

    const container = document.createElement('div')
    container.classList.add('container-btn-set')

    workout.exercises.forEach((exercise) => {
        const exerciseName = document.createElement('p')
        exerciseName.style.fontWeight = 'bold'
        exerciseName.textContent = exercise.name
        container.append(exerciseName)

        const addSetsBtn = document.createElement('button')
        addSetsBtn.textContent = '+'
        addSetsBtn.classList.add('add-set-btn')
        addSetsBtn.dataset.workoutId = workout.id;
        addSetsBtn.dataset.exerciseId = exercise.id;
        container.append(addSetsBtn)

        card.append(container)

        const setsContainer = document.createElement('div')
        setsContainer.classList.add('sets-container')

        exercise.sets.forEach((set) => {
            const setsList = document.createElement('div')
            setsList.classList.add('sets-list-container')

            const sets = document.createElement('p')
            sets.textContent = `${set.weight}kg x ${set.reps}`

            const setDeleteBtn = document.createElement('button')
            setDeleteBtn.classList.add('set-delete-btn')

            setDeleteBtn.dataset.workoutId = workout.id
            setDeleteBtn.dataset.exerciseId = exercise.id
            setDeleteBtn.dataset.setId = set.id

            const setIconDelete = document.createElement('img')
            setIconDelete.src = './images/main-images/delete-btn-trash-icon/trash--black.svg'
            setIconDelete.style.width = '20px'
            setIconDelete.style.height = '20px'

            setDeleteBtn.append(setIconDelete)

            setsList.append(sets, setDeleteBtn)
            setsContainer.append(setsList)
        })

        card.append(setsContainer, cardDeleteBtn)
    })


    return card
}

export const setsForm = (workoutId, exerciseId) => {
    const form = document.createElement('form')
    form.classList.add('sets-form')

    form.dataset.workoutId = workoutId;
    form.dataset.exerciseId = exerciseId;

    const closeBtn = document.createElement('button')
    closeBtn.textContent = 'x'
    closeBtn.classList.add('close-btn')
    closeBtn.type = 'button'

    const weigthInput = document.createElement('input')
    weigthInput.classList.add('weight-input')
    weigthInput.placeholder = 'Weigth'

    const repsInput = document.createElement('input')
    repsInput.classList.add('reps-input')
    repsInput.placeholder = 'Reps'

    const applyBtn = document.createElement('button')
    applyBtn.textContent = 'Apply'
    applyBtn.classList.add('apply-btn')
    applyBtn.classList.add('btn')

    form.append(closeBtn, weigthInput, repsInput, applyBtn)

    return form
}


export const renderUI = (workouts) => {
    deleteContainer()

    workouts.forEach((workout) => {
        const card = createWorkoutCard(workout)

        cardsContainer.append(card)
    })
}