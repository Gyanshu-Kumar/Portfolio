import Image from 'next/image';
import Section from '../layout/Section';
import Button from '../ui/Button';
import LinkText from '../ui/LinkText';
import Callout from './Callout';
import Header from './Header';

const HeroSection: React.FunctionComponent = () => {
  return (
    <main className="hero-section" id="hero">
      <Header />
      <Section>
        <h2 className="about-heading leading-snug font-medium text-base text-zinc-900">
          {'About me.'}
        </h2>
        <div className="about-content-wrapper leading-6 text-sm font-normal text-zinc-500 mt-4">
          <p>
            {
              'As a final-year B.Tech Computer Science student, I am passionate about leveraging technology to create scalable, user-centric websites and applications. With a keen eye for design aesthetics and a commitment to enhancing user and developer experiences, I strive to deliver impactful solutions that combine functionality with visual appeal. My academic background and practical experiences have equipped me with the skills and knowledge to contribute effectively to the ever-evolving field of software engineering.'
            }
          </p>
        </div>
        <Callout className="mt-4">
          <p>
            {
              'I am currently open for full-time engineering roles, which involves DSA, MERN developer as the core.'
            }
          </p>
          <p className="mt-2 mb-4">
            {
              ' if you are looking for dedicated team member, lets connect and discuss!'
            }
          </p>
          <div className="flex flex-row items-center justify-start gap-4">
            <Button onClick={() => window.open('https://cal.com/gyanshu-kumar-xehqii')}>
              {'Schedule a meet / cal.com'}
            </Button>
            <LinkText
              href={'/resume'}
              className="text-zinc-600 font-medium text-sm">
              {'Resume'}
            </LinkText>
          </div>
        </Callout>
      </Section>
    </main>
  );
};

export default HeroSection;
