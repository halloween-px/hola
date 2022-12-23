import { MainProvaider } from '../components/context/MainContext'
import { Provider } from 'react-redux'
import { useStore } from '../store'
import '../scss/app.scss'
import Script from 'next/script';

export default function App({ Component, pageProps }) {
    const store = useStore(pageProps.initialReduxState)
    return (
        <>
            <Script strategy="beforeInteractive" type="text/javascript" src="/script/typed/typed.js" key='typed' />
            <Script strategy="beforeInteractive" type="text/javascript" src="/script/scripts.js" key='scripts' />
            <Script
                strategy="beforeInteractive"
                type="text/javascript"
                defer={false}
                src="/script/canvas.js" />
            <Provider store={store}>
                <MainProvaider>
                    <Component {...pageProps} />
                </MainProvaider>
            </Provider>
        </>
    )
}
