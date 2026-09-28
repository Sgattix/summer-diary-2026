import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import NavbarRead from "./NavbarRead";

/**
 * @author Sgattix
 * @function @Navbar
 **/

export const Navbar: FC = () => {
  return (
    <nav className="bg-secondary py-4 px-16 flex justify-between w-full relative z-10">
      <div className="flex items-center">
        <Link href="https://github.com/Sgattix" target="_blank">
          <Image
            src="https://avatars.githubusercontent.com/u/81874177?v=4"
            alt="User Avatar"
            width={50}
            height={50}
            className="rounded-xl"
          />
        </Link>
        <div className="ml-4">
          <h1 className="text-2xl font-bold tracking-tight text-neutral-600">
            Alessandro Sgattoni's
          </h1>
          <p className="text-sm text-gray-500">☀️ Summer diary</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <NavbarRead />
      </div>
      <ul
        className="
          items-center space-x-4
          text-gray-700
          font-semibold
          hidden md:flex
        "
      >
        <li>
          <Link href="/diary" className="hover:text-primary transition-colors">
            Diario
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-primary transition-colors">
            Come funziona
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:text-primary transition-colors"
          >
            Contatti
          </Link>
        </li>
      </ul>
    </nav>
  );
};
