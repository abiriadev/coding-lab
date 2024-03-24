const cache = new Map<() => Promise<any>, [boolean, any]>()

export const promise2resource = <T>(
	promiseFactory: () => Promise<T>,
): [true, T] | [false, unknown] => {
	const cached = cache.get(promiseFactory)
	if (cached !== undefined) return cached

	const p = promiseFactory()
	p.then(d => cache.set(promiseFactory, [true, d])).catch(
		e => cache.set(promiseFactory, [false, e]),
	)

	throw p
}
