import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { UserList } from "@/components/Users";
import { PrismaClient, User } from "@prisma/client";

interface Props {
  readonly initialData: User[];
}

const Users: NextPage<Props> = ({ initialData }) => {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Users</title>
      </Head>
      <UserList initialData={initialData} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const prisma = new PrismaClient();
  const data = await prisma.user.findMany();
  return { props: { initialData: data } };
};

export default Users;
