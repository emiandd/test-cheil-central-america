import NavBar from '../components/NavBar.jsx';
import Filters from '../components/Filters/Filters.jsx';
import Results from '../components/Results.jsx';
import s from '../css/SearchResults.module.css';
import Button from '../components/Button';

export default function SearchResults() {
	return (
		<>
			<NavBar />
			<Button text='Compare Hotels' url='/compare' />
			<div className={s.main}>
				<Filters />
				<Results />
			</div>
		</>
	)
}