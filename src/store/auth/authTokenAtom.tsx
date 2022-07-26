import { atom } from "recoil";

type authAtom = {
    authToken: string,
    refreshToken: string,
}


export const authAtom = atom<authAtom>({
    key: 'tokens',
    default: null,
});
