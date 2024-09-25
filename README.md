# React-Photo-App

## Web
To run your project in you computer, run in terminal:

```
ionic serve
```

##Android
To run your project in your android, you will need to run the following commands in terminal befor open the Android project in your Android Studio software:

Complete a fresh build of the Ionic project, fixing any errors that it reports:

```
ionic build
```

Next, create Android project:

```
ionic cap add android
```

Every time you perform a build (e.g. ionic build) that updates your web directory (default: build), you'll need to copy those changes into your native projects:

```
ionic cap copy
```

Note: After making updates to the native portion of the code (such as adding a new plugin), use the sync command:

```
ionic cap sync
```

Run the Capacitor open command, which opens the native Android project in Android Studio:

```
ionic cap open android
```
