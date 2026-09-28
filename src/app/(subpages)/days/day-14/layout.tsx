import { Metadata } from "next";
import React, { FC } from "react";
import meta from "./meta.json";

interface IProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: `Day ${meta.id} | Summer Diary`,
  description: meta.description,
};

const Layout: FC<IProps> = ({ children }) => {
  return <div>{children}</div>;
};
export default Layout;
