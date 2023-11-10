import { SplitScreen } from "./SplitScreen";

const LeftHandComponent = ({name}) => {
  return <h1 style={{backgroundColor: 'aqua'}}>{name}</h1>;
}
const RightHandComponent = ({message}) => {
  return <h1 style={{backgroundColor: 'lime'}}>{message}</h1>;
}

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent name="Kate" />
      <RightHandComponent message="Hello!" />
    </SplitScreen>
  );
}

export default App;
