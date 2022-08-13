import { atom } from "recoil";

type UserAtomType = {
    email: string
}


const localStorageEffect = key => ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
        isReset
            ? localStorage.removeItem(key)
            : localStorage.setItem(key, JSON.stringify(newValue));
    });
};
export const userAtom = atom<UserAtomType>({
    key: 'user-atom',
    default: null,
    effects: [localStorageEffect('user-atom')]
});

