'use client';

import { useState } from 'react';
import Card from './Card';

export default function FlipCard() {
  const [isTouched, setIsTouched] = useState(false);

  return (
    <div
      className="group cursor-pointer [perspective:1000px]"
      onClick={() => setIsTouched(!isTouched)}
    >
      <div
        className={`relative duration-700 [transform-style:preserve-3d] ${
          isTouched ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* 앞면 */}
        <div className="relative inset-0 overflow-hidden [backface-visibility:hidden]">
          <Card />
        </div>

        {/* 뒷면 */}
        <div className="absolute inset-0 [transform:rotateY(180deg)] overflow-hidden [backface-visibility:hidden]">
          <Card isEasy />
        </div>
      </div>
    </div>
  );
}
