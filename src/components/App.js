import React from 'react';
import WavyBackground from './WavyBackground/WavyBackground'
import Navbar from './Navbar/Navbar'
import Intro from './Intro/Intro'
import Solutions from './Solutions/Solutions'
import Snippets from './Snippets/Snippets'
import Tools from './Tools/Tools'
import Pricing from './Pricing/Pricing'
import AnalyzeTools from './AnalyzeTools/AnalyzeTools'
import DownloadApp from './DownloadApp/DownloadApp'
import Testimonials from './Testimonials/Testimonials'
import Footer from './Footer/Footer'
import './App.css'

class App extends React.Component {
    render() {
        return (
            <div>
                <WavyBackground />
                <Navbar />
                <Intro />
                <Solutions />
                <Snippets />
                <Tools />
                <Pricing />
                <AnalyzeTools />
                <DownloadApp />
                <Testimonials />
                <Footer />
            </div>
        )
    }
}

export default App;
