export function taskFirst() {
	var task = 'I prefer const when I can.';
	{let task = 'I prefer const when I can.';}
	return task;
  }

  export function getLast() {
	return ' is okay';
  }

  export function taskNext() {
	var combination = 'But sometimes let';
	{const combination = 'But sometimes let';}
	combination += getLast();

	return combination;
  }
