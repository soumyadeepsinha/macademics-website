import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link
      href='/'>
      <Image
        src='/logo.svg'
        alt='Macademics Writers'
        priority
        width={54}
        height={54}
      />
    </Link>
  )
}

export default Logo