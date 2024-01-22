export const emoticons: Emoticon[] = [
    // -[ Shruggie ]-----------------------------------

    { name: "Kawaii", emoticon: "╮ (. ❛ ᴗ ❛.) ╭", category: "shruggie" },
    { name: "Dunno man", emoticon: "┐(´•_•`)┌", category: "shruggie" },
    { name: "Donger", emoticon: "¯\\_( ツ )_/¯", category: "shruggie" },
    { name: "Slug", emoticon: "¯\\_༼ ಥ ‿ ಥ ༽_/¯", category: "shruggie" },
    { name: "Big Face", emoticon: "¯\\_( ⊙_ʖ⊙ )_/¯", category: "shruggie" },
    {
        name: "Confused Sweating",
        emoticon: "▔\\▁((.′◔_′◔.))▁/▔",
        category: "shruggie",
    },
    { name: "Gentleman", emoticon: "乁( ⁰͡ Ĺ̯ ⁰͡ ) ㄏ", category: "shruggie" },
    { name: "Druggie", emoticon: "¯\\(◉◡◔)/¯", category: "shruggie" },
    { name: "No Idea", emoticon: "╮ (. ❛ ❛ _.) ╭", category: "shruggie" },

    // -[ Table Flip ]---------------------------------

    { name: "OG", emoticon: "(╯°□°）╯︵ ┻━┻", category: "tableflip" },
    { name: "Raging", emoticon: "(ノಠ益ಠ)ノ彡┻━┻", category: "tableflip" },
    { name: "Put Back", emoticon: "┬─┬ノ( º _ ºノ)", category: "tableflip" },
];

export type Emoticon = {
    name: string;
    emoticon: string;
    category: EmoticonCategory;
};

export const emoticonCategories = ["shruggie", "tableflip", "misc"] as const;
export type EmoticonCategory = (typeof emoticonCategories)[number];
