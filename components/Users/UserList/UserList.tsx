import { User } from "@prisma/client";
import type { VFC } from "react";
import { useQuery } from "react-query";

interface Props {
  readonly initialData?: User[];
}

const UserList: VFC<Props> = ({ initialData = [] }) => {
  const { data, isLoading } = useQuery(["users"], {
    initialData,
  });

  if (isLoading) return <progress />;

  return <ul></ul>;
};

export default UserList;
