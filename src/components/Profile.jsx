import { Header } from "./Header";
import { useState } from "react";
import { Button } from "./Button";
// import EmailIcon from "@material-ui/icons/Email";
// import PhoneIcon from "@material-ui/icons/Phone";

export const Profile = ({ name, phone, email }) => {
    const [lname, setLName] = useState(name);
    return (
        <>
            <Header title="Profile"></Header>
            <div className="flex flex-row h-[8rem] bg-gray-200 items-center p-4">
                <div>
                    <img
                        src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="profile"
                        className="w-24 h-24 rounded-full bg-cover"
                    />
                </div>
                <div className="ml-2">
                    <h1>{lname}</h1>
                    <div>
                        {/* add fa icon for below for email and phone*/}
                        {/* <EmailIcon /> */}
                        <span>{email}</span>
                        {/* <PhoneIcon /> */}
                        <span>{phone}</span>
                    </div>
                </div>
            </div>
        </>
    );
};
