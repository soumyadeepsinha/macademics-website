import Logo from '@/components/Logo';
import Socials from '@/components/others/Socials';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';
import Navbar from './Navbar';

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className='cursor-pointer' />
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col items-center justify-between h-full py-8'>
          <div className='flex flex-col items-center gap-y-24'>
            <Logo />
            <Navbar
              containerStyles='mb-8 flex flex-col items-center gap-y-7'
              linkStyles='text-2xl hover:text-primary hover:text-3xl'
            />
          </div>
          <Socials
            containerStyles='flex gap-x-7 text-2xl'
            iconStyles='hover:text-primary hover:text-3xl'
          />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNavbar