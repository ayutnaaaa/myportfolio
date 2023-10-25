"use client";
import Link from "next/link";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "../../utils/firebase";

// console.log(auth);
export default () => {
  const router = useRouter();
  const [login, setLogin] = useState({
    email: "tuya@gmail.com",
    password: "123456",
  });

  const handle = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const Login = async () => {
    // setState({...state, logginIn: true})
    try {
      await signInWithEmailAndPassword(auth, login.email, login.password);
      alert("Амжилттай нэвтэрлээ");
      // setState({...state,error: "",logginIn: false })
      router.push("admin");
    } catch (error) {
      console.log(error);
      let message = error.message;
      if (message === "Firebase: Error (auth/wrong-password).")
        message = "Нууц үг буруу байна";
      else if (message === "Firebase: Error (auth/user-not-found).")
        message = "Имэйл хаяг олдсонгүй";
      else if (message === "Firebase: Error (auth/network-request-failed).")
        message = "Интернетээ шалгана уу";
      // setState({...state,error: message,logginIn: false })
    }
  };

  return (
    <div className="flex flex-col max-w-[380px] p-5 text-gray-400 m-auto mt-20">
      <input
        label="Email"
        type="email"
        value={login.email}
        placeholder="Email"
        name="email"
        onChange={handle}
        className="p-5 m-3 rounded-2xl bg-gray-600 "
      />
      <input
        label="Password"
        placeholder="Password"
        name="password"
        value={login.password}
        onChange={handle}
        className="p-5 m-3 rounded-2xl bg-gray-600"
      />
      <button
        onClick={Login}
        className="bg-baseBlack rounded-2xl h-20 w-32 m-auto"
      >
        Нэвтрэх
      </button>
    </div>
  );
};
