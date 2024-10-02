export const Keyboard = () => {
  const kbdClass =
    "flex items-center justify-center h-[50px] w-[50px] bg-gray-100 rounded-md font-poppins text-sm";

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1 justify-center">
        <kbd className={kbdClass}>`</kbd>
        <kbd className={kbdClass}>1</kbd>
        <kbd className={kbdClass}>2</kbd>
        <kbd className={kbdClass}>3</kbd>
        <kbd className={kbdClass}>4</kbd>
        <kbd className={kbdClass}>5</kbd>
        <kbd className={kbdClass}>6</kbd>
        <kbd className={kbdClass}>7</kbd>
        <kbd className={kbdClass}>8</kbd>
        <kbd className={kbdClass}>9</kbd>
        <kbd className={kbdClass}>0</kbd>
        <kbd className={kbdClass}>-</kbd>
        <kbd className={kbdClass}>+</kbd>
        <kbd
          className={`flex items-center justify-center h-[50px] bg-gray-100 rounded-md font-poppins text-sm w-[100px]`}
        >
          Delete
        </kbd>
      </div>
      <div className="flex items-center gap-1 justify-center">
        <kbd
          className={`flex items-center justify-center h-[50px] bg-gray-100 rounded-md font-poppins text-sm w-[100px]`}
        >
          Tab
        </kbd>
        <kbd className={kbdClass}>q</kbd>
        <kbd className={kbdClass}>w</kbd>
        <kbd className={kbdClass}>e</kbd>
        <kbd className={kbdClass}>r</kbd>
        <kbd className={kbdClass}>t</kbd>
        <kbd className={kbdClass}>y</kbd>
        <kbd className={kbdClass}>u</kbd>
        <kbd className={kbdClass}>i</kbd>
        <kbd className={kbdClass}>o</kbd>
        <kbd className={kbdClass}>p</kbd>
        <kbd className={kbdClass}>[</kbd>
        <kbd className={kbdClass}>]</kbd>
        <kbd className={kbdClass}>\</kbd>
      </div>
      <div className="flex items-center gap-1 justify-center">
        <kbd
          className={`flex items-center justify-center h-[50px] bg-gray-100 rounded-md font-poppins text-sm w-[100px]`}
        >
          Caps
        </kbd>
        <kbd className={kbdClass}>a</kbd>
        <kbd className={kbdClass}>s</kbd>
        <kbd className={kbdClass}>d</kbd>
        <kbd className={kbdClass}>f</kbd>
        <kbd className={kbdClass}>g</kbd>
        <kbd className={kbdClass}>h</kbd>
        <kbd className={kbdClass}>j</kbd>
        <kbd className={kbdClass}>k</kbd>
        <kbd className={kbdClass}>l</kbd>
        <kbd className={kbdClass}>;</kbd>
        <kbd className={kbdClass}>"</kbd>
        <kbd
          className={`flex items-center justify-center h-[50px] bg-gray-100 rounded-md font-poppins text-sm w-[100px]`}
        >
          Return
        </kbd>
      </div>
      <div className="flex items-center gap-1 justify-center">
        <kbd
          className={`flex items-center justify-center h-[50px] bg-gray-100 rounded-md font-poppins text-sm w-[100px]`}
        >
          Shift
        </kbd>
        <kbd className={kbdClass}>z</kbd>
        <kbd className={kbdClass}>x</kbd>
        <kbd className={kbdClass}>c</kbd>
        <kbd className={kbdClass}>v</kbd>
        <kbd className={kbdClass}>b</kbd>
        <kbd className={kbdClass}>n</kbd>
        <kbd className={kbdClass}>m</kbd>
        <kbd className={kbdClass}>,</kbd>
        <kbd className={kbdClass}>.</kbd>
        <kbd className={kbdClass}>/</kbd>
        <kbd
          className={`flex items-center justify-center h-[50px] bg-gray-100 rounded-md font-poppins text-sm w-[100px]`}
        >
          Shift
        </kbd>
      </div>
      <div className="flex items-center gap-1 justify-center">
        <kbd
          className={`flex items-center justify-center h-[50px] bg-gray-100 rounded-md font-poppins text-sm w-[400px]`}
        ></kbd>
      </div>
    </div>
  );
};
