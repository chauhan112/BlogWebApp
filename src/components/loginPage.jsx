import { TextInput } from "./TextInput";
import { Button } from "./Button";
import sideImage from "../assets/side.png";

export const LoginPage = () => {
    return (
        <div className="flex flex-row h-screen">
            {/* fix css of below componnents. it has on left image and on right form */}

            <div className="h-full w-1/3 bg-gray-200 ">
                <img
                    src={sideImage}
                    alt="login page image"
                    className="h-full w-full bg-cover"
                />
            </div>
            <div className="flex flex-col align-center justify-center">
                <h1>Login Page</h1>
                <span>login to edit and create blogs</span>
                <TextInput label={"Name:"} />
                <TextInput label={"Password:"} />
                <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded">
                    Login
                </Button>
            </div>
        </div>
    );
};
