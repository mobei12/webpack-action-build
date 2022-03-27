const assert = require('assert')

describe('webpack.base.js test case', () => {
	const baseConfig = require('../../lib/webpack.base.js') // eslint-disable-line
	// 测试打包入口文件
	it('entry', () => {
		try {
			assert.equal(
				baseConfig.entry.index.indexOf(
					'webpack-travis-build/test/smoke/template/src/index/index.js'
				) > -1,
				true
			)
			assert.equal(
				baseConfig.entry.search.indexOf(
					'webpack-travis-build/test/smoke/template/src/search/index.js'
				) > -1,
				true
			)
		} catch (err) {
			console.log(err)
		}
	})
})
