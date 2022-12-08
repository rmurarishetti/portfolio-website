import { Html, Head, Main, NextScript } from 'next/document';
// import { useTheme } from 'next-themes';


export default function Document() {
    // const { theme, setTheme } = useTheme();
    // const bgColor = theme == 'light' ? '#fcfcfc' : '#121014';

    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
                <link rel="icon" type="image/png" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                {/* <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"></meta> */}
                <meta name="msapplication-TileColor" content="#8168ff" />
                {/* <meta name="theme-color" content={bgColor} /> */}
                <meta name="theme-color" media="(prefers-color-scheme: light)" content='#fcfcfc' />
                <meta name="theme-color" media="(prefers-color-scheme: dark)" content='#121014' />
                {/* <meta name="apple-mobile-web-app-status-bar-style" content={bgColor}></meta> */}
                <meta name="robots" content="index, follow" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}