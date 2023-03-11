import { create } from "zustand";

//These are the costs of the pads/tampons roughly
const STANDARD_PAD_COST = 2.9;
const SUPER_PAD_COST = 3.3;
const SUPER_PLUS_PAD_COST = 3.7;
const DAILY_PAD_COST = 1.9;
const SUPER_DAILY_PAD_COST = 2;
const MINI_TAMPON_COST = 3.3;
const STANDARD_TAMPON_COST = 3.7;

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
        standardPadState * STANDARD_PAD_COST +
        superPadState * SUPER_PAD_COST +
        superPlusPadState * SUPER_PLUS_PAD_COST +
        dailyPadState * DAILY_PAD_COST +
        superDailyPadState * SUPER_DAILY_PAD_COST +
        miniTamponState * MINI_TAMPON_COST +
        standardTamponState * STANDARD_TAMPON_COST,
    });
  },
}));
