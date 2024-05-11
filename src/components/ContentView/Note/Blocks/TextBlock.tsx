'use client';

import { useRef, useEffect } from 'react';
import { UPDATE_TEXT_BLOCK } from '@/graphql/page';
import { useMutation } from '@apollo/client';

type TextBlockProps = {
    id: string;
    text: string;
}

const TextBlock: React.FC<TextBlockProps> = ({ id, text }) => {

    const textRef = useRef<HTMLDivElement>(null);
    const [updateTextBlock] = useMutation(UPDATE_TEXT_BLOCK);


    useEffect(() => {
        if (textRef.current) {
            textRef.current.innerText = text;
        }
    }, [text]);

    const onSaveHandler = () => {
        if (textRef.current) {
            const text = textRef.current.innerText;
            updateTextBlock({
                variables: {
                    id: id,
                    input: {
                        content: {
                            text: text
                        }
                    }
                }
            });
        }
    };

    return (
        <div
            ref={textRef}
            onBlur={onSaveHandler}
            contentEditable={true}
            dangerouslySetInnerHTML={{ __html: text }}
        />
    );
}

export default TextBlock;