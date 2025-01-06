import React from "react";
import "./App.css";
import { Formik } from "formik";
import * as Yup from "yup";

const App = () => {
  return (
    <div className="container">
      <div className="brand-box">
        <h1>Magic Form</h1>
        <p>Build forms in React without the tears.</p>
      </div>

      <div className="magic-form">
        <Formik
          initialValues={{
            name: "",
            email: "",
            agree: false,
            favoriteColor: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Isim bos birakilamaz"),
            email: Yup.string().email().required("Email bos birakilamaz"),
            agree: Yup.boolean().required("Kosullari kabul etmelisiniz"),
            favoriteColor: Yup.string()
              .required("Hadi ama herkesin sevdigi bir renk vardir!")
              .oneOf(["red", "blue", "green"]),
          })}
        >
          {({
            values,
            errors,
            handleChange,
            handleSubmit,
            handleReset,
            dirty,
            isSubmitting,
          }) => (
            <form>
              <h3>Register</h3>
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                placeholder="Mauro..."
                className="input"
                value={values.name}
                onChange={handleChange}
              />
              <label htmlFor="email" className="topMargin">
                Email:
              </label>
              <input
                id="email"
                type="email"
                placeholder="icardimauro@gmail.com"
                className="input"
                value={values.email}
                onChange={handleChange}
              />
              <label htmlFor="favoriteColor" className="topMargin">
                Favorite Color
              </label>
              <select
                name=""
                id="favoriteColor"
                value={values.favoriteColor}
                onChange={handleChange}
                style={{
                  marginTop: 10,
                  width: "150px",
                  padding: "10px, 15px",
                  outline: "none",
                }}
              >
                <option value="" label="Choice Color" />
                <option value="red" label="Red" />
                <option value="blue" label="Blue" />
                <option value="green" label="Green" />
              </select>
              <div className="checkbox topMargin">
                <input
                  id="agree"
                  type="checkbox"
                  value={values.agree}
                  onChange={handleChange}
                />
                <label htmlFor="agree" className="checkbox-label">
                  I have read and accept the contract.
                </label>
              </div>
              <button type="submit" disabled={!dirty || isSubmitting}></button>
              Register
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default App;
