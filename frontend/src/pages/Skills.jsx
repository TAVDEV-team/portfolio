import { useState } from "react";
import SkillCard from "../components/SkillCard";
import skills from "../data/skills";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredSkills =
    activeTab === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="bg-[#0a192f] min-h-screen text-white py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {["All", "Frontend", "Backend", "Tools"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-md border transition-all duration-200 text-sm font-medium
              ${
                activeTab === tab
                  ? "bg-purple-500 border-purple-500 text-white shadow-md scale-105"
                  : "border-purple-400 text-purple-400 hover:bg-purple-500/10"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-8 md:px-20">
  {filteredSkills.map((skill) => (
    <SkillCard key={skill.name} {...skill} />
  ))}
</div>

    </section>
  );
}
