export function enqueue(queue, value) {
    const newNode = { value: value, next: null };
    if (queue.last) {
        queue.last.next = newNode;
    } else {
        queue.first = newNode;
    }
    queue.last = newNode;
    queue.size++;
}
