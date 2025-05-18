import "./App.css";
import ConditionalValues from "./components/ConditionalValues";
import { BioProvider } from "./components/ContextAPI";
import ContextHook from "./components/ContextAPI/ContextHook";

import DynamicValues from "./components/DynamicValues";
import EventHandling from "./components/EventHandling/EventHandling";
import EventPropagation from "./components/EventPropagation/EventPropagation";
import { HowNotToFetchApi } from "./components/FetchAPI/HowtoFetchAPI";
import NottoFetchlikethisAPI from "./components/FetchAPI/NottoFetchlikethisAPI";
import ForwardRef from "./components/ForwardRef_hookReact/ForwardRef";
import { ReactMemo } from "./components/Memo/ReactMemo";
import Module_Css from "./components/module_css/Module_Css";
import NetflixSeries from "./components/NetflixSeries";
import EventPassProps from "./components/PassingEventasProps/EventPassProps";
import PropDrilling from "./components/propDrilling/PropDrilling";
import ActualFormHandling from "./components/RegistrationForm/ActualFormHandling";
import AvoidFormLikeIt from "./components/RegistrationForm/AvoidFormLikeIt";
import ContactForm from "./components/RegistrationForm/ContactForm";
import LoginForm from "./components/RegistrationForm/LoginForm";
import ShortCircuitAndNullish from "./components/short_circutingAndNullish_Coelescing/short_circutingAndNullish";
import DerivedState from "./components/State/DerivedState";
import LiftingStateUp from "./components/State/LiftingStateUp";
import State from "./components/State/State";
import StatePractice from "./components/State/StatePractice";
import StateWork from "./components/State/StateWork";
import StyledComponent from "./components/styled_Component/StyledComponent";
import CleanUpFunction from "./components/useEffectHook/CleanUpFunction";
import EffectChallenge from "./components/useEffectHook/EffectChallenge";
import UseEffecthook_1 from "./components/useEffectHook/UseEffecthook_1";
import UseEffecthook_2 from "./components/useEffectHook/UseEffecthook_2";
import UseId from "./components/UseID/UseId";
import UpgradeUseReducer from "./components/useReducerHook/UpgradeUseReducer";
import UseReducer from "./components/useReducerHook/UseReducer";
import UseRefHook from "./components/useRefHook/UseRefHook";
import UseStateChallenge from "./components/useStateChallenge/UseStateChallenge";

export const App = () => {
  return (
    <>
      {/* <h1>ReactJS</h1>
      <DynamicValues />
      <ConditionalValues />
      <NetflixSeries />
      <Module_Css />
      <StyledComponent rating={8} /> */}
      {/* <EventHandling /> */}
      {/* <EventPassProps />
      <EventPropagation />
      <State />
      <StateWork />
      <StatePractice />
      <DerivedState />
      <LiftingStateUp /> */}
      {/* <ShortCircuitAndNullish /> */}
      {/* <UseStateChallenge /> */}
      {/* <AvoidFormLikeIt /> */}
      {/* <ActualFormHandling />
      <LoginForm />
      <ContactForm /> */}
      {/* <UseEffecthook_1 />
      <UseEffecthook_2 />
      <EffectChallenge />
      <CleanUpFunction /> */}
      {/* <NottoFetchlikethisAPI /> */}
      {/* <HowNotToFetchApi /> */}
      {/* <UseRefHook /> */}
      {/* <ForwardRef /> */}
      {/* <UseId /> */}
      {/* <PropDrilling /> */}

      {/* <BioProvider>
        <ContextHook />
      </BioProvider> */}

      {/* <UseReducer /> */}
      {/* <UpgradeUseReducer /> */}
      <ReactMemo />
    </>
  );
};

export default App;
