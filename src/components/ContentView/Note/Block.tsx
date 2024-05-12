import { TextBlock } from "@/components/ContentView/Note/Blocks";

import '@/components/ContentView/Note/Block.scss';

const Block = ({ ...block }) => {
    switch (block.__typename) {
        case "TextBlock":
            return <TextBlock id={block.id} {...block.content} />;
        default:
            return <div>Block not found</div>;
    }
}

export default Block;