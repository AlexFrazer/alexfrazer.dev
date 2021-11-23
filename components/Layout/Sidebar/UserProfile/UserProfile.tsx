import Image from "next/image";
import { useSession, signIn } from "next-auth/react";
import useTranslation from "next-translate/useTranslation";
import { VFC } from "react";

interface Props {}

const UserProfile: VFC<Props> = () => {
  const { t } = useTranslation();
  const { data, status } = useSession({ required: false });

  const onClick = () => signIn();

  if (status === "unauthenticated") {
    return (
      <button
        onClick={onClick}
        className="flex px-8 py-6 text-sm dark:text-white"
      >
        Log in
      </button>
    );
  }

  return (
    <div className="flex items-center px-8 py-6">
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
