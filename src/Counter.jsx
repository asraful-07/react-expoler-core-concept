import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0);

    const handelClick = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const handelReduce = () => {
        const newCount = count - 1;
        setCount(newCount);
    }
    return (
        <div className="container">
            <h4>
                Counter: {count}
            </h4>
            <button className="btn2" onClick={handelClick}>Add</button>
            <button className="btn3" onClick={handelReduce}>Reduce</button>
        </div>
    )
};