import { FaLocationArrow } from "react-icons/fa";
import { Button } from "../components/button/buttons";

export const WelcomePage = () => {
  return (
    <div className="h-screen w-full bg-white bg-grid-black/[0.04] relative flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]"></div>
      <div className="max-w-[1500px] flex gap-12 items-center">
        <div className="flex flex-col max-w-[485px]">
          <h2 className="font-poppins text-xl tracking-widest">Welcome To</h2>
          <h1 className="text-VeryLarge font-nunito font-extrabold text-primary">
            TypeTester
          </h1>
          <p className="font-poppins text-lg tracking-wide">
            Create an account or login to begin tracking your typing speed and
            accuracy. The perfect way to complete with friends.{" "}
          </p>
          <div className="flex gap-5 mt-6">
            <Button
              className="flex gap-2 items-center"
              text="Login"
              icon={<FaLocationArrow />}
            />
            <Button variant="secondary" text="Signup" />
          </div>
          <p className="font-poppins mt-6 text-sm">
            Or <span className="underline cursor-pointer">continue</span> with
            no account.
          </p>
        </div>
        <div className="bg-gray-200 rounded-3xl w-[500px] h-[340px]"></div>
      </div>
    </div>
  );
};
