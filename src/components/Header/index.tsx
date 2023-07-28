interface HeaderProps {
  text: string;
}

const Header: React.FC<HeaderProps> = ({ text }) => {
  return (
    <div className="w-full h-16 flex items-center p-6">
      <h3 className="
      font-extrabold
      text-2xl
      text-zinc-500
      animate-toRight">{text}</h3>
    </div>
  );
};

export default Header;
