import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import nProgress from "nprogress";
import Img from 'next/image'
import Link from 'next/link'

interface SongRequest {
    title: string
    artist: string
    name: string
}

export default function Event(){

    const [songReq, setSongReq] = useState<SongRequest>({title:'', artist: '', name: ''})
    const [formMessage, setFormMessage] = useState<string | null>(null)

    function inputHandler(e: React.ChangeEvent<HTMLInputElement>){
        const field = e.target.name 
        const value = e.target.value

        setSongReq((prevState) => ({
            ...prevState,
            [field]: value,
        }))
    }

    async function submitHandler() {
        nProgress.start()
        setFormMessage('Loading')

        let {data} = await axios.post('/api/songRequest', {
            title: songReq.title,
            artist: songReq.artist,
            name: songReq.name
        })

        if (data.message) {
            setFormMessage(data.message)
        }

        nProgress.done()
    }

    return(
        <>
            <Head>
                <title>Event Information | Cumming Charbonneau Wedding</title>
            </Head>

            <div className="container" id="intro">
                <h1>Event Information</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut quam sodales, vehicula velit nec, tempus metus. Curabitur eu tortor sit amet orci sollicitudin eleifend vel sed sem. Curabitur scelerisque magna urna, ac ultrices erat iaculis ut. Ut sodales magna ac nisl accumsan vehicula sit amet vitae nibh. Maecenas erat.</p>
            </div>
            <div className="sectionBlock colorBackground" id="directions">
                <div className="container ">
                    <h2>Where to Go</h2>
                    <Img 
                        src={'/map.jpg'}
                        width={1200}
                        height={758}
                        alt="Wedding Map"
                        style={{maxWidth: '100%', height: 'auto'}}
                    />
                    <ul>
                        <li><p>When you arrive at Assiniboine Park, follow signs for <strong>The Duck Pond.</strong></p></li>
                        <li><p>When you arrive at the Duck Pond, <strong>turn left and park in the nearby parking lot.</strong></p></li>
                        <li><p>Enter the <strong>English Garden</strong> through the black gate, across the road from the Duck Pond and Park Cafe.</p></li>
                        <li><p>Follow the the path through the garden towards the <strong>Leo Mol Sculpture Garden</strong>.</p></li>
                    </ul>
                    <p><strong>Do not go to The Leaf!</strong></p>
                    <p>A video walk through to the sculpture garden will be posted before the wedding</p>

                    <a href='https://maps.app.goo.gl/SqkNe2Rgr7Q344RKA' target="_blank" className="directionsBtn">View on Google Maps</a>
                </div>

            </div>
            <div className="sectionBlock container" id="schedule">
                <h2>Day-of Schedule</h2>
                <div className="schedule">
                    <div className="row">
                        <div className="time">
                            3:30pm
                        </div>
                        <div className="activity">
                            Guests Arrive
                        </div>
                    </div>
                    <div className="row">
                        <div className="time">
                            3:30pm
                        </div>
                        <div className="activity">
                            Guests Arrive
                        </div>
                    </div>
                    <div className="row">
                        <div className="time">
                            3:30pm
                        </div>
                        <div className="activity">
                            Guests Arrive
                        </div>
                    </div>
                    <div className="row">
                        <div className="time">
                            3:30pm
                        </div>
                        <div className="activity">
                            Guests Arrive
                        </div>
                    </div>
                    <div className="row">
                        <div className="time">
                            3:30pm
                        </div>
                        <div className="activity">
                            Guests Arrive
                        </div>
                    </div>
                </div>

            </div>
            <div className="sectionBlock colorBackground" id="songRequest">
                <div className="container">
                    <h2>Song Request</h2>
                    <p>Use the form below to request a song to be played at our reception!</p>
                    <p><strong>Except for you Desiree. No song reqesting for you.</strong></p>

                    <div className="songReqForm">


                        <div className="songReqRow">
                            <input type="text" placeholder="Title" name="title" onChange={(e) => inputHandler(e)}/>
                            <span>
                                By
                            </span>
                            <input type="text" placeholder="Artist" name="artist" onChange={(e) => inputHandler(e)}/>
                        </div>

                        <label>
                            <strong>Song Requested By: </strong>
                            <input type="text" placeholder="Your Name" name='name' onChange={(e) => inputHandler(e)}/>
                        </label>
                        {
                            formMessage? (
                                <div className="formMessage">
                                    <p>{formMessage}</p>
                                </div>                                
                            ) : 
                            <></>
                        }
                        <button className="submitBtn" onClick={submitHandler}>Submit</button>
                    </div>
                </div>
            </div>

            <div className="sectionBlock container" id="faqs">
                <h2>Have questions?</h2>
                <p>please see our <Link href={`/faqs`}>Frequently Asked Questions</Link> page!</p>
                <Link href={`/faqs`} className="btn">FAQs</Link>
            </div>
        </>
    )
}