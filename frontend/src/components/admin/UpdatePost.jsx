import React, { useState, useRef, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { InputField } from "../reusables/InputField/InputField";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { UploadAdapter } from "../reusables/CustomUploader";
import { createPostAction, getSinglePost, updatePostAction } from "../../redux/posts/postsAction";

const UpdatePost = ({ id }) => {
  const formRef = useRef();
  const dispatch = useDispatch();

  const [description, setdescription] = useState();

  const auth = useSelector((state) => state.auth);
  const { userInfo } = auth;

  const postsState = useSelector((state) => state.postsState);
  const { singlePost } = postsState;

  const validate = Yup.object({
    title: Yup.string().min(5, "Title must be more than 5 characters").required("Required"),
  });

  useEffect(() => {
    if (singlePost?._id !== id) {
      dispatch(getSinglePost(id));
    }
    setdescription(singlePost?.description);
  }, [singlePost, dispatch]);

  const onSubmitHandler = async ({ title }) => {
    let author = userInfo.firstName + " " + userInfo?.lastName;
    let body = {
      title,
      description,
      author,
    };
    dispatch(updatePostAction(id, body));
  };

  return (
    <div className="py-12 px-6">
      <h1 className="text-3xl">Update Post</h1>
      <Formik
        enableReinitialize={true}
        initialValues={{
          title: singlePost?.title,
        }}
        innerRef={formRef}
        validationSchema={validate}
        onSubmit={(values) => {
          onSubmitHandler(values);
        }}
      >
        {(formik) => (
          <>
            <Form>
              <div className="mb-1 mt-8">
                <InputField
                  name="title"
                  type="text"
                  label="title"
                  placeholder="Enter the title of article"
                />
              </div>
              <div className="mb-1">
                <CKEditor
                  editor={ClassicEditor}
                  data={description}
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                  }}
                  onReady={(editor) => {
                    editor.plugins.get("FileRepository").createUploadAdapter = function (loader) {
                      return new UploadAdapter(loader);
                    };
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setdescription(data);
                  }}
                />
              </div>
              <div className="pt-2">
                <button type="submit" className="btn-primary">
                  Save
                </button>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default UpdatePost;
