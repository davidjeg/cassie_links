import Image from "next/image";
import Navbar from "./components/Navbar";
import SocialMedia from "./components/SocialMedia";
export default function Home() {
  return (
    <div className="relative min-h-dvh">
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <Image
          alt="background"
          fill
          src={"/avatar.jpg"}
          className="absolute inset-0  object-cover object-[0%_30%]"
        />
        <div className="absolute inset-0  backdrop-blur-xl z-0"></div>
        <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.85)_100%)]" />
      </div>
      {/* Main CONTENT */}
      <div className="flex items-center flex-col justify-center h-full relative">
        <Navbar />
        {/* Main box */}
        <div className="w-full max-w-xl rounded-4xl bg-black my-8 z-10 shadow-md overflow-hidden ">
          {/* HEADER */}
          <div className="relative ">
            <div className="h-150">
              <Image
                fill
                src={"/hero.jpg"}
                alt="main-img"
                className="object-cover object-[0%_65%]"
              />
              {/* OVERLAY */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent"></div>

              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center
            justify-center gap-2"
              >
                {/* Nombre */}
                <div className="inline-flex items-baseline gap-1">
                  <h1 className="text-3xl text-zinc-200 font-bold">Cassie</h1>
                  <Image
                    alt="verified-icon"
                    width={20}
                    height={20}
                    className="translate-y-0.5"
                    src={"/icons/verified.png"}
                  />
                </div>

                {/* Social Media*/}
                <div className="flex justify-center flex-col gap-1">
                  <span className="text-zinc-400 text-center block font-semibold ">
                    @cassierbn
                  </span>
                  <SocialMedia />
                </div>
                <span className="text-zinc-200 text-sm">🏳️‍⚧️ Trans Girl</span>
              </div>
            </div>
          </div>
          <div className="p-4 mt-4">
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4  text-zinc-200">
              <a
                target="_blank"
                href="https://fansly.com/cassierbn"
                className="h-80 overflow-hidden rounded-xl col-span-2 relative"
              >
                <video
                  className="w-full h-full object-cover object-[0%_30%]"
                  autoPlay
                  muted
                  loop
                  playsInline
                  disablePictureInPicture
                  preload="auto"
                >
                  <source src="/main.mp4" type="video/mp4"></source>
                </video>
                <div className="absolute top-4 left-4 p-2 bg-gray-50 rounded-full ">
                  <Image
                    alt="fansly-icon"
                    src={"/icons/fansly.png"}
                    width={25}
                    height={25}
                  />
                </div>
                <h3 className="absolute bottom-2.5 font-semibold w-full text-center text-xl ">
                  EXCLUSIVE CONTENT
                </h3>
              </a>
            </div>
            <div className="text-zinc-200 mt-4 p-4 bg-zinc-900 rounded-2xl">
              💌 contact@cassierbn.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
