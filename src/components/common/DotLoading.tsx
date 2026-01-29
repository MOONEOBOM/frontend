import { motion } from 'framer-motion';

const dotVariants = {
  bounce: {
    y: [0, -12, 0],
  },
};

const DotLoading = () => {
  return (
    <div className="flex">
      <div className="ml-1 flex gap-1">
        {[0, 0.15, 0.3].map((delay, i) => (
          <motion.div
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-gray-800"
            variants={dotVariants}
            animate="bounce"
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'easeInOut',
              delay,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DotLoading;
