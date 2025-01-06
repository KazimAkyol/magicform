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
          {(props) => (
            <form>
              <h3>Kaydol</h3>
              <label htmlFor="name">Isim</label>
              <input
                id="name"
                type="text"
                placeholder="Mauro"
                className="input"
                value={{}}
                onChange={{}}
              />
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default App;
