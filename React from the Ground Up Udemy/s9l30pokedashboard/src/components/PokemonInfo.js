import React from 'react';
import { Radar } from 'react-chartjs';

let capitalise = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

const PokemonInfo=({pokemon}) => {

	const data = pokemon.stats.map((info) => {
		return info.base_stat;
	});

	const labels = pokemon.stats.map((info) => {
		return capitalise(info.stat.name);
	});

	// Try use componentDidUPdate here to limit multiple rederns

	let charData = {
		labels: labels,
		datasets: [
			{
				data: data,
				fillColor: "rgba(255,99,132,0.2)",
				strokeColor: "rgba(255,99,132,1)",
				pointColor: "rgba(255,99,132,1)",
				borderColor: "#fff",
				pointHoverBackgroundColor: "#fff",
				pointHoverBorderolor: "rgba(255,99,132,1)",
			}
		]
	}

	console.log(charData.labels);

	return (
		<div>
			<img src={pokemon.sprites.front_default} alt={pokemon.name}/>
			<Radar data={charData} width="300" height="250" />
		</div>
	)

}

export default PokemonInfo;
