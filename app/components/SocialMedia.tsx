const socialMedia = [
  {
    name: "Tiktok",
    icon: "./icons/tik-tok.png",
  },
  {
    name: "Twitter",
    icon: "./icons/twitter.png",
  },
  {
    name: "Only Fans",
    icon: "./icons/fansly.png",
  },
];
export default function SocialMedia() {
  return (
    <div className="flex gap-1">
      {socialMedia.map(({ name, icon }) => (
        <div
          key={name}
          className="rounded-full bg-gray-50 p-2 cursor-pointer hover:bg-gray-300 transition"
        >
          <img className="h-4" src={icon} alt={name} />
        </div>
      ))}
    </div>
  );
}
