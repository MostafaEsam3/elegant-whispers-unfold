import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { PartyPopper, Heart } from "lucide-react";

const slowFade = { duration: 1.2, ease: "easeOut" as const };

type Question = { q: string; a: string; b: string; celebrate: string };

const QUESTIONS: Question[] = [
  { q: "هتيجي لوحدك ولا مع حد؟", a: "لوحدي", b: "مع حد", celebrate: "يا مرحبا بيك ✨" },
  { q: "هترقص في الفرح؟", a: "أكيد طبعاً", b: "هتفرّج بس", celebrate: "هنرقص لحد الصبح" },
  { q: "هتيجي بدري ولا متأخر؟", a: "بدري في الميعاد", b: "متأخر شوية", celebrate: "في انتظارك" },
];

const Confetti = () => {
  const pieces = useMemo(
    () =>
      Array.from({ length: 24 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.4,
        char: ["✦", "♥", "✧", "❀"][Math.floor(Math.random() * 4)],
      })),
    []
  );
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          className="absolute text-2xl text-burgundy"
          style={{ left: `${p.left}%`, top: "-10%" }}
          initial={{ y: 0, opacity: 1, rotate: 0 }}
          animate={{ y: "120vh", opacity: [1, 1, 0], rotate: 360 }}
          transition={{ duration: 2.5, delay: p.delay, ease: "easeIn" }}
        >
          {p.char}
        </motion.div>
      ))}
    </div>
  );
};

const RsvpSection = () => {
  const [coming, setComing] = useState<null | boolean>(null);
  const [step, setStep] = useState(0);
  const [celebrate, setCelebrate] = useState(false);
  const [done, setDone] = useState(false);

  const handleAnswer = () => {
    setCelebrate(true);
    setTimeout(() => {
      setCelebrate(false);
      if (step + 1 >= QUESTIONS.length) {
        setDone(true);
      } else {
        setStep((s) => s + 1);
      }
    }, 1600);
  };

  return (
    <section dir="rtl" className="py-20 px-4 bg-burgundy-gradient relative overflow-hidden min-h-[60vh]">
      <div className="max-w-lg mx-auto text-center relative">
        <motion.h2
          className="font-diwani text-burgundy-deep text-4xl md:text-5xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={slowFade}
        >
          تأكيد الحضور
        </motion.h2>

        <AnimatePresence mode="wait">
          {coming === null && (
            <motion.div
              key="initial"
              className="bg-burgundy-deep rounded-xl p-8 gold-border gold-glow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
            >
              <Heart className="w-10 h-10 text-cream mx-auto mb-4" />
              <p className="font-diwani text-cream text-2xl mb-8">هتشاركنا فرحتنا؟</p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => setComing(true)}
                  className="px-8 py-3 rounded-full bg-cream text-burgundy-deep font-diwani font-bold text-xl hover:scale-105 transition-transform shadow-lg"
                >
                  أكيد جاي
                </button>
                <button
                  onClick={() => setComing(false)}
                  className="px-8 py-3 rounded-full bg-transparent text-cream font-diwani font-bold text-xl gold-border hover:bg-cream/10 transition-all"
                >
                  مش هقدر
                </button>
              </div>
            </motion.div>
          )}

          {coming === false && (
            <motion.div
              key="not-coming"
              className="bg-burgundy-deep rounded-xl p-8 gold-border gold-glow"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <p className="font-diwani text-cream text-3xl mb-3">هنفتقدك ❤</p>
              <p className="font-diwani text-cream/80 text-lg">شكراً ليك، وفي انتظارك في فرحة تانية</p>
            </motion.div>
          )}

          {coming === true && !done && (
            <motion.div
              key={`q-${step}`}
              className="bg-burgundy-deep rounded-xl p-8 gold-border gold-glow relative overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <p className="font-diwani text-cream/70 text-base mb-2">
                سؤال {step + 1} من {QUESTIONS.length}
              </p>
              <p className="font-diwani text-cream text-3xl md:text-4xl mb-8">{QUESTIONS[step].q}</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleAnswer}
                  disabled={celebrate}
                  className="px-6 py-3 rounded-full bg-cream text-burgundy-deep font-diwani font-bold text-xl hover:scale-105 transition-transform shadow-lg disabled:opacity-60"
                >
                  {QUESTIONS[step].a}
                </button>
                <button
                  onClick={handleAnswer}
                  disabled={celebrate}
                  className="px-6 py-3 rounded-full bg-transparent text-cream font-diwani font-bold text-xl gold-border hover:bg-cream/10 transition-transform shadow-lg disabled:opacity-60"
                >
                  {QUESTIONS[step].b}
                </button>
              </div>

              <AnimatePresence>
                {celebrate && (
                  <>
                    <Confetti />
                    <motion.p
                      className="absolute inset-x-0 bottom-4 font-diwani text-cream text-2xl"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {QUESTIONS[step].celebrate}
                    </motion.p>
                  </>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {done && (
            <motion.div
              key="done"
              className="bg-burgundy-deep rounded-xl p-8 gold-border gold-glow relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
            >
              <Confetti />
              <PartyPopper className="w-12 h-12 text-cream mx-auto mb-4" />
              <p className="font-diwani text-cream text-3xl mb-3">شكراً ليك</p>
              <p className="font-diwani text-cream/80 text-xl">في انتظارك يوم ٦ مايو ٢٠٢٦</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RsvpSection;
