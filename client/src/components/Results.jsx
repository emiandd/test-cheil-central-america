import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from '../css/Results.module.css';
import Card from '../components/Card.jsx';
import { getAllHotels } from '../redux/actions.js';

export default function Results() {

	const dispatch = useDispatch()
	const hotels = useSelector( state => state.allHotels )

	useEffect(() => {
		dispatch(getAllHotels())

	}, [])

	return (
		<div className={s.container}>
			{	
				hotels.error ?

				<p>No data found</p>

				: hotels?.map( h => 
					<Card 
						key={h.id}
						name={h.name}
						averageRating={h.averageRating}
						category={h.category}
						photos={h.photos}
						price={h.price}
						ratings={h.ratings}
					/>
				)
			}

		</div>
	)
}