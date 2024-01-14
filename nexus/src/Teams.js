import { FaGithub ,FaLinkedin } from "react-icons/fa";
import React from 'react'
import { Wrapper } from './assets/wrappers/TeamPage'
export default function Teams() {
    return (
        <Wrapper>
            <div className="main">
                <h1 className="h1 font-serif text-3xl">TEAMS PAGE</h1>
                <div className="container place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2" >
                    {"1234123412341234".split('').map((item)=>(
                        <div key={item} className="card front">
                        <div className="image">
                            <img src="images/profile-img.png" alt="" className="profile-img" />
                            <div className="text">
                                <span className="name">LOREM IPSUM</span>
                            </div>
                        </div>
                        <div className="icon">
                            <a href="/team" className="glink">
                                <FaLinkedin className="text-3xl"/>
                            </a>
                            <a href="/team" className="llink">
                                <FaGithub className="text-3xl"/>
                            </a>
                        </div>
                    </div>
                    ))}
                        </div>
            </div>
        </Wrapper>
    )
}
