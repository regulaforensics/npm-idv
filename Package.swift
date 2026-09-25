// swift-tools-version: 5.9

import PackageDescription

let package = Package(
    name: "@regulaforensics/idv",
    platforms: [.iOS(.v15)],
    products: [.library(name: "@regulaforensics/idv", targets: ["@regulaforensics/idv"])],
    dependencies: [
        .package(url: "https://github.com/apache/cordova-ios.git", branch: "master"),
        .package(
            url: "https://github.com/regulaforensics/IDVSDK-Swift-Package",
            exact: "3.9.1987"
        )
    ],
    targets: [
        .target(
            name: "@regulaforensics/idv",
            dependencies: [
                .product(name: "Cordova", package: "cordova-ios"),
                .product(name: "IDVSDK", package: "IDVSDK-Swift-Package")
            ],
            path: "ios",
            exclude: ["RNIDV.swift", "RNIDV.m"]
        )
    ]
)
