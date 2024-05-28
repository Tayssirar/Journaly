import React, { useRef, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import '../assets/css/fonts/customFonts.css'


const CustomJoditEditor = ({ content, setContent, editorRef }) => {
  const editor = useRef(null);

  useEffect(() => {
    if (editor.current) {
      editor.current.value = content;
    }
  }, [content]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (editor.current) {
        const editorContent = editor.current.value;
        setContent(editorContent);
      }
    }, 2000); // Update every 5000ms

    return () => clearInterval(interval);
  }, [setContent]);
  useEffect(() => {
  if (content.includes("<table>")){
    content = content.replaceAll("<table>", '"<table border="1" style="border-collapse:collapse;"');
    }
  });
  return (
    <div className="custom-ekeditor">
      <JoditEditor
        ref={editor}
        value={content}
        config={{
          autofocus: true,
          cursorAfterAutofocus: 'end',
          controls: {
            font: {
              list: {
                'Cursif': 'Cursif',
                'SeyesFont': 'SeyesFont',
                'BelleAllure': 'BelleAllure',
                'Ecole': 'Ecole',
                'LignesSeyes': 'LignesSeyes',
                'Lignes': 'Lignes',
                'Maternelle': 'Maternelle',
                'Plume': 'Plume',
                // ... include other fonts here
              },
            },
          },
          // Set default text color to black
          style: {
            color: '#000000' ,// Black color code


          }
        }}
      />
    </div>
  );
};

export default CustomJoditEditor;
