import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

const MusicPlayer = ({ shouldPlay }: { shouldPlay: boolean }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.4;
    audio.loop = true;
    if (shouldPlay && !muted) {
      audio.play().catch(() => {
        // Autoplay blocked — wait for user interaction
        const resume = () => {
          audio.play().catch(() => {});
          window.removeEventListener("click", resume);
          window.removeEventListener("touchstart", resume);
        };
        window.addEventListener("click", resume, { once: true });
        window.addEventListener("touchstart", resume, { once: true });
      });
    } else {
      audio.pause();
    }
  }, [shouldPlay, muted]);

  return (
    <>
      <audio ref={audioRef} src="/wedding-music.mp3" preload="auto" />
      <motion.button
        onClick={() => setMuted((m) => !m)}
        className="fixed top-4 right-4 z-50 w-11 h-11 rounded-full bg-burgundy-deep/80 backdrop-blur gold-border flex items-center justify-center text-gold hover:scale-110 transition-transform shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        aria-label={muted ? "تشغيل الموسيقى" : "إيقاف الموسيقى"}
      >
        {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </motion.button>
    </>
  );
};

export default MusicPlayer;
