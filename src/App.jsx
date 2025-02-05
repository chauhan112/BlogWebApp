import { useState } from "react";
import "./index.css";
import { Button } from "./components/Button";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>Hello World</div>

            <Button />
        </>
    );
}

export default App;
