import React, { useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';
import { useSpring, a } from 'react-spring/three';

const Box = ({ position, args, color }) => {
    const [ expend, setExpend ] = useState(false);
    const mesh = useRef();

    const props = useSpring({
        scale: expend ? [1.4, 1.4, 1.4] : [1, 1, 1],
    })

    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

    return <a.mesh 
        onClick={() => setExpend(!expend)} 
        position={position}
        scale={props.scale} 
        ref={mesh} 
        castShadow
    >
        <boxBufferGeometry attach='geometry' args={args} />
        <meshStandardMaterial attach='material' color={color} />
    </a.mesh>
}

export default Box;