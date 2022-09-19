import './App.css';
import LeftSidebar from './components/LeftSidebar';
import Main from './components/Main';
import RightSidebar from './components/RightSidebar';

function App() {
  return (
    <div className="App">
      <LeftSidebar />
      <Main />
      <RightSidebar />
    </div>
  );
}

export default App;
