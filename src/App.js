import React from 'react';
// css
import './App.css';
// bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.css';

// component
import Hello from './component/Hello';
import Hr from './component/Hr';
import ClassComponent from './component/ClassComponent';
import PropsFunction from './component/PropsFunction';
import PropsClass from './component/PropsClass';
import ButtonClickFunction from './component/ButtonClickFunction'
import ButtonClickClass from './component/ButtonClickClass'
import ButtonBootstrap from './component/ButtonBootstrap'
import ArrowFunction from './component/ArrowFunction';
import State from './component/state/State'
import SetState from './component/state/SetState'
import StateArrowProperty from './component/state/StateArrowProperty';
import IfElse from './component/coditional/IfElse';
import TernaryIfElse from './component/coditional/TernaryIfElse';
import Refresh from './component/forceUpdate/Refresh';
import Dom from './component/react-DOM/Dom';
import Snippet from './component/Snippet';
import Render from './component/react-DOM/Render';
import Hydrate from './component/react-DOM/Hydrate';
import FindDOMNode from './component/react-DOM/FindDOMNode';
import InputSingle from './component/form/InputSingle';
import OnSubmit from './component/form/OnSubmit';
import InputMultiple from './component/form/InputMultiple';
import InputTextarea from './component/form/InputTextarea';
import InputSelect from './component/form/InputSelect';
import List1 from './component/list/List1';


function App() {
  return (
    <div className="App">
      {/* <img src="../../%PUBLIC_URL%/logo192.png" className="img"/> */}
      <img src={process.env.PUBLIC_URL + "/logo192.png"}></img>
      {/* <Hr name="Classification of Funcation"></Hr>
      <Hello></Hello> */}
      {/* <ClassComponent></ClassComponent>
      <Hr name="Useing Props"></Hr>
      <PropsFunction distruct="Noakhali" age="28" name="Mohammad Ali Abdullah"></PropsFunction>
      <PropsFunction distruct="Dhaka" age="4" name="Arafat"></PropsFunction>
      <PropsFunction distruct="Feni" age="32" name="Mohammad Abdul Khalil"></PropsFunction>
      <PropsFunction distruct="Laxshmipur" age="42" name="Mohammad Abdul Jalil"></PropsFunction>
      <PropsClass distruct="Arabian" age="he died 85 years old" name="Mr Al Biruni"></PropsClass>
      <PropsClass distruct="African" age="85" name="Omar Al Bashir"></PropsClass> */}
      {/* <Hr name="Button Click Event"></Hr>
      <ButtonClickFunction></ButtonClickFunction>
      <ButtonClickClass></ButtonClickClass>
      <Hr name="Install Bootstrap" command="npm install --save bootstrap"></Hr>
      <ButtonBootstrap></ButtonBootstrap>
      <Hr name="Arrow Fncation"></Hr>
      <ArrowFunction></ArrowFunction>
      <Hr name="Useing State And setState"></Hr>
      <State></State>
      <StateArrowProperty />
      <SetState></SetState>
      <Hr name="Coditional Return (if AND else)"></Hr>
      <IfElse />
      <TernaryIfElse />
      <Hr name="21. Force Udate"></Hr>
      <Refresh></Refresh> */}
      <Hr name="React-DOM"></Hr>
      <Dom></Dom>
      <Hr name="Code Snippet"></Hr>
      {/* <Snippet></Snippet> */}
      <Hr name="React-DOM"></Hr>
      <Render></Render>
      <Hydrate></Hydrate>
      <FindDOMNode></FindDOMNode>
      <Hr name="Form"></Hr>
      {/* <InputSingle></InputSingle> */}
      <OnSubmit></OnSubmit>
      <InputMultiple></InputMultiple>
      <InputTextarea></InputTextarea>
      <InputSelect></InputSelect>
      <Hr name="List"></Hr>
      <List1></List1>

      
    </div>
  );
}

export default App;
