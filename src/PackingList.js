import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItems,
  onToggleItems,
  onAllItems,
}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
            onAllItems={onAllItems}
          />
        ))}
      </ul>
      <button onClick={onAllItems}>Clear list</button>
    </div>
  );
}
