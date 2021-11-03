import { atom } from "recoil";

export const titleListState = atom<string[]>({
  key: "titleList",
  default: []
})