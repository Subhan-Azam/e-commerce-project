// "use client";
// import { signOut, useSession } from "next-auth/react";

// export default function UserLogOut() {
//   const { data: session } = useSession();
//   console.log("session", session);

//   return (
//     <div className=" px-7 py-8 space-y-4">
//       <h1 className="text-2xl font-bold">User LogOut</h1>
//       <div>
//         <b>Name: </b> <span>{session?.user?.name}</span>
//       </div>
//       <div>
//         <b> Email:</b> <span>{session?.user?.email}</span>
//       </div>
//       <button
//         onClick={() => signOut()}
//         className="mb-3 w-full py-2 text-lg font-semibold rounded-lg text-white bg-red-600"
//       >
//         LogOut
//       </button>
//     </div>
//   );
// }


"use client";
import { signOut, useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";

export default function UserLogOut() {
  const { data: session } = useSession();
  // const router = useRouter();

  console.log("session", session);

  // const handleSignOut = async () => {
  //   await signOut({ redirect: false });
  //   router.replace("/login");
  // };

  return (
    <div className=" px-7 py-8 space-y-4">
      {/* <h1 className="text-2xl font-bold">User LogOut</h1>
      <div>
        <b>Name: </b> <span>{session?.user?.name}</span>
      </div>
      <div>
        <b> Email:</b> <span>{session?.user?.email}</span>
      </div> */}
      <button
        onClick={signOut}
        className="mb-3 w-full py-2 text-lg font-semibold rounded-lg text-white bg-red-600"
      >
        LogOut
      </button>
    </div>
  );
}
