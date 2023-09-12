import { Record } from "./components/record";
import "../../css/highlight.css";

export default function Highlight() {
  return (
    <div className="bg-gray-300 py-24">
      <div className="flex justify-center mb-10">
        <span className="text-6xl">HIGHLIGHT</span>
      </div>
      <div className="flex justify-center">
        <div className="w-2/3 bg-white rounded-lg flex justify-center py-10">
          <div className="w-2/3">
            <dl className="flex flex-col">
              <Record
                date="2021年3月"
                title="Hello World!"
                description="Pythonで初めてプログラムを書いた"
              />
              <Record
                date="2022年4月"
                title="初のハッカソンに参加"
                description="技育CAMPのはじめてのハッカソンに参加したが何も貢献できなかった。"
              />
              <Record
                date="2023年8月"
                title="北九州ハッカソンに参加"
                description="運営、開発ともに参加して開発チームでは優秀賞を受賞した。"
              />
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
