require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))
source = File.join(__dir__, 'ios')

Pod::Spec.new do |s|
  s.name         = 'RNIDV'
  s.version      = '3.2.59-beta'
  s.summary      = package['description']
  s.license      = package['license']

  s.authors      = { 'RegulaForensics' => 'support@regulaforensics.com' }
  s.homepage     = 'https://regulaforensics.com'

  s.source       = { http: "file:#{source}" }
  s.ios.deployment_target = '14.0'
  s.source_files = 'ios/**/*.swift'
  s.exclude_files = [ 'ios/CVDIDV.swift' ]
  s.dependency 'IDVSDK', '3.1.1492'
  s.dependency 'React'
end
