import FilterBar from "@/components/FilterByCategory";
import Navbar from "@/components/NavBar";

function Text() {
  return (
    <p className="text-4xl">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
      voluptatum sit possimus debitis molestiae tempore distinctio id magni
      similique iure modi unde labore earum, mollitia ut, cupiditate in rem
      impedit.
    </p>
  );
}

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Text />
      <Text />
      <Text />
      <Text />
      <Text />
      <Text />
    </main>
  );
}
