import { Routes, Route } from "react-router-dom";
import { BackgroundProvider } from "@/context/BackgroundContext";
import { LanguageProvider } from "@/context/LanguageContext";
import BackgroundLayer from "@/components/BackgroundLayer";
import { Layout } from "@/components/Layout";
import WelcomePage from "@/pages/WelcomePage/WelcomePage";

export default function App() {
  return (
    <LanguageProvider>
      <BackgroundProvider>
        <BackgroundLayer />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="*" element={<Layout />} />
        </Routes>
      </BackgroundProvider>
    </LanguageProvider>
  );
}
