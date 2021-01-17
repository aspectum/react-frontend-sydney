import React from 'react';
import WavyBackground from './components/WavyBackground/WavyBackground'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Solutions from './components/Solutions/Solutions'
import Snippets from './components/Snippets/Snippets'
import Tools from './components/Tools/Tools'
import Pricing from './components/Pricing/Pricing'
import AnalyzeTools from './components/AnalyzeTools/AnalyzeTools'
import DownloadApp from './components/DownloadApp/DownloadApp'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'
import GoTop from './components/GoTop/GoTop';
import Spacer from './components/Spacer/Spacer';
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
                <Spacer />
                <Tools />
                <Spacer />
                <Pricing />
                <AnalyzeTools />
                <DownloadApp />
                <Testimonials />
                <Footer />
                <GoTop />
            </div>
        )
    }
}

export default App;
