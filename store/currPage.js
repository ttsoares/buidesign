import { create } from "zustand";

const usePage = create((set) => ({
  page: 0,
  choose: (index) => set(() => ({ page: index })),
}));

export default usePage;
