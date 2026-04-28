import { deleteTodo } from "@/api/delete-todo";
import { QUERY_KEYS } from "@/lib/constant";
import type { Todo } from "@/type";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteTodoMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: (deletedTodo) => {
      queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
        if (!prevTodos) return [];
        return prevTodos.filter((prevTodo) => prevTodo.id !== deletedTodo.id);
      });
    },
  });

  // 1. 캐시 무효화 => invalidateQueries
  // 2. 수정 요청의 응답값 활용 => onSuccess
  // (삭제 도중 체크 시 문제될수 있지만, 충분히 처리가능) => 요 방식으로 픽!
  // 3. 낙관적 업데이트 => onMutate
  // (삭제 후 화면에서 사라졌다가, 실패시 다시 보였을 때 이상함)
}
