import './styles.css';

export function Card(props) {
  return (
    <div className="card">
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  )
}