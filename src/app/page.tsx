import Navbar from "@/components/NavBar";
import Filter from "@/components/Filter";
import Stats from "@/components/Stats";
import ItemList from "@/components/ItemList";
import Footer from "@/components/Footer";

interface Props {
  searchParams: {
    keywords?: string;
    category?: string;
    minPrice?: string;
    maxPrice?: string;
  };
}

function onlySetValues<T extends object>(searchParams: T) {
  return Object.fromEntries(
    Object.entries(searchParams).filter(([_, value]) => value !== "")
  ) as T;
}

export default function Home({ searchParams }: Props) {
  console.log(onlySetValues(searchParams));

  const categories = [
    { id: "1", name: "Electronics" },
    { id: "2", name: "Houses" },
    { id: "3", name: "Cars" },
    { id: "4", name: "House appliance" },
  ];

  const stats = {
    deals: 202,
    items: 1230,
    users: 140,
  };

  return (
    <div className="flex flex-col p-2 md:p-4 lg:p-6 gap-2 md:gap-4">
      <Navbar categories={categories} />
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
        <Filter categories={categories} searchParams={searchParams} />
        <Stats stats={stats} />
      </div>
      <ItemList />
      <Footer />
    </div>
  );
}
