"use client";

import {
  addDoc,
  collection,
  collectionGroup,
  onSnapshot,
  doc,
  setDoc,
  query,
  where,
  getDocs,
  serverTimestamp,
  orderBy,
  updateDoc,
} from "firebase/firestore";
import { createContext, useContext, useState, useEffect } from "react";
import { db } from "@/utils/firebase";
import { signOut, getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
const auth = getAuth();
export const DataContext = createContext({});

export const DataContextProvider = ({ children }) => {
  const [allWeb, setWebWork] = useState([])
  const [works, setWorks] = useState([]);
  const [oneWork, setOneWork] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [web, setWeb] = useState([]);
  const [mobile, setMobile] = useState([]);
  const [users, setUsers] = useState([]);
  const workRef = collection(db, "work");
  const dataRef = collection(db, "user");
  const [type, setType] = useState("");
  const router = useRouter();

  console.log(web)
  useEffect(() => {
    fetchUser();
    fetchWebWork()
    // fetchWorks();
    // fetchMobile();
    // fetchWeb();
    // fetchProtfolio();
  }, []);

  const userData = async (data) => {
    // console.log(data)
    await addDoc(dataRef, {
      data,
      createDate: serverTimestamp(),
    });
    alert("Success send");
  };

  const logout = () => {
    signOut(auth);
    router.push("/login");
  };
  const fetchUser = () => {
    const q = query(dataRef, orderBy("createDate"));
    onSnapshot(q, (snapshot) => {
      setUsers(() => {
        const list = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        return [...list];
      });
    });
  };
  // console.log(allWeb);
  const fetchWebWork = () => {
    const all = collection(db, `work/Web App/detail` )
    onSnapshot(all, (snapshot) => {
      setWebWork(() => {
        const list = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        return [...list];
      });
    });
  }

  const fetchWorks = (e) => {
    const oneRef = collection(db, `work/${e}/detail`);

    const unsubcribe = onSnapshot(oneRef, (snapshot) => {
      setWorks(() => {
        const list = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        return [...list];
      });
    });
    return () => {
      unsubcribe();
    };
  };
  const getOneWork = (prod) => {
    // console.log(prod);
    const oneRef = doc(db, `work/${prod.work.type}/detail`, prod.id);
    onSnapshot(oneRef, (doc) => {
      setOneWork(doc.data());
    });
  };
  // console.log(oneWork);
  const fetchProtfolio = async () => {
    const q = query(
      collection(db, "work"),
      where("work.type", "==", "Portfolio")
    );
    const unsubcribe = onSnapshot(q, (snapshot) => {
      setPortfolio(() => {
        const list = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        return [...list];
      });
    });
    return () => {
      unsubcribe();
    };
  };

  const fetchWeb = async () => {
    const q = query(
      collection(db, "work"),
      where("work.type", "==", "Web App")
    );
    const unsubcribe = onSnapshot(q, (snapshot) => {
      setWeb(() => {
        const list = snapshot.docs.map((doc) => {
          // console.log(doc.data())
          return { ...doc.data(), id: doc.id };
        });
        return [...list];
      });
    });
    return () => {
      unsubcribe();
    };
  };
  const fetchMobile = async () => {
    const q = query(
      // collection(db, `work/${}`),
      where("work.type", "==", "Mobile App")
    );
    const unsubcribe = onSnapshot(q, (snapshot) => {
      setMobile(() => {
        const list = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        return [...list];
      });
    });
    return () => {
      unsubcribe();
    };
  };
  const updateWork = async (work, photo, id) => {
    const workRef = doc(db, `work/${work.type}/detail`, id);
    await updateDoc(workRef, {
      work,
      photo,
    })
      .then((res) => {
        alert("update");
        // console.log("update");
      })
      .catch((error) => {
        console.log("error" + error);
      });
  };
  const addWork = async (work, photo) => {
    const type = work.type;
    setType(work.type);

    // const workRef = collection(db, `work/${type}/detail`);
    const workRef = doc(db, "work", type);
    await setDoc(workRef, {
      createDate: "",
      // work,
      // photo,
    });
    const detailRef = collection(db, `work/${type}/detail`);
    await addDoc(detailRef, {
      work,
      photo,
    })
      .then((res) => {
        alert("good");
        console.log("godd");
      })
      .catch((error) => {
        console.log("error" + error);
      });
  };

  return (
    <DataContext.Provider
      value={{
        addWork,
        works,
        portfolio,
        web,
        mobile,
        userData,
        users,
        logout,
        fetchWorks,
        getOneWork,
        oneWork,
        updateWork,
        allWeb
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useLesson = () => useContext(DataContext);

// const fetchWeb = async () => {
//   const q = query(
//     collection(db, "work"),
//     where("work.type", "==", "Web App")
//   );
//   const querySnapshot = await getDocs(q);

//   const tmp = [];
//   querySnapshot.forEach((doc) => {
//     // console.log(doc.id);
//     tmp.push({ ...doc.data(), id: doc.id });
//   });

//   setWeb(tmp);
// };
