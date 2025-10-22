'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import StatusCube from './StatusCube';

interface CubeWidgetProps {
  status: 'todo' | 'progress' | 'done';
}

const CubeWidget: React.FC<CubeWidgetProps> = ({ status }) => {
  return (
    <div className="w-11 h-4 flex items-center">
      <Canvas
        camera={{ position: [3, 3, 3], fov: 50 }}
        style={{ width: '26px', height: '20px' }}
      >
        <ambientLight intensity={2} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <directionalLight position={[-5, 5, 5]} intensity={0.5} />
        <StatusCube status={status} />
      </Canvas>
    </div>
  );
};

export default CubeWidget;