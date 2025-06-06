import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold">Hex</h1>
        <p className="text-lg">
          Hex is a full-stack investment platform that enables users to discover, analyze, and participate in private funding rounds for high-growth startups and tokenized assets. Hex bridges the gap between retail and institutional investing in early-stage ventures.
        </p>
      </div>
        <a
          className="flex items-center gap-2 pt-4 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to hex.co →
        </a>
    </div>
  );
}
