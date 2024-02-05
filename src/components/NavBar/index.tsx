import {
  HomeIcon,
  InfoIcon,
  ListTreeIcon,
  LogInIcon,
  UserPlusIcon,
} from "lucide-react";
import Link from "next/link";

export default function NavBar() {
  const categories = [
    { id: "1", name: "Electronics" },
    { id: "2", name: "Houses" },
    { id: "3", name: "Cars" },
    { id: "4", name: "House appliance" },
  ];
  const MenuItems = () => (
    <>
      <li>
        <Link href={"/"}>
          <HomeIcon size={12} /> Home
        </Link>
      </li>
      <li>
        <details>
          <summary>
            <ListTreeIcon size={12} />
            Items
          </summary>
          <ul className="p-2">
            {categories.map(({ id, name }) => (
              <li key={id}>
                <Link href={`/category/${id}`}>{name}</Link>
              </li>
            ))}
          </ul>
        </details>
      </li>
      <li>
        <Link href={"/about"}>
          <InfoIcon size={12} /> About
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-200 rounded-xl">
      <div className="navbar-start gap-2">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64 gap-2"
          >
            <MenuItems />
          </ul>
        </div>
        <Link href={"/"} className="btn btn-ghost text-xl">
          Bazar
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <MenuItems />
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-2">
          <Link href={"/login"} className="join-item btn btn-ghost">
            <LogInIcon size={16} />
            Login
          </Link>
          <Link href={"/register"} className="join-item btn btn-primary">
            <UserPlusIcon size={16} />
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
