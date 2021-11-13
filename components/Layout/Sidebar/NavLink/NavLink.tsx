import type { ComponentProps, VFC } from "react";
import clsx from "clsx";
import Link from "next/link";

type Props = ComponentProps<typeof Link> & ComponentProps<"a">;

const NavLink: VFC<Props> = ({
  href,
  passHref,
  children,
  className,
  ...props
}) => {
  return (
    <Link href={href} passHref>
      <a
        {...props}
        className={clsx(
          "block",
          "py-2",
          "px-4",
          "mt-2",
          "text-sm",
          "font-semibold",
          // TODO: revisit colors
          "text-white",
          "dark-mode:text-white",
          "dark-mode:hover:text-white",
          "hover:text-gray-900",
          "dark-mode:focus:text-white",
          "focus:text-gray-900",
          // now
          "bg-transparent",
          "transition-colors",
          "dark-mode:bg-transparent",
          "dark-mode:hover:bg-gray-600",
          "hover:bg-gray-200",
          "dark-mode:focus:bg-gray-600",
          "focus:bg-gray-200",
          "rounded-lg",
          "focus:outline-none",
          "hover:filter",
          "hover:drop-shadow-md",
          className,
        )}
      >
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
