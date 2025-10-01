# Regula IDV plugin
IDV is a framework that unifies access to all Regula products. This plugin makes possible to use it with react-native, cordova and capacitor applications.

## Android Integration


TODO check this


In order to use this plugin, in `android/app/build.gradle` add `kotlin-kapt` plugin and enable `dataBinding`:
```
plugins {
    id "kotlin-kapt"
}

android {
    buildFeatures {
        dataBinding true
    }
}
```

## Demo applications
In the [examples](examples/) folder you can find 3 demo applications:
* [React-native](examples/react-native)
* [Ionic(ionic app with cordova, angular)](examples/ionic)
* [Capacitor(ionic app with capacitor, react)](examples/capacitor)

Each demo app has its own readme file with instructions on building and installation.

## Documentation
* [Documentation](https://docs.regulaforensics.com/develop/idv-sdk/mobile)
* [API Reference](https://dev.regulaforensics.com/npm-idv)

## Support
If you have any technical questions, feel free to [contact](mailto:support@regulaforensics.com) us or create issues [here](https://github.com/regulaforensics/npm-idv/issues).
