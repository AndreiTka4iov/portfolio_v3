import Header from "../../components/Header";
import TagCloudSphere from "../../components/TagCloudSphere";
import TypedJS from "../../components/TypedJS";

const HomePage = () => {
  return (
    <div className="relative w-full h-full text-white">
      <Header text="Portfolio." />
      <div className="absolute flex flex-col-reverse justify-center md:flex-row md:justify-between items-center p-6 w-full h-screen top-0">
        <TypedJS />
        <TagCloudSphere/>
      </div>
    </div>
  );
};

export default HomePage;
