import NavBar from '../components/NavBar.jsx';
import HotelsCompare from '../components/HotelsCompare.jsx';
import { useEffect } from 'react';

export default function ResultsCompare() {

	useEffect(() => {
		return () => {
			localStorage.removeItem('hotelsToCompare');
		};
	}, [])

	return (
		<>
			<NavBar />
			{
				!localStorage.hotelsToCompare ?

				<p>No hotels to compare</p>
				:
				<HotelsCompare />
			}
			
		</>
	)
}