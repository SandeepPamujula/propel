module.exports = class AppError extends Error {
    constructor(httpStatus, message, errorCode) {
    
      // Calling parent constructor of base Error class.
      super(message);
      
      // Saving class name in the property of our custom error as a shortcut.
      this.name = this.constructor.name;
  
      // Capturing stack trace, excluding constructor call from it.
      Error.captureStackTrace(this, this.constructor);

      this.httpStatus = httpStatus || 500;
      this.message = message;
      this.errorCode = errorCode;
      this.date = new Date();
      
    }
  };
