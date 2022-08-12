import s from '../css/Card.module.css';

export default function Card({name, averageRating, category, photos, price}) {
	return (
		<div className={s.card}>
			<div className={s.img}>
				<img src={photos[0]} alt=""/>
			</div>
			<div className={s.center}>
				<p>{name}</p>
				<p>{averageRating}</p>
				<p>{category} stars</p>
			</div>
			<div className={s.right}>
				<p>Price</p>
				<p>${price}</p>
				<p>Add to compare</p>
				<input type="checkbox" />				
			</div>
		</div>
	)
}