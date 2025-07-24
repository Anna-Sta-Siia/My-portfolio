import Petal from '../Petal';

const items = [
  { name: 'About',     path: '/about',     color: '#81D4FA' },
  { name: 'Projects',  path: '/projects',  color: '#F8BBD0' },
  { name: 'Services',  path: '/services',  color: '#FFF9C4' },
  { name: 'Skills',    path: '/skills',    color: '#C5E1A5' },
  { name: 'Formation', path: '/formation', color: '#FFCC80' },
  { name: 'Contact',   path: '/contact',   color: '#CE93D8' },
];

export default function SidebarMenu() {
  return (
    <nav>
      {items.map(i => (
        <Petal key={i.name} {...i} />
      ))}
    </nav>
  );
}
