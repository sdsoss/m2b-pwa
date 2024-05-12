'use client';

import { useRef } from 'react';
import { UPDATE_TEXT_BLOCK } from '@/graphql/page';
import { useMutation } from '@apollo/client';

type TextBlockProps = {
    id: string;
    text: string;
}

const TextBlock: React.FC<TextBlockProps> = ({ id, text }) => {

    const textRef = useRef<HTMLDivElement>(null);
    const [updateTextBlock] = useMutation(UPDATE_TEXT_BLOCK);

    const onSaveHandler = () => {
        if (textRef.current) {
            updateTextBlock({
                variables: {
                    id: id,
                    input: {
                        content: {
                            text: textRef.current.innerText
                        }
                    }
                }
            });
        }
    };

    /**
     * This function is used to handle the Enter and Backspace keys when the user is typing in the contentEditable div.
     */
    const returnLineBreak = (keyboardEvent: React.KeyboardEvent<HTMLDivElement>) => {
        // If the user presses the shift + Enter keys, stop contentEditable
        if (keyboardEvent.key === 'Enter' && keyboardEvent.shiftKey === false) {
            keyboardEvent.preventDefault();
            textRef.current?.blur();
        }

        // If the user presses the Backspace key, check if the text is empty, if so, stop contentEditable and delete the block
        else if (keyboardEvent.key === 'Backspace' && textRef.current?.innerText === '') {
            keyboardEvent.preventDefault();
            textRef.current?.blur();
        }
    }

    return (
        <div
            className={`block`}
            ref={textRef}
            onBlur={onSaveHandler}
            contentEditable={true}
            dangerouslySetInnerHTML={{ __html: text }}
            onKeyDown={returnLineBreak}
        />
    );
}

export default TextBlock;