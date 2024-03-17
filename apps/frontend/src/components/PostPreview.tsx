export interface PostPreviewProps {
	title: string
	content: string
}

export const PostPreview = ({
	title,
	content,
}: PostPreviewProps) => {
	return (
		<article className="font-sans">
			<h2 className="text-2xl font-bold mb-1">
				{title}
			</h2>
			<p>{content}</p>
		</article>
	)
}
