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
        "bg-white",
        "dark:bg-gray-800",
      )}
      style={{ backgroundColor: "#0f1014" }}
    >
      <Sidebar />
      <main className={clsx("flex-1", "flex", "flex-col")}>{children}</main>
    </div>
  );
};

export default Layout;
