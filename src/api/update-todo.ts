import { API_URL } from "@/lib/constant";
import type { Todo } from "@/type";

export async function updateTodo(todo: Partial<Todo> & { id: string }) {
  const response = await fetch(`${API_URL}/todos/${todo.id}`, {
    method: "PATCH",
    body: JSON.stringify(todo),
  });

  if (!response.ok) throw new Error("Update Todo Failed");
  const data: Todo = await response.json();
  return data;
}
