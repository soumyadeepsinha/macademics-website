'use client';
import DevImg from '@/components/others/DevImg';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Building2, Calendar, CheckCheck, GraduationCap, HomeIcon, MailIcon, PhoneCall } from 'lucide-react';
import Image from 'next/image';

const companyInfo = [
  {
    icon: <Building2 size={20} />,
    text: 'Macademics Writers'
  },
  {
    icon: <MailIcon size={20} />,
    text: 'macademicswriters@gmail.com'
  },
  {
    icon: <PhoneCall size={20} />,
    text: '+91 98046 39331'
  },
  {
    icon: <Calendar size={20} />,
    text: 'ESTD. 24th November 2022'
  },
  {
    icon: <GraduationCap size={20} />,
    text: 'College/University'
  },
  {
    icon: <HomeIcon size={20} />,
    text: 'India & UK'
  },
]

const subjectData = [
  {
    icon: <CheckCheck size={40} />,
    text: 'Business Management',
    module1: 'HRM',
    module2: 'Leadership',
    module3: 'Markeing',
  },
  {
    icon: <CheckCheck size={40} />,
    text: 'Project Management',
    module1: 'ERP',
    module2: 'Procurement',
    module3: 'Agile, Waterfall',
  },
  {
    icon: <CheckCheck size={40} />,
    text: 'Finance',
    module1: 'Cost Planning',
    module2: 'Risk Management',
    module3: 'Return and Equity',
  },
  {
    icon: <CheckCheck size={40} />,
    text: 'Law',
  },
  {
    icon: <CheckCheck size={40} />,
    text: 'Python',
    module1: 'Machine Learning',
    module2: 'Image detection',
    module3: 'Artificial Intelligence',
  },
  {
    icon: <CheckCheck size={40} />,
    text: 'JAVA',
    module1: 'GUI',
    module2: 'Web Apps',
    module3: 'Backend and Database',
  },
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
    title: 'technicalservices',
    data: [
      {
        imgSrc: '/about/vscode.png'
      },
      {
        imgSrc: '/about/JavaScript.png'
      },
      {
        imgSrc: '/about/wordpress.svg'
      },
      {
        imgSrc: '/about/python.png'
      },
    ]
  }
]

const About = () => {
  const fetchData = (arr, title) => {
    return arr.find((item) => item.title === title);
  }
  return (
    <section className='about-section mt-[2rem] lg:mt-0 h-auto pb-10 xl:py-20'>
      <div className='container mx-auto'>
        <h2 className='section-title text-center mx-auto'>
          Brief Description
        </h2>
        <br></br>
        <h3 className='heading-3 font-bold text-center mx-auto mb-6 xl:mb-12'> Macademics Writers </h3>
        <div className='flex flex-col xl:flex-row'>
          {/* Images */}
          <div className='relative hidden xl:flex flex-1'>
            <DevImg
              containerStyle='relative w-[580px] h-[580px]'
              imgSrc='/Logo-2-svg-transpernt.svg'
            />
          </div>
          {/* tabs */}
          <div className='flex-1'>
            <Tabs defaultValue='information'>
              <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border-none dark:border-none'>
                <TabsTrigger className='w-[158px] xl:w-auto' value='information'>Information</TabsTrigger>
                <TabsTrigger className='w-[158px] xl:w-auto' value='subjects'>Subjects</TabsTrigger>
                <TabsTrigger className='w-[158px] xl:w-auto' value='services'>Services</TabsTrigger>
              </TabsList>
              <div className='text-lg mt-12 xl:mt-8 xl:mr-12'>
                {/* Business information */}
                <TabsContent value='information'>
                  <div className='text-center xl:text-left'>
                    <h3 className='heading-3 mb-3'>Our Qualified Writers are Helping Students since 2021 </h3>
                    <p className='subtitle max-w-xl mx-auto xl:mx-0'>Macademics is a unit of qualified and experienced writers to deliver different types of assignments. We put additional efforts to verify all sources of information that makes a research paper eligible to enhance your grades. </p>
                    {/* icons */}
                    <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                      {companyInfo.map((info, index) => {
                        return (
                          <div key={index} className='flex items-center gap-x-4 mx-auto xl:mx-0'>
                            <div className='text-primary'>{info.icon}</div>
                            <div>{info.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    <div className='flex flex-col gap-y-2'>
                      <div className="text-primary font-bold">
                        Hire Professional Writers
                      </div>
                      <div className="border-b border-primary"></div>
                      <div>You can book a call or session for free to discuss your module or coursework in details to understand our offerings in detaiils.</div>
                    </div>
                  </div>
                </TabsContent>
                {/* Available sujects : services  */}
                <TabsContent value='subjects'>
                  <div className='text-center xl:text-left'>
                    <h4 className='heading-4 mb-4 text-center xl:text-left'>Our Experts can handle the following subjects
                    </h4>
                    <div className='border-b border-primary'></div>
                    <div>
                      <div className='flex flex-col gap-y-4 mb-12 mt-6 gap-x-3 text-primary'>
                        <h4 className='font-medium'>
                          {subjectData.map((title, index) => {
                            return (
                              <div
                                key={index}
                                className='flex flex-row gap-x-8 gap-y-1'
                              >
                                <h3 className='heading-3'>
                                  {title.icon}
                                </h3>
                                <div className='subtitle font-semibold'> {title.text} </div>
                                {/* <div className="flex text-left xl:text-center py-1">
                                  <p className='text-sm text-muted-foreground'>{title.module1}</p>
                                  <p className='text-sm text-muted-foreground'>{title.module2}</p>
                                  <p className='text-sm text-muted-foreground'>{title.module3}</p>
                                </div> */}
                              </div>
                            )
                          })}
                        </h4>
                      </div>
                    </div>
                    <div className='flex flex-col gap-y-1'>
                      <div className="text-primary font-bold">
                        Experts from different backgrounds are ready to serve
                      </div>
                      <div className="border-b border-primary"></div>
                      <div>You will get personalised services according to your need and we are always working to optimise the available services that suits you.</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value='services'>
                  <div className='text-center xl:text-left'>
                    <h3 className='heading-3 mb-6'>Services that you will get</h3>
                    <div className='mb-12'>
                      <h4 className='heading-4 text-muted-foreground mb-2'>Why Will you need a Writing Help?</h4>
                      <div className="border-b border-primary"></div>
                      <div>
                        {fetchData(serviceData, 'availableservices').data.map((item, index) => {
                          const { name } = item;
                          return (
                            <div
                              key={index}
                              className='w-2/4 text-center xl:text-left mx-auto xl:mx-0'>
                              <div className='font-medium'>{name}</div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    <div>
                      <h4 className='mb-2 font-semibold text-xl xl:text-left'>Technical writing services</h4>
                      <div className='flex justify-center gap-x-10 xl:justify-start'>
                        {fetchData(serviceData, 'technicalservices').data.map((item, index) => {
                          const { imgSrc } = item;
                          return (
                            <div
                              key={index}
                              className='text-center mx-auto xl:text-left xl:mx-0'>
                              <Image
                                src={imgSrc}
                                alt='Different software services from Macademics Writers'
                                width={50}
                                height={50}
                                priority
                                className='hover:scale-150'
                              />
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About