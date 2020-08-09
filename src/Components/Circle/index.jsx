import React from 'react';

const Circle = (props) => <mesh ref={props.mesh}>
        <circleBufferGeometry attach='geometry' args={[props.size,props.angles]} />
        <meshStandardMaterial attach='material' />
    </mesh>

export default Circle;