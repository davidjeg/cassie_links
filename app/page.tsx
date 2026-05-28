import Card from "./components/Card";
import Navbar from "./components/Navbar";
import SocialMedia from "./components/SocialMedia";
const links = [""];
export default function Home() {
  return (
    <div className="flex items-center flex-col justify-center h-full relative">
      {/* Main Overlay */}
      <img
        src={"./fff.jpg"}
        className="absolute inset-0 h-full w-full object-cover object-[0%_25%]"
      />
      <div className="absolute inset-0  backdrop-blur-xl z-0"></div>
      <Navbar />
      {/* Main box */}
      <div className="w-full max-w-xl rounded-4xl bg-black my-8 z-10 shadow-md overflow-hidden ">
        {/* HEADER */}
        <div className="relative ">
          <div className="h-[600px] ">
            <img
              src={"./fff.jpg"}
              alt="main-imgcassie"
              className="object-cover w-full h-full top-4 object-[0%_38%]"
            />
            {/* OVERLAY */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent"></div>

            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center
            justify-center gap-2"
            >
              <div>
                <div className="inline-flex items-baseline gap-1">
                  <h1 className="text-3xl text-zinc-200 font-bold">
                    Cassie Robin
                  </h1>
                  <img
                    className="h-6 translate-y-0.5"
                    src={"./icons/verified.png"}
                  />
                </div>

                <span className="text-zinc-400 text-center block">
                  @cassierbn
                </span>
              </div>
              <SocialMedia />
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
              <img
                className="w-full h-full object-cover object-[0%_40%]"
                src={"./main.gif"}
              />
              <div className="absolute top-4 left-4 p-2 bg-gray-50 rounded-full">
                <img className="h-6" src={"./icons/fansly.png"} />
              </div>
              <h3 className="absolute bottom-2.5 font-semibold w-full text-center text-xl ">
                EXCLUSIVE CONTENT
              </h3>
            </a>

            <Card
              url="https://tiktok.com/@cassiierbn"
              label="TikTok"
              altIcon="tiktokIcon"
              altImage="tiktokImage"
              srcIcon="./icons/tik-tok.png"
              srcImage="./tiktok.jpg"
              imagePos="center 20%"
            />
            <Card
              url="https://x.com/cassierbn"
              label="X"
              altIcon="icono"
              altImage="imagen"
              srcIcon="./icons/twitter.png"
              srcImage="./x.jpg"
              imagePos="center 20%"
            />
            <Card
              url="https://www.epal.gg/@1531736674"
              label="E-Pal"
              altIcon="icono"
              altImage="imagen"
              srcIcon="./icons/epal.png"
              srcImage="./epal.jpeg"
              imagePos="left 20%"
            />
            <Card
              url="https://discord.com/users/cassierbn"
              label="Discord"
              altIcon="icono"
              altImage="imagen"
              srcIcon="./icons/discord.png"
              srcImage="./discord.jpg"
              imagePos="0 35%"
            />
          </div>
          <div className="text-zinc-200 mt-4 p-4 bg-zinc-900 rounded-2xl">
            contact@cassierbn.com
          </div>
        </div>
      </div>
    </div>
  );
}
