import { saveToLocalStorage } from "./utils.js"

export let workouts = JSON.parse(localStorage.getItem('myWorkouts')) || []

export const addWorkout = (workout) => {
    workouts.push(workout)
    saveToLocalStorage(workouts)

    return workouts
}

export const addSet = (workoutId, exerciseId, set) => {
    const workout = workouts.find(workout => String(workout.id) === String(workoutId))
    if (!workout) return console.error('Тренировка не найдена');

    const exercise = workout.exercises.find(exercise => String(exercise.id) === String(exerciseId))
    if (!exercise) return console.error('Упражнение не найдено');

    exercise.sets.push({
        id: Date.now(),
        weight: set.weight,
        reps: set.reps
    })

    saveToLocalStorage(workouts)
}

export const deleteSet = (workoutId, exerciseId, setId) => {
    const workout = workouts.find(w => String(w.id) === String(workoutId))
    if (!workout) return

    const exercise = workout.exercises.find(ex => String(ex.id) === String(exerciseId))
    if (!exercise) return

    exercise.sets = exercise.sets.filter(set => String(set.id) !== String(setId))

    saveToLocalStorage(workouts)
}

export const deleteCard = (workoutId) => {
    const workoutIndex = workouts.findIndex(w => String(w.id) === String(workoutId))

    if (workoutIndex !== - 1) {
        workouts.splice(workoutIndex, 1)
    }

    saveToLocalStorage(workouts)
}