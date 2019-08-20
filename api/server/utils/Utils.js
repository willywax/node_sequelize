class Util {
  constructor() {
    this.status = null;
    this.message = null;
    this.type = null;
    this.data = null;
  }

  setSuccess(statusCode, message, data) {
    this.status = statusCode;
    this.message = message;
    this.data = data;
    this.type = 'Success';
  }

  setError(statusCode, message) {
    this.statusCode = statusCode;
    this.message = message;
    this.type = 'Error';
  }

  result() {
    let result = {
      statusCode: this.statusCode,
      status: this.type,
      message: this.message,
      data: this.data,
    };

    if (this.type === 'Success') {
      return result;
    }

    result = {
      statusCode: this.statusCode,
      status: this.type,
      message: this.message,
    };

    return result;
  }
}

export default new Util();
