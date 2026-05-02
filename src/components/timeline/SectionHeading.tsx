interface SectionHeadingProps {
  id: string;
  title: string;
}

export default function SectionHeading({ id, title }: SectionHeadingProps) {
  return (
    <div id={id} className="scroll-mt-20 mb-8">
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-300 to-transparent" />
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center">
          {title}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-300 to-transparent" />
      </div>
    </div>
  );
}
