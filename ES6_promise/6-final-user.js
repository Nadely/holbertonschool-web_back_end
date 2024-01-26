import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([
    signUpUser(firstName, lastName).then(value => ({ status: 'fulfilled', value })),
    uploadPhoto(fileName).then(value => ({ status: 'fulfilled', value }))
  ]).catch(error => ({ status: 'rejected', error }));
}
