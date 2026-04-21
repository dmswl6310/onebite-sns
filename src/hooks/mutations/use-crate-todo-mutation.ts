import { createTodo } from "@/api/create-todo";
import { useMutation } from "@tanstack/react-query";

export function useCreateTodoMutation() {
  return useMutation({
    mutationFn: createTodo,
    onMutate: () => {}, // 요청이 시작되었을때
    onSettled: () => {}, // 요청이 종료되었을때
    onSuccess: () => {
      window.location.reload();
    },
    onError: (error) => {
      window.alert(error.message);
    },
  });
}
