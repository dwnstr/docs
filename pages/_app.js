import '../styles.css'
import { Analytics } from '@vercel/analytics/react';
// import next/theme
import { useTheme } from 'next-themes'

export default function MyApp({Component, pageProps}) {

    return(
        <div className="">
            <Component {...pageProps} />
            <Analytics/>
        </div>
    )
}