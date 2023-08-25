import React from 'react'
import { Header, Content, Footer } from './func-components'
import Calendar from './class-components'
import Banner from './banner'
import {Calculator} from './calculator'
import {Calculator2} from './calculator'
import {EventData2,Table} from './event-data'
import RefsFunc from './refs-func'
import RefsArray from './refs-array'
import MessageBox from './state-func'


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
            <Calculator2/> 
            <EventData2/>
            <Table/> 
            <RefsFunc/> 
            <RefsArray/>  */}
            <MessageBox/> 
        </>
    );
}

export default App;