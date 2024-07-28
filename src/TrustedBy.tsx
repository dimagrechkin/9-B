import { motion } from 'framer-motion'

const TrustedBy: React.FC = () => {
  const logos = [
    'https://cdn.builder.io/api/v1/image/assets/TEMP/a0328e1d481cad2bfb69897b6b14d9a1f0a59872cfe264690cc4a5b121f4f9b3?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/43a3ee83efc1f435f84577222d206e66c73b6e72f6e04c2accddfcdeb97ed3f5?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/da74cf25c68824a36aac3f3f060922fcab55771b30217ab45f971d90217bb0a2?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/7900eac9d3bf6aa4903e8d0e249a93e552ae039778071fb7e6057bfb91a7425d?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/000855279b7ead7a7cec6a26c6cac4089b0542aab72b013215be293eff90a9fb?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/10c074837edf8ba32781ed5c10f05d0594eb1598760c68a83746aadadd7727ec?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60',
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center px-5 py-8 mt-5 bg-zinc-800 rounded-[30px] max-md:max-w-full"
    >
      <div className="flex flex-col max-w-full w-[686px]">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="self-center text-2xl font-semibold tracking-tighter text-white"
        >
          Trusted By Industry Leaders
        </motion.h2>
        <div className="px-16 mt-5 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 flex-wrap justify-center">
            {logos.map((logo, index) => (
              <motion.img
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                loading="lazy"
                src={logo}
                alt={`Trusted company logo ${index + 1}`}
                className="shrink-0 max-w-full aspect-[3.33] w-[120px]"
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default TrustedBy
