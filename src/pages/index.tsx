import Head from "next/head";
import Img from "next/image";


export default function Home() {
  return (
    <>
      <Head>
        <title>Cumming Charbonneau Wedding</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div className="heroImage" style={{position: 'relative', width: '100%'}}>
          <Img 
            src={'/1N7A7311.jpg'}
            fill={true}
            style={{objectFit: 'cover', objectPosition: 'bottom'}}
            alt="Cumming Charbonneau Wedding"
          />
        </div>
        <div className="introText sectionBlock">
          <p><em>Please join us for our wedding celebration on </em>
            <span className="date">August 24, 2024</span>
            <span>At the <strong>Leo Mol Sculpture Garden in Assiniboine Park</strong></span>
          </p>
        </div>
      </div>
      <div className="ourStory sectionBlock">
        <div className="container">
          <h2>Our Story</h2>
          <p>Pure Chaos</p>
        </div>
      </div>

    </>
  );
}
