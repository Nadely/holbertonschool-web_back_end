export default function createInt8TypedArray(length, position, value) {
  try {
    const arrayBuffer = new ArrayBuffer(length);
    const arrayBufferWithInt8 = new Int8Array(arrayBuffer);

    arrayBufferWithInt8[position] = value;

    return new DataView(arrayBuffer);
  } catch (error) {
    throw new Error('Position outside range');
  }
}
