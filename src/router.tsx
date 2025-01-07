import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import FavoritesView from "./views/FavoritesView";
import Layout from "./layouts/Layout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomeView />} index />
          <Route path="/favoritos" element={<FavoritesView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
