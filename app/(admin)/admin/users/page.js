"use client";
import { DataContext } from "@/context/data";
import { useContext, useState } from "react";
import { Timestamp } from "firebase/firestore";
import moment from "moment";

export default () => {
  const ctx = useContext(DataContext);
  createdAt: Timestamp.fromDate(new Date());
  // console.log(ctx.users);
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {ctx.users.map((user, i) => {
        // console.log(user.createDate.seconds);
        return (
          <div
            key={i}
            className=" w-[60vw] sm:w-[190px] sm:h-[40vh] bg-baseThree p-3 m-1 rounded-lg"
          >
            <div className="">
              {/* <p> {user.createDate.toDate()}</p> */}
              <p> {moment(user.createDate.toDate()).calendar()}</p>
            </div>
            <div className="flex">
              <p className="text-gray-700 mr-2">name</p>
              <p> {user.data.name}</p>
            </div>
            <div className="flex">
              <p className="text-gray-700 mr-2">email</p>{" "}
              <p>{user.data.email} </p>
            </div>
            <div className="flex">
              <p className="text-gray-700 mr-2">phone</p>
              <p> {user.data.phone}</p>
            </div>
            <div className="flex">
              <p className="text-gray-700 mr-2">company</p>{" "}
              <p>{user.data.company}</p>
            </div>
            <div>
              <p className="text-gray-700 mr-2">description </p>{" "}
              <p>{user.data.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
