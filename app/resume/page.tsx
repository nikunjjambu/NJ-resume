import React from 'react';

import type { Metadata } from 'next';

import Courses from '@/components/Resume/Courses';
import Education from '@/components/Resume/Education';
import Experience from '@/components/Resume/Experience';
import Publications from '@/components/Resume/Publications';
import References from '@/components/Resume/References';
import Skills from '@/components/Resume/Skills';
import courses from '@/data/resume/courses';
import degrees from '@/data/resume/degrees';
import publications from '@/data/resume/publications';
import { categories, skills } from '@/data/resume/skills';
import work from '@/data/resume/work';

export const metadata: Metadata = {
  title: 'Resume',
  description: "Nikunj Jambu's Resume. MEL Specialist, Spatial Analyst and Conservation Biologist.",
};

const sections = [
  { name: 'Education', id: 'education' },
  { name: 'Experience', id: 'experience' },
  { name: 'Skills', id: 'skills' },
  { name: 'Courses', id: 'courses' },
  { name: 'Publications', id: 'publications' },
  { name: 'References', id: 'references' },
];

export default function ResumePage() {
  return (
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2>Resume</h2>
          <div className="link-container">
            {sections.map((section) => (
              <h4 key={section.id}>
                <a href={`#${section.id}`}>{section.name}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>

      <section id="education" className="education">
        <div className="link-to" />
        <Education data={degrees} />
      </section>

      <section id="experience" className="experience">
        <div className="link-to" />
        <Experience data={work} />
      </section>

      <section id="skills" className="skills">
        <div className="link-to" />
        <Skills skills={skills} categories={categories} />
      </section>

      <section id="courses" className="courses">
        <div className="link-to" />
        <Courses data={courses} />
      </section>

      <section id="publications" className="publications">
        <div className="link-to" />
        <h2>Publications</h2>
        <Publications data={publications} />
      </section>

      <section id="references" className="references">
        <div className="link-to" />
        <References />
      </section>
    </article>
  );
}
