// import React from 'react';

// export default function Knight() {
// 	return <span style={{ font: '5rem' }}>♘</span>;
// }

import React from 'react';
import { ItemTypes } from './Constants';
import { useDrag } from 'react-dnd';

function Knight() {
	const [ { isDragging }, drag ] = useDrag({
		item: { type: ItemTypes.KNIGHT },
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging()
		})
	});

	return (
		<span
			ref={drag}
			style={{
				opacity: isDragging ? 0.5 : 1,
				fontSize: '3em',
				fontWeight: 'bold',
				cursor: 'move'
			}}
		>
			♘
		</span>
	);
}

export default Knight;
