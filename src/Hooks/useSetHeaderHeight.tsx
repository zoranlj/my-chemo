import { useEffect } from 'react'

const useSetHeaderHeight = () => {
    const checkHeaderHeight = () => {
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
}

export default useSetHeaderHeight
