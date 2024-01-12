import Navbar from "@/components/NavBar";
import ProductList from "@/components/ProductList";
import WithSideBar from "@/components/WithSidebar";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

export default function Home({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  console.log(searchParams);
  return (
    <WithSideBar>
      <Navbar />
      <div className="grid md:grid-cols-12">
        <div className="col-span-8 lg:col-span-9 xl:col-span-10 p-1 md:p-2 grid gap-1 md:gap-2">
          <ProductList />
          <div className="flex justify-center">
            <div className="join grid grid-cols-3 grow">
              <button className="join-item btn">
                <ArrowLeftIcon /> Previous
              </button>
              <button className="join-item btn btn-primary">
                Current Page 22
              </button>
              <button className="join-item btn">
                <ArrowRightIcon />
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-1 md:p-2">
          <div>ads</div>
          <div>ads</div>
          <div>ads</div>
        </div>
      </div>
    </WithSideBar>
  );
}
