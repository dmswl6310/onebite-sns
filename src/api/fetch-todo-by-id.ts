import { API_URL } from "@/lib/constant";
import type { Todo } from "@/type";

export async function fetchTodoById(id: number) {
  const response = await fetch(`${API_URL}/todos/${id}`);
  if (!response.ok) throw new Error("Fetch Failed");

  const data: Todo = await response.json();
  return data;
}
