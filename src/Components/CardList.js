import React from 'react';
import Card from './Card.js';

const CardList=({robots})=>{
	
	const cardComponent=robots.map((user,i)=>{
		// whenever use loop, add key property so that the React can keep track of elements
		return( <Card 
				key={i} 
				id={robots[i].id} 
				name={robots[i].name} 
				email={robots[i].email}/>
			);
	})
	return(

	<div >
		{cardComponent}
	</div>





		);
}

export default CardList;