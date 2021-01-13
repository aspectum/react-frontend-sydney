import React from 'react';
import Navbar from './Navbar'
import Intro from './Intro'
import Solutions from './Solutions'

class App extends React.Component {
    render() {
        return (
            <div className='ma2 pa2'>
                <Navbar />
                <Intro />
                <Solutions />
            </div>
        )
    }
}

export default App;
