import React, { useContext, createContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { GoHome } from "react-icons/go";
import { LuLayoutList } from "react-icons/lu";
import { RiApps2Line } from "react-icons/ri";
import { AiOutlineForm, AiOutlineUser } from "react-icons/ai";
import { observer } from "mobx-react-lite";
import { NavbarStore } from "./store";

interface ElementProps {
  icon?: any;
  text?: string;
  clear?: boolean;
  last?: boolean;
  onClick?: () => void;
  className?: string;
}

interface NavbarProps {
  fullNavbar: (state: boolean) => void;
}

const NavbarContext = createContext<NavbarStore>(new NavbarStore());

const Navbar: React.FC<NavbarProps> = observer(({ fullNavbar }) => {
  const state = useContext(NavbarContext);

  useEffect(() => {
    fullNavbar(state.fullNavbar)
    // eslint-disable-next-line
  }, [state.fullNavbar]);

  const style = `
    w-full
    h-16
    border-t
    mt-auto
    grid
    grid-cols-5
    overflow-hidden
    sm:overflow-y-auto
    sm:h-full
    sm:max-h-screen
    sm:border-r
    sm:border-t-0
    border-zinc-800
    sm:flex
    sm:flex-col
    gap-3
    transition-width
    ${state.fullNavbar ? "sm:w-52" : "sm:w-16"}
  `;

  return (
    <nav className={style}>
      <Element
        text="Menu"
        icon={HiMenuAlt3}
        onClick={() => (state.fullNavbar = !state.fullNavbar)}
        className="hidden sm:flex"
      />
      <Element clear className="hidden sm:flex" />
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "border-t sm:border-r sm:border-t-0 border-cyan-400" : ""
        }
      >
        <Element text="Home" icon={GoHome} />
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "border-t sm:border-r sm:border-t-0 border-cyan-400" : ""
        }
      >
        <Element text="About" icon={LuLayoutList} />
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) =>
          isActive ? "border-t sm:border-r sm:border-t-0 border-cyan-400" : ""
        }
      >
        <Element text="Projects" icon={RiApps2Line} />
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "border-t sm:border-r sm:border-t-0 border-cyan-400" : ""
        }
      >
        <Element text="Contact me" icon={AiOutlineForm} />
      </NavLink>
      <Element clear className="hidden sm:flex" />
      <Element text="Sign in" icon={AiOutlineUser} last />
    </nav>
  );
});

const Element: React.FC<ElementProps> = ({
  icon,
  text,
  clear = false,
  last = false,
  onClick,
  className,
}) => {
  const state = useContext(NavbarContext);

  if (clear)
    return <div className={`hidden sm:flex w-full h-16 ${className}`}></div>;

  const Icon = icon;
  const style = `
    flex
    justify-center
    items-center
    gap-3
    w-full
    h-16
    text-3xl
    text-zinc-500
    cursor-pointer
    sm:justify-between
    sm:hover:text-zinc-200
    transition-colors
    ${last && "mt-auto"}
    ${
      text === "Menu" && state.fullNavbar
        ? "sm:text-cyan-400 sm:hover:text-cyan-700"
        : "text-zinc-500"
    }`;

  return (
    <div className={`${style} ${className}`} onClick={onClick}>
      {state.fullNavbar && (
        <span
          className="
          hidden
          sm:inline-block
          text-xl
          font-medium
          pl-3
          animate-opacity"
        >
          {text}
        </span>
      )}
      <div
        className="
          flex
          justify-center
          items-center
          w-16
          h-16"
      >
        <Icon />
      </div>
    </div>
  );
};

export default Navbar;
