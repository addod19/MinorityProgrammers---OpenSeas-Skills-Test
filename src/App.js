import './App.css';
// import {
//   BrowserRouter as Router, Route, Routes,
// } from 'react-router-dom';
import AssetList from './container/assetList';
import CollectionList from './container/collectionList';
// import Asset from './components/asset';

function App() {
  return (
    <div className="app">
      <h1>NFT Collectibles</h1>
      {/* <Route exact path="/:id" component={Asset} /> */}
      <AssetList />
      <CollectionList />
    </div>
  );
}

export default App;
