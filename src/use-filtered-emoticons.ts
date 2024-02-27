import { useMemo, useState } from "react";
import { Emoticon, emoticons } from "./emoticons";

export const useFilteredEmoticons = () => {
    const [searchText, setSearchText] = useState("");

    const filteredEmoticons = useMemo(() => {
        if (searchText === "") {
            return emoticons;
        }

        const lowerCaseSearchText = searchText.toLowerCase();

        return emoticons.filter(
            (emoticon) =>
                titleIncludes(emoticon, lowerCaseSearchText) ||
                categoriesInclude(emoticon, lowerCaseSearchText),
        );
    }, [searchText]);

    return [filteredEmoticons, setSearchText] as const;
};

const titleIncludes = (emoticon: Emoticon, searchText: string) => {
    const title = emoticon.title;

    if (title === undefined || title === null) {
        return false;
    }

    return title.toLowerCase().includes(searchText);
};

const categoriesInclude = (emoticon: Emoticon, searchText: string) => {
    const categories = emoticon.tags;

    return categories.some((category) =>
        category.toLowerCase().includes(searchText),
    );
};
