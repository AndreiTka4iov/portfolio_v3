interface HeaderProps {
  text: string;
  textColored?: string
}

const Header: React.FC<HeaderProps> = ({ text, textColored }) => {
  return (
    <div className="w-full h-16 flex items-center p-6">
      <h3 className="
      font-extrabold
      text-2xl
      text-zinc-500
      animate-toRight">{text} <span className="text-cyan-400">{textColored}</span></h3>
    </div>
  );
};

export default Header;
