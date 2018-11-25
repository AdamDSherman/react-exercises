import React from 'react';
import SelectItemsPerPageButtons from './SelectItemsPerPageButtons';
import PaginationContainer from './PaginationContainer';
import PokeList from './PokeList';

const PokemonIndexList = ({display, options, selectedValue, allValue, onOptionSelected, listOfPokemon, btnSize, totalPages, activePages, onSelect}) => {

	let style = {display: 'none'}

	if (display) {
		style.display = 'initial'
	} else {
		style.display = 'none'
	}

	return (
		<div style={style} >
			<SelectItemsPerPageButtons 
				options={options}
				selectedValue={selectedValue}
				allValue={allValue}
				onOptionSelected={onOptionSelected}
			/>
			<PokeList
				listOfPokemon={listOfPokemon}
			/>
			<PaginationContainer 
				 btnSize={btnSize}
				 totalPages={totalPages}
				 activePages={activePages}
				 onSelect={onSelect}
			/>
		</div>
	)
}

export default PokemonIndexList;
