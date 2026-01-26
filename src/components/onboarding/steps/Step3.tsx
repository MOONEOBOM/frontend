import { motion } from 'framer-motion';

const Step3 = () => {
  const scrollDistance = -400; // -500px

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
          style={{
            width: '375px',
            height: '1500px',
            transformOrigin: 'top center',
            flexShrink: 0,
            scale: 0.786,
            willChange: 'transform', // 이렇게 하지 않으면 페이지가 꿀렁거리면서 내려갑니다.
            WebkitFontSmoothing: 'antialiased',
          }}
        >
          <iframe
            src="/scenario/result"
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
