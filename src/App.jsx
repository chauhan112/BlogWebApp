import "./index.css";
import { Button } from "./components/Button";
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import Config from "./config";
import { TextInput } from "./components/TextInput";
import { LoginPage } from "./components/LoginPage";
import { Profile } from "./components/Profile";
function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Profile
                name={"John"}
                email={"2O0ZU@example.com"}
                phone={"123-456-7890"}
            ></Profile>
            {/* <LoginPage></LoginPage> */}
            {/* <Header title={Config.title}></Header>
            <TextInput label={"Enter your name:"} />
            <div>
                <Button
                    onClick={() => setCount(count + 1)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded"
                >
                    cline
                </Button>
            </div> */}
        </>
    );
}

export default App;
