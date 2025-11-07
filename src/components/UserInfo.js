export class UserInfo {
  constructor({ nameSelector, jobSelector, avatarSelector }) {
    this._nameElement = nameSelector;
    this._jobElement = jobSelector;
    this._avatarElement = avatarSelector;

    this._name = "";
    this._job = "";
    this._avatar = "";
    this._id = null;
  }

  // -------------------- Retornar dados atuais --------------------
  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      job: this._jobElement.textContent,
      avatar: this._avatarElement.src,
      _id: this._id,
    };
  }

  // -------------------- Definir dados do usuário --------------------
  setUserInfo({ name, job, about, avatar, _id }) {
    const jobValue = job || about;

    if (name) {
      this._name = name;
      this._nameElement.textContent = name;
    }

    if (jobValue && jobValue !== "") {
      this._job = jobValue;
      this._jobElement.textContent = jobValue;
    }

    if (avatar) {
      this._avatar = avatar;
      this._avatarElement.src = avatar;
    }

    if (_id) {
      this._id = _id;
    }
  }

  // -------------------- Retornar apenas o ID do usuário --------------------
  getUserId() {
    return this._id;
  }
}
