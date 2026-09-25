Pod::Spec.new do |s|
  s.name         = 'react-native-idv'
  s.version      = '3.10.231-beta'
  s.summary      = 'Regula React Native plugin.'
  s.license      = 'commercial'
  s.authors      = { 'RegulaForensics' => 'support@regulaforensics.com' }
  s.homepage     = 'https://regulaforensics.com'
  s.source       = { :path => '.' }
  s.ios.deployment_target = '15.0'
  s.source_files = [ 'ios/*.swift', 'ios/RN*.m' ]
  s.exclude_files = [ 'ios/CDVIDV.swift' ]
  s.dependency 'IDVSDK', '3.9.1987'
  s.dependency 'React'
end
