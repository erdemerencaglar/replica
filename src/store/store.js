import { create } from "zustand";

export const usePacketStore = create((set, get) => ({
  standardPad: 0,
  updateStandardPad: (payload) => {
    set({ standardPad: payload });
  },
  superPad: 0,
  updateSuperPad: (payload) => {
    set({ superPad: payload });
  },
  superPlusPad: 0,
  updateSuperPlusPad: (payload) => {
    set({ superPlusPad: payload });
  },
  dailyPad: 0,
  updateDailyPad: (payload) => {
    set({ dailyPad: payload });
  },
  superDailyPad: 0,
  updateSuperDailyPad: (payload) => {
    set({ superDailyPad: payload });
  },
  miniTampon: 0,
  updateMiniTampon: (payload) => {
    set({ miniTampon: payload });
  },
  standardTampon: 0,
  updateStandardTampon: (payload) => {
    set({ standardTampon: payload });
  },
  total: 0,
  updateTotal: () => {
    const standardPadState = get().standardPad;
    const superPadState = get().superPad;
    const superPlusPadState = get().superPlusPad;
    const dailyPadState = get().dailyPad;
    const superDailyPadState = get().superDailyPad;
    const miniTamponState = get().miniTampon;
    const standardTamponState = get().standardTampon;
    set({
      total:
        standardPadState +
        superPadState +
        superPlusPadState +
        dailyPadState +
        superDailyPadState +
        miniTamponState +
        standardTamponState,
    });
  },
}));
