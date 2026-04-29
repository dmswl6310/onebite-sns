import { Link, Outlet } from "react-router";
import logo from "@/assets/logo.png";
import { SunIcon } from "lucide-react";
import defaultAvatar from "@/assets/default-avatar.png";
export default function GlobalLayout() {
  return (
    <div>
      <header className="h-15 border-b">
        <div className="m-auto flex h-full w-full max-w-175 justify-between px-4">
          <Link to={"/"} className="flex items-center gap-2">
            <img className="h-5" src={logo} alt="한입 로그의 로고" />
            <div className="font-bold">한입로그</div>
          </Link>
          <div className="flex items-center gap-5">
            <div className="hover:bg-muted cursor-pointer rounded-full p-2">
              <SunIcon />
            </div>
            <img className="h-6" src={defaultAvatar} alt="기본 프로필 이미지" />
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
