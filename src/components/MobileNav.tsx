import React, { FC } from "react";
import { IconBook2, IconMail, IconQuestionMark } from "@tabler/icons-react";
import Link from "next/link";

interface IProps {}

/**
 * @author
 * @function @MobileNav
 **/

export const MobileNav: FC<IProps> = () => {
  return (
    <div className="flex sticky bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-primary text-neutral-900 justify-evenly p-10 md:hidden z-50">
      <Link href="/diary" className="hover:text-amber-600 transition-colors">
        <IconBook2 width={35} height={35} />
      </Link>
      <Link href="/about" className="hover:text-amber-600 transition-colors">
        <IconQuestionMark width={35} height={35} />
      </Link>
      <Link href="/contact" className="hover:text-amber-600 transition-colors">
        <IconMail width={35} height={35} />
      </Link>
    </div>
  );
};
