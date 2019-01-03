#!/bin/bash

./gradlew ${1:-installDevMinSdkDevKernelDebug} --stacktrace && adb shell am start -n io.github.guigacarvalho.flashcards/host.exp.exponent.MainActivity
