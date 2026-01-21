const AgentCard = ({ agent }) => {
  return (
    <div className="agent-card">
      <div className="agent-icon">{agent.icon}</div>

      <h4 className="agent-name">{agent.name}</h4>

      <span className="agent-category">
        {agent.category}
      </span>

      <button
        className="agent-btn"
        disabled
        title="Agent details coming soon">
            View
    </button>

    </div>
  );
};

export default AgentCard;
