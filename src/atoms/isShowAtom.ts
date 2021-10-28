import { atom } from "recoil";

export const isShowState = atom<boolean>({
  key: "isShow",
  default: false
})