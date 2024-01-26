import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const user = await signUpUser(firstName, lastName);
    const photoUpload = await uploadPhoto(fileName);
    return [
      { status: 'fulfilled', value: user },
      { status: 'fulfilled', value: photoUpload }
    ];
  } catch (error) {
    return [{ status: 'rejected', value: error.toString() }];
  }
}
