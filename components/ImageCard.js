import Image from "next/image";
import Link from "next/link";

const ImageCard = ({ title, alt, src }) => {
  return (
    <div className="bg-white p-2 items-center rounded-lg shadow-lg">
      <p className="mb-5 text-xl font-light">{title}</p>
      <Link href={src}>
        <a>
          <Image
            alt={alt}
            src={src}
            layout="responsive"
            objectFit="contain"
            width={350}
            height={250}
          />
        </a>
      </Link>
    </div>
  );
};

export default ImageCard;
