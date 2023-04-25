import LargeHeading from "@/components/elements/LargeHeading";
import Paragraph from "@/components/elements/Paragraph";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Api Hub | Home",
  description: "Free Demo APIs to test and work with your Applications.",
};

export default function Home() {
  return (
    <div className=" relative h-screen flex items-center justify-center overflow-x-hidden ">
      <div className=" container pt-32 max-w-7xl mx-auto w-full h-full">
        <div className=" h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <LargeHeading
            size="sm"
            className=" three-d text-black dark:text-light-gold "
          >
            Easily get your demo API at <br />
            APIHub.
          </LargeHeading>
          <Paragraph className="max-w-xl lg:text-left">
            Easily test your app with free {"  "}
            <Link
              href="/login"
              className="underline  underline-offset-2 text-black dark:text-light-gold "
            >
              API Key
            </Link>
          </Paragraph>
          
          <div className=" relative w-full max-w-lg lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute ">
            <Image
              priority
              className="img-shadow"
              quality={100}
              style={{ objectFit: "contain", transform: "scale(0.7)" }}
              fill
              src="/typewriter.png"
              alt="Type Writer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
