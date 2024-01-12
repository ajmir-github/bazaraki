import { LogInIcon, PlusIcon, SidebarOpenIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const logged = 1;
  return (
    <div className="navbar gap-1 md:gap-2 justify-between items-center bg-base-100 border-b-2 border-b-neutral">
      <div>
        <label htmlFor="side-bar" className="btn btn-ghost drawer-button">
          <SidebarOpenIcon />
          <span className="hidden md:block">Menu</span>
        </label>
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
