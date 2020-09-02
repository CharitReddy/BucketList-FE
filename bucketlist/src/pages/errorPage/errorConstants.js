export const errorCodes = {
  unauthorized: '401',
  notFound: '404',
  serverError: '500',
};

export const errorHeadings = {
  unauthorized: 'Session Invalid.',
  notFound: 'Not Found.',
  serverError: 'Internal Server Error',
};

export const errorMessages = {
  unauthorized:
    'You are not Authorized to access this page. Your Session has likely expired. Please Login again.',
  notFound: 'The Page You Are Looking For Does Not Exist',
  serverError:
    'The server Has Been Deserted For a While, Please Try After Some Time',
  undefinedError: 'something went wrong',
};
