import Head from 'next/head'
import Layout from '../components/Layout'
import Game from '../components/Game'

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Spin and Win game</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="description" content="Spin and win game" />
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            </Head>

            <Game />
        </Layout>
    )
}
