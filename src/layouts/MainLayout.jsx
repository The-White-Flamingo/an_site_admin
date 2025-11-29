import React from "react";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen w-full flex flex-col m-0 p-0 overflow-hidden">

      {/* TOPBAR AREA — whatever component you use */}
      <div className="w-full m-0 p-0">
        {/* Insert your Topbar component here */}
      </div>

      {/* PAGE CONTENT — takes the rest of the screen with NO SPACE */}
      <main className="flex-1 w-full m-0 p-0 overflow-auto">
        {children}
      </main>

    </div>
  );
}
