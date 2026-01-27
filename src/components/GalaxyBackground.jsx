import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useTheme } from '../context/ThemeContext';

const AnimatedStars = () => {
    const ref = useRef();
    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });
    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Stars
                ref={ref}
                radius={100}
                depth={50}
                count={5000}
                factor={4}
                saturation={0}
                fade
                speed={1}
            />
        </group>
    );
};

const GalaxyBackground = () => {
    const { theme } = useTheme();

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none',
                opacity: theme === 'dark' ? 0.8 : 0.3 // Dim stars in light mode
            }}
        >
            <Canvas camera={{ position: [0, 0, 1] }}>
                <AnimatedStars />
            </Canvas>
        </div>
    );
};

export default GalaxyBackground;
