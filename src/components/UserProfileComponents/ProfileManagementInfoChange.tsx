import { Form, Col, Button, Row } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

const userDataChangeSchema = Yup.object().shape({
  street: Yup.string()
    .required("To pole jest wymagane przy zmianie")
    .min(3, "Wprowadź prawidłową nazwe ulicy")
    .max(60, "Wprowadź prawidłową nazwe ulicy")
    .matches(
      /^[a-zA-ZąęółżźćńśĄĘÓŻŹĆŃŁŚ]{3,60}$/i,
      "Wprowadzono niedozwolone znaki"
    ),

  city: Yup.string()
    .required("To pole jest wymagane przy zmianie")
    .min(3, "Wprowadź prawidłową nazwe miasta")
    .max(60, "Wprowadź prawidłową nazwe miasta")
    .matches(
      /^([a-zA-ZąęółżźćńśĄĘÓŻŹĆŃŁŚ\-]+\s)*[-\a-zA-ZąęółżźćńśĄĘÓŻŹĆŃŁŚ]{3,60}$/i,
      "Wprowadzono niedozwolone znaki"
    ),
  houseNumber: Yup.string()
    .required("To pole jest wymagane przy zmianie")
    .matches(/^[1-9][0-9]{0,5}$/, "Wprowadź poprawny numer telefonu"),

  postcode: Yup.string()
    .required("To pole jest wymagane przy zmianie")
    .matches(/^[1-9][0-9]\-[1-9][0-9]{2,2}$/i, "Wprowadź poprawny kod pocztowy")
    .required("To pole jest wymagane"),
  email: Yup.string()
    .email("Niepoprawny adres email")
    .required("To pole jest wymagane"),
  password: Yup.string()
    .required("To pole jest wymagane")
    .min(8, "Hasło musi składać się z minimum 8 znaków")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "Hasło musi zawierać 8 znaków, małą i dużą literę, znak specjalny i cyfre"
    ),
  oldPassword: Yup.string().required("To pole jest wymagane przy zmianie"),
  phoneNumber: Yup.string()
    .required("To pole jest wymagane")
    .matches(/^[0-9]*$/, "Wprowadź poprawny numer telefonu")
    .min(9, "Wprowdź poprawny numer")
    .max(9, "Wprowdź poprawny numer"),
});

export const ContactDataChange = () => {
  return <div>ProfileManagementInfoChange</div>;
};

export const PasswordChange = () => {
  return <div>ProfileManagementInfoChange</div>;
};

export const EmailChange = () => {
  return <div>ProfileManagementInfoChange</div>;
};
