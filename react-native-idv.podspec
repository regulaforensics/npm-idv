Pod::Spec.new do |s|
  s.name         = 'react-native-idv'
  s.version      = '3.10.251-nightly'
  s.summary      = 'Regula React Native plugin.'
  s.license      = 'commercial'
  s.authors      = { 'RegulaForensics' => 'support@regulaforensics.com' }
  s.homepage     = 'https://regulaforensics.com'
  s.source       = { :path => '.' }
  s.ios.deployment_target = '15.0'
  s.source_files = [ 'ios/*.swift', 'ios/RN*.m' ]
  s.exclude_files = [ 'ios/CDVIDV.swift' ]
  s.dependency 'IDVSDKNightly', '3.10.2117'
  s.dependency 'React'
end
