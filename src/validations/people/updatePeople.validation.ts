import * as yup from "yup";

const updateEmployeeSchema = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        full_name: yup.string(),
        cpf: yup.string().length(11),
        surname: yup.string(),
        gender: yup.string().oneOf(["M", "F"]),
        cellphone: yup.string().length(11),
        address: yup.string(),
        comments: yup.string(),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};
export default updateEmployeeSchema;
