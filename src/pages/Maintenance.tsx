import { motion } from 'framer-motion';

const Maintenance = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-primary-deep">

    {/* Background — same technique as HeroSection */}
    <div className="absolute inset-0 z-0">
      <img
        src="/6d8dae8a-e5ca-4736-b48b-4902bce36e74.png"
        alt=""
        aria-hidden
        className="w-full h-full object-cover opacity-[0.15] mix-blend-luminosity scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-deep/90 via-primary-deep/70 to-primary-deep" />
    </div>

    {/* Decorative vertical line — right edge, same as HeroSection */}
    <div className="absolute right-12 bottom-0 w-[1px] h-32 bg-gradient-to-t from-accent to-transparent hidden lg:block" />

    {/* Main content */}
    <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <img
          src="/logo.png"
          alt="하나주택종합관리"
          className="h-24 brightness-0 invert opacity-75 mx-auto"
        />
      </motion.div>

      {/* Eyebrow — exactly matches HeroSection pattern */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex items-center space-x-4 mb-8"
      >
        <div className="h-[2px] w-12 bg-accent" />
        <span className="text-secondary-light font-serif text-xl tracking-[0.2em] uppercase">
          System Maintenance
        </span>
        <div className="h-[2px] w-12 bg-accent" />
      </motion.div>

      {/* Main heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number,number,number,number], delay: 0.2 }}
        className="text-5xl md:text-7xl text-white font-extrabold tracking-[-0.05em] leading-[1.1] mb-6"
      >
        잠시 점검 중입니다
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.8 }}
        className="text-lg md:text-xl text-white/70 max-w-lg leading-relaxed font-medium tracking-tight mb-16"
      >
        더 나은 서비스 제공을 위해 시스템 점검이 진행 중입니다. <br />
        잠시 후 다시 방문해 주시면 감사하겠습니다.
      </motion.p>

      {/* Contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="flex flex-col items-center gap-3"
      >
        <span className="text-white/30 text-xs tracking-[0.25em] uppercase font-medium">
          긴급 문의
        </span>
        <a
          href="tel:070-4227-5394"
          className="text-white text-2xl font-bold tracking-tight hover:text-secondary-light transition-colors duration-300"
        >
          070-4227-5394
        </a>
      </motion.div>
    </div>
  </section>
);

export default Maintenance;
