import logo from './logo.svg';
import './App.css';
import CounterNumber from './CounterNumber';
import LikeButtons from './LikeButtons';
import InputLivePreview from './InputLivePreview';
import ShowText from './ShowText';

function App() {
  return (
    <div className="App">
      <CounterNumber />
      <hr />
      <LikeButtons />
      <hr />
      <InputLivePreview />
      <hr />
      <ShowText />

    </div>
  );
}

export default App;
