import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import Work from "../components/Work";
import Project from "../components/Project";
const Container = () => {
  return (
    <>
      <div className="h-full w-full mx-auto">
        <Hero />
        <TechStack />
        <Work />
        <Project />
      </div>
    </>
  );
};

export default Container;
