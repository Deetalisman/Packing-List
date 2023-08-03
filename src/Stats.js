export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding your packing list</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percent = Math.round((numPacked / numItems) * 100);
  return (
    <div>
      <footer className="stats">
        <em>
          {percent === 100
            ? "You're ready to go"
            : `You have ${numItems} items on your list and you already packed 
          ${numPacked} (${percent}%)`}
        </em>
      </footer>
    </div>
  );
}
