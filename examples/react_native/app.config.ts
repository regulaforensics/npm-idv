import { ExpoConfig, ConfigContext } from 'expo/config'

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  slug: 'idv',
  name: 'IDV',
  orientation: 'portrait',
  icon: 'images/icon.png',
  ios: {
    bundleIdentifier: 'com.regula.example.idv.react',
    infoPlist: {
      NSCameraUsageDescription: 'To use camera',
      NSPhotoLibraryUsageDescription: 'To use gallery',
      NSLocationWhenInUseUsageDescription: 'To use location',
      NFCReaderUsageDescription: 'To use NFC',
      'com.apple.developer.nfc.readersession.iso7816.select-identifiers': [
        'A0000002471001',
        'E80704007F00070302',
        'A000000167455349474E',
        'A0000002480100',
        'A0000002480200',
        'A0000002480300',
        'A00000045645444C2D3031'
      ]
    },
    entitlements: { 'com.apple.developer.nfc.readersession.formats': ['TAG'] },
    appleTeamId: ''
  },
  android: {
    package: 'com.regula.example.idv.react',
    permissions: [
      'android.permission.NFC',
      'android.permission.ACCESS_COARSE_LOCATION',
      'android.permission.ACCESS_FINE_LOCATION'
    ],
    edgeToEdgeEnabled: true
  },
  plugins: [
    ['expo-custom-assets', { assetsPaths: ['./assets'] }],
    ['expo-build-properties', {
      android: {
        extraMavenRepos: [
          { url: 'https://maven.regulaforensics.com/RegulaDocumentReader' },
          { url: 'https://maven.regulaforensics.com/RegulaDocumentReader/Beta' },
          { url: 'https://maven.regulaforensics.com/RegulaDocumentReader/Nightly' },
          { url: 'https://maven.regulaforensics.com/RegulaDocumentReader/Stage' }
        ]
      },
      ios: { networkInspector: false }
    }]
  ]
})
