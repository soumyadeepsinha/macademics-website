'use client';
import CountUp from 'react-countup';

const Badge = ({
  containerStyle,
  icon,
  endCountNum,
  endCountText,
  badgeText
}) => {
  return (
    <div className={`badge ${containerStyle}`}>
      <div className="text-3xl text-primary">{icon}</div>
      <div className='flex items-center gap-x-2'>
        <div className='text-3xl text-primary font-bold leading-none'>
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className='max-w-[77px] text-[15px] font-medium text-black leading-none'>{badgeText}</div>
      </div>
    </div>
  );
};

export default Badge;