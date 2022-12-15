import { MainProvaider } from '../components/context/MainContext'
import '../scss/app.scss'
import Script from 'next/script';

export default function App({Component, pageProps}) {
    return (
        <>
        <Script strategy="beforeInteractive" type="text/javascript" src="/script/typed/typed.js" key='typed' />
        <Script strategy="beforeInteractive" type="text/javascript" src="/script/scripts.js" key='scripts' />
        <Script 
        strategy="beforeInteractive"
        type="text/javascript"
        defer={false} 
        src="script/canvas.js" />
        <MainProvaider>
            <Component {...pageProps} />
        </MainProvaider>
        </>
    )
}
