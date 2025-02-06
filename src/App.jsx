import "./index.css";
import { Button } from "./components/Button";
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import Config from "./config";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header title={Config.title}></Header>
            <div>
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
