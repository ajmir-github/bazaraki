import {
  LogInIcon,
  PlusIcon,
  SearchIcon,
  SidebarCloseIcon,
  SidebarOpenIcon,
  UserIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FilterByCategory from "./FilterByCategory";

export default function NavBar() {
  const logged = 1;
  return (
    <div className="navbar gap-1 md:gap-2 justify-between items-center sticky top-0 z-10 bg-base-100 border-b-2">
      <div>
        <div className="drawer">
          <input id="side-bar" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="side-bar" className="btn btn-ghost drawer-button">
              <SidebarOpenIcon />
              <span className="hidden md:block">Menu</span>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="side-bar"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div className="p-1 md:p-2 w-full sm:w-96 min-h-full bg-base-300 text-base-content flex flex-col gap-1 md:gap-2">
              <div className="flex justify-end">
                <label
                  htmlFor="side-bar"
                  className="btn btn-ghost drawer-button"
                >
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
      </div>
      <div className="grow mx-2">
        <Link href={"/"}>
          <Image
            src={"/bazaraki_logo.png"}
            alt="Bazaraki logo"
            height={110}
            width={430}
            className="w-32"
          />
        </Link>
      </div>
      <div className="flex-none gap-1 md:gap-2">
        {logged && (
          <Link
            href={"/post"}
            className="btn btn-primary fixed bottom-2 right-2 md:bottom-4 md:right-4"
          >
            <PlusIcon />
            <span className="hidden md:block">Post</span>
          </Link>
        )}
        {logged ? (
          <Link href={"/profile"} className="btn btn-ghost">
            <UserIcon />
            <span className="hidden md:block">Profile</span>
          </Link>
        ) : (
          <Link href={"/login"} className="btn btn-ghost">
            <LogInIcon />
            <span className="hidden md:block">Login</span>
          </Link>
        )}
      </div>
    </div>
  );
}
