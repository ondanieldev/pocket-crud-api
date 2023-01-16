import { ICreateUserBO } from '../bos/create-user.bo';

export interface IUpdateUserDTO {
  id: string;
  data: ICreateUserBO;
}
