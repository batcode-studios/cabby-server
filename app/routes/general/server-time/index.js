module.exports = (req, res) => {
	const date = new Date()
	res.status(200).send({
		ISODate: date.toISOString(),
		milliDate: Date.now()
	})
}
