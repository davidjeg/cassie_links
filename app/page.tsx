import Image from "next/image";
import FuzzyText from "./components/FuzzyText";
import Navbar from "./components/Navbar";
import SocialMedia from "./components/SocialMedia";
import MusicPlayer from "./components/Reproductor";
export default function Home() {
  return (
    <div className="relative min-h-dvh">
      {/* BACKGROUND GLOBAL */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 backdrop-blur-xs" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.85)_100%)]" />
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
                sizes="(max-width: 576px) 100vw, 576px"
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
                <div className="flex items-center gap-1 w-fit">
                  <FuzzyText>Cassie</FuzzyText>
                  <Image
                    alt="verified-icon"
                    width={20}
                    height={20}
                    className="translate-y-0.5 shrink-0"
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

          <MusicPlayer />
          <div className="p-4 mt-4">
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4  text-zinc-200">
              <a
                target="_blank"
                href="https://fansly.com/cassierbn"
                className="h-80 overflow-hidden rounded-xl col-span-2 relative"
              >
                <Image
                  src={"/video.gif"}
                  alt="video-gif"
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-contain"
                />

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
