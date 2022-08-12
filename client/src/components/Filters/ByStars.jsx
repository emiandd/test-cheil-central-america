import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { filterByStars } from '../../redux/actions.js';

export default function ByStars() {

	const dispatch = useDispatch();

	const options = [
	  { value: '-- Select --', label: '-- Select --' },
	  { value: 5, label: '5 stars' },
	  { value: 4, label: '4 stars' },
	  { value: 3, label: '3 stars' },
	  { value: 2, label: '2 stars' },
	  { value: 1, label: '1 stars' }
	];

	const handleSelectChange = (e) => {
		dispatch(filterByStars(e.value));
	}

	return (
		<div>
			<p>Stars</p>
			<Select onChange={ e => handleSelectChange(e) }
					options={options} 
					defaultValue={options[0]}
			/>
		</div>
	)
}