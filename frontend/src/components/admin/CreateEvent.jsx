import React, { useState, useRef } from "react";
import { InputField, SelectField } from "../reusables/InputField/InputField";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createEventAction } from "../../redux/events/eventsActions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateEvent = () => {
  const formRef = useRef();
  const dispatch = useDispatch();

  const [description, setdescription] = useState();
  const [eventDate, seteventDate] = useState();

  const validate = Yup.object({
    name: Yup.string().min(5, "Title must be more than 5 characters").required("Required"),
  });

  const onSubmitHandler = async ({ name, repetitionType }) => {
    let body = {
      name,
      description,
      repetitionType,
      eventDate,
    };
    dispatch(createEventAction(body));
  };

  return (
    <div className="py-12 px-6">
      <h1 className="text-3xl">Create Event</h1>
      <Formik
        initialValues={{
          name: "",
          repetitionType: "",
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
                  name="name"
                  type="text"
                  label="name"
                  placeholder="Enter the name of event"
                />
              </div>
              <div className="mb-1">
                <DatePicker
                  className="my-input"
                  selected={eventDate}
                  minDate={new Date()}
                  required
                  onChange={(date) => seteventDate(date)}
                  name="eventDate"
                  placeholderText="click to select date"
                />
              </div>
              <div className="mb-1">
                <SelectField name="repetitionType" label="Repetition">
                  <option value="ONE_TIME">ONE TIME</option>
                  <option value="QUARTERLY">QUATERLY</option>
                  <option value="MONTHLY">MONTHLY</option>
                </SelectField>
              </div>

              <div className="mb-1">
                <CKEditor
                  editor={ClassicEditor}
                  data={description}
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
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

export default CreateEvent;
