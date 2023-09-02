import { SkillCard } from "./components/skill_card";

export default function Skill() {
  return (
    <div className="bg-gray-100 py-24">
      <div className="flex justify-center mb-10">
        <span className="text-6xl">SKILLS</span>
      </div>
      <div className="flex justify-center">
        <div className="w-2/3 grid grid-cols-3 gap-10 px-10">
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
        </div>
      </div>
    </div>
  )
}
