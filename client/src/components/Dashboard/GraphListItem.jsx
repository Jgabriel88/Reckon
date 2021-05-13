import { Chart } from 'react-charts';
import useGraph from '../../hooks/useGraph';
import { useEffect } from 'react';
const GraphListItem = (props) => {


	useEffect(()=>{
		window.dispatchEvent(new Event('resize'));
	}, [])

	const { data, series, axes } = useGraph(props.data);

	// A react-chart hyper-responsively and continuously fills the available
	// space of its parent element automatically
	return (
	<div
		style={{
			width: 'auto',
			height: '100%'
		}}
	>
		<Chart data={data} series={series} axes={axes} tooltip/>

	</div>
	)
}

export default GraphListItem;