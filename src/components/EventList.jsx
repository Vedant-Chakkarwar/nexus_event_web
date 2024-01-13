import React, { useEffect, useState } from "react";
import "./event.css"
import { changeInfoCard } from "../reducers/InfoCardSlice";
import InfoCard from "./InfoCard";
import { useDispatch } from "react-redux";

const EventList = () => {
    const dispatch = useDispatch();



    const [buttons, setButtons] = useState([])
    const count = 8
    const increase = Math.PI * 2 / 8
    const radius = 250
    useEffect(() => {
        const buttons = document.querySelectorAll('.button')
        setButtons(buttons)
    }, [])



    buttons.forEach((button, i) => {
        button.style.top = Math.sin(-Math.PI / 2 + i * increase) * radius + 'px'
        button.style.left = Math.cos(-Math.PI / 2 + i * increase) * radius + 'px'

        if (button.style.top === '-250px') {
            button.classList.add("active")

        } else {
            button.classList.remove("active")

        }
    })

    function move(i) {
        dispatch(changeInfoCard({ activeCard: i }))

        let n = i;
        buttons.forEach((button, i) => {
            button.style.top = Math.sin(-Math.PI / 2 + (i - n % count) * increase) * radius + 'px'
            button.style.left = Math.cos(-Math.PI / 2 + (i - n % count) * increase) * radius + 'px'

            if (button.style.top === '-250px') {
                button.classList.add("active")
            } else {
                button.classList.remove("active")
            }
        })
    }

    return (
        <div className="">
            <div className="info-pane">
                <div className="info-card">
                    <InfoCard />
                </div>
            </div>
            <div className="menu">
                <div className="center">
                    {Array.from({ length: count }).map((b, i) => (
                        <div key={i} className={`button `}
                            onClick={() => move(i)}
                        >
                            {i + 1}
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default EventList;