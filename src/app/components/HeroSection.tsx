import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroSectionProps {
  onWaitlistSubmit: (email: string) => void;
}

export function HeroSection({ onWaitlistSubmit }: HeroSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    onWaitlistSubmit(email);

    setTimeout(() => {
      setEmail("");
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20"
    >
      {/* Background */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 40, 0], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-[15%] w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-[20%] w-48 h-48 rounded-full bg-gradient-to-br from-lime-400/20 to-green-500/20 blur-3xl"
        />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-12"
        >
          nrruge
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl max-w-5xl mx-auto mb-8 bg-gradient-to-br from-white via-blue-50 to-gray-300 bg-clip-text text-transparent"
        >
          E ardhmja e lëvizjes
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 mb-16 max-w-2xl mx-auto"
        >
          Bëhu pjesë e aventurës sonë! Na jepni email-in tuaj për të qenë i pari që do ta provojë.
        </motion.p>

        {/* Waitlist */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-md mx-auto mb-16"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Shkruani email-in tuaj"
                required
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-white/5 backdrop-blur-xl border border-blue-500/30 rounded-2xl text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 pulse-ring"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={!isSubmitting ? { scale: 1.05 } : undefined}
              whileTap={!isSubmitting ? { scale: 0.95 } : undefined}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300 relative overflow-hidden group disabled:opacity-60"
            >
              <span className="relative z-10">
                {isSubmitting ? "Duke u regjistruar..." : "Regjistrohu"}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </div>
        </motion.form>

        {/* Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative mx-auto max-w-2xl"
        >
          <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl" />
          <div className="relative bg-white/5 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-2 shadow-2xl shadow-blue-500/20">
            <ImageWithFallback
              src="https://i.postimg.cc/m2DV094D/nrruge-ui-in-hand-phone.png"
              alt="nrruge app interface"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </motion.div>
      </motion.div>

      <style>{`
        .pulse-ring {
          animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse-ring {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(37, 99, 235, 0);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(37, 99, 235, 0.1);
          }
        }
      `}</style>
    </section>
  );
}
