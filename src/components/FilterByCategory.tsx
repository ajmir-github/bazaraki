import {
  LogInIcon,
  PlusIcon,
  SidebarCloseIcon,
  SidebarOpenIcon,
  UserIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
              <Link href={`/category=${category.id}`}>All {category.name}</Link>
            </li>
            {category.sub.map((category) => (
              <CategoryWithSub key={category.id} category={category} />
            ))}
          </ul>
        </details>
      ) : (
        <Link href={`/category=${category.id}`}>{category.name}</Link>
      )}
    </li>
  );
}

export default function FilterByCategory({
  openByDefault,
}: {
  openByDefault?: boolean;
}) {
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
