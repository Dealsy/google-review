import Image from "next/image";
import reviewCardImage from "../public/review-card.png";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-zinc-50 p-4 sm:p-6">
      <Image
        src={reviewCardImage}
        alt="Review card"
        preload
        sizes="100vw"
        className="h-auto w-full max-w-md rounded-lg"
      />
    </main>
  );
}
