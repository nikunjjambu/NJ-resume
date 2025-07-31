'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ContactIcons from '../Contact/ContactIcons';

const SideBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <section id="sidebar">
      <section id="intro">
        <Link href="/" className="logo">
          <Image
            src="https://nikunjjambu.info/images/me.jpg"
            alt="Nikunj Jambu"
            width={300}
            height={200}
            priority
          />
        </Link>
        <header>
          <h2>Nikunj Jambu</h2>
          <div
            style={{
              fontWeight: 500,
              fontSize: '1rem',
              marginBottom: '0.5em',
              whiteSpace: 'nowrap',
            }}
          >
            MEL Specialist | Spatial Analyst | Conservation Biologist
          </div>
          <p>
            <a href="mailto:jambu.nikunj@gmail.com">jambu.nikunj@gmail.com</a>
          </p>
        </header>
      </section>

      <section className="blurb">
        <h2>About</h2>
        <p>
          Hi, I&apos;m Nikunj, a zoologist from{' '}
          <a href="https://msubaroda.ac.in/academics/FOS">MSU, Baroda</a> , specialized in Avian and
          Wildlife Biology. I have spent over a decade working on various research projects. My
          focus has been Indian bird species, tiger population ecology, and conservation technology.
          I currently work as MEL Officer at The Nature Conservancy, India.
        </p>
        <ul className="actions">
          <li>
            {pathname && !pathname.includes('/resume') ? (
              <Link href="/resume" className="button">
                Learn More
              </Link>
            ) : (
              <Link href="/about" className="button">
                About Me
              </Link>
            )}
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">
          &copy; Nikunj Jambu <Link href="/">nikunjjambu.info/</Link>.
        </p>
      </section>
    </section>
  );
};

export default SideBar;
