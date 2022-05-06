/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div className="flex h-[100vh]">
            <div>
                <img
                    src="/static/images/login.svg"
                    alt=""
                    className="h-[100vh]"
                />
            </div>
            <div className="flex flex-col w-5/12 gap-8 py-16 px-16 justify-center">
                <span className="text-5xl font-bold font-pop">
                    Welcome to Annapurna
                </span>
                <div className="flex items-center gap-4">
                    <div className=" h-1 w-[75px] bg-[#F0B09C]"></div>
                    <span className="font-sora text-xl">Sign Up</span>
                </div>
                <form className="font-sora flex flex-col gap-4">
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
                <button
                    className="shadow-md shadow-[#F0987970] flex p-2 items-center rounded-lg font-sora hover:bg-[#F0987911] transition-all"
                    onClick={submitHandler}
                >
                    <img
                        src="/static/images/google.svg"
                        alt=""
                        className="h-[40px]"
                    />
                    <span className="text-center w-full font-semibold">
                        Sign In With Google
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Login;
