"use client";
import { useState } from "react";

export default (props) => {
  // console.log(props.show)
  return (
    <div>
      {/* <Shadow show={props.show} onClick={props.closeConfirm} /> */}
      <div
        // show={props.show}
        // onClick={props.closeConfirm}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
        className="fixed z-50 m-2 w-[70vw] bg-baseThree rounded-lg p-2 text-black transition-all 0.3s ease-in-out"
        // className={css.Modal}
      >
        {props.children}
      </div>
    </div>
  );
};
