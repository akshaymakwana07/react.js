export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'


export const increment =(id) =>({
    type : INCREMENT,
    payload : id
})

export const decrement =(id) =>({
    type : DECREMENT,
    payload : id
})