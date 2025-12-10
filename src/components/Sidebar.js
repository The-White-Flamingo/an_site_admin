import React from "react";
import { X, Menu } from "lucide-react";
import "./Sidebar.css";

const menuItems = [
  "Dashboard",
  "MySurveys",
  "FindSurveyors",
  "Payments",
  "Messages",
  "Help",
  "Account",
  "Disputes",
];

export default function Sidebar({ activePage, setActivePage }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {/* MOBILE HAMBURGER */}
      <button
        className="md:hidden p-3 bg-orange-500 text-white rounded-md fixed top-4 left-4 z-50"
        onClick={() => setOpen(true)}
      >
        <Menu size={24} />
      </button>

      {/* MOBILE SIDEBAR */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-50 flex">
          <div className="w-64 bg-white h-full p-4 shadow-xl">
            <button onClick={() => setOpen(false)} className="mb-4 p-2 border rounded-lg">
              <X size={20} />
            </button>
            <nav className="menu">
              {menuItems.map((item) => (
                <div
                  key={item}
                  className={menu-item ${activePage === item ? "active" : ""}}
                  onClick={() => { setActivePage(item); setOpen(false); }}
                >
                  {item}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* DESKTOP SIDEBAR */}
      <aside className="sidebar hidden md:flex flex-col">
        <nav className="menu">
          {menuItems.map((item) => (
            <div
              key={item}
              className={menu-item ${activePage === item ? "active" : ""}}
              onClick={() => setActivePage(item)}
            >
              {item}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
},