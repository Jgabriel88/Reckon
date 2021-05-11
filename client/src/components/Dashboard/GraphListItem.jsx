import { Chart } from 'react-charts';


const GraphListItem = (props) => {
	return (
		<div>
			{props.month} ---- {props.sum}
		</div>
	);
};

export default GraphListItem;
