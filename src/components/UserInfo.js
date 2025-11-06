// -------------------- Classe UserInfo --------------------
export class UserInfo {
  constructor({ nameSelector, jobSelector, avatarSelector }) {
    // this._nameElement = document.querySelector(nameSelector);
    // this._jobElement = document.querySelector(jobSelector);
    // this._avatarElement = document.querySelector(avatarSelector);
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
      name: this._name,
      job: this._job,
      avatar: this._avatar,
      _id: this._id,
    };
  }

  // -------------------- Definir dados do usuário --------------------
  setUserInfo({ name, job, avatar, _id }) {
    if (name) {
      this._name = name;
      this._nameElement.textContent = name;
    }

    if (job || job === "") {
      this._job = job;
      this._jobElement.textContent = job;
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
