import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-12 px-6 py-16 text-center">
      <Image
        src="/logo-cora-bijeli.png"
        alt="CORA"
        width={1600}
        height={386}
        priority
        className="h-auto w-full max-w-[min(70vw,28rem)]"
      />

      <address className="flex flex-col gap-1 text-sm not-italic leading-relaxed text-neutral-300">
        <p className="font-medium text-white">CORA d.o.o. Sarajevo</p>
        <p>Projektovanje, revizija projektne dokumentacije, nadzor, enterijer</p>
        <p>Juraja Najtharta 17, Sarajevo</p>
        <p>ID broj: 4203305110003</p>
        <a
          className="mt-3 text-white underline underline-offset-4"
          href="mailto:info@cora.ba"
        >
          info@cora.ba
        </a>
      </address>
    </main>
  );
}
