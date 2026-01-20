function TemplateCard({ template, onClick }) {
  return (
    <div className="card" onClick={() => onClick(template)}>
      <h3>{template.icon} {template.name}</h3>
      <p>{template.description}</p>
      <p>Steps: {template.steps.length}</p>
      <button>View Details</button>
    </div>
  );
}

export default TemplateCard;
