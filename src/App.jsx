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

  const [activeIndex3, setActiveIndex3] = useState(null);

  const toggleAccordion3 = (index) => {
    setActiveIndex3(activeIndex3 === index ? null : index);
  };

  const [length, setLength] = useState(6);
  const [number, setNumber] = useState(true);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowerCase] = useState(true);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const [specialS, setSpecials] = useState(false);
  const [copied, setCopied] = useState(false);
  const [savedData, setSavedData] = useState([]);
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "";
    if (number) str += "1234567890";
    if (character) str += "!@#$%&*";
    if (lowercase) str += "abcdefghijklmnopqrstuvwxyz";
    if (uppercase) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (specialS) str += "$€£¥₹₩₽₺";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, character, password, lowercase, uppercase, specialS]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  }, [password]);

  const copySavedPassword = (index) => {
    const passwordToCopy = savedData[index];
    navigator.clipboard.writeText(passwordToCopy);
  };

  useEffect(() => {
    passwordGenerator();
  }, [length, number, character, lowercase, uppercase, specialS]);

  useEffect(() => {
    const data = localStorage.getItem("myPassword");
    if (data) {
      setSavedData(JSON.parse(data));
    }
  }, [setSavedData]);

  function savePass() {
    if (!savedData.includes(password)) {
      const updatedData = [...savedData, password];
      localStorage.setItem("myPassword", JSON.stringify(updatedData));
      setSavedData(updatedData);
    } else {
      alert("This password is already saved!");
    }
  }

  const deleteSavedData = (index) => {
    const updatedData = savedData.filter((_, i) => i !== index); 
    localStorage.setItem("myPassword", JSON.stringify(updatedData)); 
    setSavedData(updatedData); 
  };
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
          <button
            onClick={savePass}
            className="text-white sm:text-lg text-sm bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full  px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Save
          </button>
        </div>

        <div></div>
      </div>

      <div className="mt-4 pl-4 pr-4 sm:flex sm:justify-center ">
        <div className="sm:w-2/5">
          <div>
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
                        activeIndex2 === 2 ? "transform rotate-180" : ""
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
                          <label htmlFor="uppercase">
                            Uppercase Alphabets
                            <br />
                            <span className="text-gray-400">A to Z</span>
                          </label>
                          <input
                            type="checkbox"
                            defaultChecked={uppercase}
                            id="uppercase"
                            onChange={() => {
                              setUppercase((prev) => !prev);
                            }}
                            className="rounded-full h-8 w-8"
                          />
                        </div>
                        <div className="mt-2 flex justify-between items-center w-full font-medium   border-gray-200 rounded-xl bg-neutral-800 text-white">
                          <label htmlFor="lowercase">
                            Lowercase Alphabets
                            <br />
                            <span className="text-gray-400">a to z</span>
                          </label>
                          <input
                            type="checkbox"
                            defaultChecked={lowercase}
                            id="lowercase"
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
                            <span className="text-gray-400">!@#$%&*</span>
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
                          <label htmlFor="specialS">
                            Special Symbols
                            <br />
                            <span className="text-gray-400">$€£¥₹₩₽₺</span>
                          </label>
                          <input
                            type="checkbox"
                            defaultChecked={specialS}
                            id="specialS"
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
        </div>
      </div>

      <div className="mt-4 pl-4 pr-4 sm:flex sm:justify-center ">
        <div className="sm:w-2/5">
          <div>
            <button
              className="flex justify-between items-center w-full p-5 font-medium  border-gray-200 rounded-xl bg-neutral-800 text-white"
              onClick={() => toggleAccordion3(1)}
            >
              <span>Show Saved Password</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  activeIndex3 === 1 ? "transform rotate-180" : ""
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
            {activeIndex3 === 1 && (
              <div className=" text-white rounded-xl mt-2 ">
                {/* first option */}
                {savedData.length > 0 ? (
                  <div className=" text-white rounded-xl mt-2 border-neutral-400 bg-neutral-800">
                    <div className="p-2  border rounded-xl">
                      <div>
                        <ul>
                          {savedData.map((password, index) => (
                            <li
                              key={index}
                              className="border rounded-lg mt-2 p-2 flex justify-between items-center"
                            >
                              <span>
                                {index + 1} - {password}
                              </span>
                              <div className="flex gap-2">
                                <button className="rounded-full w-8 h-8 bg-green-500 text-white flex items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    className="h-4 w-4 ml-2 cursor-pointer"
                                    onClick={() => copySavedPassword(index)}
                                  >
                                    <path
                                      fill="white"
                                      d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"
                                    />
                                  </svg>
                                </button>
                                <button
                                  className="rounded-full w-8 h-8 bg-red-500 text-white flex items-center justify-center"
                                  onClick={() => deleteSavedData(index)}
                                >
                                  <svg
                                    className="w-4 h-4 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M6 18L18 6M6 6l12 12"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 text-neutral-400 rounded-xl mt-2 border-neutral-400 bg-neutral-800">
                    <span>No saved passwords to display.</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
