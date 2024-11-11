const {envs} = require('./config/env')
const {startServer} = require('./server/server')

const main = () =>{
    startServer({
        port:envs.PORT,
        publi_path: envs.PUBLIC_PATH
    })
}

(async () =>{
    main()
})();