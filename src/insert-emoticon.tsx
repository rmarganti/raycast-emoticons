import { Action, ActionPanel, List } from "@raycast/api";
import { Emoticon } from "./emoticons";
import { useFilteredEmoticons } from "./use-filtered-emoticons";

export default function Command() {
    const [filteredEmoticons, setSearchText] = useFilteredEmoticons();

    return (
        <EmoticonList onSearchTextChange={setSearchText}>
            {filteredEmoticons.map((emoticon) => (
                <EmoticonListItem emoticon={emoticon} />
            ))}
        </EmoticonList>
    );
}

type EmoticonListProps = {
    children: React.ReactNode;
    onSearchTextChange: (text: string) => void;
};

function EmoticonList({ children, onSearchTextChange }: EmoticonListProps) {
    return (
        <List filtering={false} onSearchTextChange={onSearchTextChange}>
            {children}
        </List>
    );
}

type EmoticonListItemProps = {
    emoticon: Emoticon;
};

function EmoticonListItem({ emoticon }: EmoticonListItemProps) {
    return (
        <List.Item
            key={emoticon.plain}
            title={emoticon.plain}
            subtitle={emoticon.title || undefined}
            accessories={[{ text: emoticon.tags.join(", ") }]}
            actions={
                <ActionPanel>
                    <Action.Paste content={emoticon.plain} />
                </ActionPanel>
            }
        />
    );
}
