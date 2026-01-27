import { motion } from 'framer-motion';

const Step3 = () => {
  const scrollDistance = -400; // -400px

  return (
    <>
      <div className="body2 mt-[22px] flex h-[510px] w-[295px] justify-center overflow-hidden rounded-t-[42px] border-[5px] border-b-0 border-gray-500 bg-white">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: scrollDistance }}
          transition={{
            duration: 4,
            ease: 'linear',
          }}
          className="h-[1500px] w-[375px] shrink-0 origin-top scale-[0.786] antialiased will-change-transform"
        >
          <iframe
            src="/scenario/result?isOnboarding=true"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </motion.div>
      </div>
    </>
  );
};

export default Step3;
