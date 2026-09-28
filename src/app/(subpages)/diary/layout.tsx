import { Metadata } from "next";
import React, { FC } from "react";

interface IProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Days | Summer Diary",
  description:
    "Esplora i vari giorni del mio diario estivo.",
};

const Layout: FC<IProps> = ({ children }) => {
  return <div>{children}</div>;
};
export default Layout;
