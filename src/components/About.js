import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import aboutImg from "../assets/img/aboutImage.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const About = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Frontend Developer", "UI Developer"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="about" id="about">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={aboutImg} alt="Header Img" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">More About Me...</span>
                                    {/* <h1>{`Hi! I'm Dimple`} <span className="txt-rotate" dataPeriod="1000" data-rotate='["Frontend Developer","UI Developer" ]'><span className="wrap">{text}</span></span></h1> */}
                                    <p className="about-para">I am a skilled frontend developer with over <span style={{ color: "white", fontWeight: "600" }}>3yrs</span> of experience in the industry. My passion lies in creating
                                        <span style={{ color: "white", fontWeight: "600" }}> highly responsive web applications </span>through frontend development. I take pride in staying
                                        updated with latest trends in frontend development and leveraging my <span style={{ color: "white", fontWeight: "600" }}> proficiency in translating UX designs & wireframes into high-quality code </span>to produce visually appealing
                                        and<span style={{ color: "white", fontWeight: "600" }}> user-friendly </span>websites. In my career till now I have developed a deep understanding of<span style={{ color: "white", fontWeight: "600" }}> user interface(UI) principles. </span>
                                        By putting myself in the shoes of the end-users, I strive to create intuitive and seamless browsing experiences.
                                        I believe that a well-designed website should not only look visually appealing but also provide a smooth and enjoyable
                                        interaction for visitors. When starting a new project, I thoroughly research and analyze the target audience and the<span style={{ color: "white", fontWeight: "600" }}> client's
                                        specific requirements </span>and develop the application accordingly.
                                    </p>
                                    {/* <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button> */}
                                </div>}
                        </TrackVisibility>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}
