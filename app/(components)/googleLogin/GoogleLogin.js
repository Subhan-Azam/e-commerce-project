"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function GoogleLogin() {
  return (
    <div className="flex items-center justify-center flex-col">
      <p className="my-5">___________________ OR ___________________</p>
      <button
        onClick={() => signIn("google")}
        type="button"
        class="text-white bg-blue-950 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
      >

        <Image
          src="/assets/google-img.png"
          className="w-6 mr-2"
          width={30}
          height={30}
          alt="Google Pic"
        />

        Log in with Google
      </button>
    </div>
  );
}
