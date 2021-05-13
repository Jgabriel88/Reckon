import { useMemo } from 'react';
const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const useGraph = (props) => {

  console.log("props inside useGraph: ", props)

  
  let dataArray = props.map((item) => {
    return ([months[parseInt(item.month)-1], parseInt(item.sum)/100])
  });

  const sortedByMonth = dataArray.sort((a, b) => b.month - a.month)
  console.log("sorted: ", sortedByMonth);

  const data = useMemo(
    () => [
      {
        label: 'Thousands',
        data: dataArray,
        color: '#607196'
      }
    ],
    [dataArray]
  )

  const series = useMemo(
    () => ({
      type: "line"
    }),
    []
  );
  
  const axes = useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'bottom' },
      { position: "left", type: "linear", stacked: true }
    ],
    []
  )

  return { data, series, axes }

} 

export default useGraph;