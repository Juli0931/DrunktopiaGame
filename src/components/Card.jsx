import "./Card.css"

export function Card({ content, type, color, icon }) {

  return (
    <>
      <div className="card" style={{ background: color }}>
        <div className="card-name">{type}</div>
        <div className="icon">
          <img src={icon} alt="Icono" />
        </div>
        <div className="body-text" dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </>
  );
}
