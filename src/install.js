/**
 * Quasar App Extension install script
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/install-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/InstallAPI.js
 */

module.exports = function (api) {
    // TODO: verify the Vuex is installed

    if (api.prompts.installVueGoogleMaps) {
        api.extendPackageJson({
            dependencies: {
                "vue2-google-maps": "^0.10.7"
            }
        })
        // api.render('./templates/vue2-google-maps')
    }
    api.render('./templates/base')
    console.log('Added geolocation Vuex module. Make sure to register it in index.js')
}
