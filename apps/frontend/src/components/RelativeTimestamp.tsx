import { formatDistanceToNow } from 'date-fns'

export const RelativeTimestamp = (time: Date) => {
	return (
		<time dateTime={time.toUTCString()}>
			{formatDistanceToNow(time)}
		</time>
	)
}
