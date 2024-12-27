import React, { useState, useEffect } from 'react';

interface GridCell {
  x: number;
  y: number;
  occupied: boolean;
}

interface AnimatedBackgroundProps {
  imagePaths: string[];
  size?: number;
  centerWidthPercent?: number;
  edgePadding?: number;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  imagePaths, 
  size = 64,
  centerWidthPercent = 40,
  edgePadding = 40 // Padding from edges
}) => {
  const [elements, setElements] = useState<Array<{
    x: number;
    y: number;
    duration: number;
    path: string;
    id: number;
    side: 'left' | 'right';
  }>>([]);

  useEffect(() => {
    // const generateGrid = () => {
    //   const sideWidth = (100 - centerWidthPercent) / 2;
    //   const leftMaxWidth = (window.innerWidth * sideWidth) / 100;
    //   const rightMinX = window.innerWidth * (1 - sideWidth / 100);
      
    //   // Create grid cells with padding
    //   const padding = size * 1.5; // Space between logos
    //   const verticalCells = Math.floor((window.innerHeight - (edgePadding * 2)) / padding);
    //   const horizontalCellsPerSide = Math.floor((leftMaxWidth - edgePadding) / padding);
      
    //   const leftGrid: GridCell[] = [];
    //   const rightGrid: GridCell[] = [];

    //   // Generate grid cells for both sides with edge padding
    //   for (let row = 0; row < verticalCells; row++) {
    //     for (let col = 0; col < horizontalCellsPerSide; col++) {
    //       // Left side grid - add edgePadding to x
    //       leftGrid.push({
    //         x: edgePadding + (col * padding),
    //         y: edgePadding + (row * padding),
    //         occupied: false
    //       });
          
    //       // Right side grid - subtract size from rightmost edge
    //       rightGrid.push({
    //         x: rightMinX + (col * padding),
    //         y: edgePadding + (row * padding),
    //         occupied: false
    //       });
    //     }
    //   }

    //   // Shuffle grids
    //   const shuffleArray = <T extends any>(array: T[]): T[] => {
    //     for (let i = array.length - 1; i > 0; i--) {
    //       const j = Math.floor(Math.random() * (i + 1));
    //       [array[i], array[j]] = [array[j], array[i]];
    //     }
    //     return array;
    //   };

    //   const shuffledLeftGrid = shuffleArray([...leftGrid]);
    //   const shuffledRightGrid = shuffleArray([...rightGrid]);
      
    //   // Place logos alternating between left and right
    //   const positions = [];
    //   const totalGridCells = Math.min(
    //     imagePaths.length,
    //     shuffledLeftGrid.length + shuffledRightGrid.length
    //   );

    //   for (let i = 0; i < totalGridCells; i++) {
    //     const side = i % 2 === 0 ? 'left' : 'right';
    //     const grid = side === 'left' ? shuffledLeftGrid : shuffledRightGrid;
    //     const cell = grid.find(cell => !cell.occupied);
        
    //     if (cell) {
    //       cell.occupied = true;
    //       positions.push({
    //         x: cell.x,
    //         y: cell.y + (Math.random() * padding * 0.2), // Smaller random vertical offset
    //         duration: 3 + Math.random() * 2,
    //         path: imagePaths[i],
    //         id: i,
    //         side
    //       });
    //     }
    //   }

    //   return positions;
    // };
    const generateGrid = (): Array<{
      x: number;
      y: number;
      duration: number;
      path: string;
      id: number;
      side: 'left' | 'right';
    }> => {
      const sideWidth = (100 - centerWidthPercent) / 2;
      const leftMaxWidth = (window.innerWidth * sideWidth) / 100;
      const rightMinX = window.innerWidth * (1 - sideWidth / 100);
    
      // Create grid cells with padding
      const padding = size * 1.5; // Space between logos
      const verticalCells = Math.floor((window.innerHeight - (edgePadding * 2)) / padding);
      const horizontalCellsPerSide = Math.floor((leftMaxWidth - edgePadding) / padding);
    
      const leftGrid: GridCell[] = [];
      const rightGrid: GridCell[] = [];
    
      // Generate grid cells for both sides with edge padding
      for (let row = 0; row < verticalCells; row++) {
        for (let col = 0; col < horizontalCellsPerSide; col++) {
          // Left side grid - add edgePadding to x
          leftGrid.push({
            x: edgePadding + (col * padding),
            y: edgePadding + (row * padding),
            occupied: false
          });
    
          // Right side grid - subtract size from rightmost edge
          rightGrid.push({
            x: rightMinX + (col * padding),
            y: edgePadding + (row * padding),
            occupied: false
          });
        }
      }
    
      // Shuffle grids
      const shuffleArray = <T extends any>(array: T[]): T[] => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };
    
      const shuffledLeftGrid = shuffleArray([...leftGrid]);
      const shuffledRightGrid = shuffleArray([...rightGrid]);
    
      // Place logos alternating between left and right
      const positions: Array<{
        x: number;
        y: number;
        duration: number;
        path: string;
        id: number;
        side: 'left' | 'right';
      }> = [];
      const totalGridCells = Math.min(
        imagePaths.length,
        shuffledLeftGrid.length + shuffledRightGrid.length
      );
    
      for (let i = 0; i < totalGridCells; i++) {
        const side: 'left' | 'right' = i % 2 === 0 ? 'left' : 'right';
        const grid = side === 'left' ? shuffledLeftGrid : shuffledRightGrid;
        const cell = grid.find(cell => !cell.occupied);
    
        if (cell) {
          cell.occupied = true;
          positions.push({
            x: cell.x,
            y: cell.y + (Math.random() * padding * 0.2), // Smaller random vertical offset
            duration: 3 + Math.random() * 2,
            path: imagePaths[i],
            id: i,
            side
          });
        }
      }
    
      return positions;
    };
    

    setElements(generateGrid());

    const handleResize = () => {
      setElements(generateGrid());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [imagePaths, size, centerWidthPercent, edgePadding]);

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: -1,
      }}
    >
      {elements.map((element) => (
        <div
          key={element.id}
          style={{
            position: 'absolute',
            left: element.x,
            top: element.y,
            animation: `float-${element.side} ${element.duration}s infinite alternate ease-in-out`,
          }}
          className="floating-element"
        >
          <img
            src={element.path}
            alt={`Tech logo ${element.id + 1}`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              objectFit: 'contain',
              opacity: 0.2,
              filter: 'grayscale(30%)',
            }}
          />
        </div>
      ))}
      <style>
        {`
          @keyframes float-left {
            0% {
              transform: translate(0, 0) rotate(0deg);
            }
            100% {
              transform: translate(40px, -40px) rotate(10deg);
            }
          }

          @keyframes float-right {
            0% {
              transform: translate(0, 0) rotate(0deg);
            }
            100% {
              transform: translate(-40px, -40px) rotate(-10deg);
            }
          }

          .floating-element {
            transition: transform 0.3s ease;
          }

          .floating-element:hover {
            transform: scale(1.1);
          }
        `}
      </style>
    </div>
  );
};

export default AnimatedBackground;