// components/StatusCube.tsx - Alternative colorful version
'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface StatusCubeProps {
  status: 'todo' | 'progress' | 'done';
}

const StatusCube: React.FC<StatusCubeProps> = ({ status }) => {
  const meshRef = useRef<Mesh>(null);

  // Rotate the cube continuously
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  // Get completely different color schemes for each status
  const getFaceColors = () => {
    switch (status) {
      case 'todo':
        // Red/Pink/Purple scheme
        return [
          '#ef4444', // red
          '#ec4899', // pink-500
          '#8b5cf6', // violet-500
          '#f87171', // red-400
          '#d946ef', // fuchsia-500
          '#c084fc', // purple-400
        ];
      case 'progress':
        // Orange/Yellow/Amber scheme
        return [
          '#f97316', // orange
          '#eab308', // yellow-500
          '#f59e0b', // amber-500
          '#fb923c', // orange-400
          '#facc15', // yellow-400
          '#fbbf24', // amber-400
        ];
      case 'done':
        // Green/Teal/Emerald scheme
        return [
          '#22c55e', // green
          '#14b8a6', // teal-500
          '#10b981', // emerald-500
          '#4ade80', // green-400
          '#2dd4bf', // teal-400
          '#34d399', // emerald-400
        ];
      default:
        // Blue/Cyan/Sky scheme
        return [
          '#3b82f6', // blue
          '#06b6d4', // cyan-500
          '#0ea5e9', // sky-500
          '#60a5fa', // blue-400
          '#22d3ee', // cyan-400
          '#38bdf8', // sky-400
        ];
    }
  };

  const faceColors = getFaceColors();

  return (
    <mesh ref={meshRef} scale={3}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial attach="material-0" color={faceColors[0]} />
      <meshStandardMaterial attach="material-1" color={faceColors[1]} />
      <meshStandardMaterial attach="material-2" color={faceColors[2]} />
      <meshStandardMaterial attach="material-3" color={faceColors[3]} />
      <meshStandardMaterial attach="material-4" color={faceColors[4]} />
      <meshStandardMaterial attach="material-5" color={faceColors[5]} />
    </mesh>
  );
};

export default StatusCube;