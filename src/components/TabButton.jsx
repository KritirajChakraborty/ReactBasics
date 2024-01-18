export default function TabButton({ children, onSelect, isSelected }) {
  console.log("Btn component exexution check");
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
