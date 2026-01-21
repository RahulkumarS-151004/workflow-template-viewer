import { useState } from "react";
import templates from "../data/workflowTemplates.json";
import TemplateCard from "../components/TemplateCard";
import TemplateModal from "../components/TemplateModal";

function TemplateList() {
const [selectedTemplate, setSelectedTemplate] = useState(null);
const [searchText, setSearchText] = useState("");
const [selectedGoal, setSelectedGoal] = useState("all");
const [selectedPlatform, setSelectedPlatform] = useState("all");

const filteredTemplates = templates.filter((template) => {
  const matchesSearch =
    template.name
      .toLowerCase()
      .includes(searchText.trim().toLowerCase());

  const matchesGoal =
    selectedGoal === "all" ||
    template.goal.toLowerCase() === selectedGoal.toLowerCase();

  const matchesPlatform =
    selectedPlatform === "all" ||
    template.platforms.some(
      (platform) =>
        platform.toLowerCase() === selectedPlatform.toLowerCase()
    );

  return matchesSearch && matchesGoal && matchesPlatform;
});
  return (
    <div>
      <h1 className="heading">Workflow Templates</h1>
      <h3 className="subheading">Ready-to-use workflow for content creators</h3>
    <div className="page-container">
      <div className="filters">
  <input
    type="text"
    placeholder="Search workflows..."
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
  />

  <select
    value={selectedGoal}
    onChange={(e) => setSelectedGoal(e.target.value)}
  >
    <option value="all">All Goals</option>
    <option value="growth">Growth</option>
    <option value="repurpose">Repurpose</option>
    <option value="engagement">Engagement</option>
    <option value="planning">Planning</option>
  </select>

  <select
    value={selectedPlatform}
    onChange={(e) => setSelectedPlatform(e.target.value)}
  >
    <option value="all">All Platforms</option>
    <option value="youtube">YouTube</option>
    <option value="instagram">Instagram</option>
    <option value="linkedin">LinkedIn</option>
    <option value="twitter">Twitter</option>
    <option value="tiktok">TikTok</option>
  </select>
</div>

<div className="grid">
{filteredTemplates.map((template) => (
  <TemplateCard
    key={template.template_id}
    template={template}
    onClick={setSelectedTemplate}
  />
))}
</div>
</div>

{filteredTemplates.length === 0 && (
  <p style={{ textAlign: "center", color: "#9CA3AF" }}>
    No workflows found.
  </p>
)}

      <TemplateModal
  template={selectedTemplate}
  onClose={() => setSelectedTemplate(null)}
/>

    </div>
  );
}

export default TemplateList;