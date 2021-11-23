import { useState } from "react";
import type { ComponentProps, VFC } from "react";
import { useId } from "@reach/auto-id";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import clsx from "clsx";
import NavLink from "./NavLink";
import NavToggle from "./NavToggle";
import UserProfile from "./UserProfile";

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
  const id = useId();
  const { t } = useTranslation("common");
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
        "bg-gradient-to-b",
        "md:bg-gradient-to-r",
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
        <NavToggle aria-controls={id} isOpen={isOpen} onClick={onToggle} />
      </div>
      <nav
        id={id}
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
        onClick={onToggle}
      >
        <ul>
          <li>
            <NavLink href="/blog">{t("sidebar.items.blog")}</NavLink>
          </li>
        </ul>
      </nav>
      <UserProfile />
    </div>
  );
};

export default Sidebar;
