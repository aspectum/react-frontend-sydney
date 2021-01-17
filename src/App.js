import React from 'react';
import WavyBackground from './components/WavyBackground/WavyBackground'
import Navbar from './components/Navbar/Navbar'
import GoTop from './components/GoTop/GoTop';
import Intro from './sections/Intro/Intro'
import Solutions from './sections/Solutions/Solutions'
import Snippets from './sections/Snippets/Snippets'
import Tools from './sections/Tools/Tools'
import Pricing from './sections/Pricing/Pricing'
import AnalyzeTools from './sections/AnalyzeTools/AnalyzeTools'
import DownloadApp from './sections/DownloadApp/DownloadApp'
import Testimonials from './sections/Testimonials/Testimonials'
import Footer from './sections/Footer/Footer'
import Spacer from './sections/Spacer/Spacer';
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
