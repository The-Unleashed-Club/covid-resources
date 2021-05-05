import React from 'react';
import Button from '@material-ui/core/Button';

// Component that will return an
// unordered list
function Navmenu(props) {
	const list = props.menuitems;

	const updatedList = list.map((listItems) => {
		return (
			<li style={styles.li} key={listItems.toString()}>
				<Button size="large" style={styles.btn} onClick>{listItems}</Button>
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
		display: 'flex',
		flexWrap: 'wrap',
		paddingTop: '1.8%',

		
	},
	li: {
		//justifyContent: 'spaceAround',
		scrollBehaviour: 'smooth',
		listStyle: 'none',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		//background:'red',
		padding:'1%',
		
	},
	btn: {
		background: '#808080',
		boxShadow: '2px 3px #d3d3d3',
		

	},

};


export default Navmenu
