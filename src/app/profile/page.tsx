export default function Profile() {
  return (
    <div className="bg-gray-300 py-24">
      <div className="flex justify-center mb-10">
        <span className="text-6xl">PROFILE</span>
      </div>
      <div className="flex justify-center">
        <div className="w-2/3 bg-white rounded-lg" style={{"aspectRatio": 1.618 / 1}}>
          <div className="flex">
            <div>ここにGitHubのアイコン</div>
            <div>ここに自己紹介の文章</div>
          </div>
        </div>
      </div>
    </div>
  )
}
