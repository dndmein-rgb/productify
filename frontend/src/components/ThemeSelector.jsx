import { useEffect, useState } from "react";
import { PaletteIcon, Check } from "lucide-react";

const THEMES = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
];

function ThemeSelector() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "forest";
    }
    return "forest";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-sm gap-1 hover:bg-primary/10 transition-all duration-300">
        <PaletteIcon className="size-4" />
        <span className="hidden sm:inline">Theme</span>
      </div>

      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-200 rounded-xl z-50 w-56 p-2 shadow-2xl max-h-96 overflow-y-auto flex-nowrap border border-base-300 animate-scale-in"
      >
        {THEMES.map((t) => (
          <li key={t}>
            <button
              onClick={() => setTheme(t)}
              className={`flex justify-between items-center transition-all duration-300 ${
                theme === t ? "bg-primary text-primary-content shadow-lg" : "hover:bg-base-300"
              }`}
            >
              <span className="capitalize font-medium">{t}</span>
              <div className="flex gap-0.5 items-center">
                <div className="flex gap-0.5" data-theme={t}>
                  <span className="w-2 h-4 rounded-sm bg-primary" />
                  <span className="w-2 h-4 rounded-sm bg-secondary" />
                  <span className="w-2 h-4 rounded-sm bg-accent" />
                  <span className="w-2 h-4 rounded-sm bg-neutral" />
                </div>
                {theme === t && <Check className="size-4 ml-2" />}
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ThemeSelector;
