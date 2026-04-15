import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen px-4 py-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-3xl items-center justify-center">
        <div className="card-container w-full max-w-xl p-8 text-center sm:p-10">
          <div className="grain"></div>
          <div className="inner flex flex-col items-center gap-4">
            <div className="lbl mb-0">404</div>
            <h1 className="text-3xl font-bold tracking-tight text-[var(--tp)] sm:text-4xl">
              Page not found
            </h1>
            <p className="max-w-md text-sm leading-7 text-[var(--ts)]">
              The page you are looking for does not exist, but the portfolio is
              still right here.
            </p>
            <Link className="ctab mt-2" href="/">
              Back home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
