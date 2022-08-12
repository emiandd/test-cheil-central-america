import NavBar from '../components/NavBar.jsx';
import Filters from '../components/Filters/Filters.jsx';
import Results from '../components/Results.jsx';
import s from '../css/SearchResults.module.css';

export default function SearchResults() {

	localStorage.removeItem('hotelsToCompare');

	return (
		<>
			<NavBar />
			<div className={s.main}>
				<Filters />
				<Results />
			</div>
		</>
	)
}