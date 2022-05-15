import { ConteSearching, DivsaoSearching } from "../styled";

export const Searching = ({ children }) => {
    return (
        <ConteSearching>
            <input placeholder={children} />
            <DivsaoSearching />
        </ConteSearching>
    );
};
