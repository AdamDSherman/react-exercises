import React from 'react';
import { Modal, Button } from 'react-bootstrap/lib/';
import PokemonInfo from './PokemonInfo';

const PokemonModal = ({showModal, closeModal, pokemon}) => {
	if(pokemon && Object.keys(pokemon).length !== 0) {
		return (
			<div>

	    <Modal
	      show={showModal}
	      onHide={closeModal}
	    >
	      <Modal.Header closeButton>
	        <Modal.Title id="contained-modal-title">
	          {pokemon !== null ? pokemon.species.name : 'Loading...'}
	        </Modal.Title>
	      </Modal.Header>
	      <Modal.Body>
	      	{ 
	      		pokemon !== null ? 
	      		<PokemonInfo pokemon={pokemon} />
	      		: null
	      	}
	      </Modal.Body>
	      <Modal.Footer>
	        <Button onClick={closeModal}>Close</Button>
	      </Modal.Footer>
	    </Modal>
	    </div>
		)
	}
  return null;
}

export default PokemonModal;
