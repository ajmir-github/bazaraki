import Navbar from "@/components/NavBar";
import ProductList from "@/components/ProductList";
import WithSideBar from "@/components/WithSidebar";

export default function Home({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  console.log(searchParams);
  return (
    <WithSideBar>
      <Navbar />
      <ProductList />
    </WithSideBar>
  );
}
