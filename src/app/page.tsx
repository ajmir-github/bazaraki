import Navbar from "@/components/NavBar";
import SearchHero from "@/components/SearchHero";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <div className="flex flex-col p-2 md:p-4 lg:p-6 gap-2 md:gap-4">
      <Navbar />
      <SearchHero />
      <Stats />
    </div>
  );
}
