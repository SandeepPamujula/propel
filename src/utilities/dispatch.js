'use strict';

const coroutine = require('bluebird').coroutine;

module.exports = options => file => {
    const controller = options && options.basePath ? require(`${options.basePath}/${file}`) : file;
    return (req, res) => {
        const promise = isGenerator(controller) ? coroutine(controller)(req, res) : controller(req, res);
        return promise
                .then(result => {
                    try {
                        JSON.parse(result);
                        console.log(JSON.parse(result));
                        return res.json(result);
                    } catch(err) {
                        if (result) {
                            return res.send(result);
                        }
                        return res.end();
                    }
                })
                .catch(err => {
                   return res.error(err)
                });
    };
};

function isGenerator(fn) {
    console.log(fn.constructor.name === 'GeneratorFunction', fn.constructor.name);
    return fn.constructor.name === 'GeneratorFunction';
}