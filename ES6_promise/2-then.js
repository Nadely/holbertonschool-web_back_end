export default function handleResponseFromAPI(promise) {
  return new Promise((resolve) => {
    promise
      .then(() => {
        const response = { status: 200, body: 'success' };
        resolve(response);
      })
      .catch(() => new Error())
      .finally(() => {
        console.log('Got a response from the API');
      });
  });
}
