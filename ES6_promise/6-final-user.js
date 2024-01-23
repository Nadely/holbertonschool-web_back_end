import signUpUser from './4-user-promise';
import uplodPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([signUpUser(firstName, lastName), uplodPhoto(fileName)]);
}
