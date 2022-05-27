const AUTH_TOKEN_KEY = 'auth'

export const loadAuth = () => {
    try {
        const serializedState = localStorage.getItem(AUTH_TOKEN_KEY);
        if (serializedState === null) {
            return undefined;
        }
        console.log('load', JSON.parse(serializedState))
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};
export const saveAuth = state => {
    try {
        console.log('hit', state)
        const serializedState = JSON.stringify(state);
        localStorage.setItem(AUTH_TOKEN_KEY, serializedState);
    } catch (err) {
        //ignoring write erros
    }
};