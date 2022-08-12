import { Link } from 'react-router-dom';
import '../css/Button.module.css';

export default function Button({ text, url }) {
	return (
		<Link to={url}>
			<button>
				{text}
			</button>
		</Link>
	)
}