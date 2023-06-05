import HeroSection from "./components/HeroSetion";
import CategoriesSection from "./components/categoriesSection";
import NavBar from "./components/navBar";
import ToolSection from "./components/toolSection";

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ToolSection />
      <CategoriesSection />
    </>
  );
};

export default LandingPage;
