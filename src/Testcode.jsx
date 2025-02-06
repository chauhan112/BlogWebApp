import "./index.css";
import { Button } from "./components/Button";
import { useEffect, useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    // let greeting;
    // if (count % 2 == 0) {
    //     greeting = <h1>Welcome back!</h1>;
    // } else {
    //     greeting = <h1>Please sign up.</h1>;
    // }

    return (
        <>
            <div>
                <p>You clicked {count} times</p>
                {greeting}
                {/* {count % 2 == 0 ? (
                    <h1>Welcome back!</h1>
                ) : (
                    <h1>Please sign up.</h1>
                )} */}
                <Button
                    onClick={() => setCount(count + 1)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded"
                >
                    cline
                </Button>
            </div>
        </>
    );
}

export default App;
