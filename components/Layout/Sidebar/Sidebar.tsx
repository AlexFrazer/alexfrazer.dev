import { ComponentProps, ReactNode, useState, VFC } from "react";
import Link from "next/link";
import clsx from "clsx";
import NavLink from "./NavLink";
import NavToggle from "./NavToggle";

type HeaderLinkProps = ComponentProps<"a">;

const HeaderLink: VFC<HeaderLinkProps> = ({
  href = "/",
  className,
  ...props
}) => {
  return (
    <Link href={href} passHref>
      <a
        {...props}
        className={clsx(
          "text-lg",
          "font-semibold",
          "tracking-widest",
          "text-white",
          "uppercase",
          "rounded-lg",
          "dark-mode:text-white",
          "focus:outline-none",
          className,
        )}
      >
        Alex Frazer
      </a>
    </Link>
  );
};

const Sidebar: VFC<{}> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => setIsOpen((open) => !open);

  return (
    <div
      className={clsx(
        "flex",
        "flex-col",
        "flex-shrink-0",
        "w-full",
        "md:w-64",
        "text-white",
        "bg-gradient-to-b",
        "md:bg-gradient-to-r",
        "from-blue-400",
        "to-blue-500",
      )}
    >
      <div
        className={clsx(
          "flex",
          "flex-row",
          "flex-shrink-0",
          "justify-between",
          "items-center",
          "py-4",
          "px-8",
        )}
      >
        <HeaderLink />
        <NavToggle isOpen={isOpen} onClick={onToggle} />
      </div>
      <nav
        className={clsx(
          "flex-grow",
          "px-4",
          "pb-4",
          "md:block",
          "md:pb-0",
          "md:overflow-y-auto",
          {
            hidden: !isOpen,
            block: isOpen,
          },
        )}
      >
        <NavLink href="/blog">Blog</NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
