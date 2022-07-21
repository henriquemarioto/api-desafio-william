import { expressYupMiddleware } from "express-yup-middleware";
import { Request, Response, Router } from "express";
import createPeopleValidator from "../validations/people/createPeople.validation";
import PeopleController from "../controllers/People.controller";
import updateEmployeeSchema from "../validations/people/updatePeople.validation";
import validUuidParams from "../validations/validUuidParams.validation";

const peopleRouter = Router();

peopleRouter.post(
  "/",
  expressYupMiddleware({ schemaValidator: createPeopleValidator }),
  PeopleController.create
);

peopleRouter.get(
  "/",
  PeopleController.list
);

peopleRouter.get(
  "/:id",
  expressYupMiddleware({ schemaValidator: validUuidParams }),
  PeopleController.retrieve
);

peopleRouter.patch(
  "/:id",
  expressYupMiddleware({ schemaValidator: validUuidParams }),
  expressYupMiddleware({ schemaValidator: updateEmployeeSchema }),
  PeopleController.update
);

peopleRouter.delete(
  "/:id",
  expressYupMiddleware({ schemaValidator: validUuidParams }),
  PeopleController.delete
);



export default peopleRouter;
