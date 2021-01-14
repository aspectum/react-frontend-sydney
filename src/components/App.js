import React from 'react';
import Navbar from './Navbar/Navbar'
import Intro from './Intro/Intro'
import Solutions from './Solutions/Solutions'
import Snippets from './Snippets/Snippets'
import Tools from './Tools/Tools'
import Pricing from './Pricing/Pricing'
import './App.css'

class App extends React.Component {
    render() {
        return (
            <div>
                <div id='light-blue-bg'></div>
                <Navbar />
                <Intro />
                <Solutions />
                <Snippets />
                <Tools />
                <Pricing />
            </div>
        )
    }
}

export default App;
