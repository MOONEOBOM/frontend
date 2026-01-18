'use client';

import MoonoProfile from '@/assets/icon/moono_profile.svg?react';

const ScenarioIntroBubble = () => {

    return (
        <div className="pl-[30px] mb-[24px]">
            <div
                className="
                bg-gray-100
                w-[280px]
                rounded-[20px_20px_20px_3px]
                px-[15px]
                py-[8px]
                flex
                items-center
                gap-[10px]
                "
            >
                <MoonoProfile width={32} height={36} />

                <p className="body2 leading-snug">
                    전화 상담을 시작하기 전에,<br />
                    무너와 함께 시나리오를 만들어보아요!
                </p>
            </div>
        </div>
    );
};

export default ScenarioIntroBubble;
