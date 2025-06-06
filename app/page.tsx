import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-8 md:p-20">
      <div className="flex flex-col items-center justify-center text-center max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] gap-8">
        <Image 
          src="/logos/hex-black.svg" 
          alt="Hex" 
          width={400} 
          height={400} 
          className="w-40 h-40 sm:w-24 sm:h-24 md:w-32 md:h-32" 
          priority
        />
        <p className="text-xl sm:text-2xl">
          Hex is a full-stack investment platform that enables users to discover, analyze, and participate in private funding rounds for high-growth startups and tokenized assets. Hex bridges the gap between retail and institutional investing in early-stage ventures.
        </p>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm sm:text-base"
          href="https://hex-phi.vercel.app/"
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
    </main>
  );
}
