import { Button } from "../components/buttons/buttons";
import { Keyboard } from "../components/keyboard/keyboard";
import { IoMenu } from "react-icons/io5";

export default function Dashboard() {
  return (
    <div className="h-screen flex flex-col gap-10 justify-center items-center">
      <div className="absolute top-0 p-3 flex jusify-between w-full">
        <button>
          <IoMenu className="text-4xl text-gray-500" />
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
