import { useState } from "react";
import { Bell, ChevronDown } from "lucide-react";
import "./Topbar.css";

export default function Topbar() {
  const [language, setLanguage] = useState("Eng (US)");
  const [openLang, setOpenLang] = useState(false);
  const [bellOn, setBellOn] = useState(false);

  return (
    <div className="topbar-container">

      {/* LEFT */}
      <div className="topbar-left">
        <h1 className="topbar-title">Request Survey</h1>
      </div>

      {/* CENTER */}
      <div className="topbar-center">
        <input
          type="text"
          placeholder="Search..."
          className="topbar-search"
        />

        <div className="relative lang-container">
          <button
            className="lang-btn"
            onClick={() => setOpenLang(!openLang)}
          >
            <img
              src="https://flagcdn.com/w20/us.png"
              className="flag-icon"
              alt="US"
            />
            {language}
            <ChevronDown size={16} />
          </button>

          {openLang && (
            <div className="lang-menu">

              <button
                className="lang-item"
                onClick={() => {
                  setLanguage("Eng (US)");
                  setOpenLang(false);
                }}
              >
                <img src="https://flagcdn.com/w20/us.png" className="flag-icon" alt="US" />
                Eng (US)
              </button>

              <button
                className="lang-item"
                onClick={() => {
                  setLanguage("Fr");
                  setOpenLang(false);
                }}
              >
                <img src="https://flagcdn.com/w20/fr.png" className="flag-icon" alt="FR" />
                Fr
              </button>

              <button
                className="lang-item"
                onClick={() => {
                  setLanguage("Es");
                  setOpenLang(false);
                }}
              >
                <img src="https://flagcdn.com/w20/es.png" className="flag-icon" alt="ES" />
                Es
              </button>

            </div>
          )}
        </div>
      </div>

      {/* RIGHT */}
      <div className="topbar-right">

        <button
          className={`topbar-bell-btn ${bellOn ? "on" : ""}`}
          onClick={() => setBellOn((s) => !s)}
        >
          {bellOn ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="#f97316"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C10.3 2 9 3.3 9 5V6.3C6.7 7.2 5 9.4 5 12v5l-1 1v1h16v-1l-1-1v-5c0-2.6-1.7-4.8-4-5.7V5c0-1.7-1.3-3-3-3zm0 20c1.1 0 2-.9 2-2H10c0 1.1.9 2 2 2z"/>
            </svg>
          ) : (
            <Bell size={20} className="topbar-bell" />
          )}
        </button>

        <div className="topbar-profile">
          <img src="https://i.pravatar.cc/40" alt="profile" />
          <div className="profile-info">
            <span className="profile-name">Mustiq</span>
            <span className="profile-role">Admin</span>
          </div>
        </div>

      </div>
    </div>
  );
}
