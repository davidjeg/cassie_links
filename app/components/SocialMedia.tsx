const socialMedia = [
  {
    name: "Fansly",
    icon: "./icons/fansly.png",
    url: "https://fansly.com/cassierbn",
  },
  {
    name: "Tiktok",
    icon: "./icons/tik-tok.png",
    url: "https://tiktok.com/@tuya_mor12",
  },
  {
    name: "Twitter",
    icon: "./icons/twitter.png",
    url: "https://x.com/cassierbn",
  },
  {
    name: "E-Pal",
    icon: "./icons/epal.png",
    url: "https://www.epal.gg/@1531736674",
  },
  {
    name: "Discord",
    icon: "./icons/discord.png",
    url: "https://discord.com/users/cassierbn",
  },
];
export default function SocialMedia() {
  return (
    <div className="flex gap-1">
      {socialMedia.map(({ name, icon, url }) => (
        <a
          target="_blank"
          href={url}
          key={name}
          className="rounded-full bg-gray-50 p-2 cursor-pointer hover:bg-gray-300 transition"
        >
          <img className="h-4" src={icon} alt={name} />
        </a>
      ))}
    </div>
  );
}
