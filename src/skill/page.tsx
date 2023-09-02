import { SkillCard } from "./components/skill_card";

export default function Skill() {
  return (
    <div className="h-screen bg-gray-100">
      <div className="flex justify-center">
        <div className="w-5/6 grid grid-cols-3 gap-10 px-10">
          <SkillCard />
          <SkillCard />
          <SkillCard />
        </div>
      </div>
    </div>
  )
}
