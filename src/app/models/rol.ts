export class Rol {
  constructor(_id = '', name = '', state = true) {
    this._id = _id;
    this.name = name;
    this.state = state;
  }
  _id: string;
  name: string;
  state: boolean;
}
