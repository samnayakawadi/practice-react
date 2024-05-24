export const globalReducers = {
    updateWaitingTime: (prevState, actions) => {
        prevState.waitingTime = actions.payload
    }
}