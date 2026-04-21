import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { toggleGPTSearch } from "../utils/GptSearchSlice";
import { SUPPORTED_LANG } from "../utils/constants";
import { changeLanguage } from "../utils/languageSlice";

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const gptSearchValue = useSelector((store) => store.gpt.gptSearchValue);

  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        navigate("/error");
      });
  };
  const handleGptSearch = () => {
    dispatch(toggleGPTSearch());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="flex justify-between w-screen bg-linear-to-b from-black z-10 px-8 py-2 fixed top-0 right-0 left-0">
      <img
        className="w-56 px-6 py-2 mx-16 cursor-pointer"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8b1-7864-8e94-75a86b260122/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        onClick={() => navigate("/browse")}
      />

      {user && (
        <div className="flex items-center gap-4">
          {gptSearchValue && (
            <select
              name=""
              id=""
              className="text-white focus:outline-none p-2 m-2 bg-black"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANG.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-purple-800 text-white py-2 px-4 rounded-md cursor-pointer"
            onClick={handleGptSearch}
          >
            {gptSearchValue ? "Home" : "GPT Search"}
          </button>
          {/* Watchlist button */}
          <button
            className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
            onClick={() => navigate("/watchlist")}
          >
            Watchlist
          </button>

          <img
            className="w-12 h-12 rounded-full"
            src={user.photoURL}
            alt="User"
          />
          <button className="p-2 text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
