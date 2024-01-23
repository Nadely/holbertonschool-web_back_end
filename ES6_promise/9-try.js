export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
  } catch {
    queue.push('Error: cannot divide by 0');
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
