import s from '../css/Card.module.css';
import Images from './Images.jsx';
import Stars from './Stars.jsx';
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
			localStorage.setItem('hotelsToCompare', JSON.stringify(hotelsToCompare))
		}else{
			hotelsToCompare = hotelsToCompare.filter( h => h.name !== name)
			localStorage.setItem('hotelsToCompare', JSON.stringify(hotelsToCompare))
		}
	}	

	useEffect(() => {
		return () => {
			hotelsToCompare = [];
		};
	}, [])

	return (
		<div className={s.card}>
			<div className={s.img}>
				<Images photos={photos} name={name} />
			</div>
			<div className={s.center}>
				<p className={s.name}>{name}</p>
				<p className={s.averageRating}>{averageRating}</p>
				<p className={s.dues}>Up to 12 payments without interest</p>
				<p className={s.optionPayments}>See payment methods</p>
				<p><Stars category={category}/></p>
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