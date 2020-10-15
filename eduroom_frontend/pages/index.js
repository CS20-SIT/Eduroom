import Head from 'next/head';
import Navbar from '../components/layouts/navbar';
import LandingContent from '../components/landing/content';
export default function Home() {
    return (
        <div>
            <Head>
                <title>Eduroom Project</title>
                <link rel="icon" href="/favicon.ico" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                ></link>
                <link
                    href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <main>
                <Navbar />
                <LandingContent />
            </main>
        </div>
    );
}
