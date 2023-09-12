interface RecordProps {
  date: string
  title: string
  description: string
}

export function Record({date, title, description}: RecordProps) {
  return (
    <div className="grid grid-cols-3">
      <dt className="text-right">{date}</dt>
      <dd className="border-l-4 col-span-2 pl-2.5 pb-5">
        <div className="font-bold">{title}</div>
        <div>{description}</div>
      </dd>
    </div>
  )
}
