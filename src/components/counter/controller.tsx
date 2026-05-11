import { useIncreaseCount, useDecreaseCount } from "@/store/count";
import { Button } from "../ui/button";

export default function Controller() {
  const increase = useIncreaseCount();
  const decrease = useDecreaseCount();
  //
  // const { increase, decrease } = useCountStore((store) => store.actions);
  /*
  // selector함수 사용 : 특정값만 불러와서 리렌더링x
  const increase = useCountStore((store) => store.increase);
  const decrease = useCountStore((store) => store.decrease);
    */

  return (
    <div>
      <Button onClick={decrease}>-</Button>
      <Button onClick={increase}>+</Button>
    </div>
  );
}
