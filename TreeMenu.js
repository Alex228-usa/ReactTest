import TreeMenu from './TreeMenu';
import data from './data.json';
import './TreeMenu.css';

const App = () => {
  return (
    <div>
      <TreeMenu data={data} />
    </div>
  );
};

export default App;
