Quasar App Extension Geolocation
===

This extension adds basic geolocation support (using navigator.geolocation).
The geolocation data is available in the form of a Vuex module.

## Demo project
https://github.com/tomers/quasar-geolocation-example

## Relevant documentation
- [Navigator.geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation)

# Install
```bash
quasar ext add my-ext <- change name
```
Quasar CLI will retrieve it from NPM and install the extension.

## Prompts

> Install optional vue2-google-maps package

Allow automatic installation of [vue2-google-maps package](https://www.npmjs.com/package/vue2-google-maps),
pre-configured with a boot file, so that its components (e.g. GmapMap) are
ready to be used.

# Uninstall
```bash
quasar ext remove my-ext <- change name
```

# Info
Detail of Vuex actions and getters:
## Vuex actions
- `actionQueryPermission`: query for geolocation permission
- `actionSamplePosition`: query for current geolocation

## Vuex getters
### Permission status
- `getterIsPermissionKnown`: whether permission was acquired (by actionQueryPermission)
- `getterIsPermissionGranted`
- `getterIsPermissionPrompt`
- `getterIsPermissionDenied`

### Position fields
- `getterHasPosition`: whether a position was acquired (by actionSamplePosition)
- `getterTimestamp`
- `getterCoords`
- `getterLatitude`
- `getterLongitude`
- `getterAltitude`
- `getterAccuracy`
- `getterAltitudeAccuracy`
- `getterHeading`
- `getterSpeed`

# Donate
If you appreciate the work that went into this App Extension, please consider [donating to Quasar](https://donate.quasar.dev).
