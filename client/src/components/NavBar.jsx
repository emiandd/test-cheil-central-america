import '../css/NavBar.module.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
	return (
		<nav>
			<Link to='/'>
				<h1>Hotels</h1>
			</Link>
		</nav>
	)
}