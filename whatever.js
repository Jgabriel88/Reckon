export default function App() {
  // const [count, setCount] = useState(0);

  // Similar ao componentDidMount e componentDidUpdate:
  useEffect(() => {
    axios.get(`http://localhost:3000/accounts`).then((res) => {
      console.log("WE ARE PRINTING HERE ---------->", res);
    });
  });