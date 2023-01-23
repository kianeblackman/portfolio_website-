//* Description: this page lists all the code projects

// Import statements
import React from 'react';
import { Link } from 'react-router-dom';

// Commponent imports
import ProjectCard from '../../components/ProjectCard';

// CodePage component
export default function CodePage() {
  return (
    <section>
      <ul className="mx-6 mb-6 mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Link to="/code/">
          <ProjectCard title="Hobï" src="/images/how-long-until-cover.jpg" />
        </Link>
        <Link to="/code/">
          <ProjectCard title="Trove" src="/images/trove-cover.jpg" />
        </Link>
        <Link to="/code/">
          <ProjectCard title="To Do List" src="/images/to-do-list-cover.jpg" />
        </Link>
        <Link to="/code/">
          <ProjectCard
            title="How Long Until"
            src="/images/how-long-until-cover.jpg"
          />
        </Link>
      </ul>
    </section>
  );
}
