export const Button = (props) => {
    let bb = { ...props };
    delete bb.children;
    return <button {...bb}>{props.children} </button>;
};
