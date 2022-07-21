export interface ICreateProple {
  full_name: string;
  cpf: string;
  surname: string;
  gender: string;
  cellphone: string;
  address: string;
  comments: string | null;
}

export interface IUpdatePeople {
  full_name: string;
  cpf?: string;
  surname?: string;
  gender?: string;
  cellphone?: string;
  address?: string;
  comments?: string | null;
}