import "./App.css";
import ConditionalValues from "./components/ConditionalValues";
import DynamicValues from "./components/DynamicValues";
import NetflixSeries from "./components/NetflixSeries";

function App() {
  return (
    <>
      <h1>ReactJS</h1>
      <DynamicValues />
      <ConditionalValues />
      <NetflixSeries />
    </>
  );
}

export default App;
