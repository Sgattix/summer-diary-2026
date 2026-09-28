import { IconBook2 } from "@tabler/icons-react";
import Link from "next/link";
import React, { FC } from "react";

interface IProps {}

/**
 * Footer styled to match the provided visual: dark teal background, three
 * columns of links, contact button on the right, and social icons.
 */
export const Footer: FC<IProps> = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Left: logo + short copyright */}
          <div className="md:w-1/3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center">
                <IconBook2 />
              </div>
              <div>
                <div className="font-semibold">Diario Estivo</div>
                <div className="text-xs text-white/70">
                  Small change. Big change.
                </div>
              </div>
            </div>
          </div>

          {/* Center: three columns of navigation links */}
          <div className="md:w-1/3 grid grid-cols-3 gap-6 text-sm">
            <div>
              <ul className="space-y-2 text-white/80">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/contact">Contatti</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 text-white/80">
                <li>
                  <Link href="/about">Come funziona</Link>
                </li>
                <li>
                  <Link href="https://github.com/Sgattix" target="_blank">
                    Profilo GitHub
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-sm text-white/60 flex items-center justify-between">
          <div>Copyright © 2026 Alessandro Sgattoni. All rights reserved.</div>
          <div className="hidden sm:flex gap-4">
            <span className="text-sm text-white/70 italic">
              Made with ❤️ in Italy by an Italian developer
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
