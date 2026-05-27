export default function Card({
  link,
  altIcon,
  altImage,
  srcIcon,
  srcImage,
}: {
  link: string;
  altIcon: string;
  altImage: string;
  srcIcon: string;
  srcImage: string;
}) {
  return (
    <a className="h-40 overflow-hidden rounded-xl relative" href={link}>
      <img
        className="w-full h-full object-cover object-[0%_30%]"
        src={srcImage}
        alt={altImage}
      />
      <div className="absolute top-2 left-2 p-2 bg-gray-50 rounded-full">
        <img className="h-4" src={srcIcon} alt={altIcon} />
      </div>
      <h3 className="absolute bottom-0 font-semibold w-full text-center">
        {link}
      </h3>
    </a>
  );
}
