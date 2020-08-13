import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import courses from "../utils/dataCourse"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import c from "./course.module.scss"
const Course = ({ match }) => {
    const [selectedCourse, setSelectedCourse] = useState([])

    useEffect(() => {
        let yearMonth = match.params.curso
        let course = courses.filter(elemento => { if (elemento.id === yearMonth) return elemento })
        setSelectedCourse(course[0])
    }, [])
    return (
        <div className={c.superContainer}>
            {selectedCourse.bootcampers ? (
                <React.Fragment>
                    <div className={c.bootcampCard}>
                        <div className={c.headerContainer}>
                            <h1 className={c.titleBootcamp}>{selectedCourse.courses}</h1>


                        </div>
                        <div className={c.grillaBootcamp}>

                            {selectedCourse.bootcampers.map((elemento) => {
                                return (
                                    <div className={c.card} key={elemento.name}>
                                        <div className={c.cardFront}><img src={elemento.img}></img></div>
                                        <div className={c.cardBack}>
                                            <div className={c.containerp5}>
                                                <img className={c.logop5} src="https://coursereport-s3-production.global.ssl.fastly.net/rich/rich_files/rich_files/6139/s200/logo-p5-rojo.gif"></img></div>
                                            <div className={c.containerLetters}>
                                                {elemento.winners ? (
                                                    <React.Fragment>
                                                        <img className={c.corona} src="https://image.flaticon.com/icons/svg/720/720586.svg"></img>
                                                        <h2 >{elemento.name}</h2>
                                                    </React.Fragment>)
                                                    : (<h2 className={c.margins} >{elemento.name}</h2>)}
                                                <h3>Full Stack Developer</h3>
                                                <div className={c.containerRedes}>
                                                    <a href={elemento.linkedin}><FontAwesomeIcon icon={faLinkedin} /></a>
                                                    <a href={elemento.github}><FontAwesomeIcon icon={faGithub} /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <footer>
                        <div className={c.left}>
                            <h2>Les queremos mucho ❤️!</h2>
                            <h4>La van a romper toda!</h4>
                        </div>
                        <div className={c.right}>
                            {selectedCourse.tags ? (selectedCourse.tags.map((elemento) => {
                                return (
                                    <h4 key={elemento} className={c.hashtag}>{elemento}</h4>
                                )
                            })) : (null)}
                        </div>
                    </footer>
                </React.Fragment>
            ) : (null)}





        </div>

    )
}
export default Course