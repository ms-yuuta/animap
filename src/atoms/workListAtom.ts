import { atom } from "recoil";

export const workListState = atom<string[]>({
  key: "workList",
  default: []
})