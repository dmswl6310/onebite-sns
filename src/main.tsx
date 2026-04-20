import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:0, // 주로 statleTime은 개발도중 0으로 함
      gcTime:5*60*1000, // 주로 5분

      refetchOnMount:true,
      refetchOnWindowFocus:false,
      refetchOnReconnect:false,
      refetchInterval:false,
    }
  }
  }
); // queryClient는 일종의 store(api요청응답값, 캐싱)

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <App />
    </QueryClientProvider>
  </BrowserRouter>,
);
