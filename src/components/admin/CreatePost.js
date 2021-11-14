import React from "react";

import { createReactEditorJS } from "react-editor-js";
// import { EDITOR_JS_TOOLS } from "../../config/constants";
import CheckList from "@editorjs/checklist";
const ReactEditorJS = createReactEditorJS();

const CreatePost = () => {
  return (
    <div>
      <ReactEditorJS tools={{ checkList: CheckList }} />
    </div>
  );
};

export default CreatePost;
