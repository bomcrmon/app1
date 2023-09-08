// import React from 'react'
// // import { Header, Content, Footer } from './func-components'
// import Calendar from './class-components'
// import Banner from './banner'
// import {Calculator} from './calculator'
// import {Calculator2} from './calculator'
// import {EventData2,Table} from './event-data'
// import RefsFunc from './refs-func'
// import RefsArray from './refs-array'
// import MessageBox from './state-func'
// import { userContext } from './context'
// import Header from './context-header'
// import Content from './context-content'
// import Header2 from './context-header2'
// import Content2 from './context-content2'


// function App() {
//     const [user, setUser] = useState('')
//     //  divStyle={
//     //     color:'red',
//     //     backgroundColor:'powderblue',
//     //     fontSize:'larger',
//     //     padding:'3px',
//     // }
//     return ( 
//         <>
//             {/* <Header/>
//             <p><center><Calendar/></center></p>
//             <Content/>
//             <h3 style={divStyle}> Hello World 
//                 <br/> สวัดดีชาวโลก 
//             </h3>
//             <Footer/>
//             <Banner/>
//             <Calculator/> 
//             <Calculator2/> 
//             <EventData2/>
//             <Table/> 
//             <RefsFunc/> 
//             <RefsArray/> 
//             <MessageBox/>  */}
//             {/* <userContext.Provider value={'Tom Jerry'}>
//                 <Header/>
//                 <Content/>
//             </userContext.Provider> */}
//             <userContext.Provider value={[user, setUser]}>
//                 <Header2 />
//                 <Content2 />
//             </userContext.Provider>
//         </>
//     );
// }

// export default App;

import React, { useState } from 'react';
import { userContext } from './context';
import Header2 from './context-header2';
import Content2 from './context-content2';

export default function App() {
    let [user, setUser] = React.useState('');

    return (
        <userContext.Provider value={[user, setUser]}>
            <Header2 />
            <Content2 />
        </userContext.Provider>
    );
}
