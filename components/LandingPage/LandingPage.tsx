import HeroSection from "./components/HeroSetion";
import CategoriesSection from "./components/categoriesSection";
import FeaturedPodcastSection from "./components/featuredPodcastSection";
import FeaturedUserSection from "./components/featuredUsersSection";
import NavBar from "./components/navBar";
import ToolSection from "./components/toolSection";

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ToolSection />
      <CategoriesSection />
      <FeaturedPodcastSection />
      <FeaturedUserSection />
    </>
  );
};

export default LandingPage;
