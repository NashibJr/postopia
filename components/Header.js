import Image from "next/image";
import Link from "next/link";
import logo from "@/public/download.png";

const Header = () => {
  return (
    <nav className="mb-16 p-3 flex flex-row justify-between bg">
      <Link href="/">
        <Image src={logo} alt="" width={50} height={50} />
      </Link>
    </nav>
  );
};

export default Header;
