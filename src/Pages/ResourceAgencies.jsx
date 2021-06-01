import React from 'react';
import firebase from 'firebase';
import { useEffect, useState } from 'react';
import OutlinedCard from '../components/OutlinedCard'


const db = firebase.database();
const ResourceAgencies = (props) => {
    const [data, setdata] = useState([]);

    //filter(element => element.city === "Patna" )
    //filter(element => element.city !== "0" && element.city >="Patna" )


    useEffect(() => {
        const dataref = db.ref(props.stateName + "Data")
        dataref.once('value', async (snapshot) => {
            let data = await snapshot.val()
            setdata(data == null ? [] : data)
            console.log(data);
        })
    }, [])

    return (
        <>
            <h1 style={styles.head}>Resources Agencies</h1>
            {data.filter(element => element.nameOfResource == "resourceAgencies" || element.nameOfResource == "womenInCardiology" || element.nameOfResource == "humanSupporters" ).map((element, index) => <div style={styles.items}>
                <OutlinedCard City={element.City}
                    nameOfResource={element.nameOfResource}
                    Address={element.Address}
                    Contact={element.Contact}
                    Price={element.Price}
                    Comments={element.Comments}
                    verficationDataTime={element.verficationDataTime}
                    vendorName={element.vendorName}
                />
            </div>)}
        </>
    )
}

const styles = {
    head: {
        marginLeft: '1%',
    },
    items: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0ffff',
        paddingBottom: '3%',
    }

};

export default ResourceAgencies