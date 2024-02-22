import DevImg from '@/components/others/DevImg';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User2, MailIcon, Calendar, HomeIcon, PhoneCall, GraduationCap, BriefCase } from 'lucide-react';
import Image from 'next/image';

const Information = [
  {
    icon: <User2 size={20} />,
    text: 'Macademics Writers'
  },
  {
    icon: <PhoneCall size={20} />,
    text: '+91 98046 39331'
  },
  {
    icon: <MailIcon size={20} />,
    text: 'macademicswriters@gmail.com'
  },
  {
    icon: <Calendar size={20} />,
    text: 'ESTD. 24th November 2022'
  },
  {
    icon: <HomeIcon size={20} />,
    text: 'Kolkata, West Bengal (India)'
  },
]

const subjectData = [
  {
    title: 'management',
    data: [
      {
        streams: 'Leadership and Management',
        module: 'Strategic Leadership and HR Management',
        level: '7'
      },
      {
        streams: 'Marketing',
        module: 'Strategic Marketing & Entrepreneurship',
        level: '7'
      },
      {
        streams: 'Finance',
        module: 'Using Financial Data',
        level: '7'
      },
    ]
  },
  {
    title: 'BSC',
    data: [
      {
        streams: 'Evolution And Revolution Of Business',
        module: 'You can explore past and future developments data related to business management',
        level: '7'
      },
      {
        streams: 'Economics For Business',
        module: 'Learn about business decision-making',
        level: '7'
      },
      {
        streams: 'Entrepreneurship',
        module: 'Evaluate the qualities of leadership and entrepreneurship',
        level: '7'
      },
    ]
  }
]

const serviceData = [
  {
    title: 'availableservices',
    data: [
      {
        name: 'Proposal writing'
      },
      {
        name: 'Dissertation writing'
      },
      {
        name: 'Essay writing'
      },
      {
        name: 'Report writing'
      },
    ]
  },
  {
    title: 'Available Help',
    data: [
      {
        imgPath: '/about/vscode.svg'
      },
      {
        imgPath: '/about/notion.svg'
      },
      {
        imgPath: '/about/wordpress.svg'
      },
      {
        imgPath: '/about/figma.svg'
      },
    ]
  }
]

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  }
  // console.log(getData(subjectData, 'management'));
  // console.log(getData(serviceData, 'availableservices'));
  return (
    <section id='about' className='about-section mt-[12rem] md:mt-[8rem] lg:mt-0 xl:h-[860px] pb-12 xl:py-24'>
      <div className='container mx-auto'>
        <h2 className='section-title text-center mx-auto'>
          About
        </h2>
        <br></br>
        <h3 className='font-bold text-center mx-auto mb-6 xl:mb-12'> Macademics Writers </h3>
        <div className='flex flex-col xl:flex-row'>
          {/* Images */}
          <div className='hidden xl:flex relative'>
            <DevImg
              containerStyle='relative w-[500px] h-[500px] bg-about_shape_light dark:bg-about_shape_dark bg-no-repeat'
              imgSrc='/about/developer.png'
            />
          </div>
          {/* tabs */}
          <div className='flex-1'>
            <Tabs defaultValue='information'>
              <TabsList>
                <TabsTrigger value='information'>Information</TabsTrigger>
                <TabsTrigger value='subjects'>Subjects</TabsTrigger>
                <TabsTrigger value='services'>Services</TabsTrigger>
              </TabsList>
              <div className='text-lg mt-12 xl:mt-8'>
                <TabsContent value='information'>Information</TabsContent>
                <TabsContent value='subjects'>Subjects</TabsContent>
                <TabsContent value='services'>Services</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About