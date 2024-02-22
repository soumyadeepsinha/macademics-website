import { Button } from '@/components/ui/button';
import { Download, Send } from 'lucide-react';
import Link from 'next/link';
// importing icons
import {
  RiArrowDownSLine,
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
} from 'react-icons/ri';
// importing related components
import Badge from '@/components/others/Badge';
import DevImg from '@/components/others/DevImg';
import Socials from '@/components/others/Socials';

const Hero = () => {
  return (
    <section className='py-10 xl:py-20 h-[84vh] xl:pt-20 bg-bgmg bg-cover bg-no-repeat bg-bottom dark:bg-none'>
      <div className="container mx-auto">
        <div className='flex justify-between space-x-8'>
          {/* Left side for large screen devices */}
          {/* text */}
          <div className='max-w-[700px] flex flex-col justify-center mx-auto text-center xl:mx-0 xl:text-left'>
            <div className='text-sm font-semibold text-primary uppercase mb-4 tracking-[4px]'>Macademics Writers</div>
            <h1 className='heading-1 mb-4'>Your content helper!</h1>
            <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>Contact with us for stress free assignment help. You will get the best content help along without any involvement of AI or Plagiariasm. </p>
            <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mb-10 mx-auto xl:mx-0'>
              <Link href='/help'>
                <Button className='gap-x-2'>
                  Contact us <Send size={20} />
                </Button>
              </Link>
              <Link href='/services'>
                <Button variant='secondary' className='gap-x-2'>
                  Check samples <Download size={20} />
                </Button>
              </Link>
            </div>
            {/* social links */}
            <div>
              <Socials
                containerStyles='flex gap-x-6 mx-auto xl:mx-0'
                iconStyles='text-[22px] text-foreground hover:text-primary transition-all'
              />
            </div>
          </div>
          {/* Right side for large screen devices */}
          <div className='relative hidden xl:flex'>
            {/* Badges */}
            <Badge
              containerStyle='absolute top-[23%] -left-[5rem]'
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText='Years Of Experties'
            />
            <Badge
              containerStyle='absolute top-[70%] -left-[1rem]'
              icon={<RiTodoFill />}
              endCountNum={10}
              endCountText='k'
              badgeText='Projects delivered'
            />
            <Badge
              containerStyle='absolute top-[43%] -right-8'
              icon={<RiTeamFill />}
              endCountNum={75}
              endCountText='+'
              badgeText='Happy Students'
            />
            {/* image */}
            <div className="absolute w-[480px] h-[500px] bg-hero_shape bg-no-repeat"></div>
            <DevImg
              imgSrc='/hero/hero-student.png'
              containerStyle='relative w-[510px] h-[481px]'
            />
          </div>
        </div>
        <div className='mt-5 mb-[6rem] relative place-content-center flex md:flex xl:hidden'>
          {/* Badges */}
          <Badge
            containerStyle='absolute top-[4%] left-[1rem] md:left-[9rem]'
            icon={<RiBriefcase4Fill />}
            endCountNum={3}
            badgeText='Years Of Experties'
          />
          <Badge
            containerStyle='absolute top-[73%] -right-[1rem] md:right-[9rem]'
            icon={<RiTodoFill />}
            endCountNum={10}
            endCountText='k'
            badgeText='Projects delivered'
          />
          {/* image for small and medium devices */}
          <div className="absolute w-[275px] h-[311px] md:w-[480px] md:h-[500px] bg-hero_shape bg-no-repeat"></div>
          <DevImg
            imgSrc='/hero/hero-student.png'
            containerStyle='relative grid-element w-[365px] h-[341px] md:w-[510px] md:h-[481px]'
          />
        </div>
        <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
          <RiArrowDownSLine className='text-primary text-3xl' />
        </div>
      </div>
    </section>
  )
}

export default Hero