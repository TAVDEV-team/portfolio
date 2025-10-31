export default function SkillCard({ name, level, category }) {
  return (
    <div
      className="bg-[#112240] text-center flex flex-col justify-center items-center 
                 rounded-xl shadow-lg border border-purple-300/30
                 hover:shadow-purple-500/40 transition-all duration-200 
                 h-40 w-full"
    >
      <h3 className="text-lg font-semibold mb-2 text-purple-300">{name}</h3>
      <p className="text-sm text-gray-400">{level}</p>
    </div>
  );
}
