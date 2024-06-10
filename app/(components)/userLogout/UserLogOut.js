"use client";
import { signOut, useSession } from "next-auth/react";

export default function UserLogOut() {
  const { data: session } = useSession();

  console.log("session", session);

  return (
    <div>
      <button
        onClick={signOut}
        type="button"
        className="w-full text-white bg-gradient-to-r from-red-600 via-red-500 to-red-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        LogOut
      </button>
      {/* <button className="mb-3 w-full py-2 text-lg font-semibold rounded-lg text-white bg-red-600"></button> */}
    </div>
  );
}
