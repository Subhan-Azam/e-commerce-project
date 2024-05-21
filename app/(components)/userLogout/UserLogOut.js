"use client";
import { signOut, useSession } from "next-auth/react";

export default function UserLogOut() {
  const { data: session } = useSession();

  console.log("session", session);

  return (
    <div className="mx-6">
      <button
        onClick={signOut}
        className="mb-3 w-full py-2 text-lg font-semibold rounded-lg text-white bg-red-600"
      >
        LogOut
      </button>
    </div>
  );
}
