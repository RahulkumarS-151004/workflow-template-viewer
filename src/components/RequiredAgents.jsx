import AgentCard from "./AgentCard";

const RequiredAgents = ({ agents = [] }) => {
  if (!Array.isArray(agents) || agents.length === 0) {
    return null;
  }

  return (
    <div className="required-agents">
      <h3 className="agents-heading">Required Agents</h3>

      <div className="agents-grid">
        {agents.map((agent) => (
          <AgentCard
            key={agent.agent_id}
            agent={agent}
          />
        ))}
      </div>

      <p className="agents-note">
        ℹ️ Agents are coming soon. Integration is in progress.
      </p>
    </div>
  );
};

export default RequiredAgents;
