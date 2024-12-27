// TechComponent.tsx
import React from 'react';
import TechGrid from './TechGrid';
import styles from './TechComponent.module.css';

const techItems = [
  { name: 'Python', imageUrl: '/assets/logo/python3.png' },
  { name: 'JavaScript', imageUrl: '/assets/logo/js.png' },
  { name: 'TypeScript', imageUrl: '/assets/logo/c++.png' },
  { name: 'Node.js', imageUrl: 'path/to/nodejs-logo.png' },
  { name: 'Python', imageUrl: 'path/to/python-logo.png' },
  { name: 'Django', imageUrl: 'path/to/django-logo.png' },
  { name: 'Ruby', imageUrl: 'path/to/ruby-logo.png' },
  { name: 'Rails', imageUrl: 'path/to/rails-logo.png' },
  { name: 'Java', imageUrl: 'path/to/java-logo.png' },
  { name: 'Spring', imageUrl: 'path/to/spring-logo.png' },
  { name: 'Go', imageUrl: 'path/to/go-logo.png' },
  { name: 'Kubernetes', imageUrl: 'path/to/kubernetes-logo.png' },
  { name: 'Docker', imageUrl: 'path/to/docker-logo.png' },
  { name: 'AWS', imageUrl: 'path/to/aws-logo.png' },
  { name: 'GCP', imageUrl: 'path/to/gcp-logo.png' },
];

const TechComponent: React.FC = () => {
  return (
    <div className={styles.techComponent}>
      <TechGrid techItems={techItems} />
    </div>
  );
};

export default TechComponent;


