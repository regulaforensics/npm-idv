require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))
source = File.join(__dir__, 'ios')

Pod::Spec.new do |s|
  s.name         = 'RNIDV'
  s.version      = '3.10.200-rc'
  s.summary      = package['description']
  s.license      = package['license']

  s.authors      = { 'RegulaForensics' => 'support@regulaforensics.com' }
  s.homepage     = 'https://regulaforensics.com'

  s.source       = { http: "file:#{source}" }
  s.ios.deployment_target = '14.0'
  s.source_files = [ 'ios/**/*.swift', 'ios/**/RN*.m' ]
  s.exclude_files = [ 'ios/CDVIDV.swift' ]
  s.dependency 'IDVSDKStage', '3.10.2053'
  s.dependency 'React'
end
