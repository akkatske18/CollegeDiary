import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-sky-100 bg-white/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-slate-400">
          &copy; {new Date().getFullYear()} {SITE_NAME}. The Sky is Blue.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="/about"
            className="text-sm text-slate-400 hover:text-sky-500 transition-colors"
          >
            About
          </Link>
          <Link
            href="/timeline"
            className="text-sm text-slate-400 hover:text-sky-500 transition-colors"
          >
            Timeline
          </Link>
        </div>
      </div>
    </footer>
  );
}
