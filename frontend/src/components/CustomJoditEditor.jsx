import React, { useRef, useEffect, useState } from 'react';
import JoditEditor from 'jodit-react';
import '../assets/css/fonts/customFonts.css';

const CustomJoditEditor = ({ content, setContent }) => {
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
    }, 10000); // Update every 2000ms

    return () => clearInterval(interval);
  }, [setContent]);


  const handleBlur = () => {
    if (editor.current) {
      const editorContent = editor.current.value;
      setContent(editorContent);
    }
  };

  return (
    <div className="custom-jodit-editor">
      <JoditEditor
        ref={editor}
        config={{
          autofocus: false,
          cursorAfterAutofocus: 'end',
          readonly: false, // all options from https://xdsoft.net/jodit/doc/,
          placeholder: '',
          spellcheck: true,
          defaultActionOnPaste: 'insert_as_html',
          defaultActionOnPasteFromWord: 'insert_as_html',
          askBeforePasteFromWord: false,
          askBeforePasteHTML: false,
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
            color: '#000000', // Black color code
            tableDefaultParams: {
              class: 'custom-jodit-editor' // Set the default class for tables
            },
          },

          enableDragAndDropFileToEditor: true,
          uploader: {
            url: 'your_upload_url', // Replace with your upload URL create a custom image upload endpoint using Node.js and Express, along with a file handling library like multer.
            format: 'json',
            pathVariableName: 'path',
            filesVariableName: 'files',
            withCredentials: false,
            headers: {
              'Authorization': 'Bearer <your_token>' // Replace with your authorization header if needed
            },
            data: {
              dir: 'your_directory' // Replace with your directory data
            },
            isSuccess: function (resp) {
              return !resp.error && resp.files && resp.files.length > 0;
            },
            getMessage: function (resp) {
              return resp.msg;
            },
            process: function (resp) {
              return {
                files: resp.files || [],
                path: resp.path || '',
                baseurl: '/content/assets',
                error: resp.error || 0,
                msg: resp.msg || ''
              };
            },
            defaultHandlerSuccess: function (response, editorInstance) {
              if (response.files && response.files.length) {
                response.files.forEach(file => {
                  let fullFilePath = `${response.path}/${file}`;
                  editorInstance.selection.insertImage(fullFilePath, null, 250);
                });
              }
            },
            error: function (e) {
              console.log('Error:', e);
            },
          },
        }}
  
        onBlur={handleBlur}
      />
    </div>
  );
};

export default CustomJoditEditor;
