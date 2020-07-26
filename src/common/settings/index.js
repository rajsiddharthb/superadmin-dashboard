const ROLES = {
  DAVINCIAN: {
    id: 3,
    title: 'Davincian'
  },
  REGISTERED_USER: {
    id: 5,
    title: 'Registered user'
  }
};

export default {
  REDUX_STORE_REFERENCES: {
    GENERAL: 'general'
  },
  SERVICES: {
    NETWORK: {
      REQUEST_METHODS: {
        DELETE: 'delete',
        PATCH: 'patch',
        POST: 'post',
        PUT: 'put',
        GET: 'get'
      },
      ERRORS: {
        INVALID_REQUEST_PARAMS: 'Invalid request parameters.',
        INVALID_RESPONSE_DATA: 'Invalid Response Data',
        SERVER_IS_UNAVAILABLE: 'The server is unavailable.',
        RESPONSE_PARSING_ERROR: 'Unable to parse response.',
        SOMETHING_WENT_WRONG: 'Something went wrong. Try again or contact to support.',
        DEBUGS: {
          INVALID_USER_INPUT: {
            EMAIL_ALREADY_EXISTS: 'This email already in use.',
            PHONE_NUMBER_ALREADY_EXISTS: 'This phone number already in use.'
          },
          RESOURCE_NOT_FOUND_ERROR: {
            WRONG_USERNAME_OR_PASSWORD: 'Wrong user email or password.',
            USER_NOT_FOUND: 'The user with this email not found.'
          },
          INVALID_USER_CREDENTIALS: {
            WRONG_USERNAME_OR_PASSWORD: 'Wrong user email or password.',
            INVALID_OLD_PASSWORD: 'Invalid current password.'
          },
          BAD_REQUEST: {
            EMAIL_ALREADY_EXISTS_WITH_ANOTHER_ROLE: 'This email already in use with another user role.',
            RESET_TOKEN_HAS_EXPIRED: 'Link expired',
            INVALID_RESET_TOKEN: 'Link is invalid'
          },
          SERVICE_NOT_AVAILABLE: {
            SERVICE_NOT_AVAILABLE: 'Service is not available at the moment. Try later or Contact Us'
          }
        }
      }
    }
  },
  USER_ROLES: {
    ...ROLES,
    NORMALIZED_SET: [
      null,
      null,
      null,
      ROLES.DAVINCIAN,
      null,
      ROLES.REGISTERED_USER
    ]
  }
};
