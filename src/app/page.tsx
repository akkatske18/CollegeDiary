import HeroSection from "@/components/home/HeroSection";
import Card from "@/components/ui/Card";
import Link from "next/link";
import { timelineSections } from "@/data/events";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Quick Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-3">
            Event Highlights
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            A glimpse into the memorable moments from our 36th anniversary
            celebration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {timelineSections.map((section) => (
            <Link key={section.id} href={`/timeline#${section.id}`}>
              <Card className="p-6 h-full cursor-pointer group">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-cloud">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {section.title}
                </h3>
                <p className="text-sm text-slate-500">
                  {section.events.length > 0
                    ? `${section.events.length} photos`
                    : ""}
                  {section.videos && section.videos.length > 0
                    ? `${section.events.length > 0 ? " · " : ""}${section.videos.length} videos`
                    : ""}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
