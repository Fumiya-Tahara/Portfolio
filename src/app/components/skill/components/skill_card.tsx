import Image from "next/image";

interface SkillCardProps {
  path: string
  name: string
  width: number
  height: number
  description: string
}

export function SkillCard({path, name, width, height, description}: SkillCardProps) {
  return (
    <div className="bg-white rounded-lg" style={{"aspectRatio": 1 / 1.618}}>
      <div className="flex justify-center">
        <div className="flex flex-col mt-10">
          <div className="flex flex-col items-center mb-16" style={{height: 100}}>
            <Image src={path} alt={name} width={width} height={height}/>
            <div className="font-bold text-xl mt-2">{name}</div>
          </div>
          <div className="text-center text-lg mx-2">{description}</div>
        </div>
      </div>
    </div>
  );
}

