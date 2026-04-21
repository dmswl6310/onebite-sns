import { createTodo } from "@/api/create-todo";
import { QUERY_KEYS } from "@/lib/constant";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateTodoMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,
    onMutate: () => {}, // 요청이 시작되었을때
    onSettled: () => {}, // 요청이 종료되었을때
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.todo.list,
      });
    },
    onError: (error) => {
      window.alert(error.message);
    },
  });
}
