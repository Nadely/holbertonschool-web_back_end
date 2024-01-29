export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position > length) {
    throw new Error('Position outside range');
  } else {
    const arrayBuffer = new ArrayBuffer(length);
    const arrayBufferWithInt8 = new Int8Array(arrayBuffer);

    arrayBufferWithInt8[position] = value;

    return new DataView(arrayBuffer);
  }
}
