import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

type User =
  | {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;

type Props = {
  user: User;
  pagetype: string;
};

export default function UserCard({ user, pagetype }: Props) {
  //console.log(user)

  const greeting = user?.name ? (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg font-bold text-2xl text-black">
      Hello {user?.name} !
    </div>
  ) : null;

  const emailDisplay = user?.email ? (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg font-bold text-lg text-black">
      {user?.email}
    </div>
  ) : null;

  const userImage = user?.image ? (
    <Image
      className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
      src={user?.image}
      width={80}
      height={80}
      alt={user?.name ?? "Profile Pic"}
      priority={true}
    />
  ) : null;

  return (
    <section className="grid grid-cols-1 lg:grid-cols-6 col-start-2 gap-4 w-full h-[100vh] bg-slate-50">
      <div className="col-span-2 bg-gray-50 pt-8 flex flex-col">
        <div className="flex-none w-48 relative">{userImage}</div>
        <div className="flex-auto p-6">
          {greeting}
          {emailDisplay}
        </div>
      </div>
      <div className="col-span-4 flex items-center justify-center lg:mt-10 p-8">
        <Link href={"/"}>
          <Button
            title="Continue Shopping"
            onClick={() => {}}
            width="w-[100%]"
            weight="font-medium"
            fontSize="text-lg"
            padding="px-4 py-2"
            bg="black"
            color="white"
          />
        </Link>
      </div>
    </section>
  );
}
