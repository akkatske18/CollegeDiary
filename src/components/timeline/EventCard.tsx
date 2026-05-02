import Image from "next/image";
import Card from "@/components/ui/Card";
import { TimelineEvent } from "@/types";

interface EventCardProps {
  event: TimelineEvent;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative w-full h-64 sm:h-72">
        <Image
          src={event.image}
          alt={event.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-5">
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {event.caption}
        </p>
      </div>
    </Card>
  );
}
