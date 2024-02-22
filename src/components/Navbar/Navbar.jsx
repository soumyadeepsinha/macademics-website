import { routes } from '@/constants';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = ({ containerStyles, linkStyles, underlineStyles }) => {
  const pathname = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {routes.map((link, index) => {
        return (
          <Link
            href={link.href}
            key={index}
            className={`capitalize ${linkStyles}`}
          >
            {pathname === link.href && (
              <motion.span
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                transition={{ type: 'tween' }}
                layoutId='underline'
                className={`${underlineStyles}`}
              />
            )}
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}

export default Navbar