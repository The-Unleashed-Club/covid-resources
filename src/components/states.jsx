import React from 'react';

// Component that will return an
// unordered list
function Navmenu(props) {
	const list = props.menuitems;

	const updatedList = list.map((listItems) => {
		return (
			<li style={styles.li} key={listItems.toString()}>
				<button style={styles.btn} onClick>{listItems}</button>
			</li>
		);
	});

	return (
		<ul style={styles.list}>{updatedList}</ul>
	);
};

const styles = {
	list: {
		//scrollBehaviour: 'smooth'
		//padding:'1%',
	},
	li: {
		//justifyContent: 'spaceAround',
		scrollBehaviour: 'smooth',
		listStyle: 'none',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		//background:'red',
		padding:'1%',
	},
	btn: {
		background: '#808080',
		padding:'5%',
		height: '100%'

	}

};


export default Navmenu
