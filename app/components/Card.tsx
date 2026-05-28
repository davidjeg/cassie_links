export default function Card({
  url,
  label,
  altIcon,
  altImage,
  srcIcon,
  srcImage,
  imagePos,
}: {
  url: string;
  label: string;
  altIcon: string;
  altImage: string;
  srcIcon: string;
  srcImage: string;
  imagePos: string;
}) {
  return (
    <a
      target="_blank"
      className="h-40 overflow-hidden rounded-xl relative"
      href={url}
    >
      <img
        style={{ objectPosition: imagePos }}
        className="w-full h-full object-cover"
        src={srcImage}
        alt={altImage}
      />
      <div className="absolute top-2 left-2 p-2 bg-gray-50 rounded-full">
        <img className="h-4" src={srcIcon} alt={altIcon} />
      </div>
      <h3 className="absolute bottom-1 font-semibold w-full text-center">
        {label}
      </h3>
    </a>
  );
}
