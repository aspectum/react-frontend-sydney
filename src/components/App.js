import React from 'react';
import Navbar from './Navbar'
import Intro from './Intro'

class App extends React.Component {
    render() {
        return (
            <div className='ma2 pa2'>
                <Navbar />
                <Intro />
                <h1 className='f1'>Hello World</h1>
            </div>
        )
    }
}

export default App;
