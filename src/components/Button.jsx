import "./Button.css"

export function Button({ type, onClick, className }) {
  return (
    <>
      <button className={`${className}`} onClick={() => onClick(type)}>{type}</button>
    </>
  );
}
