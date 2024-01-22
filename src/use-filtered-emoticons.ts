import { useMemo, useState } from "react";
import { emoticons } from "./emoticons";

export const useFilteredEmoticons = () => {
    const [searchText, setSearchText] = useState("");

    const filteredEmoticons = useMemo(() => {
        if (searchText === "") {
            return emoticons;
        }

        const lowerCaseSearchText = searchText.toLowerCase();

        return emoticons.filter(
            (emoticon) =>
                emoticon.name.toLowerCase().includes(lowerCaseSearchText) ||
                emoticon.category.toLowerCase().includes(lowerCaseSearchText),
        );
    }, [searchText]);

    return [filteredEmoticons, setSearchText] as const;
};
