import { Record } from "./components/record";

export default function Highlight() {
  return (
    <div className="bg-gray-300 py-24">
      <div className="flex justify-center mb-10">
        <span className="text-6xl">HIGHLIGHT</span>
      </div>
      <div className="flex justify-center">
        <Record />
      </div>
    </div>
  )
}
