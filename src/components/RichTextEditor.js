import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  Container,
  Button,
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

const RichTextEditor = () => {
  const [editorData, setEditorData] = useState("");
  const [savedData, setSavedData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("richTextData");
    if (storedData) {
      setEditorData(storedData);
    }
  }, []);

  const handleEditorChange = (value) => {
    setEditorData(value);
  };

  const handleSaveData = () => {
    if (editorData.trim() === "") {
      alert("Please enter some text before saving!");
      return;
    }
    const newSavedData = [...savedData, editorData];
    setSavedData(newSavedData);
    localStorage.setItem("richTextData", newSavedData);
    alert("Data saved successfully!");
    setEditorData("");
  };

  const handleClearData = () => {
    localStorage.removeItem("richTextData");
    setEditorData("");
    setSavedData([]);
    alert("Saved data cleared!");
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      ["bold", "italic", "underline"],
      ["link"],
      [{ color: [] }, { background: [] }],
      ["blockquote", "code-block"],
    ],
  };

  return (
    <Container>
      <h2>Rich Text Editor</h2>
      <Box mb={2} display="flex" gap={2}>
        <Button variant="contained" color="primary" onClick={handleSaveData}>
          Save Data
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleClearData}>
          Clear Saved Data
        </Button>
      </Box>

      <ReactQuill
        value={editorData}
        onChange={handleEditorChange}
        modules={modules}
        theme="snow"
        style={{ height: "300px" }}
      />
      <Box mt={4}>
        {savedData.length > 0 ? (
          savedData.map((data, index) => (
            <Card key={index} sx={{ marginBottom: 2 }}>
              <CardContent>
                <Typography variant="h6">Saved Data {index + 1}</Typography>
                <div dangerouslySetInnerHTML={{ __html: data }} />
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography sx={{ margin: "80px 0px" }}>
            No saved data available.
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default RichTextEditor;
