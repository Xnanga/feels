import dynamic from 'next/dynamic';
import styled from '@emotion/styled';
import 'react-quill/dist/quill.snow.css';

import useSessionStorage from '../custom-hooks/useSessionStorage';

const EditorBox = styled.div`
  & > .quill,
  .ql-container,
  .ql-editor {
    min-height: 30rem;
    font-size: 1.8rem;
  }
`;

const ReactQuill = dynamic(import('react-quill'), { ssr: false });
const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ indent: '-1' }, { indent: '+1' }, { align: [] }],
    ['clean'],
  ],
};

const TextEditor = () => {
  const { sessionValue, setSessionValue } = useSessionStorage(
    'JournalContent',
    null
  );

  return (
    <EditorBox>
      <h2>What's been going on?</h2>
      <ReactQuill
        modules={modules}
        onChange={setSessionValue}
        value={sessionValue}
        theme="snow"
        placeholder="I had a fantastic day today because..."
      />
    </EditorBox>
  );
};

export default TextEditor;
