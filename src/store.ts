import { create } from "zustand"

type BearState = {
  bears: number
  increasePopulation: () => void
}

export const useBearStore = create<BearState>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
}))
