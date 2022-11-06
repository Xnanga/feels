import styled from '@emotion/styled';
import { useState, useCallback } from 'react';
import { createEditor, Editor, Transforms } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

const TextSection = styled.section`
  min-height: 25rem;
  width: 75%;
  padding: 2rem;
  border: 2px solid black;
  border-radius: 4px;
`;

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
];

const TextEditor = () => {
  const [editor] = useState(() => withReact(createEditor()));

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  return (
    <>
      <h2>What's going on today?</h2>
      <TextSection>
        <Slate editor={editor} value={initialValue}>
          <Editable />
        </Slate>
      </TextSection>
    </>
  );
};

const DefaultElement = (props) => {
  return <p {...props.attributes}>{props.children}</p>;
};

export default TextEditor;
