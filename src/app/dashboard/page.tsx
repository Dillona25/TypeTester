import { Keyboard } from "../components/keyboard";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen gap-10 justify-center items-center">
      <div className="bg-gray-200 rounded-lg w-[800px] h-[185px]"></div>
      <Keyboard />
    </div>
  );
}
