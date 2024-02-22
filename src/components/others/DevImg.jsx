'use client';
import Image from 'next/image';

const DevImg = ({ containerStyle, imgSrc }) => {
  return (
    <div className={`${containerStyle}`}>
      <Image
        src={imgSrc}
        fill
        loading='lazy'
        alt='Students Help at Macademics Writers Image'
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        placeholder='empty'
      />
    </div>
  )
}

export default DevImg;