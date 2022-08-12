import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { filterByRating } from '../../redux/actions.js';

export default function ByRating() {

	const dispatch = useDispatch();

	const options = [
	  { value: '-- Select --', label: '-- Select --' },
	  { value: 5, label: '5' },
	  { value: 4, label: '4' },
	  { value: 3, label: '3' },
	  { value: 2, label: '2' },
	  { value: 1, label: '1' }
	];

	const handleSelectChange = (e) => {
		dispatch(filterByRating(e.value));
	}

	return (
		<div>
			<p>Rating</p>
			<Select onChange={ e => handleSelectChange(e) }
					options={options} 
					defaultValue={options[0]}
			/>
		</div>
	)
}