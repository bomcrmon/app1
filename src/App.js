import React from 'react'
import { Header, Content, Footer } from './func-components'
import Calendar from './class-components'
import Banner from './banner'
import {Calculator} from './calculator'
import {Calculator2} from './calculator'
import {EventData2} from './event-data'

function App() {
    const divStyle={
        color:'red',
        backgroundColor:'powderblue',
        fontSize:'larger',
        padding:'3px',
    }
    return ( 
        <>
            {/* <Header/>
            <p><center><Calendar/></center></p>
            <Content/>
            <h3 style={divStyle}> Hello World 
                <br/> สวัดดีชาวโลก 
            </h3>
            <Footer/>
            <Banner/>
            <Calculator/> 
            <Calculator2/>  */}
            <EventData2/>
        </>
    );
}

export default App;