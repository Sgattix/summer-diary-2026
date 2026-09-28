import React, { FC } from "react";
import type { Metadata } from "next";

interface IProps {
  children: React.ReactNode;
}

/**
 * @author
 * @function @Layout
 **/

export const metadata: Metadata = {
  title: "About | Summer Diary",
  description: "Come funziona il sito?",
};

const Layout: FC<IProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
