'use client';
import {
  RiFacebookBoxFill,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill
} from 'react-icons/ri';

import Link from 'next/link';

const socialLinks = [
  {
    lable: 'Linkedin',
    name: <RiFacebookBoxFill />,
    href: 'linkedin.com/company/macademics-writers',
  },
  {
    lable: 'Linkedin',
    name: <RiLinkedinFill />,
    href: 'linkedin.com/company/macademics-writers',
  },
  {
    lable: 'Linkedin',
    name: <RiInstagramFill />,
    href: 'linkedin.com/company/macademics-writers',
  },
  {
    lable: 'Linkedin',
    name: <RiGithubFill />,
    href: 'linkedin.com/company/macademics-writers',
  }
]

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {socialLinks.map((links, index) => {
        return (
          <Link href={links.href} key={index}>
            <div className={`${iconStyles}`}>
              {links.name}
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Socials;