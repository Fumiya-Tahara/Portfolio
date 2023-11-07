interface RecordProps {
  date: string
  title: string
  description: string
}

export function Record({date, title, description}: RecordProps) {
  return (
    <div className="flex">
      <div className="border-l-4 col-span-2 pl-2.5 pb-5">
        <div className="record-date">{date}</div>
        <div className="font-bold">{title}</div>
        <div className="text-xs">{description}</div>
      </div>
    </div>
  )
}
