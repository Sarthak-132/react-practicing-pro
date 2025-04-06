import "./App.css";
import ConditionalValues from "./components/ConditionalValues";
import DynamicValues from "./components/DynamicValues";
import Module_Css from "./components/module_css/Module_Css";
import NetflixSeries from "./components/NetflixSeries";

function App() {
  return (
    <>
      <h1>ReactJS</h1>
      <DynamicValues />
      <ConditionalValues />
      <NetflixSeries />
      <Module_Css />
    </>
  );
}

export default App;
