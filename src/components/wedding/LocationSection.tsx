import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="py-20 px-4 bg-burgundy-gradient relative overflow-hidden">
      <div className="max-w-lg mx-auto text-center">
        <motion.h2
          className="font-script text-gold text-3xl md:text-4xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          مكان الحفل
        </motion.h2>

        <motion.div
          className="bg-secondary rounded-xl p-8 gold-border gold-glow"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-burgundy-deep mb-4"
            animate={{ y: [-3, 3, -3] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <MapPin className="w-8 h-8 text-gold" />
          </motion.div>

          <h3 className="font-display text-cream text-2xl md:text-3xl font-bold mb-2">
            القصر
          </h3>
          <p className="font-body text-cream-dark text-lg mb-1">Al Qasr</p>
          <p className="font-body text-muted-foreground text-base">سوهاج، مصر</p>

          <div className="separator-ornament w-24 mx-auto my-6" />

          <p className="font-body text-cream-dark text-sm leading-relaxed">
            نتطلع لاستقبالكم في أجواء ساحرة
            <br />
            تليق بهذه المناسبة السعيدة
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
