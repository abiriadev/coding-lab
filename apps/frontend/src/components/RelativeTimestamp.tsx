import { formatDistanceToNow } from 'date-fns'

export interface RelativeTimestampProps {
	time: Date
}

export const RelativeTimestamp = ({
	time,
}: RelativeTimestampProps) => {
	return (
		<time
			className="cursor-default text-neutral-500"
			title={time.toISOString()}
			dateTime={time.toUTCString()}
		>
			{`${formatDistanceToNow(time)} ago`}
		</time>
	)
}
