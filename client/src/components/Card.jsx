import s from '../css/Card.module.css';
import { useEffect } from 'react';
let hotelsToCompare = [];

export default function Card({name, averageRating, category, photos, price, ratings}) {

	const hotel = {
		name,
		ratings
	}

	const handleCheckBox = (e) => {
		if(e.target.checked){
			hotelsToCompare.push(hotel);
			console.log(hotelsToCompare)
			localStorage.setItem('hotelsToCompare', JSON.stringify(hotelsToCompare))
			// hotelsToCompare = [];
		}
	}	

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
				<input type="checkbox" onChange={ e => handleCheckBox(e)}/>				
			</div>
		</div>
	)
}