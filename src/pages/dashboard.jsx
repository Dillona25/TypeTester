import { Button } from "../components/buttons/buttons";
import { Keyboard } from "../components/keyboard/keyboard";
import { IoIosMenu } from "react-icons/io";

export default function Dashboard({ handleMenu }) {
  return (
    <div className="h-screen flex flex-col gap-10 justify-center items-center">
      <div className="absolute top-0 p-3 flex jusify-between w-full">
        <button>
          <IoIosMenu onClick={handleMenu} className="text-3xl font-bold" />
        </button>
        <h1 className="text-2xl m-auto">TypeTest</h1>
        <div className="rounded-full w-[50px] h-[50px] bg-gray-100"></div>
      </div>
      <div className="flex flex-col gap-10 mt-10 justify-center items-center">
        <div className="bg-gray-100 rounded-lg w-[800px] h-[185px]"></div>
        <Keyboard />
        <Button text="Generate" variant="primary" />
      </div>
    </div>
  );
}
