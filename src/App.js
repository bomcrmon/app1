import React from 'react'
import { Header, Content, Footer } from './func-components'
import Calendar from './class-components'

function App() {
    const divStyle={
        color:'red',
        backgroundColor:'powderblue',
        fontSize:'larger',
        padding:'3px',
    }
    return ( 
        <>
            
            <Header/>
            <p><center><Calendar/></center></p>
            <Content/>
            {/* <h3 style={divStyle}> Hello World 
                <br/> สวัดดีชาวโลก 
            </h3> */}
            <Footer/>
        </>
    );
}

export default App;