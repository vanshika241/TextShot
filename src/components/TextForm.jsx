import React, { useState } from "react";

export const TextForm = () => {
  const [text, setText] = useState("Enter text here...");
  const [originalText, setOriginalText] = useState("Enter text here...");

  const handleClickUpper = () => setText(text.toUpperCase());
  const handleClickLower = () => setText(text.toLowerCase());
  const handleOnchange = (event) => {
    setText(event.target.value);
    setOriginalText(event.target.value);
  };
  const handleClearClick = () => {
    setText("");
    setOriginalText("");
  };

  return (
    <div className="flex justify-center items-start pb-8">
      <div className="flex flex-col items-center border-2 rounded-lg p-8 bg-white text-black shadow-lg w-[90%] max-w-[900px]">
        <h1 className="text-2xl font-bold mb-6">Enter your text</h1>

        <textarea
          id="data"
          value={text}
          className="border rounded-lg p-4 w-full h-[220px] text-base focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          onChange={handleOnchange}
        />

        <div className="flex gap-4 mt-6 flex-wrap justify-center">
          <button
            className="bg-amber-400 text-lg px-4 py-2 rounded cursor-pointer hover:bg-amber-500"
            onClick={handleClickUpper}
          >
            UPPERCASE
          </button>
          <button
            className="bg-amber-400 text-lg px-4 py-2 rounded cursor-pointer hover:bg-amber-500"
            onClick={handleClickLower}
          >
            lowercase
          </button>
          <button
            className="bg-amber-400 text-lg px-4 py-2 rounded cursor-pointer hover:bg-amber-500"
            onClick={handleClearClick}
          >
            Clear
          </button>
        </div>

        <div className="mt-6 text-left w-full">
          <h1 className="font-semibold text-xl mb-2">Your Text Summary</h1>
          <p>
            {text.trim().split(/\s+/).filter((w) => w.length !== 0).length} Words{" "}
            {text.length} Characters
          </p>
          <p>
            {(
              text.trim().split(/\s+/).filter((w) => w.length !== 0).length *
              0.008
            ).toFixed(2)}{" "}
            Minutes to Read
          </p>
          <h2 className="mt-4 font-semibold">Preview</h2>
          <p className="p-2 border rounded bg-gray-100 text-gray-800">
            {originalText.length > 0 ? originalText : "Nothing to preview!"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextForm;
