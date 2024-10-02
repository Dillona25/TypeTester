import { FaLocationArrow } from "react-icons/fa";
import { Button } from "./components/buttons";

type Props = {
  handleLoginModal?: () => void;
  handleSignupModal?: () => void;
};

export default function WelcomePage({
  handleLoginModal,
  handleSignupModal,
}: Props) {
  return (
    <div className="h-screen w-full bg-white bg-grid-black/[0.04] relative flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]"></div>
      <div className="max-w-[1500px] flex gap-12 items-center">
        <div className="flex flex-col max-w-[485px] z-10">
          <h3>Welcome To</h3>
          <h1>TypeTester</h1>
          <p>
            Create an account or login to begin tracking your typing speed and
            accuracy. The perfect way to complete with friends.{" "}
          </p>
          <div className="flex gap-5 mt-6">
            <Button
              onClick={handleLoginModal}
              className="flex gap-2 items-center"
              text="Login"
              icon={<FaLocationArrow />}
            />
            <Button
              onClick={handleSignupModal}
              variant="secondary"
              text="Signup"
            />
          </div>
          <p className="mt-6">
            Or <span className="underline cursor-pointer">continue</span> with
            no account.
          </p>
        </div>
        <div className="bg-gray-200 rounded-3xl w-[590px] h-[380px]"></div>
      </div>
    </div>
  );
}
