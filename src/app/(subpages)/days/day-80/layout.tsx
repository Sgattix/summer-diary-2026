import { Metadata } from "next";
import React, { FC } from "react";
import meta from './meta.json'

interface IProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: `${meta.id.split('-')[0][0].toUpperCase() + meta.id.split('-')[0].slice(1)} ${meta.id.split('-')[1]} | Summer Diary`,
  description: meta.description,
};

const Layout: FC<IProps> = ({ children }) => {
  return <div>{children}</div>;
};
export default Layout;
  