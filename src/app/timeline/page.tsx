import { Metadata } from "next";
import { timelineSections, introductionText } from "@/data/events";
import SectionHeading from "@/components/timeline/SectionHeading";
import EventCard from "@/components/timeline/EventCard";
import VideoCard from "@/components/timeline/VideoCard";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Timeline",
  description: "A timeline of events from the ACT 36th Anniversary celebration.",
};

export default function TimelinePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Introduction */}
      <section className="mb-16">
        <SectionHeading id="introduction" title={introductionText.title} />
        <Card className="p-6 sm:p-8" hover={false}>
          <div className="space-y-4">
            {introductionText.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-slate-600 leading-relaxed text-sm sm:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Section Quick Links */}
          <div className="mt-6 pt-6 border-t border-sky-100">
            <p className="text-sm font-medium text-slate-500 mb-3">
              Jump to section:
            </p>
            <div className="flex flex-wrap gap-2">
              {timelineSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="px-4 py-2 bg-sky-50 text-sky-700 text-sm font-medium rounded-full hover:bg-sky-100 transition-colors border border-sky-200"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </div>
        </Card>
      </section>

      {/* Timeline Sections */}
      {timelineSections.map((section) => (
        <section key={section.id} className="mb-16">
          <SectionHeading id={section.id} title={section.title} />

          {/* Photo Events */}
          {section.events.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {section.events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}

          {/* Video Events */}
          {section.videos && section.videos.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.videos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          )}
        </section>
      ))}

      {/* Scroll to Top */}
      <div className="text-center">
        <a
          href="#introduction"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white text-sky-600 text-sm font-medium rounded-full shadow-cloud hover:shadow-cloud-hover hover:-translate-y-0.5 transition-all border border-sky-100"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
          Back to Top
        </a>
      </div>
    </div>
  );
}
