import { routes } from '@/constants';
import { cn } from '@/lib/utils';
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
            className={`${linkStyles}`}
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
            <p className={cn('', pathname === link.href ? 'text-primary font-semibold' : '')}>
              {link.label}
            </p>
          </Link>
        )
      })}
    </nav >
  )
}

export default Navbar