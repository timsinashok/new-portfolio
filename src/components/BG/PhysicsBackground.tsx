import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

interface PhysicsBackgroundProps {
  imagePaths: string[];
  size?: number;
}

const PhysicsBackground: React.FC<PhysicsBackgroundProps> = ({
  imagePaths,
  size = 48
}) => {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    // Create engine
    const engine = Matter.Engine.create();
    
    // Create renderer
    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        background: 'transparent',
        wireframes: false,
      }
    });

    // Create ground
    const ground = Matter.Bodies.rectangle(
      window.innerWidth / 2,
      window.innerHeight - 10,
      window.innerWidth,
      20,
      { 
        isStatic: true,
        render: { 
          fillStyle: '#ffffff',
          opacity: 0.2 
        } 
      }
    );

    // Create falling logos
    const logos = imagePaths.map((path, index) => {
      return Matter.Bodies.circle(
        100 + (index * 100), // Space them out horizontally
        -50 - (index * 100),  // Start from different heights
        size / 2,
        {
          restitution: 0.6,
          friction: 0.1,
          render: {
            sprite: {
              texture: path,
              xScale: size / 100,
              yScale: size / 100
            }
          }
        }
      );
    });

    // Add all bodies to the world
    Matter.World.add(engine.world, [ground, ...logos]);

    // Run the engine and renderer
    Matter.Runner.run(engine);
    Matter.Render.run(render);

    // Log to help debug
    console.log('Physics engine initialized');
    console.log('Number of logos:', logos.length);
    console.log('Image paths:', imagePaths);

    return () => {
      Matter.Render.stop(render);
      Matter.World.clear(engine.world, false);
      Matter.Engine.clear(engine);
      render.canvas.remove();
    };
  }, [imagePaths, size]);

  return (
    <div 
      ref={sceneRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
      }}
    />
  );
};

export default PhysicsBackground;