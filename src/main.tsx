import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.tsx";
import ReadingQueue from "./Pages/ReadingQueue.tsx";
import ColorPalateBuilder from "./Pages/ColorPalatebuilder.tsx";
import IdeaBoard from "./Pages/IdeaBoard.tsx";
import GuestList from "./Pages/GuestList.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<ReadingQueue />} />
          <Route path="/ColorPalatteBuilder" element={<ColorPalateBuilder />} />
          <Route path="/IdeaBoard" element={<IdeaBoard />} />
          <Route path="/GuestList" element={<GuestList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
