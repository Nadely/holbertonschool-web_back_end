import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  await Promise.all([photoPromise, userPromise])
    .then((value) => {
      console.log(`${value[0].body} ${value[1].firstName} ${value[1].lastName}`);
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}
