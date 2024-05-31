import React, { useRef } from 'react';
import CustomJoditEditor from '../CustomJoditEditor';

function TextSection({ content, setContent }) {
    const editorRef = useRef(null);

    return (
        <div>
            <CustomJoditEditor content={content} setContent={setContent} editorRef={editorRef} />
        </div>
    );
}

export default TextSection;
