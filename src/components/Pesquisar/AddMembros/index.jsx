import { ConteSearching, DivsaoSearching } from "../styled";

export const Searching = ({ children, type }) => {
    return (
        <ConteSearching>
            <input type={type} placeholder={children} />
        </ConteSearching>
    );
};
