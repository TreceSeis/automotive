const Validator = require('validator');
const isEmpty = require ('./is-empty');

module.exports = function validateProfileInput(data) {
	let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : '';
  data.status = !isEmpty(data.status) ? data.status : '';
  data.skills = !isEmpty(data.skills) ? data.skills : '';

  if (!Validator.isLength(data.handle, { min: 3, max: 40 })){
    errors.handle = 'Handle needs to be between 3 and 40 characters';
  }
  if (Validator.isEmpty(data.handle)) {
    errors.handle = 'Profile handle is required';
  }
  if (Validator.isEmpty(data.status)) {
    errors.status = 'Status field is required';
  }
  if (Validator.isEmpty(data.skills)){
    errors.skills = 'Skills field is required';
  }

  if (!isEmpty(data.website)){
    if(!Validator.isURL(data.website)){
      error.website = 'Not a valid URL';
    }
  }
  if (!isEmpty(data.youtube)){
    if(!Validator.isURL(data.website)){
      error.website = 'Not a valid URL';
    }
  }
  if (!isEmpty(data.youtube)){
    if(!Validator.isURL(data.youtube)){
      error.youtube = 'Not a valid URL';
    }
  }
  if (!isEmpty(data.twitter)){
    if(!Validator.isURL(data.twitter)){
      error.twitter = 'Not a valid URL';
    }
  }
  if (!isEmpty(data.facebook)){
    if(!Validator.isURL(data.facebook)){
      error.facebook = 'Not a valid URL';
    }
  }
  if (!isEmpty(data.linkedin)){
    if(!Validator.isURL(data.linkedin)){
      error.linkedin = 'Not a valid URL';
    }
  }
  if (!isEmpty(data.instagram)){
    if(!Validator.isURL(data.instagram)){
      error.instagram = 'Not a valid URL';
    }
  }

  return{
    errors,
    isValid: isEmpty(errors)
  };
};
