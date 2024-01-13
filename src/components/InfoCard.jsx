import React, { } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const InfoCard = () => {
    console.log("InfoCard")
    const active = useSelector((state) => state.activeIndex)
    const infoCards = [
        {
            title: "Lorem 1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nesciunt reiciendis ea sed deserunt quisquam, saepe soluta, ad voluptatum repudiandae excepturi reprehenderit fugiat praesentium suscipit magni sapiente voluptate assumenda distinctio.",
            registerLink: "",
            active: true
        },
        {
            title: "Lorem 2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nesciunt reiciendis ea sed deserunt quisquam, saepe soluta, ad voluptatum repudiandae excepturi reprehenderit fugiat praesentium suscipit magni sapiente voluptate assumenda distinctio.",
            registerLink: "",
            active: false
        },
        {
            title: "Lorem 3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nesciunt reiciendis ea sed deserunt quisquam, saepe soluta, ad voluptatum repudiandae excepturi reprehenderit fugiat praesentium suscipit magni sapiente voluptate assumenda distinctio.",
            registerLink: "",
            active: false
        },
        {
            title: "Lorem 4",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nesciunt reiciendis ea sed deserunt quisquam, saepe soluta, ad voluptatum repudiandae excepturi reprehenderit fugiat praesentium suscipit magni sapiente voluptate assumenda distinctio.",
            registerLink: "",
            active: false
        },
        {
            title: "Lorem 5",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nesciunt reiciendis ea sed deserunt quisquam, saepe soluta, ad voluptatum repudiandae excepturi reprehenderit fugiat praesentium suscipit magni sapiente voluptate assumenda distinctio.",
            registerLink: "",
            active: false
        },
        {
            title: "Lorem 6",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nesciunt reiciendis ea sed deserunt quisquam, saepe soluta, ad voluptatum repudiandae excepturi reprehenderit fugiat praesentium suscipit magni sapiente voluptate assumenda distinctio.",
            registerLink: "",
            active: false
        },
        {
            title: "Lorem 7",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nesciunt reiciendis ea sed deserunt quisquam, saepe soluta, ad voluptatum repudiandae excepturi reprehenderit fugiat praesentium suscipit magni sapiente voluptate assumenda distinctio.",
            registerLink: "",
            active: false
        },
        {
            title: "Lorem 8",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nesciunt reiciendis ea sed deserunt quisquam, saepe soluta, ad voluptatum repudiandae excepturi reprehenderit fugiat praesentium suscipit magni sapiente voluptate assumenda distinctio.",
            registerLink: "",
            active: false
        },
    ]
    return (
        <div>
            <div className="event-title">{infoCards[active].title}</div>
            <div className="event-description">{infoCards[active].description}</div>

            <div className='link'>
                <Link to={"https://www.google.com"} className='link' > Link to google</Link></div>
        </div>
    )
}

export default InfoCard
