module.exports = {
	mode: 'development',
	devtool: false,
	externals: {
		"promise-external":
			"promise Promise.resolve(42)",
	},
	experiments: {
		importAsync: true
	}
};
