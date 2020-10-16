import React from 'react';

// building the function of card component

const Card=(props)=>{
	// destructuring the object props (properties)
	const{name, email}=props;
	return(
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt="robot" src={`https://robohash.org/${name}?size=200x200`} />
			<div>
				<h2> {name} </h2>
				<p> {email} </p>
			</div>
		</div>

	);
}

export default Card;