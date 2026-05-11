import { Outlet, Route, Routes } from "react-router";
import "./App.css";
import IndexPage from "@/pages/index-page";
import SignInPage from "./pages/sign-in-page";
import SignUpPage from "./pages/sign-up-page";
import CounterPage from "./pages/counter-page";
import TodoListPage from "./pages/todo-list-page";
import TodoDetailPage from "./pages/todo-detail-page";

function AutoLayout() {
  return (
    <div>
      <header>Auth!</header>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/counter" element={<CounterPage />} />
      <Route element={<AutoLayout />}>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Route>
      <Route path="/todolist" element={<TodoListPage />} />
      <Route path="todolist/:id" element={<TodoDetailPage />} />
    </Routes>
  );
}

export default App;
