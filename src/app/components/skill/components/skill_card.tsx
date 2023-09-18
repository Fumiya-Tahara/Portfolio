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
    <div className="bg-white rounded-lg px-4 lg:px-0" style={{"aspectRatio": 1 / 1.618}}>
      <div className="h-full">
        <div className="h-full">
          <div className="h-2/3 flex flex-col justify-center items-center">
            <Image src={path} alt={name} width={width} height={height}/>
            <div className="font-bold text-xl mt-2">{name}</div>
          </div>
          <div className="text-center text-lg mx-2">{description}</div>
        </div>
      </div>
    </div>
  );
}

