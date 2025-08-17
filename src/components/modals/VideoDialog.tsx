import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface VideoDialogProps {
  trigger: React.ReactNode;
  title?: string;
  videoUrl?: string; // e.g., YouTube embed URL
  posterUrl?: string;
}

export default function VideoDialog({ trigger, title = "X极客网，做属于中国人自己的极客圈子", videoUrl, posterUrl }: VideoDialogProps) {
  const [play, setPlay] = useState(false);
  const openedRef = useRef(false);

  useEffect(() => {
    return () => {
      openedRef.current = false;
    };
  }, []);

  const renderPlayer = () => {
    if (!videoUrl) {
      return (
        <div className="h-full w-full flex items-center justify-center text-sm text-muted-foreground">
          宣传片敬请期待
        </div>
      );
    }
    return (
      <iframe
        className="h-full w-full rounded-md"
        src={`${videoUrl}${videoUrl.includes("?") ? "&" : "?"}autoplay=1&rel=0`}
        title="宣传片"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-3xl sm:rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-light">{title}</DialogTitle>
          <DialogDescription>X极客网 · 宣言视频</DialogDescription>
        </DialogHeader>
        <AspectRatio ratio={16 / 9}>
          {!play ? (
            <button
              className="relative h-full w-full group"
              onClick={() => setPlay(true)}
            >
              {posterUrl ? (
                <img src={posterUrl} alt="视频封面" className="h-full w-full object-cover rounded-md" loading="lazy" decoding="async" draggable="false" onContextMenu={(e) => e.preventDefault()} />
              ) : (
                <div className="h-full w-full rounded-md border flex items-center justify-center text-sm text-muted-foreground">点击播放</div>
              )}
              <span className="absolute inset-0 grid place-items-center">
                <span className="h-16 w-16 rounded-full bg-background/70 border flex items-center justify-center transition group-hover:scale-105">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                </span>
              </span>
            </button>
          ) : (
            renderPlayer()
          )}
        </AspectRatio>

      </DialogContent>
    </Dialog>
  );
}
