import MainContainer from "./components/MainContainer";
import './app.scss'
import { ReactFlowProvider } from "reactflow";

function App() {

  return (

    <ReactFlowProvider>
      <MainContainer />
    </ReactFlowProvider>
  )
}

export default App;
