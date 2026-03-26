import { motion } from "framer-motion";

const COLORS = [
  { name: "أسود", hsl: "0 0% 10%" },
  { name: "بوردو غامق", hsl: "345 50% 20%" },
  { name: "نبيتي", hsl: "0 40% 25%" },
  { name: "بيج", hsl: "35 25% 75%" },
];

const DressCodeSection = () => {
  return (
    <section className="py-20 px-4 bg-burgundy-gradient relative">
      <div className="max-w-lg mx-auto text-center">
        <motion.h2
          className="font-script text-gold text-3xl md:text-4xl mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          دريس كود
        </motion.h2>

        <motion.p
          className="font-body text-cream-dark text-base mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          نتمنى أن يكون لباسكم من الألوان التالية
          <br />
          لنخلق معاً صورة متناسقة وأنيقة
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-6 md:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {COLORS.map((color, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-2 group cursor-pointer"
              whileHover={{ scale: 1.15, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div
                className="w-14 h-14 md:w-16 md:h-16 rounded-full gold-border shadow-lg transition-shadow duration-300 group-hover:shadow-[0_0_20px_hsl(40,60%,55%,0.4)]"
                style={{ backgroundColor: `hsl(${color.hsl})` }}
              />
              <span className="font-body text-cream-dark text-xs">{color.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DressCodeSection;
