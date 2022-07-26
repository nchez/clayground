import { atom, useRecoilValue } from "recoil";

export const userAtom = atom<string>({
    key: 'user-atom',
    default: null,
});

