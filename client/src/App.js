import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import SearchResults from './pages/SearchResults.jsx';
import ResultsCompare from './pages/ResultsCompare.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<SearchResults />} />
      <Route path='/compare' element={<ResultsCompare />} />

    </Routes>
  );
}

export default App;
