import Image from "next/image";
import { useSession, signIn } from "next-auth/react";
import useTranslation from "next-translate/useTranslation";
import { VFC } from "react";
import clsx from "clsx";

interface Props {
  readonly isOpen: boolean;
}

const UserProfile: VFC<Props> = ({ isOpen }) => {
  const { t } = useTranslation("common");
  const { data, status } = useSession({ required: false });

  const onClick = () => signIn();

  if (status === "unauthenticated") {
    return (
      <button
        onClick={onClick}
        className={clsx("flex", "py-2", "px-4", "text-sm", "dark:text-white", {
          // hidden: !isOpen,
          // block: isOpen,
        })}
      >
        {t("sidebar.user-menu.sign-in")}
      </button>
    );
  }

  return (
    <div
      className={clsx("flex", "items-center", "px-4", "py-2", {
        hidden: !isOpen,
        block: isOpen,
      })}
    >
      {data?.user?.image && (
        <Image
          className="rounded-full"
          width={32}
          height={32}
          src={data?.user?.image}
          alt={data?.user?.name}
        />
      )}
      <p className="ml-4 text-white">{data?.user?.name}</p>
    </div>
  );
};

export default UserProfile;
