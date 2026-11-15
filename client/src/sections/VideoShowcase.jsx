import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from 'lucide-react';

const VideoShowcase = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;

    if (videoRef.current) {
      videoRef.current.muted = nextMuted;
    }

    setIsMuted(nextMuted);
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!isFullscreen) {
        videoRef.current.requestFullscreen?.();
      } else {
        document.exitFullscreen?.();
      }
    }
  };

  // Keep fullscreen state in sync (e.g. when user presses Esc)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // React's `muted` prop is unreliable on media elements — sync via ref
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <section className="py-20 lg:py-32 bg-charcoal">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">IN ACTION</p>
          <h2 className="section-title">SEE OUR MACHINES IN ACTION</h2>
          <p className="text-concrete-gray text-lg max-w-3xl mx-auto mt-4">
            Watch our heavy equipment and earthmoving services in real-world applications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden border-2 border-concrete-gray/20"
        >
          <div className="aspect-video relative bg-charcoal-dark">
            <video
              ref={videoRef}
              className="w-full h-full object-cover cursor-pointer ken-burns"
              poster="/assets/images/hero/hero-poster.svg"
              autoPlay
              loop
              playsInline
              muted={isMuted}
              onClick={togglePlay}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/assets/videos/hero/earthmoving-hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Controls Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Custom Controls */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={togglePlay}
                  className="w-12 h-12 rounded-full bg-construction-yellow flex items-center justify-center hover:bg-construction-yellow-dark transition-colors duration-300"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="text-charcoal-dark" size={20} /> : <Play className="text-charcoal-dark" size={20} />}
                </button>
                <button
                  onClick={toggleMute}
                  className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="text-white" size={18} /> : <Volume2 className="text-white" size={18} />}
                </button>
              </div>
              <button
                onClick={toggleFullscreen}
                className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
                aria-label={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
              >
                {isFullscreen ? <Minimize className="text-white" size={18} /> : <Maximize className="text-white" size={18} />}
              </button>
            </div>

            {/* Sound indicator — browsers require a tap before audio can play */}
            {isMuted && (
              <button
                onClick={toggleMute}
                className="absolute top-4 right-4 z-10 flex items-center space-x-2 bg-black/60 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-xs font-poppins font-medium uppercase tracking-wider hover:bg-construction-yellow hover:text-charcoal-dark transition-colors duration-300"
                aria-label="Enable sound"
              >
                <VolumeX size={14} />
                <span>Tap for sound</span>
              </button>
            )}

            {/* Play Button Overlay */}
            {!isPlaying && (
              <button
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center"
                aria-label="Play video"
              >
                <div className="w-20 h-20 rounded-full bg-construction-yellow/90 flex items-center justify-center hover:bg-construction-yellow transition-colors duration-300">
                  <Play className="text-charcoal-dark" size={32} />
                </div>
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoShowcase;