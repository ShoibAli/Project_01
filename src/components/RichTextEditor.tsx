import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RichTextEditor: React.FC = () => {
  const [editorContent, setEditorContent] = useState<string>("");

  useEffect(() => {
    const savedContent = localStorage.getItem("editorContent");
    if (savedContent) {
      setEditorContent(savedContent);
    }
  }, []);

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
    localStorage.setItem("editorContent", content);
  };

  const modules = {
    toolbar: [
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["clean"],
    ],
  };

  const formats = ["bold", "italic", "underline", "list", "bullet"];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Rich Text Editor
      </Typography>
      <ReactQuill
        theme="snow"
        value={editorContent}
        onChange={handleEditorChange}
        modules={modules}
        formats={formats}
        style={{ height: "300px", marginBottom: "50px" }}
      />
    </Box>
  );
};

export default RichTextEditor;
