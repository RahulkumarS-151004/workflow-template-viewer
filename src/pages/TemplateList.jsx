import { useState } from "react";
import templates from "../data/workflowTemplates.json";
import TemplateCard from "../components/TemplateCard";
import TemplateModal from "../components/TemplateModal";

function TemplateList() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  return (
    <div>
      <h1 className="heading">Workflow Templates</h1>
      <h3 className="subheading">Ready-to-use workflow for content creators</h3>

      <div className="grid">
        {templates.map((template) => (
          <TemplateCard
            key={template.template_id}
            template={template}
            onClick={setSelectedTemplate}
          />
        ))}
      </div>

      <TemplateModal
  template={selectedTemplate}
  onClose={() => setSelectedTemplate(null)}
/>

    </div>
  );
}

export default TemplateList;