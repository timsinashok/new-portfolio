// TechGrid.tsx
import React from 'react';
import styles from './TechGrid.module.css';

interface TechItem {
  name: string;
  imageUrl: string;
}

interface TechGridProps {
  techItems: TechItem[];
}

const predefinedLayouts = [
  [
    [1, 1, 1, 2, 2],
    [1, 1, 1, 2, 2],
    [1, 1, 1]
  ],
  [
    [2, 2, 1, 1, 1],
    [2, 2, 1, 1, 1],
    [1, 1, 1,]
  ],
  [
    [1, 1, 1, 1, 1],
    [2, 2, 2, 1, 1],
    [2, 1,  1]
  ],
  [
    [1, 1, 1, 2, 2],
    [1, 1, 1, 2, 1],
    [1, 1, 1, 1, 1,1]
  ]
];

const TechGrid: React.FC<TechGridProps> = ({ techItems }) => {
  const generateGridItems = (layout: number[][]) => {
    const items: JSX.Element[] = [];
    let n = 0;

    for (let i = 0; i < layout.length; i++) {
      for (let j = 0; j < layout[i].length; j++) {
        const span = layout[i][j];
        const url = techItems[n % techItems.length].imageUrl;
        const colorClass = `c-${Math.floor(Math.random() * 5) + 1}`;

        items.push(
          <div
            key={`${i}-${j}`}
            style={{ backgroundImage: `src(${url})` }}
            className={`${styles.card} ${styles[`span-${span}`]} ${styles[colorClass]}`}
          ></div>
        );
        n++;
      }
    }

    return items;
  };

  const num = Math.floor(Math.random() * predefinedLayouts.length)
  const selectedLayout = predefinedLayouts[num];

  return <div className={styles.grid}>{generateGridItems(selectedLayout)}
  {num}
  </div>;
};

export default TechGrid;
