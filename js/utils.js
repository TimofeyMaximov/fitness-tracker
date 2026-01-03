export const workoutObj = (exerciseName) => {
    const id = Date.now();

    const date = new Date().toLocaleDateString();

    return {
        id: id,
        date: date,
        exercises: [
            {
                id: id + 1,
                name: exerciseName,
                sets: []
            }
        ]
    }
}

export const saveToLocalStorage = (data) => {
    localStorage.setItem('myWorkouts', JSON.stringify(data))
}