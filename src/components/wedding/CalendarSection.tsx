import { motion } from "framer-motion";

const DAYS = ["أحد", "إثن", "ثلا", "أرب", "خمي", "جمع", "سبت"];
const MAY_2026 = [
  [null, null, null, null, null, 1, 2],
  [3, 4, 5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15, 16],
  [17, 18, 19, 20, 21, 22, 23],
  [24, 25, 26, 27, 28, 29, 30],
  [31, null, null, null, null, null, null],
];

const HIGHLIGHT_DAY = 6;
const slowFade = { duration: 1.8, ease: "easeOut" as const };

const toArabic = (n: number) => n.toString().replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[+d]);

const CalendarSection = () => {
  return (
    <section className="py-20 px-4 bg-burgundy-gradient relative">
      <div className="max-w-sm mx-auto">
        <motion.h2
          className="font-script text-gold text-3xl md:text-4xl text-center mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={slowFade}
        >
          احفظوا التاريخ
        </motion.h2>

        <motion.p
          className="text-center font-display text-cream text-lg mb-8 tracking-widest"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...slowFade, delay: 0.4 }}
        >
          مايو ٢٠٢٦
        </motion.p>

        <motion.div
          className="bg-cream rounded-lg p-6 gold-border gold-glow"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 0.5 }}
        >
          <div className="grid grid-cols-7 gap-1 mb-3">
            {DAYS.map((day) => (
              <div key={day} className="text-center font-display text-burgundy-deep text-xs font-bold py-1">
                {day}
              </div>
            ))}
          </div>

          {MAY_2026.map((week, wi) => (
            <div key={wi} className="grid grid-cols-7 gap-1">
              {week.map((day, di) => (
                <div key={di} className="text-center py-1.5">
                  {day !== null && (
                    <span
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-body text-sm transition-all
                        ${day === HIGHLIGHT_DAY
                          ? "bg-burgundy-deep text-cream font-bold animate-glow-pulse"
                          : "text-burgundy"
                        }`}
                    >
                      {toArabic(day)}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </motion.div>

        <motion.p
          className="text-center mt-6 font-script text-gold-light text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...slowFade, delay: 1 }}
        >
          ✦ من ٥ مساءً حتى ١٢ منتصف الليل ✦
        </motion.p>
      </div>
    </section>
  );
};

export default CalendarSection;
