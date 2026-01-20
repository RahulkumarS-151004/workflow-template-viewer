import { useState } from "react";
import templates from "../data/workflowTemplates.json";
import TemplateCard from "../components/TemplateCard";
import TemplateModal from "../components/TemplateModal";

function TemplateList() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  return (
    <div>
      <h1>Workflow Templates</h1>

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
