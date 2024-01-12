import { SearchIcon, SidebarCloseIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface Category {
  id: string;
  name: string;
  sub?: Category[];
}

const categories: Category[] = [
  {
    id: "1",
    name: "Real Estates",
    sub: [
      {
        id: "11",
        name: "Houses",
        sub: [
          { id: "111", name: "Sale" },
          { id: "112", name: "Rent" },
          { id: "113", name: "Mortage" },
        ],
      },
      {
        id: "12",
        name: "Apartments",
      },
      {
        id: "13",
        name: "Offices",
      },
    ],
  },
  {
    id: "2",
    name: "Electronics",
    sub: [
      {
        id: "21",
        name: "Laptops",
      },
      {
        id: "22",
        name: "Disktops",
      },
      {
        id: "23",
        name: "Phones",
        sub: [
          { id: "231", name: "Iphone" },
          { id: "232", name: "Huawai" },
          { id: "233", name: "Sumsong" },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "Vehicles",
    sub: [
      {
        id: "31",
        name: "Men",
      },
      {
        id: "32",
        name: "Boys",
      },
      {
        id: "33",
        name: "Girls",
      },
      {
        id: "34",
        name: "Babies",
      },
      {
        id: "35",
        name: "Women",
      },
    ],
  },
];

function CategoryWithSub({
  category,
  openByDefault,
}: {
  category: Category;
  openByDefault?: boolean;
}) {
  return (
    <li key={category.id}>
      {category.sub ? (
        <details open={openByDefault}>
          <summary>{category.name}</summary>
          <ul className=" gap-1 md:gap-2 flex flex-col">
            <li>
              <Link href={`/?category=${category.id}`}>
                All {category.name}
              </Link>
            </li>
            {category.sub.map((category) => (
              <CategoryWithSub key={category.id} category={category} />
            ))}
          </ul>
        </details>
      ) : (
        <Link href={`/?category=${category.id}`}>{category.name}</Link>
      )}
    </li>
  );
}

function FilterByCategory({ openByDefault }: { openByDefault?: boolean }) {
  return (
    <div className="menu menu-lg gap-1 md:gap-2">
      {categories.map((category) => (
        <CategoryWithSub
          key={category.id}
          category={category}
          openByDefault={openByDefault}
        />
      ))}
    </div>
  );
}

export default function WithSideBar({ children }: { children: ReactNode }) {
  return (
    <div className="drawer">
      <input id="side-bar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">{children}</div>
      <div className="drawer-side z-20">
        <label
          htmlFor="side-bar"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="p-1 md:p-2 w-full sm:w-96 min-h-full bg-base-300 text-base-content flex flex-col gap-1 md:gap-2">
          <div className="flex justify-end">
            <label htmlFor="side-bar" className="btn btn-ghost drawer-button">
              <SidebarCloseIcon />
              <span className="hidden md:block">Close</span>
            </label>
          </div>

          <form className="join" action={"/"}>
            <input
              type="search"
              placeholder="Search by keywords"
              className="input input-primary w-full grow join-item"
              name="search"
            />
            <button className="join-item btn btn-primary">
              <SearchIcon />
              <span className="hidden md:block">Go</span>
            </button>
          </form>

          <FilterByCategory />
        </div>
      </div>
    </div>
  );
}
