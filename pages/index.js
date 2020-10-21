import Head from 'next/head'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Spin and Win game</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Jumbotron className="pb-1">
                <h1 className="header">Welcome To React-Bootstrap</h1>
                <h2 className="header">Using Sass with custom theming</h2>
            </Jumbotron>

            <Button>test</Button>
        </div>
    )
}
