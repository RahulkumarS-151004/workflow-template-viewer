function TemplateModal({ template, onClose }) {
  if (!template) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{template.icon} {template.name}</h2>
        <p>{template.description}</p>
        <p><b>Goal: </b>{template.goal}</p>
        <p><b>Platforms:</b> {template.platforms.join(', ')}</p>

        <h4>Steps</h4>
        <ul>
          {template.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>

        <p><b>Time:</b> {template.estimated_time}</p>
        <p><b>Cost:</b> {template.estimated_cost}</p>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default TemplateModal;