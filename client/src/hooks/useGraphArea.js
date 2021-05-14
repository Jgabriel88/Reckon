import { useMemo } from 'react';

const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const useGraph = (props) => {

  let dataArray = props.map((item) => {
    return ([months[parseInt(item.month)-1], parseInt(item.sum)/100])
  });
  
  const data = useMemo(
    () => [
      {
        label: 'Thousands',
        data: dataArray,
        color: '#0288d1'
      }
    ],
    [dataArray]
  )

  const series = useMemo(
    () => ({
      
      type: "area"
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