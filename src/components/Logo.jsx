import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <div>
      <Link
        href='/'>
        <Image
          src='/Logo-1-svg.svg'
          alt='Macademics Writers'
          priority
          width={54}
          height={54}
        />
      </Link>

    </div>
  )
}

export default Logo