/**
 * Quasar App Extension install script
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/install-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/InstallAPI.js
 */

const extendConf = function (conf) {
    // make sure google-maps boot file is registered
    conf.boot.push('~@quasar/quasar-app-extension-geolocation/src/boot/google-maps.js')
    console.log(` App Extension (qwindow) Info: 'Adding qwindow boot reference to your quasar.conf.js'`)

    // make sure boot & component files transpile
    conf.build.transpileDependencies.push(/quasar-app-extension-geolocation[\\/]src/)
}

module.exports = function (api) {
    api.extendPackageJson({
        dependencies: {
            "vue2-google-maps": "^0.10.7"
        }
    })
    api.render('./templates')

    // extend quasar.conf
    api.extendQuasarConf(extendConf)
}
