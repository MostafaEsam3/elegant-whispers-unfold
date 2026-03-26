import { motion } from "framer-motion";
import { Wine } from "lucide-react";

const slowFade = { duration: 1.2, ease: "easeOut" as const };

const WishesSection = () => {
  return (
    <section className="py-20 px-4 bg-burgundy-gradient relative overflow-hidden">
      <motion.div
        className="absolute top-10 right-10 text-gold opacity-15 text-4xl pointer-events-none"
        animate={{ y: [-15, 15, -15], rotate: [-5, 5, -5] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        🌙
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-10 text-gold opacity-15 text-3xl pointer-events-none"
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        ⭐
      </motion.div>

      <div className="max-w-lg mx-auto text-center">
        <motion.h2
          className="font-script text-gold text-3xl md:text-4xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={slowFade}
        >
          Our Wishes
        </motion.h2>

        <motion.div
          className="bg-secondary rounded-xl p-8 gold-border gold-glow relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...slowFade, delay: 0.3 }}
        >
          <motion.div
            className="inline-flex items-center justify-center mb-6"
            animate={{ rotate: [-3, 3, -3] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <Wine className="w-10 h-10 text-gold" />
          </motion.div>

          <motion.p
            className="font-body text-cream text-lg leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...slowFade, delay: 0.5 }}
          >
            The most beautiful gift is your presence
            <br />
            and sharing our joy.
            <br />
            If you'd like to bring a gift,
            <br />
            we'd love a bottle of your favorite drink.
          </motion.p>

          <div className="separator-ornament w-24 mx-auto my-4" />

          <motion.p
            className="font-script text-gold-light text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...slowFade, delay: 0.7 }}
          >
            Instead of flowers
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default WishesSection;
