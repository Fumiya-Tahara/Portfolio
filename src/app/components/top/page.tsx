import Image from "next/image";

export default function Top() {
  return (
    <div className="h-screen bg-gray-800 grid grid-cols-6 gap-4">
      <div className="col-start-2 col-span-4 flex justify-center mt-64">
        <Image
          src="/icon/barbell01.svg"
          alt="barbell"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
