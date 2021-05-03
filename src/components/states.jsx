import React from 'react';
import { animateScroll as scroll } from "react-scroll";

// Component that will return an
// unordered list
function Navmenu(props)
{
	const list = props.menuitems;

	const updatedList = list.map((listItems)=>{
		return(
				<li  style={styles.li}key={listItems.toString()}>
					<button style={styles.btn} onClick>{listItems}</button>
				</li>
			);
	});

	return(
		<ul style={styles.list}>{updatedList}</ul>
	);
};

const styles={
    list:{
        scrollBehaviour:'smooth'  
       
        
    },
    li:{
        justifyContent: 'spaceAround',
        scrollBehaviour:'smooth'  
    },
    btn:{
        background:'#808080',
        
    }

};


export default Navmenu
