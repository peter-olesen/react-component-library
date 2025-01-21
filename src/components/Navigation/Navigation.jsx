import { useState } from "react";
import { NavLink } from "react-router-dom";
import { PATHS } from "../../router/paths.js";
import { Button } from "../Button/Button.jsx";
import s from "./Navigation.module.scss";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={s.Navigation}>
      <Button className={s.burgerMenu} action={toggleMenu}>
        ☰
      </Button>

      <ul className={`${s.menu} ${isOpen ? s.open : ""}`}>
        {PATHS.map((item) => (
          <li key={item.name}>
            <NavLink to={item.path} onClick={() => setIsOpen(false)}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
