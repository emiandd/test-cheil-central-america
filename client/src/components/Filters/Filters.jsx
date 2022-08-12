import s from '../../css/Filters.module.css';
import ByStars from './ByStars.jsx';
import ByRating from './ByRating.jsx';
import ByPrice from './ByPrice.jsx';

export default function Filters() {

	return (
		<div className={s.container}>
			<p>Popular Filters</p>
				<ByStars />
				<ByRating />
				<ByPrice />
		</div>
	)
}