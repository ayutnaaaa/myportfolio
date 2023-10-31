"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import Link from "next/link";
import { DataContext } from "@/context/data";
import { storage } from "@/utils/firebase";
import { uploadBytes, getDownloadURL, ref } from "firebase/storage";
import { useContext, useEffect, useState } from "react";
import Modal from "@/components/Modal";
const variable = ["private", "public", "organization"];
const web = ["game", "dondon", "key"];
const mobile = ["lon", "find", "new"];

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};
export default () => {
  const [photo, setPhoto] = useState("");
  const [id, setId] = useState("");
  const [work, setWork] = useState({
    type: "",
    name: "",
    detail: "",
    date: "",
    link: "",
  });

  const ctx = useContext(DataContext);
  const [confirm, setConfirm] = useState(false);
  let one = ctx.works.find((item) => item.id === id);
  useEffect(() => {
    one && setWork(one?.work);
    one && setPhoto(one?.photo);
  }, [one]);

  const showConfirm = (prod) => {
    setId(prod.id);
    setConfirm(true);
  };
  const closeConfirm = () => {
    setConfirm(false);
    // setConfirm({ ...confirm, confirm: false, data: null });
  };
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
    const imageRef = ref(storage, `images/${photo.name}`);
    uploadBytes(imageRef, photo).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        setPhoto(downloadURL);
      });
    });
    alert("photo amjilttai");
  };
  const send = () => {
    ctx.updateWork(work, photo, id);
    closeConfirm();
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="show"
      className="flex flex-wrap justify-center"
      // className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 "
      id="#works/portfolia"
    >
      <Modal show={confirm} data={confirm.data}>
        <div className="flex flex-col md:flex-row items-center my-2 text-black">
          <p className="w-[50vw] md:w-[18vw] pl-3">Төрөл</p>
          <select
            onChange={changeType}
            className="border text-black p-2 mx-2 rounded-md w-[50vw] md:w-[30vw] my-2"
          >
            <option>{work.type}</option>
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
            value={work.name}
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
            value={work.detail}
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
            value={work.date}
            // value={moment(work.date.toDate()).calendar()}
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
              // value={photo}
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
            value={work.link}
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
      {ctx.works.map((prod, i) => (
        <div
          key={i}
          className=" relative text-blue-200 z-50 flex flex-col m-2 p-3 justify-between items-center   w-[300px] h-[400px] border-4 border-blue-200 rounded-2xl "
        >
          <div>
            <div className="flex items-center px-5 justify-between">
              <p className="text-base mx-3">Төрөл: </p>
              <p className="text-lg ">{prod.work.type}</p>
            </div>
            <div className="flex items-center px-5 justify-between">
              <p className="text-base   mx-3">Work name: </p>
              <p className="text-lg ">{prod.work.name}</p>
            </div>
            <div className="flex items-center px-5 justify-between">
              <p className="text-base   mx-3">Work detail: </p>
              <p className="text-lg ">{prod.work.detail}</p>
            </div>
            <div className="flex items-center  px-5 justify-between">
              <p className="text-base   mx-3">Date:</p>
              <p className="text-lg ">{prod.work.date}</p>
            </div>
          </div>
          <img
            src={prod.photo}
            className="w-full h-full absolute top-0 left-0 -z-20 opacity-80"
          />
          <Link href={prod.work.link} target="blank">
            <button className="text-xl cursor-pointer text-baseOne px-10 py-3 bg-baseThree rounded-lg hover:bg-baseFive">
              Visit site
            </button>
          </Link>
          <button
            className="text-xl cursor-pointer text-baseOne px-10 py-3 bg-baseThree rounded-lg hover:bg-baseFive"
            onClick={() => showConfirm(prod)}
          >
            Edit
          </button>
        </div>
      ))}
    </motion.div>
  );
};
