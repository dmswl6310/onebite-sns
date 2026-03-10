import { create } from "zustand"; // create = store(zustand에서 state 와 action 함수가 포함된 객체) 생성
import { combine } from "zustand/middleware";

export const useCountStore = create(
  combine({ count: 0 }, (set, get) => ({
    actions: {
      increase: () => {
        /*
    // 아래와 같음
    const count = get().count;
    set({ count: count + 1 }); // 명시된 property 값만 업데이트
    */

        set((state) => ({
          count: state.count + 1,
        }));
      },
      decrease: () => {
        set((state) => ({
          count: state.count - 1,
        }));
      },
    },
  })),
);

// export const useCountStore = create<Store>((set, get) => ({
//   count: 0,
//   actions: {
//     increase: () => {
//       /*
//     // 아래와 같음
//     const count = get().count;
//     set({ count: count + 1 }); // 명시된 property 값만 업데이트
//     */

//       set((store) => ({
//         count: store.count + 1,
//       }));
//     },
//     decrease: () => {
//       set((store) => ({
//         count: store.count - 1,
//       }));
//     },
//   },
// }));

export const useCount = () => {
  const count = useCountStore((store) => store.count);
  return count;
};

export const useIncreaseCount = () => {
  const increase = useCountStore((store) => store.actions.increase);
  return increase;
};

export const useDecreaseCount = () => {
  const decrease = useCountStore((store) => store.actions.decrease);
  return decrease;
};
