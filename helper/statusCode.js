const HttpStatus = {
    OK: {
      code: 200,
      message: 'FETCH SUCCESSFULLY',
    },
    NOT_FOUND: {
      code: 404,
      message: 'NOT FOUND',
    },
    DELETED: {
      code: 204,
      message: 'DELETED SUCCESSFULLY'
    },
    CREATED: {
      code: 201,
      message: 'CREATED SUCCESSFULLY',
    },
    UPDATED: {
      code: 201,
      message: 'UPDATED SUCCESSFULLY',
    },
    UNAUTHORIZED: {
      code: 401,
      message: 'UNAUTHORIZED'
    },
    FORBIDDEN: {
      code: 403,
      message: 'FORBIDDEN'
    },
    BAD_REQUEST: {
      code: 400, message: 'BAD_REQUEST',
    },
    ROUTE_NOT_FOUND: {
      code: 404,
      message: 'ROUTE_NOT_FOUND'
    },
    INTERNAL_SERVER_ERROR: {
      code: 500,
      message: 'INTERNAL_SERVER_ERROR'
    },
    FILE_UPLOAD_ERROR: {
      code: 500,
      message: 'file upload error'
    }
  };
  
  
  const CustomMessages = {
    MESSAGE: {
      notStandardPassword: 'Password mush have 1 special character, one uppercase & lower case character, one number and 8 to 12 character length',
      loginSuccess: 'LOGIN SUCCESSFULLY',
      loginInValid: 'LOGIN FAILED',
      inValid: 'INVALID',
      emailPasswordNotFound: 'EMAIL OR PASSWORD NOT FOUND',
      alreadyExist: 'ALREADY EXIST',
      otpSentSuccessfully: 'OTP HAS BEEN SENT SUCCESSFULLY',
      otpSendingFailed: 'OTP could not be sent on the povided email',
      accountNotVerified: 'ACCOUNT HAS NOT BEEN VERIFIED',
      accountVerifiedSuccessfully: 'ACCOUNT VERIFIED AND ACTIVATED SUCCESSFULLY',
      emailVerifiedSuccessfully: 'EMAIL VERIFIED SUCCESSFULLY',
    },
  }
  

  
  module.exports = { HttpStatus, CustomMessages };