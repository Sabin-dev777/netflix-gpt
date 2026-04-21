import { useSelector } from "react-redux";
import lang from "../utils/languageContstants";

const GptSearchBar = () => {
  const language = useSelector((store) => store.lang.value);
  return (
    <div className="flex justify-center pt-[10%]">
      <form
        action=""
        className="bg-black text-white p-6 m-6 w-1/2 grid grid-cols-12 shadow-lg rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder={lang[language].gptPlaceHolder}
          className="p-4 m-4 text-white col-span-9 focus:outline-none focus:ring-1
           focus:ring-red-800
          "
        />
        <button className="py-2 px-4  bg-red-700 rounded-lg col-span-3">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
