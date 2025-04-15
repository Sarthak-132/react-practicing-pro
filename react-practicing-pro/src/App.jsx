import "./App.css";
import ConditionalValues from "./components/ConditionalValues";
import DynamicValues from "./components/DynamicValues";
import EventHandling from "./components/EventHandling/EventHandling";
import EventPropagation from "./components/EventPropagation/EventPropagation";
import Module_Css from "./components/module_css/Module_Css";
import NetflixSeries from "./components/NetflixSeries";
import EventPassProps from "./components/PassingEventasProps/EventPassProps";
import DerivedState from "./components/State/DerivedState";
import LiftingStateUp from "./components/State/LiftingStateUp";
import State from "./components/State/State";
import StatePractice from "./components/State/StatePractice";
import StateWork from "./components/State/StateWork";
import StyledComponent from "./components/styled_Component/StyledComponent";

function App() {
  return (
    <>
      {/* <h1>ReactJS</h1>
      <DynamicValues />
      <ConditionalValues />
      <NetflixSeries />
      <Module_Css />
      <StyledComponent rating={8} /> */}
      {/* <EventHandling /> */}
      <EventPassProps />
      <EventPropagation />
      <State />
      <StateWork />
      <StatePractice />
      <DerivedState />
      <LiftingStateUp />
    </>
  );
}

export default App;
