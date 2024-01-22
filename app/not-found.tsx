import Image from "next/image";
import Link from "next/link";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center flex-col">
      <Image
        src="/404.svg"
        width={750}
        height={750}
        alt="404 error: page not found"
      />
      <div>Apologies, I only have one page on this portfolio website.</div>
      <div>
        Would you like to{" "}
        <span>
          <Link href="/" className="hover:underline font-bold">
            go back?
          </Link>
        </span>
      </div>
    </div>
  );
};

export default NotFound;
