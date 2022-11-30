{{ load:../../tools/readme/edit-warning.md }}
{{ template:title }}
{{ template:badges }}
{{ template:description }}

| <img src="https://raw.githubusercontent.com/nativescript-community/motion-activity/master/images/demo-ios.gif" height="500" /> | <img src="https://raw.githubusercontent.com/nativescript-community/motion-activity/master/images/demo-android.gif" height="500" /> |
| --- | ----------- |
| iOS Demo | Android Demo |

{{ template:toc }}

## Installation
Run the following command from the root of your project:

`ns plugin add {{ pkg.name }}`

### iOS

Dont forget to add `NSMotionUsageDescription` to your app `Info.plist`

## Usage




```ts
import ActivityRecognition from '@nativescript-community/motion-activity'
import { request } from '@nativescript-community/perms'
const activityRecognition = ActivityRecognition.getInstance();

activityRecognition.on(ActivityRecognition.activityEvent, function (eventData) {
	const activityType = eventData.activity.type;
	const activityConfidence = eventData.activity.confidence;

	...
});

if (__ANDROID__ && android.os.Build.VERSION.SDK_INT >= 29) {
	// on android >= 29 you need to request permission at runtime
	const result = await request('android.permission.ACTIVITY_RECOGNITION');
	if (result[0] !== 'authorized') {
		throw new Error('missing ACTIVITY_RECOGNITION permission: ' + result[0])
	}
}
activityRecognition.start();

```

### Examples:

- [Basic range-seek-bar](demo-snippets/vue/Basicrange-seek-bar.vue)
  - A basic sliding range-seek-bar.
- [All Sides](demo-snippets/vue/AllSides.vue)
  - An example of range-seek-bars on all sides: left, right, top, bottom.

{{ load:../../tools/readme/demos-and-development.md }}
{{ load:../../tools/readme/questions.md }}