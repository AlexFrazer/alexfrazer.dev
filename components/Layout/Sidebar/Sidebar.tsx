import { useState } from "react";
import type { ComponentProps, VFC } from "react";
import { useId } from "@reach/auto-id";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import clsx from "clsx";
import NavLink from "./NavLink";
import NavToggle from "./NavToggle";
import UserProfile from "./UserProfile";
import { useSession } from "next-auth/react";

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
  const { status, data } = useSession({ required: false });

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
      <div className="flex-grow">
        <nav
          id={id}
          className={clsx(
            "flex-col",
            "justify-between",
            "gap-2",
            "px-4",
            "pb-4",
            "h-full",
            "md:flex",
            "md:pb-0",
            {
              hidden: !isOpen,
              block: isOpen,
            },
          )}
          onClick={onToggle}
        >
          <ul className="md:overflow-y-auto">
            <li>
              <NavLink href="/blog">{t("sidebar.items.blog")}</NavLink>
            </li>
          </ul>
          <ul className="pb-4">
            <li>
              {status === "authenticated" && (
                <NavLink href="/api/auth/signout">{data?.user?.name}</NavLink>
              )}
              {status === "unauthenticated" && (
                <NavLink href="/api/auth/signin">
                  {t("sidebar.user-menu.sign-in")}
                </NavLink>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
