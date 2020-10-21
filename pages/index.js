import Head from 'next/head'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Layout from '../components/Layout'
import { Wheel } from '../components/Wheel'
import BettingForm from '../components/BettingForm'

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Spin and Win game</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Wheel />
            <BettingForm />
        </Layout>
    )
}
