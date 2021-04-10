import React from "react";
import { Link } from "react-router-dom";
import i18n from "../../i18n";
import { useTheme } from "../../ThemeManager";
import { NavContainer, Logo, Search, NotificationSection } from "./styles";

const changeLanguage = (ln: string) => {
  return () => {
    i18n.changeLanguage(ln);
  };
};

const Navbar: React.FC = () => {
  const theme = useTheme();
  return (
    <NavContainer>
      <div className="wrapper">
        <Logo>
          <Link to={`/`}>
            {theme.mode === "dark" ? (
              <img src="https://i.ibb.co/wz1vtLL/Logo.png" alt="logo" />
            ) : (
              <img src="https://i.ibb.co/vz69cyv/Logo.png" alt="logo" />
            )}
          </Link>
        </Logo>
        <Search>
          <div className="input-wrapper">
            <label>Search</label>
            <input type="text" placeholder="Search" />
            <button>
              <img src="https://i.ibb.co/zRwwY4x/Vector.png" alt="icon" />
            </button>
          </div>
        </Search>
        <NotificationSection>
          <ul>
            <li className="mode-change">
              <div className="check-button">
                <input type="checkbox" name="changemode" id="mode" />
                <label
                  className={`${theme.mode === "dark" ? "colored" : ""}`}
                  onClick={() => theme.toggle()}
                  htmlFor="mode"
                >
                  {theme.mode === "dark" ? (
                    <i
                      className="fa fa-moon-o"
                      title="Dark"
                      aria-hidden="true"
                    ></i>
                  ) : (
                    <i
                      className="fa fa-sun-o"
                      title="Light"
                      aria-hidden="true"
                    ></i>
                  )}
                </label>
              </div>
            </li>
            <li className="language">
              <div className="check-button">
                <input
                  type="radio"
                  defaultChecked
                  name="changeLanguage"
                  id="en"
                />
                <label
                  className="first"
                  onClick={changeLanguage("en")}
                  htmlFor="en"
                >
                  EN
                </label>
              </div>
              <div className="check-button">
                <input type="radio" name="changeLanguage" id="fr" />
                <label
                  className="second"
                  onClick={changeLanguage("fr")}
                  htmlFor="fr"
                >
                  FR
                </label>
              </div>
            </li>
            <li>
              <img
                src="https://i.ibb.co/VtcwFqk/Combined-Shape.png"
                alt="user icon"
              />
            </li>
            <li>
              <img src="https://i.ibb.co/NTJfQ2d/Chat.png" alt="chat icon" />
            </li>
            <li>
              <img
                src="https://i.ibb.co/nbXW1vr/Notification.png"
                alt="notification icon"
              />
            </li>
            <li>
              <div>
                <span></span>{" "}
                <img src="https://i.ibb.co/NTcnd5z/Rectangle.png" alt="arrow" />
              </div>
            </li>
          </ul>
        </NotificationSection>
      </div>
    </NavContainer>
  );
};

export default Navbar;
