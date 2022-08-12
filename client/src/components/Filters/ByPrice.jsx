import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { orderByPrice } from '../../redux/actions.js';

export default function ByPrice() {

	const dispatch = useDispatch();

	const options = [
	  { value: '-- Select --', label: '-- Select --' },
	  { value: 'ascending', label: 'Ascending' },
	  { value: 'descending', label: 'Descending' },
	 
	];

	const handleSelectChange = (e) => {
		dispatch(orderByPrice(e.value));
	}

	return (
		<div>
			<p>Order by price</p>
			<Select onChange={ e => handleSelectChange(e) }
					options={options} 
					defaultValue={options[0]}
			/>
		</div>
	)
}