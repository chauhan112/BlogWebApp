export const Header = ({ title }) => {
    return (
        <>
            <div className="flex items-center space-x-4 ">
                <img
                    src="src/assets/blog-image.jpg"
                    alt="blog icon"
                    className="w-12 h-12"
                />
                <h1 className="font-bold">{title}</h1>
            </div>
        </>
    );
};
