import { deleteTodo } from "@/api/delete-todo";
import { useMutation } from "@tanstack/react-query";

export function useDeleteTodoMutation() {
  return useMutation({
    mutationFn: deleteTodo,
  });
}
