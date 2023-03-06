import { useState } from 'react';
import './Counter.css';

export type CounterProps = {
	children: JSX.Element;
	initialCount: number;
};

export function Counter({ children, initialCount }: CounterProps) {
	const [count, setCount] = useState(initialCount);

	function add() {
		setCount((i) => i + 1);
	}

	function subtract() {
		setCount((i) => i - 1);
	}

	return (
		<>
			<div className='counter'>
				<button onClick={subtract}> - </button>
				<pre> {count} </pre>
				<button onClick={add}> + </button>
			</div>
			<div className='counter-message'> {children} </div>
		</>
	);
}
