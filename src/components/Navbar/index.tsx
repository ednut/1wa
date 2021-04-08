import React from 'react';
import { NavContainer, Logo, Search, NotificationSection } from './styles';

const Navbar: React.FC = () => {
  return (
    <NavContainer>
      <div className="wrapper">
        <Logo>
          <img src="https://i.ibb.co/vz69cyv/Logo.png" alt="logo" />
        </Logo>
        <Search>
          <div className="input-wrapper">
            <label>Search</label>
            <input type="text" />
            <button>
              <img src="https://i.ibb.co/zRwwY4x/Vector.png" alt="icon" />
            </button>
          </div>
        </Search>
        <NotificationSection>
          <ul>
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
                <span></span>{' '}
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
