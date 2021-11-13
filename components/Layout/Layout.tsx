import clsx from "clsx";
import type { ReactNode, VFC } from "react";
import Sidebar from "./Sidebar";

interface Props {
  readonly children?: ReactNode;
}

const Layout: VFC<Props> = ({ children }) => {
  return (
    <div
      className={clsx(
        "flex",
        "md:flex-row",
        "flex-col",
        "min-h-screen",
        "min-w-full",
      )}
    >
      <Sidebar />
      <main className={clsx("flex-1", "flex", "flex-col")}>{children}</main>
    </div>
  );
};

export default Layout;
