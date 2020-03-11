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
quasar ext add tomers/geolocation
```
Quasar CLI will retrieve it from NPM and install the extension.

## Prompts

> Install optional vue2-google-maps package

Allow automatic installation of [vue2-google-maps package](https://www.npmjs.com/package/vue2-google-maps),
pre-configured with a boot file, so that its components (e.g. GmapMap) are
ready to be used.

# Uninstall
```bash
quasar ext remove tomers/geolocation
```

# Info
Detail of Vuex actions and getters:
## Vuex actions
- `actionQueryPermission`: query for geolocation permission
- `actionSamplePosition`: query for current geolocation

## Vuex getters
### Permission status
- `getterIsPermissionKnown`: whether permission has been acquired (by `actionQueryPermission`)
- `getterIsPermissionGranted`
- `getterIsPermissionPrompt`
- `getterIsPermissionDenied`

### Position fields
The geolocation is given in an [GeolocationPosition](https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPosition) struct that is converted to an object.
Getters are provided for each of its fields.

- `getterHasPosition`: whether a position has been acquired (by `actionSamplePosition`)
- `getterTimestamp`: [GeolocationPosition.timestamp](https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPosition/timestamp) of the sample
- `getterCoords`: [GeolocationCoordinates](https://developer.mozilla.org/en-US/docs/Web/API/GeolocationCoordinates) (converted to object).
Alternatively, there is a getter for each of the coord fields:
    - `getterLatitude`
    - `getterLongitude`
    - `getterAltitude`
    - `getterAccuracy`
    - `getterAltitudeAccuracy`
    - `getterHeading`
    - `getterSpeed`

# Donate
If you appreciate the work that went into this App Extension, please consider [donating to Quasar](https://donate.quasar.dev).
