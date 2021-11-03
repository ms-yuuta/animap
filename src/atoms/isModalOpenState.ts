import { atom } from "recoil";

export const isModalOpenState = atom<boolean>({
  key: "isModalOpenState",
  default: false
})