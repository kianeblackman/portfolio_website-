import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../../components/ProjectCard';

export default function CodePage() {
  return (
    <div>
      <ul className="pt-12">
        <div className="grid w-full grid-cols-1 gap-6 p-6 px-6 pb-6 xs:grid-cols-3">
          <Link to="/code/">
            <ProjectCard title="Trove" src="/images/trove-cover.jpg" />
          </Link>
          <Link to="/code/">
            <ProjectCard
              title="To Do List"
              src="/images/to-do-list-cover.jpg"
            />
          </Link>
          <Link to="/code/">
            <ProjectCard
              title="How Long Until"
              src="/images/how-long-until-cover.jpg"
            />
          </Link>
        </div>
      </ul>
    </div>
  );
}
