import React from 'react';

import Image from 'next/image';

import dayjs from 'dayjs';

import type { Project } from '@/data/projects';

interface CellProps {
  data: Project;
}

const Cell: React.FC<CellProps> = ({ data }) => {
  const { title, link, image, date, desc } = data;

  return (
    <div className="cell-container">
      <article className="mini-post">
        <header>
          <h3>
            {link ? (
              <a href={link} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            ) : (
              <span>{title}</span>
            )}
          </h3>
          <time className="published">{dayjs(date).format('MMMM, YYYY')}</time>
        </header>

        {link ? (
          <a href={link} className="image" target="_blank" rel="noopener noreferrer">
            <Image src={image} alt={title} width={600} height={400} />
          </a>
        ) : (
          <div className="image">
            <Image src={image} alt={title} width={600} height={400} />
          </div>
        )}

        <div className="description">
          <p>{desc}</p>
        </div>
      </article>
    </div>
  );
};

export default Cell;
