"use client";
import { useState, useContext } from "react";
import { storage } from "@/utils/firebase";
import { uploadBytes, getDownloadURL, ref } from "firebase/storage";
import { DataContext } from "@/context/data";
import Link from "next/link";
import Modal from "@/components/UI/Modal";
import EditWeb from "../components/edit/web";
import EditPortfolio from "../components/edit/portfolio";
import EditMobile from "../components/edit/mobile";
export default () => {
  const ctx = useContext(DataContext);
  // console.log(ctx)
  const [work, setWork] = useState({
    type: "",
    name: "",
    detail: "",
    date: "",
    link: "",
  });
  const [photo, setPhoto] = useState("");
  const [confirm, setConfirm] = useState(false);
  const variable = ["Portfolio", "Web App", "Mobile App"];

  const changeType = (e) => {
    setWork({ ...work, type: e.target.value });
  };
  const changeName = (e) => {
    setWork({ ...work, name: e.target.value });
  };
  const changeDetail = (e) => {
    setWork({ ...work, detail: e.target.value });
  };
  const changeDate = (e) => {
    setWork({ ...work, date: e.target.value });
  };
  const changeImage = (e) => {
    setPhoto(e.target.files[0]);
    // uploadImage();
  };
  const changeLink = (e) => {
    setWork({ ...work, link: e.target.value });
  };
  const uploadImage = () => {
    if (photo == null) return;
    // const imageRef = ref(storage, `images/${photo.name + v4()}`);
    const imageRef = ref(storage, `images/${photo.name}`);
    uploadBytes(imageRef, photo).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        setPhoto(downloadURL);
        // console.log(downloadURL)
        // ctx.saveImage(downloadURL)
      });
    });
    alert("photo amjilttai");
  };
  const send = () => {
    ctx.addWork(work, photo);
    closeConfirm();
  };

  const showConfirm = () => {
    setConfirm(true);
  };
  const closeConfirm = () => {
    setConfirm(false);
  };
  const [active, setActive] = useState(0);
  const [type, setType] = useState("");
  const handle = (e, i) => {
    setActive(i);
    setType(e);
    ctx.fetchWorks(e);
  };
  return (
    <div className="h-screen w-screen">
      <button
        className="bg-baseBlack ml-5 text-white rounded-3xl p-5 m-3 "
        onClick={showConfirm}
      >
        Add work
      </button>
      <Modal show={confirm}>
        <div className="flex flex-col md:flex-row items-center my-2">
          <p className="w-[50vw] md:w-[18vw] pl-3">Төрөл</p>
          <select
            onChange={changeType}
            className="border p-2 mx-2 rounded-md w-[50vw] md:w-[30vw] my-2"
          >
            <option>Сонгох</option>
            <option>Portfolio</option>
            <option>Web App</option>
            <option>Mobile App</option>
          </select>
        </div>
        <div className="flex flex-col md:flex-row items-center my-2">
          <p className="w-[50vw] md:w-[18vw] pl-5">Ажлын нэр</p>
          <input
            onChange={changeName}
            className="border p-2 mx-2 rounded-md w-[50vw] md:w-[30vw] my-2"
            placeholder="Ажлын нэр"
            label="name"
            name="name"
            type="text"
            required
          />
        </div>
        <div className="flex flex-col md:flex-row items-center my-2">
          <p className="w-[50vw] md:w-[18vw] pl-5">Ажлын тайлбар</p>
          <input
            onChange={changeDetail}
            className="border p-2 mx-2 rounded-md w-[50vw] md:w-[30vw] my-2"
            label="detail"
            placeholder="Ажлын тайлбар"
            name="detail"
            type="text"
            required
            // onChange={handle}
          />
        </div>
        <div className="flex flex-col md:flex-row items-center my-2">
          <p className="w-[50vw] md:w-[18vw] pl-5">Date</p>
          <input
            onChange={changeDate}
            className="border p-2 mx-2 rounded-md w-[50vw] md:w-[30vw] my-2"
            placeholder="Date"
            type="date"
            name="date"
            required
          />
        </div>
        <div className="flex flex-col md:flex-row items-center my-2">
          <div className="flex flex-col ">
            <p className="w-[50vw] md:w-[18vw] pl-5">Image</p>
            <input
              onChange={changeImage}
              className="border p-2 mx-2 rounded-md w-[50vw] md:w-[30vw] my-2"
              placeholder="Image"
              type="file"
              name="image"
              required
            />
          </div>
          <div className="flex ">
            <img
              src={photo}
              className="w-[50px] h-[50px] mx-3 border border-gray-400"
            />
            <button
              className="mx-3 bg-black text-white p-2 rounded-xl"
              onClick={uploadImage}
            >
              upload
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center my-2">
          <p className="w-[50vw] md:w-[18vw] pl-5">link</p>
          <input
            onChange={changeLink}
            className="border p-2 mx-5 rounded-md w-[50vw] md:w-[30vw] my-2"
            placeholder="Link"
            type="url"
            name="link"
            required
          />
        </div>
        <button
          className="bg-red-400 rounded-2xl p-2 mx-3 text-white"
          onClick={closeConfirm}
        >
          CANCEL
        </button>
        <button
          className="bg-green-600 rounded-2xl p-2 mx-3 text-white"
          onClick={send}
        >
          SEND
        </button>
      </Modal>

      <div>
        <div className="flex text-baseBrown my-3 mx-6">
          {variable.map((e, i) => (
            <button
              key={i}
              onClick={() => handle(e, i)}
              className={`${
                active === i
                  ? "border-b-2 border-baseBrown cursor-pointer p-2 mx-3 rounded-xl "
                  : ""
              } border-b-1 border-baseBrown cursor-pointer p-2 mx-3 rounded-xl hover:bg-baseOrange hover:border-baseReddishBrown hover:text-baseReddishBrown `}
              // className=""
            >
              {e}
            </button>
          ))}
        </div>
        {type === "Mobile App" ? (
          <EditMobile />
        ) : type === "Web App" ? (
          <EditWeb />
        ) : (
          <EditPortfolio />
        )}
      </div>
    </div>
  );
};
