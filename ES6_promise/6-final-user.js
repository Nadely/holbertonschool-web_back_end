import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

const handleProfileSignup = async (firstName, lastName, fileName) => {
  try {
    const userPromise = signUpUser(firstName, lastName);
    const photoPromise = uploadPhoto(fileName);

    const userResult = await userPromise;
    const photoResult = await photoPromise;

    return {
      user: { status: 'fulfilled', value: userResult },
      photo: { status: 'fulfilled', value: photoResult }
    };
  } catch (error) {
    return { status: 'rejected', error };
  }
}

export default handleProfileSignup;
