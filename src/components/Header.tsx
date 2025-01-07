import { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  const isHome = useMemo(() => pathname === "/", [pathname]);
  return (
    <header
      className={isHome ? "bg-header bg-center bg-cover" : "bg-slate-800"}
    >
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img src="/logo.svg" alt="logo" className="w-32" />
          </div>
          <nav className="flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/favoritos"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
            >
              Favoritos
            </NavLink>
          </nav>
        </div>
        {isHome && (
          <form className="bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6 md:w-1/2 2xl:w-1/3">
            <div className="space-y-4">
              <label
                htmlFor="ingredient"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Nombre de receta o ingredientes
              </label>
              <input
                type="text"
                id="ingredient"
                name="ingredient"
                className="p-3 w-full rounded-md focus:outline-none"
                placeholder="Ej: Vodka"
              />
            </div>
            <div className="space-y-4">
              <label
                htmlFor="category"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Categoría
              </label>
              <select
                id="category"
                name="category"
                className="p-3 w-full rounded-md focus:outline-none"
              >
                <option value="">Seleccione una categoría</option>
              </select>
            </div>
            <input
              type="submit"
              value="Buscar recetas"
              className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-md uppercase"
            />
          </form>
        )}
      </div>
    </header>
  );
}
