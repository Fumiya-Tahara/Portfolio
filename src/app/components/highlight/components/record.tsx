interface RecordProps {
  date: string
  title: string
  description: string
}

export function Record({date, title, description}: RecordProps) {
  return (
    <div className="flex">
      <dt>{date}</dt>
      <dd className="border-l-4">
        <div>{title}</div>
        <div>{description}</div>
      </dd>
    </div>
  )
}
