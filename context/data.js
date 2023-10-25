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
} from "firebase/firestore";
import { createContext, useContext, useState, useEffect } from "react";
import { db } from "@/utils/firebase";
import { signOut, getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
const auth = getAuth();
export const DataContext = createContext({});

export const DataContextProvider = ({ children }) => {
  const [works, setWorks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [web, setWeb] = useState([]);
  const [mobile, setMobile] = useState([]);
  const [users, setUsers] = useState([]);
  const workRef = collection(db, "work");
  const dataRef = collection(db, "user");
  const router = useRouter();

  useEffect(() => {
    fetchUser();
    // fetchWorks();
    fetchMobile();
    fetchWeb();
    fetchProtfolio();
  }, []);
  const userData = async (data) => {
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
    const unsubcribe = onSnapshot(dataRef, (snapshot) => {
      setUsers(() => {
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
  const fetchWorks = () => {
    const unsubcribe = onSnapshot(workRef, (snapshot) => {
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
      collection(db, "work"),
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

  const addWork = async (work, photo) => {
    const type = work.type;
    const workRef = doc(db, "work", type);
    await setDoc(workRef, {
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
