// hooks/useAuthListener.js
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { photo_URL } from "../utils/constants";

const useAuthListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL: photo_URL,
          }),
        );
      } else {
        dispatch(removeUser());
      }
    });

    return unsubscribe;
  }, [dispatch]);
};

export default useAuthListener;
