function TemplateCard({ template, onClick }) {
  if (!template) return null;
  return (
    <div className="card" >
      <div className="card-content">
        <div className="ticon">{template.icon} </div>
        <h3 className="card-title">{template.name}</h3>
        <p className="tnd">{template.description}</p>
        </div>
        <hr />
        <div className="card-footer">
          <p>⏱️{template.estimated_time}</p>
          <p>💰{template.estimated_cost}</p>
          <p>📋{template.steps.length} steps</p>
          <button onClick={() => onClick(template)}>View Details</button>
        </div>
    </div>
  );
}

export default TemplateCard;