export default class Util {
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

  send(res) {
    const result = {
      status: this.type,
      message: this.message,
      data: this.data,
    };

    if (this.type === 'success') {
      return res.status(this.statusCode).json(result);
    }

    return res.status(this.statusCode).json({
      status: this.type,
      message: this.message,
    });
  }
}
