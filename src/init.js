const path = require('path')

if(process.env.REACT_APP_NODE_ENV && !window.SmartyConfig) {
    const currentEnv = `${process.env.REACT_APP_NODE_ENV.toLowerCase().toString()}.config.js`;
    const configFilePath = path.resolve('', currentEnv);
    const envConfig = require(`../config${configFilePath}`);
    window.SmartyConfig = envConfig
}