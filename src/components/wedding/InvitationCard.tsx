import { motion } from "framer-motion";

const InvitationCard = () => {
  return (
    <section className="py-20 px-4 bg-burgundy-gradient relative overflow-hidden">
      {/* Decorative corner elements */}
      <motion.div
        className="max-w-lg mx-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="bg-cream rounded-lg p-8 md:p-12 gold-glow gold-border relative">
          {/* Corner decorations */}
          {["top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3"].map((pos, i) => (
            <div
              key={i}
              className={`absolute ${pos} w-6 h-6 border-gold`}
              style={{
                borderTop: i < 2 ? "2px solid hsl(40, 60%, 55%)" : "none",
                borderBottom: i >= 2 ? "2px solid hsl(40, 60%, 55%)" : "none",
                borderLeft: i % 2 === 0 ? "2px solid hsl(40, 60%, 55%)" : "none",
                borderRight: i % 2 !== 0 ? "2px solid hsl(40, 60%, 55%)" : "none",
              }}
            />
          ))}

          <div className="text-center">
            <motion.h2
              className="font-script text-burgundy-deep text-4xl md:text-5xl mb-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Marwa & Usief
            </motion.h2>

            <motion.div
              className="separator-ornament w-32 mx-auto my-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />

            <motion.p
              className="font-body text-burgundy text-lg md:text-xl leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              بكل الحب والفرح، ندعوكم لمشاركتنا
              <br />
              أجمل يوم في حياتنا
            </motion.p>

            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className="font-display text-burgundy-deep text-lg font-semibold tracking-wider">
                ٦ مايو ٢٠٢٦
              </p>
              <p className="font-body text-burgundy-light text-base">
                من الساعة ٥ مساءً حتى ١٢ صباحاً
              </p>
            </motion.div>

            <motion.div
              className="mt-8 flex items-center justify-center gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <span className="text-gold text-xl">✦</span>
              <p className="font-script text-burgundy text-xl">نتشرف بحضوركم</p>
              <span className="text-gold text-xl">✦</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default InvitationCard;
