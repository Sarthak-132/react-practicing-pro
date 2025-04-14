import "./App.css";
import ConditionalValues from "./components/ConditionalValues";
import DynamicValues from "./components/DynamicValues";
import EventHandling from "./components/EventHandling/EventHandling";
import EventPropagation from "./components/EventPropagation/EventPropagation";
import Module_Css from "./components/module_css/Module_Css";
import NetflixSeries from "./components/NetflixSeries";
import EventPassProps from "./components/PassingEventasProps/EventPassProps";
import StyledComponent from "./components/styled_Component/StyledComponent";

function App() {
  return (
    <>
      <h1>ReactJS</h1>
      <DynamicValues />
      <ConditionalValues />
      <NetflixSeries />
      <Module_Css />
      <StyledComponent rating={8} />
      {/* <EventHandling /> */}
      <EventPassProps />
      <EventPropagation />
    </>
  );
}

export default App;
