import { updateTodo } from "@/api/update-todo";
import { useMutation } from "@tanstack/react-query";

export function useUpdateTodoMutation() {
  return useMutation({
    mutationFn: updateTodo,
  });
}
