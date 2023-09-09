import Header from "../../components/Header";
import { SiAboutdotme } from "react-icons/si";
import { LiaUniversitySolid } from "react-icons/lia";

interface ElementProps {
  icon: any;
  text: string;
  title: string
}

const AboutPage = () => {
  return (
    <div className="absolute h-full w-full text-zinc-500 flex justify-center">
      <Header text="About Me" />
      <div
        className="
            absolute
            w-full
            sm:w-96
            lg:w-4/5
            h-heightWhithHeader
            overflow-y-auto
            flex
            justify-center
            items-center
            flex-col
            gap-16
            border-l
            top-16"
      >
        <Element
          icon={SiAboutdotme}
          title="About Me"
          text="Hello, my name is Andrew, I am from Moscow.
            I’ve been engaged in frontend development for 2 years.
            I constantly improve my knowledge and skills, actively study new technologies and apply them in practice."
        />
        <Element
          icon={LiaUniversitySolid}
          title="Education"
          text="Hello, my name is Andrew, I am from Moscow.
            I’ve been engaged in frontend development for 2 years.
            I constantly improve my knowledge and skills, actively study new technologies and apply them in practice."
        />
      </div>
    </div>
  );
};

const Element = ({ icon, text, title }: ElementProps) => {
  const Icon = icon;
  return (
    <div className="grid grid-cols-[64px_1fr] items-center gap-6 w-4/5 sm:w-3/5 lg:w-2/4">
      <div
        className="
          flex
          justify-center
          items-center
          w-16
          h-16"
      >
        <Icon className="w-8 h-8" />
      </div>
      <pre className=" whitespace-pre-wrap">{text}</pre>
    </div>
  );
};

export default AboutPage;
