export const Header = ({ title }) => {
    return (
        <>
            <img
                src="src/assets/blog-image.jpg"
                alt="blog icon"
                className="w-12 h-12"
            />
            <h1 className="font-bold">{title}</h1>
        </>
    );
};
