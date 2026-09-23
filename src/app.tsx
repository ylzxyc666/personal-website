import { Routes, Route } from "react-router-dom";
import { BackgroundProvider } from "@/context/BackgroundContext";
import BackgroundLayer from "@/components/BackgroundLayer";
import { Layout } from "@/components/Layout";
import WelcomePage from "@/pages/WelcomePage/WelcomePage";

export default function App() {
  return (
    <BackgroundProvider>
      {/* 全局背景层（篮球场图，模糊度由 Context 控制） */}
      <BackgroundLayer />
      <Routes>
        {/* 欢迎启动页（独立，无 Header/Footer，背景清晰） */}
        <Route path="/" element={<WelcomePage />} />
        {/* 主界面（带 Header/Footer，背景虚化） */}
        <Route path="*" element={<Layout />} />
      </Routes>
    </BackgroundProvider>
  );
}
