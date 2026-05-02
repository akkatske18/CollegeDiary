import { Metadata } from "next";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "About",
  description:
    "ACT Celebrates 36 Years of Unstoppable Action — About the Asian College of Technology.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4 border border-sky-200 shadow-sm">
          <svg
            className="w-4 h-4 text-sky-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          </svg>
          <span className="text-sm font-medium text-sky-700">About ACT</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-2">
          ACT Celebrates 36 Years of{" "}
          <span className="text-gradient-sky">Unstoppable Action</span>
        </h1>
      </div>

      {/* Content Card */}
      <Card className="p-6 sm:p-10" hover={false}>
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-6">
            This special publication commemorates our 36-year journey of
            excellence in education, innovation, and community service.
          </p>
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-6">
            Over the years, ACT has fostered countless leaders and visionaries
            who continue to make a significant impact in their fields.
          </p>
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
            Join us as we reflect on our achievements, share inspiring stories,
            and celebrate the relentless spirit that has defined our institution
            since its founding.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-sky-100">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-sky-600">
              36
            </div>
            <div className="text-xs sm:text-sm text-slate-500 mt-1">
              Years
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-sky-600">
              1000+
            </div>
            <div className="text-xs sm:text-sm text-slate-500 mt-1">
              Graduates
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-sky-600">
              ∞
            </div>
            <div className="text-xs sm:text-sm text-slate-500 mt-1">
              Memories
            </div>
          </div>
        </div>
      </Card>

      {/* Footer Note */}
      <div className="text-center mt-8">
        <p className="text-sm text-slate-400">
          &copy; 2024 Final Project. All rights reserved.
        </p>
      </div>
    </div>
  );
}
