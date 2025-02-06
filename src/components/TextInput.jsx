// make a textfield for user input#

export const TextInput = ({ label }) => {
    // return (
    //     <div className="flex flex-col">
    //         <label>Enter your name:</label>
    //         <input type="text" className="w-2xs" />
    //     </div>
    // );
    return (
        <div className="flex flex-col p-4 border border-gray-300 rounded-md shadow-sm">
            <label
                htmlFor="user-input"
                className="mb-2 text-sm font-medium text-gray-700"
            >
                {label}
            </label>
            <input
                id="user-input"
                type="text"
                className="w-2xs p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
};
