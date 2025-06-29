import Link from "next/link";

export function NavBar() {
    return (
      <nav className="py-5 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/">
            <h1 className="text-3xl font-semibold">
              Sharon<span className="text-blue-500">Basovich</span>
            </h1>

            <div className="hidden sm:flex items-center gap-6"></div>
          </Link>
        </div>
      </nav>
    );
}