import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { MapPin, CreditCard, Headphones, Shield } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  gradient: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Live Tracking",
    description: "Track your ride in real-time with precision GPS and ETA updates every second.",
    icon: <MapPin className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1698464795984-9da9eb4a99cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjByaWRlJTIwc2hhcmluZyUyMGNhcnxlbnwxfHx8fDE3Njc0NDE1ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 3,
    title: "24/7 Support",
    description: "Our dedicated team is always here to help, day or night, whenever you need us.",
    icon: <Headphones className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1653212883731-4d5bc66e0181?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY3NDI5MzgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-lime-400/20 to-green-500/20",
  },
  {
    id: 4,
    title: "Safety First",
    description: "Advanced verification, emergency assistance, and real-time safety monitoring.",
    icon: <Shield className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1661176920546-5b39bcd9fdba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMDNkJTIwc3BoZXJlJTIwbmVvbnxlbnwxfHx8fDE3Njc0NDE1Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-orange-500/20 to-red-500/20",
  },
];

export function BentoGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, amount: 0.2 });

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div ref={gridRef} className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >

        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              {/* Glassmorphic card */}
              <div className="relative h-full bg-white/5 backdrop-blur-xl border border-blue-500/20 rounded-3xl overflow-hidden transition-all duration-500 group-hover:border-blue-400/50 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Image section */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative p-6">
                  {/* Icon with glow effect */}
                  <div className="mb-4 inline-flex p-3 bg-blue-500/10 border border-blue-500/30 rounded-2xl text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-500/20 group-hover:border-blue-400/50 group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-500">
                    {feature.icon}
                  </div>

                  <h3 className="text-2xl mb-3 text-white group-hover:text-blue-50 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Cyber accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-lime-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Outer glow on hover */}
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/0 via-blue-500/20 to-purple-500/0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
