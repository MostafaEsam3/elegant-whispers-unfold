import { motion } from "framer-motion";
import { Wine } from "lucide-react";

const WishesSection = () => {
  return (
    <section className="py-20 px-4 bg-burgundy-gradient relative overflow-hidden">
      {/* Parallax floating elements */}
      <motion.div
        className="absolute top-10 right-10 text-gold opacity-15 text-4xl pointer-events-none"
        animate={{ y: [-15, 15, -15], rotate: [-5, 5, -5] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        🌙
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-10 text-gold opacity-15 text-3xl pointer-events-none"
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        ⭐
      </motion.div>

      <div className="max-w-lg mx-auto text-center">
        <motion.h2
          className="font-script text-gold text-3xl md:text-4xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          أمنياتنا
        </motion.h2>

        <motion.div
          className="bg-secondary rounded-xl p-8 gold-border gold-glow relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="inline-flex items-center justify-center mb-6"
            animate={{ rotate: [-3, 3, -3] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Wine className="w-10 h-10 text-gold" />
          </motion.div>

          <p className="font-body text-cream text-lg leading-relaxed mb-6">
            أجمل هدية هي حضوركم ومشاركتكم فرحتنا.
            <br />
            إن أحببتم إحضار هدية،
            <br />
            يسعدنا أن تكون زجاجة من مشروبكم المفضل.
          </p>

          <div className="separator-ornament w-24 mx-auto my-4" />

          <p className="font-script text-gold-light text-xl">
            بدلاً من الزهور
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WishesSection;
