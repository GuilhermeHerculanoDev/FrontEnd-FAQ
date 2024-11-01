import Image from "next/image";

interface Img {
  src: string
}

export default function Img({src}: Img) {
  return (
    <div>
      <Image 
        src={src}
        alt="Descrição da imagem"
        width={280}
        height={280}
      />
    </div>
  );
}
