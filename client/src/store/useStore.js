import { create } from "zustand"

export const loginStore = create((set) => ({
    singin: true,
    handleToggleAction: () => set((state) => ({ singin: !state.singin })),
}))


