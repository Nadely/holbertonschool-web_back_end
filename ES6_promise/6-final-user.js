import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

const handleProfileSignup = async (firstName, lastName, fileName) => {
  try {
    const user = await signUpUser(firstName, lastName);
    await uploadPhoto(fileName);
    return [{ status: 'fulfilled', value: user }];
  } catch (error) {
    return [{ status: 'rejected', value: error.toString() }];
  }
};

export default handleProfileSignup;
