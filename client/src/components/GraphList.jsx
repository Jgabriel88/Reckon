import GraphListItem from './GraphListItem';

const GraphList = () => {
	return (
		<div>
			<GraphListItem name="INCOME" type="BAR" />
			<GraphListItem name="EXPENSE" type="PIE" />
		</div>
	);
};

export default GraphList;
