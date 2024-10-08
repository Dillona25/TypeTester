import { useEffect, useState } from "react";

export const Keyboard = () => {
  const [pressedKey, setPressedKey] = useState(null);

  const handleKeyDown = (event) => {
    setPressedKey(event.key.toLowerCase());
  };

  const handleKeyUp = () => {
    setPressedKey(null);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const kbdClass =
    "flex items-center justify-center h-[50px] rounded-md font-poppins text-sm";
  const standardKeyClass = "w-[50px]"; // Standard key width
  const largerKeyClass = "w-[100px]"; // Larger key width
  const spaceBarClass = "w-[400px]"; // Spacebar width

  const keysRow1 = [
    "`",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "+",
  ];
  const keysRow2 = [
    "Tab",
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "[",
    "]",
    "\\",
  ];
  const keysRow3 = [
    "Caps",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    ";",
    "'",
    "Return",
  ];
  const keysRow4 = [
    "Shift",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    ",",
    ".",
    "/",
    "Shift",
  ];
  const spaceBar = ["Space"];

  // Handles special key cases like Backspace
  const specialKeyMap = {
    backspace: "Delete", // Map "Backspace" to "Delete"
    enter: "Return",
    " ": "Space", // Spacebar
    capslock: "Caps",
    tab: "Tab",
    shift: "Shift",
  };

  const renderKey = (key, className = standardKeyClass) => {
    const normalizedKey = specialKeyMap[pressedKey] || pressedKey;
    return (
      <kbd
        key={key}
        className={`${kbdClass} ${className} ${normalizedKey === key.toLowerCase() ? "bg-black text-white" : "bg-gray-100 text-black"}`}
      >
        {key}
      </kbd>
    );
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1 justify-center">
        {keysRow1.map((key) => renderKey(key))}
        {renderKey("Delete", largerKeyClass)} {/* Adjust for "Backspace" */}
      </div>
      <div className="flex items-center gap-1 justify-center">
        {renderKey("Tab", largerKeyClass)}
        {keysRow2.slice(1).map((key) => renderKey(key))}
      </div>
      <div className="flex items-center gap-1 justify-center">
        {renderKey("Caps", largerKeyClass)}
        {keysRow3.slice(1, -1).map((key) => renderKey(key))}
        {renderKey("Return", largerKeyClass)}
      </div>
      <div className="flex items-center gap-1 justify-center">
        {renderKey("Shift", largerKeyClass)}
        {keysRow4.slice(1, -1).map((key) => renderKey(key))}
        {renderKey("Shift", largerKeyClass)}
      </div>
      <div className="flex items-center gap-1 justify-center">
        {renderKey("Space", spaceBarClass)}
      </div>
    </div>
  );
};
