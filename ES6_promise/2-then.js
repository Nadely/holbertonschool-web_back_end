export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    promise
      .then(() => {
        console.log('Got a response from the API');
        const response = { status: 200, body: 'success' };
        resolve(response);
      })
      .catch((error) => {
        console.error('Got an error from the API:', error.message);
        reject(new Error(''));
      });
  });
}
