import Image from "next/image";
import { Inter } from "next/font/google";
import Container from "./components/Container";
import LogoContainer from "./components/Header/LogoContainer";
// import Login from "./(auth)/login";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container>
      {/* <div className="flex flex-row items-center justify-between bg-blue-500 sm:mx-auto sm:my-auto">
        <LogoContainer />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div> */}

      {/* <div className="text-center w-full">
        <button className="bg-white p-2 px-4 rounded-lg">
          login with google
        </button>
      </div> */}
      {/* <Login /> */}
    </Container>
  );
}
