import Button from "../components/button/buttons";
import { FaLocationArrow } from "react-icons/fa";

export const Welcome = () => {
  return (
    <div className="h-screen w-full bg-white bg-grid-black/[0.08] relative flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]"></div>
      <div className="max-w-[1400px]">
        <div className="flex">
          <div className="flex flex-col gap-3 text-center max-w-[800px]">
            <h1 className="font-nunito text-[70px] text-primary font-extrabold">
              Welcome to TypeTester
            </h1>
            <span className="font-poppins text-lg tracking-widest">
              Test your typing speed and accuracy with our easy-to-use typing
              test. Challenge yourself and improve your skills!
            </span>
            <div className="flex gap-4 m-auto mt-4">
              <Button text="Create An Account" icon={<FaLocationArrow />} />
              <Button
                variant="secondary"
                text="Login To Account"
                icon={<FaLocationArrow />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
