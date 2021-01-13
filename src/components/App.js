import React from 'react';
import Navbar from './Navbar/Navbar'
import Intro from './Intro/Intro'
import Solutions from './Solutions/Solutions'

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Intro />
                <Solutions />
            </div>
        )
    }
}

export default App;
