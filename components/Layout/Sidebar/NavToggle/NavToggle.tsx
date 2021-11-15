import { forwardRef } from "react";
import type { ComponentProps } from "react";
import clsx from "clsx";
import useTranslation from "next-translate/useTranslation";

interface Props extends ComponentProps<"button"> {
  readonly type?: "button" | "submit" | "reset";
  readonly isOpen?: boolean;
}

const ToggleIcon = ({ isOpen }: Pick<Props, "isOpen">) => {
  return (
    <svg
      focusable="false"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      className="w-6 h-6 text-white"
    >
      <path
        x-show="open"
        fillRule="evenodd"
        d={
          isOpen
            ? "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            : "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
        }
        clipRule="evenodd"
      />
    </svg>
  );
};

const NavToggle = forwardRef<HTMLButtonElement, Props>(
  ({ className, isOpen, type = "button", ...props }, ref) => {
    const { t } = useTranslation("common");
    return (
      <button
        {...props}
        type={type}
        ref={ref}
        aria-label={t("sidebar.toggle.label")}
        aria-expanded={isOpen}
        className={clsx(
          "rounded-lg",
          "md:hidden",
          "focus:outline-none",
          className,
        )}
      >
        <ToggleIcon isOpen={isOpen} />
        <span className="sr-only">Menu</span>
      </button>
    );
  },
);

NavToggle.displayName = "NavToggle";

export default NavToggle;
