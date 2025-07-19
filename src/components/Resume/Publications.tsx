// src/components/Resume/Publications.tsx
import React from 'react';

import dayjs from 'dayjs';

import type { Publication } from '@/data/resume/publications';

interface Props {
  data: Publication[];
}

const Publications: React.FC<Props> = ({ data }) => (
  <div className="publications-list">
    {data.map((pub) => (
      <div key={pub.title} className="publication-item">
        <h4 className="pub-title">
          <a
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Read paper: ${pub.title}`}
          >
            {pub.title}
          </a>
        </h4>
        <p className="pub-meta">
          {pub.journal} — {dayjs(pub.date).format('MMMM YYYY')}
        </p>
      </div>
    ))}
  </div>
);

export default Publications;
