import { verifyPeopleExists } from "./../errors/people.errors";
import AppError from "../errors/AppError";
import People from "../models/People";
import { peopleRepository } from "../repositories/people.repositories";
import { AppDataSource } from "./../data-source";
import { ICreateProple, IUpdatePeople } from "./../interfaces/people/index";
import saveImage from "../utils/saveImage";

class PeopleService {
  static async create(
    {
      full_name,
      cpf,
      surname,
      gender,
      cellphone,
      address,
      comments,
    }: ICreateProple,
    file: any
  ) {
    const cpfAlreadyExists = await peopleRepository.findOne({ where: { cpf } });

    if (cpfAlreadyExists) {
      throw new AppError("People with this cpf already exists", 409);
    }

    const cellphoneAlreadyExists = await peopleRepository.findOne({
      where: { cellphone },
    });

    if (cellphoneAlreadyExists) {
      throw new AppError("People with this cellphone already exists", 409);
    }

    const image_url = await saveImage(file);

    const newPeople = new People();
    newPeople.full_name = full_name;
    newPeople.cpf = cpf;
    newPeople.surname = surname;
    newPeople.gender = gender;
    newPeople.cellphone = cellphone;
    newPeople.address = address;
    newPeople.comments = comments;
    newPeople.image_url = image_url;

    peopleRepository.create(newPeople);
    await peopleRepository.save(newPeople);

    return { ...newPeople };
  }

  static async list() {
    const peoples = await peopleRepository.find();

    return peoples;
  }

  static async retrieve(id: string) {
    const people = await peopleRepository.findOne({ where: { id } });

    verifyPeopleExists(people);

    return people;
  }

  static async update(id: string, data: IUpdatePeople) {
    const people = await peopleRepository.findOne({ where: { id } });

    verifyPeopleExists(people);

    await peopleRepository.save({
      ...data,
      id,
    });

    const updatedPeople = await peopleRepository.findOne({ where: { id } });

    return updatedPeople;
  }

  static async delete(id: string) {
    const people = await peopleRepository.findOne({ where: { id } });

    verifyPeopleExists(people);

    await peopleRepository.delete({ id });

    return;
  }
}

export default PeopleService;
