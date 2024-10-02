import { Button } from "../components/buttons";
import { Keyboard } from "../components/keyboard";
import { IoMenu } from "react-icons/io5";

export default function Dashboard() {
  return (
    <>
      <div className="p-3 flex jusify-between w-full">
        <button>
          <IoMenu className="text-4xl" />
        </button>
        <h1 className="text-2xl m-auto">TypeTest</h1>
        <div className="rounded-full w-[50px] h-[50px] bg-gray-100"></div>
      </div>
      <div className="flex flex-col min-h-screen gap-10 justify-center items-center">
        <div className="bg-gray-100 rounded-lg w-[800px] h-[185px]"></div>
        <Keyboard />
        <Button text="Generate" variant="primary" />
      </div>
    </>
  );
}
