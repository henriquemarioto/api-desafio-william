import * as yup from "yup";

const validUuidParams = {
  schema: {
    params: {
      yupSchema: yup.object().shape({
        id: yup.string().required("Id is Required").length(36, "Invalid uuid"),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};
export default validUuidParams;
