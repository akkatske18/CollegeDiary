import Card from "@/components/ui/Card";
import { VideoEvent } from "@/types";

interface VideoCardProps {
  video: VideoEvent;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative w-full">
        <video
          controls
          className="w-full h-64 sm:h-72 object-cover"
          preload="metadata"
        >
          <source src={video.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="p-5">
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {video.caption}
        </p>
      </div>
    </Card>
  );
}
