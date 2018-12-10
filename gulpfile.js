const requireDir = require('require-dir')
const deepmerge = require('deepmerge')
const log = require('fancy-log')
const c = require('ansi-colors')
const argList = require('./scripts/utils/argv')
const TASK = require('./config/task.config')
const PATHS = require('./config/path.config.json')
const { config, env, generate } = argList(process.argv)

global.env = env || 'development'
global.config = config || 'default'
global.PRODUCTION = global.env === 'production'
global.TASK = TASK(env)
global.PATHS = PATHS
// after the above, some globals are used
global.WEBPACK_CONFIG = require('./scripts/webpack/config.base')

process.env.NODE_ENV = env

const color =
	config === 'cms' ? 'green' : config === 'fractal' ? 'cyan' : 'blue'

log(`${c[color](` 

             _/_/_/  _/_/_/      _/_/    _/_/_/    
          _/_/      _/    _/  _/    _/  _/    _/   
             _/_/  _/    _/  _/    _/  _/    _/    
        _/_/_/    _/_/_/      _/_/    _/    _/     
                 _/                                
                _/       
        	`)}
	
	ENV: ${c.bold[color](global.env)}, CONFIG: ${c.bold[color](global.config)}\n
	`)

requireDir('./scripts/tasks', {
	recurse: true
})
