import React from "react";
import { useState, useCallback, useEffect, useRef } from "react";

const App = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [activeIndex2, setActiveIndex2] = useState(null);

  const toggleAccordion2 = (index) => {
    setActiveIndex2(activeIndex2 === index ? null : index);
  };

  const [length, setLength] = useState(6);
  const [number, setNumber] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowerCase] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const [specialS, setSpecials] = useState(false)
  const [copied, setCopied] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "";
    // let lowercase = "abcdefghijklmnopqrstuvwxyz";
    // let uppercase = lowercase.toUpperCase();
    // let str = lowercase + uppercase;
    if (number) str += "1234567890";
    if (character) str += "!@#$%^&*()[]{}|:;<>,.?/~+";
    if (lowercase) str += "abcdefghijklmnopqrstuvwxyz";
    if (uppercase) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (specialS) str += "$€£¥A$C$Fr¥₹₩krNZ$Mex$S$HK$krR$₽R₺"


    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, character, password,lowercase, uppercase, specialS ]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, character,lowercase, uppercase, specialS]);
  return (
    <>
      <div
        id="Header"
        className="w-full text-white sm:h-72 h-56 pt-2 pl-2 text-center flex flex-col justify-end pb-12"
      >
        <a href="" className="sm:text-8xl text-4xl font-bold">
          PassX
        </a>
      </div>
      <div className="mt-4  items-center pr-12 pl-12 mb-4 ">
        <div className="flex rounded-lg overflow-hidden mb-4 h-14 sm:w-96 m-auto">
          <input
            type="text"
            value={password}
            className="outline-none text-lg w-full py-1 px-3 "
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
        </div>
        <div className="items-center justify-center flex gap-x-4">
          <button
            onClick={copyPassword}
            className="text-white sm:text-lg text-sm bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
          <button
            onClick={passwordGenerator}
            className="text-white sm:text-lg text-sm bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Generate
          </button>
          <button className="text-white sm:text-lg text-sm bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full  px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
            Save
          </button>
        </div>

        <div>
          {/* <div className="w-full mt-4 max-w-md mx-auto rounded-xl px-4 py-0.5  bg-neutral-800 text-white">
        <div className=" text-sm gap-x-2 mt-3 mb-2">
          <div className="flex items-center gap-x-1 text-black">
            <select
              value={length}
              onChange={(e) => {
                setLength(parseInt(e.target.value));
              }}
              className="cursor-pointer"
            >
              {[...Array(9).keys()].map((num) => (
                <option key={num + 4} value={num + 4}>
                  {num + 4}
                </option>
              ))}
            </select>
            <label htmlFor="length" className="text-white">Length: {length}</label>
          </div>
         <br />
          <div className=" text-sm gap-x-2">
            
            <input
              type="checkbox"
              defaultChecked={number}
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <br />
          <div className=" text-sm gap-x-2">
            <input
              type="checkbox"
              defaultChecked={character}
              id="characterInput"
              onChange={() => {
                setCharacter((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div> */}
        </div>
      </div>

      <div className="mt-4 pl-4 pr-4 sm:flex sm:justify-center ">
        <div className="sm:w-2/5">
          <div >
            <button
              className="flex justify-between items-center w-full p-5 font-medium  border-gray-200 rounded-xl bg-neutral-800 text-white"
              onClick={() => toggleAccordion(1)}
            >
              <span>Need More Options?</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  activeIndex === 1 ? "transform rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {activeIndex === 1 && (
              <div className=" text-white rounded-xl mt-2 ">
                {/* first option */}
                <div className="p-2 mb-2 border rounded-xl bg-neutral-800">
                  <button className="flex justify-between items-center w-full font-medium   border-gray-200 rounded-xl text-white">
                    <span>Password Length</span>
                    <select
                      value={length}
                      onChange={(e) => {
                        setLength(parseInt(e.target.value));
                      }}
                      className="cursor-pointer rounded-xl border-none bg-blue-700 text-white"
                      style={{
                        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"/></svg>')`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 10px top 50%, 0 0",
                        backgroundSize: "16px auto",
                      }}
                    >
                      {[...Array(9).keys()].map((num) => (
                        <option key={num + 4} value={num + 4}>
                          {num + 4}
                        </option>
                      ))}
                    </select>
                  </button>
                </div>
                {/* second option */}
                <div className="p-2 mb-2 border rounded-xl h-12 bg-neutral-800">
                  <button className="flex justify-between items-center w-full font-medium   border-gray-200 rounded-xl text-white">
                    <label htmlFor="numberInput"> Numbers</label>
                    <input
                      type="checkbox"
                      defaultChecked={number}
                      id="numberInput"
                      onChange={() => {
                        setNumber((prev) => !prev);
                      }}
                      className="rounded-full h-8 w-8"
                    />
                  </button>
                </div>
                {/* third option */}
                <div className=" mb-2 border rounded-xl h-12 bg-neutral-800">
                  <button
                    className="pr-4 flex justify-between items-center w-full font-medium  border-gray-200 rounded-xl bg-neutral-800 text-white"
                    onClick={() => toggleAccordion2(2)}
                  >
                    <span className="p-2">Characters to include</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        activeIndex === 2 ? "transform rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {activeIndex2 === 2 && (
                    // first option
                    <div className=" text-white rounded-xl mt-2 border-neutral-400 bg-neutral-800">
                      <div className="p-2  border rounded-xl">
                        <div className="mt-2 flex justify-between items-center w-full font-medium   border-gray-200 rounded-xl bg-neutral-800 text-white">
                          <label htmlFor="characterInput">
                            Uppercase Alphabets
                            <br />
                            <span className="text-gray-400">ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
                          </label>
                          <input
                            type="checkbox"
                            defaultChecked={uppercase}
                            id="characterInput"
                            onChange={() => {
                              setUppercase((prev) => !prev);
                            }}
                            className="rounded-full h-8 w-8"
                          />
                        </div>
                        <div className="mt-2 flex justify-between items-center w-full font-medium   border-gray-200 rounded-xl bg-neutral-800 text-white">
                          <label htmlFor="characterInput">
                            Lowercase Alphabets
                            <br />
                            <span className="text-gray-400">abcdefghijklmnopqrstuvwxyz</span>
                          </label>
                          <input
                            type="checkbox"
                            defaultChecked={lowercase}
                            id="characterInput"
                            onChange={() => {
                              setLowerCase((prev) => !prev);
                            }}
                            className="rounded-full h-8 w-8"
                          />
                        </div>
                        <div className="flex justify-between items-center w-full font-medium   border-gray-200 rounded-xl bg-neutral-800 text-white">
                          <label htmlFor="characterInput">
                            Symbols
                            <br />
                            <span className="text-gray-400">@#$%^&*()_+</span>
                          </label>
                          <input
                            type="checkbox"
                            defaultChecked={character}
                            id="characterInput"
                            onChange={() => {
                              setCharacter((prev) => !prev);
                            }}
                            className="rounded-full h-8 w-8"
                          />
                        </div>
                        <div className="mt-2 flex justify-between items-center w-full font-medium   border-gray-200 rounded-xl bg-neutral-800 text-white">
                          <label htmlFor="characterInput">
                            Special Symbols
                            <br />
                            <span className="text-gray-400">$€£¥A$C$Fr¥₹₩krNZ$Mex$S$HK$krR$₽R₺</span>
                          </label>
                          <input
                            type="checkbox"
                            defaultChecked={specialS}
                            id="characterInput"
                            onChange={() => {
                              setSpecials((prev) => !prev);
                            }}
                            className="rounded-full h-8 w-8"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          {/* <div className="mb-4">
        <button
          className="flex justify-between items-center w-full p-5 font-medium text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => toggleAccordion(2)}
        >
          <span>How do I install Tailwind CSS?</span>
          <svg
            className={`w-4 h-4 transition-transform ${
              activeIndex === 2 ? 'transform rotate-180' : ''
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {activeIndex === 2 && (
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400">
              You can install Tailwind CSS using npm or yarn. First, install it as a dev dependency: npm install tailwindcss --save-dev or yarn add tailwindcss --dev. Then, create a tailwind.config.js file using npx tailwindcss init or yarn run tailwindcss init.
            </p>
          </div>
        )}
      </div> */}
        </div>
      </div>
    </>
  );
};

export default App;
