import { motion } from 'framer-motion';

interface ScalingDotsProps {
  total: number;
  current: number;
}

const ScalingDots = ({ total, current }: ScalingDotsProps) => {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <motion.div
          key={index}
          initial={false}
          animate={{
            backgroundColor:
              index === current
                ? 'var(--color-gray-500)'
                : 'var(--color-gray-200)',
          }}
          // 이동 시 색상이 부드럽게 변하도록 설정
          transition={{ duration: 0.3 }}
          className="h-1.5 w-1.5 rounded-full"
        />
      ))}
    </div>
  );
};

export default ScalingDots;
