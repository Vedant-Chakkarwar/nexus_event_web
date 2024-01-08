import React from "react";
import "./event.css"

const EventList = ()=>{
    const [buttons, setButtons] = useState([])
    const count = 8
    const increase = Math.PI * 2 / 8
    const radius = 250
    let angle = 0
    useEffect(() => {
        const buttons = document.querySelectorAll('.button')
        setButtons(buttons)
    }, [])

    buttons.forEach((button, i) => {
        button.style.top = Math.sin(-Math.PI / 2 + i * increase) * radius + 'px'
        button.style.left = Math.cos(-Math.PI / 2 + i * increase) * radius + 'px'
    })

    function move(event) {

        let n = 0;

        console.log(buttons.forEach((button, i) => {
            if (button === event.target) {
                console.log("true");
                n = i;
            }
        }));

        const endAngle = (n % count) * increase
        function turn() {
            if (Math.abs(endAngle - angle) > 1 / 8) {
                const sign = endAngle > angle ? 1 : -1
                angle = angle + sign / 8
                setTimeout(turn, 35)
            } else {
                angle = endAngle
            }
            buttons.forEach((button, i) => {
                button.style.top = Math.sin(-Math.PI / 2 + i * increase - angle) * radius + 'px'
                button.style.left = Math.cos(-Math.PI / 2 + i * increase - angle) * radius + 'px'
            })
        }
        turn()
    }

    return (
        <div className="">
            <div className="info-pane">
                <div className="info-card">info-card</div>
            </div>
            <div className="menu">
                <div className="center">
                    {Array.from({ length: count }).map((_, i) => (
                        <div key={i} className="button"
                            style={{
                                position: 'absolute',
                                top: `${Math.sin(-Math.PI / 2 + i * increase) * radius}px`,
                                left: `${Math.cos(-Math.PI / 2 + i * increase) * radius}px`
                            }}
                            onClick={move}
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