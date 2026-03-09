import { create } from "zustand"; // create = store(zustand에서 state 와 action 함수가 포함된 객체) 생성

type Store = {
  count: number;
  increase: () => void;
  decrease: () => void;
};

export const useCountStore = create<Store>((set, get) => ({
  count: 0,
  increase: () => {
    /*
    // 아래와 같음
    const count = get().count;
    set({ count: count + 1 }); // 명시된 property 값만 업데이트
    */

    set((store) => ({
      count: store.count + 1,
    }));
  },
  decrease: () => {
    set((store) => ({
      count: store.count - 1,
    }));
  },
}));
