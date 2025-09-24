import NavigationBar from "../components/navigation-bar/navigation-bar";
import HomeSection from "../components/sections/home/HomeSection";

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <div className="sm:ml-16">
        <HomeSection />
      </div>
    </div>
  );
}
