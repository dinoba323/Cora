const usluge = [
  "Projektovanje",
  "Revizija projektne dokumentacije",
  "Nadzor",
  "Enterijer",
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col justify-center gap-10 px-6 py-16 mx-auto w-full max-w-3xl">
      <header className="flex flex-col gap-3">
        <h1 className="text-5xl font-semibold tracking-tight">CORA</h1>
        <p className="text-lg opacity-70">CORA d.o.o. Sarajevo</p>
      </header>

      <ul className="flex flex-col gap-2 text-xl">
        {usluge.map((usluga) => (
          <li key={usluga}>{usluga}</li>
        ))}
      </ul>

      <footer className="flex flex-col gap-1 opacity-70">
        <p>Juraja Najtharta 17, Sarajevo</p>
        <a className="underline" href="mailto:info@cora.ba">
          info@cora.ba
        </a>
      </footer>
    </main>
  );
}
