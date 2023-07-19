import React from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { GoHome } from "react-icons/go";
import { LuLayoutList } from "react-icons/lu";
import { RiApps2Line } from 'react-icons/ri'

interface ElementProps {
  icon?: any;
  text?: string;
  active?: boolean;
  clear?: boolean;
}

const Element: React.FC<ElementProps> = ({
  icon,
  text,
  active = false,
  clear = false,
}) => {
  const Icon = icon;
  const style = `
    flex
    justify-center
    items-center
    w-full
    h-16
    text-zinc-500
    text-3xl
    cursor-pointer 
    hover:text-zinc-200
    transition-colors
    ${active && "border-r border-cyan-400"}`;

  if (clear) return <div className="w-full h-16"></div>;

  return (
    <div className={style}>
      <Icon />
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="h-full w-16 border-r border-zinc-800">
      <Element text="Menu" icon={HiMenuAlt3} />
      <Element clear />
      <NavLink to="/">
        <Element text="Home" icon={GoHome} />
      </NavLink>
      <NavLink to="/about">
        <Element text="About" icon={LuLayoutList} />
      </NavLink>
      <NavLink to="/projects">
        <Element text="Projects" icon={RiApps2Line} />
      </NavLink>
    </div>
  );
};

export default Navbar;
