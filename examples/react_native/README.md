# Regula IDV React Native demo application

## How to build demo application
1. Download or the clone current repository using the command `git clone https://github.com/regulaforensics/npm-idv.git`.
2. Put `regula.license` file at `assets/` (you can get a trial license [here](https://client.regulaforensics.com)).
3. Put `db.dat` file at `assets/` (you can get a trial database [here](https://client.regulaforensics.com/customer/databases))
4. Execute `npm run setup` within this directory.
5. In `src/main.tsx` choose prefered login configuration(`loginType` variable) and provide your login data according to it: username and password for `credentials`, tokenUrl for `token`, apiKey for `apiKey`.
6. Run the app: 
  * IOS: `npm run ios`.
  * Android: `npm run android`.
7. After initialization choose **General KYC - AP** from workflows list and click **Start Workflow** button.
8. Complete workflow and get your session id.

**Note**: `npm run ios`/`npm run android` is just one way of running the app. You can also pass `-o` or `--open` argument to the command, and this will open Xcode/Android Studio, then run the app directly from the IDE. Overall, this is a more consistent way, so if you're having troubles running the app from terminal, try running it from the IDE. Just don't forget to make sure that Metro Bundler is running(`npm start`).
