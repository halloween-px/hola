import { useEffect, useState } from "react"
import { useMainContext } from "../context/MainContext";

const Teams = () => {
    const {teams, loadTeams} = useMainContext();
    const [active, setActive] = useState(null);

    useEffect(() => {
        loadTeams(4);
    }, [])
   
    return (
        <section className="vg-teams section section-padding" data-view={800}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-6 col-lg-8">
                        <div className="section-title section-title--center">
                            <div className="section-title--wrapper text-center">
                                <div className="title title-green">
                                    Meet our <span>team</span>
                                </div>
                                <div className="text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-gap">
                    {teams.map((team) => {
                        return (
                            <div className="col-xxl-3 col-sm-6" key={team.id}>
                                <div className={`vg-teams-item ${team.id === active ? 'active' : ''}`}>
                                    <div className="icon-area">
                                        <img src="/images/resource/teams/icon.png" onClick={() => {setActive(team.id === active ? null : team.id)}} alt="#" />
                                        <i className="fa-regular fa-xmark" />
                                    </div>
                                    <ul className="list list-social">
                                        <li className="list-item">
                                            <a href="#">
                                                <i className="fa-brands fa-facebook" />
                                            </a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">
                                                <i className="fa-brands fa-instagram" />
                                            </a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">
                                                <i className="fa-brands fa-whatsapp" />
                                            </a>
                                        </li>
                                    </ul>
                                    <a
                                        href={team.images}
                                        data-fancybox=""
                                        className="image-area"
                                    >
                                        <img src={team.images} alt={team.name} />
                                        <span className="show-area">
                                            <span className="name-area">{team.name}</span>
                                            <span className="box">
                                                <span className="shadow" />
                                            </span>
                                        </span>
                                    </a>
                                    <div className="info-area">
                                        <h5 className="name">
                                            <span>{team.name.split(' ')[0]}</span> {team.name.split(' ')[1]}
                                        </h5>
                                        <p className="post">{team.post}</p>
                                        <a
                                            href="#"
                                            className="btn btn--primary btn--primary-other h-100 w-100"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

    )
}

export default Teams;