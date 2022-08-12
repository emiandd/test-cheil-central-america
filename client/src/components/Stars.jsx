import s from '../css/Stars.module.css';
import { ReactComponent as FaStar } from '../assets/star-icon.svg';

export default function Stars({category}) {
	return (
		<div className={s.stars}>
			{
				category === 5 ? 
				<div>
					<p><FaStar /></p>
					<p><FaStar /></p>
					<p><FaStar /></p>
					<p><FaStar /></p>
					<p><FaStar /></p>
				</div>

				: category === 4 ?

				<div>
					<p><FaStar /></p>
					<p><FaStar /></p>
					<p><FaStar /></p>
					<p><FaStar /></p>
				</div>

				: category === 3 ?

				<div>
					<p><FaStar /></p>
					<p><FaStar /></p>
					<p><FaStar /></p>
				</div>

				: category === 2 ?

				<div>
					<p><FaStar /></p>
					<p><FaStar /></p>
				</div>

				: category === 1 ?

				<div>
					<p><FaStar /></p>
				</div>

			: null}
		</div>
	)
}