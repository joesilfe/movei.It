import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang='pt-br'>
                <Head>
                    <link rel="manifest" href="manifest.json" />
                    <link rel="shortcut icon" href="favicon.png" type="image/png" />
                    <link rel="apple-touch-icon" sizes="192x192" href="favicon-192.png" type="image/png" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <meta name="theme-color" content="#4953b8" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />                  
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}