import { AppDataSource } from '../data-source';
import People from "../models/People";

export const peopleRepository = AppDataSource.getRepository(People); 