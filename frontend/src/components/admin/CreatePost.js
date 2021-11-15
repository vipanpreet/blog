import React from "react";

import { createReactEditorJS } from "react-editor-js";
import { EDITOR_JS_TOOLS } from "../../config/constants";
const ReactEditorJS = createReactEditorJS();

const CreatePost = () => {
  return (
    <div>
      <ReactEditorJS tools={EDITOR_JS_TOOLS} />
    </div>
  );
};

export default CreatePost;
