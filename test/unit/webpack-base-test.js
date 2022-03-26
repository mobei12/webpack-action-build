const assert = require('assert')

describe('webpack.base.js test case', () => {
	const baseConfig = require('../../lib/webpack.base.js') // eslint-disable-line
	// 测试打包入口文件
	it('entry', () => {
		try {
			assert.equal(
				baseConfig.entry.index,
				'/Users/mobeigege/personProject/git/webpack-test/builder-webpack/test/smoke/template/src/index/index.js'
			)
		} catch (err) {
			console.log(err)
		}
	})
	it('output', () => {
		try {
			assert.equal(
				baseConfig.output.output,
				'/Users/mobeigege/personProject/git/webpack-travis-build/test/smoke/template/dist'
			)
		} catch (err) {
			console.log(err)
		}
	})
})
