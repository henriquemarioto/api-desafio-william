import { ICreateProple, IUpdatePeople } from "./../interfaces/people/index";
import { Request, Response } from "express";
import PeopleService from "../services/People.service";

class PeopleController {
  static async create(req: Request, res: Response) {
    const {
      full_name,
      cpf,
      surname,
      gender,
      cellphone,
      address,
      comments = null,
    }: ICreateProple = req.body;

    const people = await PeopleService.create({
      full_name,
      cpf,
      surname,
      gender,
      cellphone,
      address,
      comments,
    });

    return res.status(201).json(people);
  }

  static async list(req: Request, res: Response) {
    const people = await PeopleService.list();

    return res.json(people);
  }

  static async retrieve(req: Request, res: Response) {
    const { id } = req.params;

    const people = await PeopleService.retrieve(id);

    return res.json(people);
  }

  static async update(req: Request, res: Response) {
    const {
      full_name,
      cpf,
      surname,
      gender,
      cellphone,
      address,
      comments,
    }: IUpdatePeople = req.body;

    const { id } = req.params;

    const updatedPeople = await PeopleService.update(id, {
      full_name,
      cpf,
      surname,
      gender,
      cellphone,
      address,
      comments,
    });

    return res.status(201).json(updatedPeople)
  }

  static async delete(req: Request, res: Response) {
    const {id} = req.params

    await PeopleService.delete(id)

    return res.status(204).json()
  }
}

export default PeopleController;
