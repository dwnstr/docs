import '../styles.css'
// import next/theme
import { useTheme } from 'next-themes'

export default function MyApp({Component, pageProps}) {

    return(
        <div className={``}>
            <Component {...pageProps} />
        </div>
    )
}