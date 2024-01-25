import React, { useEffect } from 'react'
import './App.scss'
import LineChart from './components/LineChart'
import data from './data/data'

function App() {
    // check header height
    const checkHeaderHeight = () => {
        console.log('checkHeaderHeight')
        // select header element
        const header = document.querySelector('header')
        // get rendered styles
        const styles = window.getComputedStyle(header as HTMLElement)
        // set header height rendered style
        const headerHeight = styles.height
        // set CSS as a value
        document.documentElement.style.setProperty(
            '--sl-header-height',
            headerHeight
        )
    }

    useEffect(() => {
        window.addEventListener('orientationchange', checkHeaderHeight)
        window.addEventListener('resize', checkHeaderHeight)
        checkHeaderHeight()
        return () => {
            window.removeEventListener('orientationchange', checkHeaderHeight)
            window.removeEventListener('resize', checkHeaderHeight)
        }
    }, [])

    return (
        <div className="container">
            <header>
                <h1>CAPOX side effects</h1>
            </header>
            <main className="lineChartWrapper">
                <LineChart data={data} />
            </main>
        </div>
    )
}

export default App
