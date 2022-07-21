import * as yup from "yup";

const createEmployeeSchema = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        full_name: yup.string().required("Name is Required"),
        cpf: yup.string().required("Password is required!").length(11),
        surname: yup.string().required(),
        gender: yup.string().required().oneOf(["M", "F"]),
        cellphone: yup.string().required("Cellphone is required!").length(11),
        address: yup.string().required("Adress is required!"),
        comments: yup.string(),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};
export default createEmployeeSchema;
