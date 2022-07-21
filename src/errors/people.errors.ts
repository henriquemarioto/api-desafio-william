import People from "../models/People";
import AppError from "./AppError";

export const verifyPeopleExists = (people: People | null) => {
  if (!people) {
    throw new AppError("People not found", 404);
  }
};