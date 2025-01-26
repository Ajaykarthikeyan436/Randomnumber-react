import { useState } from "react"
import "./style.css"

function Randomapp() {
    var [count, setcount] = useState(0)

    var randomnumber =Math.floor(Math.random()*10)+1

    function random(event) {
        event.preventDefault()
        setcount(randomnumber)
    }

    function reset()
    {
        setcount(0)
    }

    return (
        <section className="whole_container">
            <form className="container">
                <h1 className="container_title">Generate Random Number</h1>
                <h1 className="container_result">{count}</h1>
                <button className="increment_btn" onClick={random}>Random Number</button>
                <input type="reset" className="reset_btn" onClick={reset}></input>
            </form>
        </section>
    )
}

export default Randomapp