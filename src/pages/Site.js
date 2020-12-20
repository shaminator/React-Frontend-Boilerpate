import React, { useEffect, useState } from 'react'



const Site = ({ match }) => {
	const [siteData, setSiteData] = useState(null);

	useEffect(() => {

		if (!siteData) {
			//change when live
			fetch("http://localhost/home.json")
				.then(response => response.json())
				.then((jsonData) => {
					setSiteData(jsonData);
				})
				.catch((error) => {
					console.error(error)
				})	
		}

	});

	if (siteData) {
		console.log(siteData);
	}
	return null
}

export default Site