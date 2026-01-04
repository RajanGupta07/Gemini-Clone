import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false); // desktop collapse
  const [mobileOpen, setMobileOpen] = useState(false); // mobile visibility

  const { onSend, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const isMobile = window.innerWidth <= 600;

  const handleMenuClick = () => {
    if (isMobile) {
      setMobileOpen((prev) => !prev);
    } else {
      setExtended((prev) => !prev);
    }
  };

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSend(prompt);

    if (isMobile) {
      setMobileOpen(false);
    }
  };

  return (
    <>
      {/* overlay for mobile */}
      {mobileOpen && (
        <div className="sidebar-overlay" onClick={() => setMobileOpen(false)} />
      )}

      <div className={`sidebar ${mobileOpen ? "mobile-open" : ""}`}>
        <div className="top">
          <img
            className="menu"
            src={assets.menu_icon}
            alt="menu"
            onClick={handleMenuClick}
          />

          <div className="new-chat" onClick={newChat}>
            <img src={assets.plus_icon} alt="new chat" />
            {extended && <p>New Chat</p>}
          </div>

          {extended && (
            <div className="recent">
              <p className="recent-title">Recent</p>

              {prevPrompts.map((item, index) => (
                <div
                  key={index}
                  className="recent-entry"
                  onClick={() => loadPrompt(item)}
                >
                  <img src={assets.message_icon} alt="msg" />
                  <p>{item.slice(0, 18)}...</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bottom">
          <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="help" />
            {extended && (
              <a
                href="https://www.linkedin.com/in/rajan-kumar-gupta5/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Help
              </a>
            )}
          </div>

          <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="activity" />
            {extended && (
              <a
                href="https://myactivity.google.com/product/gemini"
                target="_blank"
                rel="noopener noreferrer"
              >
                Activity
              </a>
            )}
          </div>

          <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="settings" />
            {extended && <p>Settings</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
