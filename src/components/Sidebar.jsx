import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Sidebar({ children }) {
  const [open, setOpen] = useState(false); // For mobile sidebar

  return (
    <div className="flex">

      {/* 🚀 ORANGE HAMBURGER BUTTON (mobile only) */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden p-3 bg-orange-500 text-white rounded-md fixed top-4 left-4 z-50"
      >
        <Menu size={24} />
      </button>

      {/* 🚀 MOBILE SLIDE-OUT SIDEBAR */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-50 flex md:hidden">
          <div className="w-64 bg-white h-full p-4 shadow-xl">

            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="mb-4 p-2 border rounded-lg"
            >
              <X size={20} />
            </button>

            {/* Mobile Menu */}
            <nav className="flex flex-col gap-3">
              <a href="#" className="p-2 hover:bg-gray-100 rounded-lg">Dashboard</a>
              <a href="#" className="p-2 hover:bg-gray-100 rounded-lg">Surveys</a>
              <a href="#" className="p-2 hover:bg-gray-100 rounded-lg">Settings</a>
            </nav>
          </div>
        </div>
      )}

      {/* 🚀 DESKTOP SIDEBAR */}
      <aside className="hidden md:block w-64 bg-white h-screen border-r p-4 shadow-md">
        <h2 className="text-lg font-semibold mb-4">Menu</h2>
        <nav className="flex flex-col gap-3">
          <a href="#" className="p-2 hover:bg-gray-100 rounded-lg">Dashboard</a>
          <a href="#" className="p-2 hover:bg-gray-100 rounded-lg">Surveys</a>
          <a href="#" className="p-2 hover:bg-gray-100 rounded-lg">Settings</a>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1">{children}</main>
    </div>
  );
}
