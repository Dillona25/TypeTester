import { Button } from "./buttons";

export const SideMenu = () => {
  return (
    <div className="relative h-screen">
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"></div>
      <div className="bg-gray-100 absolute left-0 h-screen p-5 w-[250px] z-20">
        <div className="border-b-4 border-gray-300 pb-5">
          <div className="flex flex-col">
            <div className="bg-black h-[160px] w-[160px] m-auto rounded-full"></div>
            <p className="text-center mt-4">Hello, Dillon!</p>
          </div>
          <div className="flex flex-col border-b-4 border-gray-300 mt-10">
            <h2 className="text-2xl text-black">Your Stats</h2>
          </div>
          <div className="flex flex-col gap-1 mt-5">
            <h2 className="text-black">29</h2>
            <p>Total tests completed</p>
          </div>
          <div className="flex flex-col gap-1 mt-5">
            <h2 className="text-green">78</h2>
            <p>Average words per minute</p>
          </div>
          <div className="flex flex-col gap-1 mt-5">
            <h2 className="text-green">92%</h2>
            <p>Typing accuracy</p>
          </div>
        </div>
        <div className="flex gap-2 mt-7">
          <Button variant="logout" className="text-sm" text="Logout" />
        </div>
      </div>
    </div>
  );
};
