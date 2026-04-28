import { createTodo } from "@/api/create-todo";
import { QUERY_KEYS } from "@/lib/constant";
import type { Todo } from "@/type";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateTodoMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,
    onMutate: () => {}, // 요청이 시작되었을때
    onSettled: () => {}, // 요청이 종료되었을때
    onSuccess: (newTodo) => {
      queryClient.setQueryData<Todo>(
        QUERY_KEYS.todo.detail(newTodo.id),
        newTodo,
      );
      queryClient.setQueryData<string[]>(
        QUERY_KEYS.todo.list,
        (prevTodoIds) => {
          if (!prevTodoIds) return [newTodo.id];
          return [...prevTodoIds, newTodo.id];
        },
      );
    },
    onError: (error) => {
      window.alert(error.message);
    },
  });
}
