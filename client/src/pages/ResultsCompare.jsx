import NavBar from '../components/NavBar.jsx';
import HotelsCompare from '../components/HotelsCompare.jsx';

export default function ResultsCompare() {

	return (
		<>
			<NavBar />
			{
				localStorage.hotelsToCompare === undefined || localStorage.hotelsToCompare.length === 2 ||  !localStorage.hotelsToCompare?

				<p>No hotels to compare</p>
				:
				<HotelsCompare />
			}
		</>
	)
}