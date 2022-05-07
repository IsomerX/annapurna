/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";

// import {
//     createUserWithEmailAndPassword,
//     signInWithPopup,
//     GoogleAuthProvider,
// } from "firebase/auth";
// import { auth, provider } from "../../firebase";

// use moralis instead of firebase
import { useMoralis } from "react-moralis";

const SignUp = () => {
  const { authenticate, isAuthenticated, user } = useMoralis();
  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Continue to Annapurna" })
        .then(function (user) {
          console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    await login();
  };

  /*
    const googleHandler = (e) => {
        e.preventDefault();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential =
                    GoogleAuthProvider.credentialFromError(error);
            });
    };
*/

  return (
    <div className="flex h-[100vh]">
      <div>
        <img src="/static/images/signupBg.png" alt="" className="h-[100vh]" />
      </div>
      <div className="flex flex-col w-5/12 gap-8 py-16 px-16 justify-center">
        {/* <span className="text-5xl font-bold font-pop">
                    Welcome to Annapurna
                </span>
                <div className="flex items-center gap-4">
                    <div className=" h-1 w-[75px] bg-[#F0B09C]"></div>
                    <span className="font-sora text-xl">Sign Up</span>
                </div>
                <form
                    className="font-sora flex flex-col gap-4"
                    onSubmit={submitHandler}
                >
                    <div className="flex justify-between">
                        <div className="flex flex-col w-5/12 gap-2">
                            <label>Name</label>
                            <input
                                className="border-2 border-gray-400 rounded-lg p-2"
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                        </div>
                        <div className="flex flex-col w-5/12 gap-2">
                            <label>Email</label>
                            <input
                                className="border-2 border-gray-400 rounded-lg p-2"
                                type="email"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col gap-2">
                            <label>Password</label>
                            <input
                                className="border-2 border-gray-400 rounded-lg p-2"
                                type="password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <button className="bg-[#F09879] py-2 mt-2 hover:bg-[#FBAE92] transition-all text-white rounded-md">
                        Submit
                    </button>
                </form>
                <div className="flex items-center justify-between">
                    <div className="h-0.5 w-[45%] bg-[#00000010]"></div>
                    <span className="text-md font-sora">OR</span>
                    <div className="h-0.5 w-[45%] bg-[#00000010]"></div>
                </div> 
                */}

        {!isAuthenticated ? (
          <button
            className="shadow-md shadow-[#F0987970] flex p-2 items-center rounded-lg font-sora hover:bg-[#F0987911] transition-all"
            onClick={submitHandler}
          >
            <img src="/static/images/google.svg" alt="" className="h-[40px]" />
            <span className="text-center w-full font-semibold">
              Sign Up With MetaMask 🦊
            </span>
          </button>
        ) : (
          <Link href="/dashboard">
            <a>Continue to dashboard</a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default SignUp;
