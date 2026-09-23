import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AnimatedRoutes from "./AnimatedRoutes";
import { useBackground } from "@/context/BackgroundContext";

export const Layout = () => {
  const { setBlur } = useBackground();

  // 进入主界面时背景虚化
  useEffect(() => {
    setBlur(6);
  }, [setBlur]);

  return (
    <div className="min-h-screen text-foreground flex flex-col">
      <Header />
      <main className="flex-1 w-full bg-white/50 backdrop-blur-sm">
        <AnimatedRoutes />
      </main>
      <Footer />
    </div>
  );
};
