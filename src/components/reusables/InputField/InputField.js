import React from "react";
import { ErrorMessage, useField, Field } from "formik";

export const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-4">
      <label className="my-label" htmlFor={field.name}>
        {label}
      </label>
      <input
        className={`my-input ${meta.touched && meta.error && "border-solid border border-red-300"}`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="text-red-400 text-xs" />
    </div>
  );
};

export const TextAreaField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-4">
      <label className="my-label" htmlFor={field.name}>
        {label}
      </label>
      <textarea
        className={`my-input ${meta.touched && meta.error && "border-solid border border-red-300"}`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="text-red-400 text-xs" />
    </div>
  );
};
export const SelectField = ({ children, label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-4">
      <label className="my-label" htmlFor={field.name}>
        {label}
      </label>
      <Field
        name="brand"
        as="select"
        {...field}
        {...props}
        className={`my-input  ${
          meta.touched && meta.error && "border-solid border border-red-300"
        }`}
      >
        {children}
      </Field>
      <ErrorMessage component="div" name={field.name} className="text-red-400 text-xs" />
    </div>
  );
};
