import Card from "./components/Card";
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
      {/* Main box */}
      <div className="w-full max-w-xl rounded-4xl bg-black my-8 z-10 shadow-md overflow-hidden">
        {/* HEADER */}
        <div className="relative ">
          <div className="h-[600px] ">
            <img
              src={"./fff.jpg"}
              alt="main-imgcassie"
              className="object-cover w-full h-full top-4 object-[0%_40]"
            />
            {/* OVERLAY */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent"></div>

            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center
            justify-center gap-2"
            >
              <div>
                <h1 className="text-2xl text-zinc-200 font-bold">
                  Cassie Robin
                </h1>
                <span className="text-zinc-400 text-center block">
                  @cassierbn
                </span>
              </div>
              <SocialMedia />
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-2 gap-2 text-zinc-200">
            <a
              href=""
              className="h-80 overflow-hidden rounded-xl col-span-2 relative"
            >
              <img
                className="w-full h-full object-cover object-[0%_40%]"
                src={"./main.gif"}
              />
              <div className="absolute top-4 left-4 p-2 bg-gray-50 rounded-full">
                <img className="h-6" src={"./icons/fansly.png"} />
              </div>
              <h3 className="absolute bottom-0 font-semibold w-full text-center text-xl ">
                Fansly
              </h3>
            </a>

            <Card
              link="TikTok"
              altIcon="tiktokIcon"
              altImage="tiktokImage"
              srcIcon="./icons/twitter.png"
              srcImage="./tiktok.jpg"
            />
            <Card
              link="x"
              altIcon="icono"
              altImage="imagen"
              srcIcon="./icons/twitter.png"
              srcImage="./fansly.jpg"
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
