"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ForgetModal from "../forgetModal/ForgetModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";

export default function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const LoginHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res.error) {
        setError("Invalid Credential");
        return;
      }
      router.replace("logout");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <div className="grid place-items-center h-screen">
        <div className=" shadow-2xl rounded-xl h-auto max-w-[400px] w-full p-7 border-t-4 bg-zinc-300/10 border-green-500">
          <h1 className="font-bold text-2xl">UserLogin</h1>
          <form className="flex flex-col gap-6 my-4">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="p-2 border-2 border-gray-300 rounded-lg"
              type="email"
              placeholder="Email"
            />
            <div className="flex items-center justify-between p-2 border-2 border-gray-300 rounded-lg">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type={showPass ? "text" : "password"}
                className="outline-none w-full"
                placeholder="password"
              />
              <div
                className="cursor-pointer"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? (
                  <FontAwesomeIcon className="text-sm px-2" icon={faEye} />
                ) : (
                  <FontAwesomeIcon className="text-sm px-2" icon={faEyeSlash} />
                )}
              </div>
            </div>

            <button
              onClick={LoginHandler}
              className="py-2 text-lg font-semibold rounded-lg bg-green-500"
            >
              LogIn
            </button>

            {error && (
              <div className="bg-red-600 text-sm text-white w-fit rounded-lg px-4 py-1">
                {error}
              </div>
            )}
          </form>
          <ForgetModal />

          <div className="text-right mt-6">
            <span>Don't have an account?</span>
            <Link href={"signup"}>
              <span className="underline ml-3 hover:decoration-blue-800 hover:text-blue-800">
                Registration
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
