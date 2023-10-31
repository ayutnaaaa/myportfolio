"use client";
import { storage } from "@/utils/firebase";
import { useEffect, useState } from "react";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { v4 } from "uuid";
export default () => {
  const [face, setFace] = useState(null);
  const [faceList, setFaceList] = useState([]);
  const [carousel, setCarousel] = useState(null);
  const [carouselList, setCarouselList] = useState([]);
  const [sliding, setSliding] = useState(null);
  const [slidingList, setSlidingList] = useState([]);
  const [sliding2, setSliding2] = useState(null);
  const [sliding2List, setSliding2List] = useState([]);
  const [hor, setHor] = useState(null);
  const [horList, setHorList] = useState([]);

  const handleFace = (e) => {
    setFace(e.target.files[0]);
  };
  const uploadFace = () => {
    if (face == null) return;
    const imageRef = ref(storage, `faceImages/${face.name + v4()}`);
    uploadBytes(imageRef, face).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setFaceList((prev) => [...prev, url]);
      });
    });
  };
  const faceListReff = ref(storage, "faceImages/");
  useEffect(() => {
    listAll(faceListReff).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          // console.log(url);
          setFaceList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  const handleCarousel = (e) => {
    setCarousel(e.target.files[0]);
  };
  const uploadCarousel = () => {
    if (carousel == null) return;
    const imageRef = ref(storage, `carouselImages/${carousel.name + v4()}`);
    uploadBytes(imageRef, carousel).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setCarouselList((prev) => [...prev, url]);
      });
    });
  };
  const carListReff = ref(storage, "carouselImages/");
  useEffect(() => {
    listAll(carListReff).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          // console.log(url);
          setCarouselList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  const handleSliding = (e) => {
    setSliding(e.target.files[0]);
  };
  const uploadSliding = () => {
    if (sliding == null) return;
    const imageRef = ref(storage, `slidingImages/${sliding.name + v4()}`);
    uploadBytes(imageRef, sliding).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setSlidingList((prev) => [...prev, url]);
      });
    });
  };
  const slidingListReff = ref(storage, "slidingImages/");
  useEffect(() => {
    listAll(slidingListReff).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          // console.log(url);
          setSlidingList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  const handleSliding2 = (e) => {
    setSliding2(e.target.files[0]);
  };
  const uploadSliding2 = () => {
    if (sliding == null) return;
    const imageRef = ref(storage, `sliding2Images/${sliding2.name + v4()}`);
    uploadBytes(imageRef, sliding2).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setSliding2List((prev) => [...prev, url]);
      });
    });
  };
  const sliding2ListReff = ref(storage, "sliding2Images/");
  useEffect(() => {
    listAll(sliding2ListReff).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          // console.log(url);
          setSliding2List((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  const handleHor = (e) => {
    setHor(e.target.files[0]);
  };
  const uploadHor = () => {
    if (hor == null) return;
    const imageRef = ref(storage, `horizontalImages/${hor.name + v4()}`);
    uploadBytes(imageRef, hor).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setHorList((prev) => [...prev, url]);
      });
    });
  };
  const horListReff = ref(storage, "horizontalImages/");
  useEffect(() => {
    listAll(horListReff).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          // console.log(url);
          setHorList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div>
      <div className="flex items-center my-2 ml-3">
        <p className="w-40">Нүүр зураг 1</p>
        <input
          onChange={handleFace}
          className="border p-2 mx-2 rounded-md w-[50vw] md:w-[30vw] my-2"
          type="file"
          // multiple
          name="faceImage"
          label="faceImage"
          required
        />
        <button className="p-2 border border-gray-400" onClick={uploadFace}>
          upload Face Image
        </button>
      </div>
      <div className="flex">
        {faceList.map((url, i) => {
          return (
            <img
              key={i}
              className="flex w-[100px] h-[100px] m-auto border border-gray-400"
              src={url}
            />
          );
        })}
      </div>
      <div className="flex items-center my-2 ml-3">
        <p className="w-40">Carousel зураг 4</p>
        <input
          className="border p-2 mx-2 rounded-md w-[50vw] md:w-[30vw] my-2"
          onChange={handleCarousel}
          type="file"
          // multiple
          name="carousel"
          label="carousel"
          required
        />
        <button className="p-2 border border-gray-400" onClick={uploadCarousel}>
          upload Carousel Image
        </button>
      </div>
      <div className="flex">
        {carouselList.map((url, i) => {
          return (
            <img
              key={i}
              className="flex w-[100px] h-[100px] m-auto border border-gray-400"
              src={url}
            />
          );
        })}
      </div>
      <div className="flex items-center my-2 ml-3">
        <p className="w-40">Sliding image 4 </p>
        <input
          className="border p-2 mx-2 rounded-md w-[50vw] md:w-[30vw] my-2"
          onChange={handleSliding}
          type="file"
          // multiple
          name="sliding"
          label="sliding"
          required
        />
        <button className="p-2 border border-gray-400" onClick={uploadSliding}>
          upload Sliding Image
        </button>
      </div>
      <div className="flex">
        {slidingList.map((url, i) => {
          return (
            <img
              key={i}
              className="flex w-[100px] h-[100px] m-auto border border-gray-400"
              src={url}
            />
          );
        })}
      </div>

      <div className="flex items-center my-2 ml-3">
        <p className="w-40">Sliding 2 image 4 </p>
        <input
          className="border p-2 mx-2 rounded-md w-[50vw] md:w-[30vw] my-2"
          onChange={handleSliding2}
          type="file"
          // multiple
          name="sliding"
          label="sliding"
          required
        />
        <button className="p-2 border border-gray-400" onClick={uploadSliding2}>
          upload Sliding2 Image
        </button>
      </div>
      <div className="flex">
        {sliding2List.map((url, i) => {
          return (
            <img
              key={i}
              className="flex w-[100px] h-[100px] m-auto border border-gray-400"
              src={url}
            />
          );
        })}
      </div>
      <div className="flex items-center my-2 ml-3">
        <p className="w-40">Horizontal image 8</p>
        <input
          className="border p-2 mx-2 rounded-md w-[50vw] md:w-[30vw] my-2"
          type="file"
          // multiple
          name="horizontal"
          label="horizontal"
          onChange={handleHor}
          required
        />
        <button className="p-2 border border-gray-400" onClick={uploadHor}>
          upload horizontal Image
        </button>
      </div>
      <div className="flex">
        {horList.map((url, i) => {
          return (
            <img
              key={i}
              className="flex w-[100px] h-[100px] m-auto border border-gray-400"
              src={url}
            />
          );
        })}
      </div>
    </div>
  );
};

// const uploadFace = () => {
//   console.log("upload");
//   if (face == null) return;
//   const faceRef = ref(storage, `faceFiles/${face.name}`);
//   uploadBytes(faceRef, face).then((snapshot) => {
//     getDownloadURL(snapshot.ref).then((url) => {
//       console.log(url);
//       setFaceList((prev) => [...prev, url]);
//     });
//   });
//   // for (let i = 0; i < face.length; i++) {
//   //   const faceRef = ref(storage, `/faceFiles/${face[i].name}`);
//   //   const result = await uploadBytes(faceRef, face[i]).then(() => {
//   //     console.log("success");
//   //   });
//   // }
// };
