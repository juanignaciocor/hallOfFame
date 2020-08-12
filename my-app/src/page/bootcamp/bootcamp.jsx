import React from "react"
import dataCourse from "../utils/dataCourse"
import { Link } from "react-router-dom"
import bc from "./bootcampers.module.scss"
export default () => {
    return (
        <React.Fragment>
            <h1 className={bc.hallofFame}>⭐ P5 Hall Of Fame ⭐</h1>

            <section className={bc.containerBootcamp}>
                {dataCourse.length >= 1 ? (dataCourse.map(elemento => {
                    return (
                        <Link key={elemento.id} to={`/bootcamps/${elemento.id}`}>
                            <div className={bc.cardCourse}>
                                <h3>{`<${elemento.courses}>`}</h3>
                                <div className={bc.coursesCard} key={elemento.id}>
                                    <div className={bc.bootcampersCard}>
                                        {elemento.bootcampers.map((bootcamper, index) => {
                                            return (
                                                <img key={index} src={bootcamper.img} />

                                            )
                                        })}
                                    </div>

                                </div>
                                <h3>{`</${elemento.courses}>`}</h3>
                            </div></Link>)

                })) : (null)}


            </section>
        </React.Fragment>
    )

}