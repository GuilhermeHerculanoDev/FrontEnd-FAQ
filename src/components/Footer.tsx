import Image from "next/image";

export default function Footer() {
    return (
        <div className="flex flex-col items-center gap-8 mt-8 mb-4">
            <p>Connect with us</p>

            <div className="flex gap-4">
                <Image src={"/icons/icon-instagram.png"} alt={"Img icon-instagram"} width={25} height={25}/>
                <Image src={"/icons/icon-facebook.png"} alt={"Img icon-facebook"} width={27} height={27}/>
                <Image src={"/icons/icon-whatssap.png"} alt={"Img icon-whatssap"} width={25} height={25}/>
                <Image src={"/icons/icon-X.png"} alt={"Img icon-X"} width={25} height={25}/>
            </div>
            
            <div className="w-4/5 h-px bg-[#262626] mx-auto"></div>

            <p>Feito por Guilherme</p>
        </div>
    );
  }