import NavBar from '../components/NavBar.jsx';
import Button from '../components/Button.jsx';
import '../css/Home.module.css';

export default function Home() {

	localStorage.removeItem('hotelsToCompare');
	
	return (
		<>
			<NavBar />
			<main>
				<Button text='Search Hotels' url='/search' />
			</main>
		</>
	)
}