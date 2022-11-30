import { ActivityRecognitionBase } from './index.common';
export { ActivityRecognitionEvent, activityEvent } from './index.common';

export enum ACTIVITY_TYPE {
    IN_VEHICLE,
    ON_BICYCLE,
    WALKING,
    STILL,
    RUNNING,
    UNKNOWN
}

export class ActivityRecognition extends ActivityRecognitionBase {
    activityManager: CMMotionActivityManager;

    async start() {
        if (!this.activityManager) {
            if (!CMMotionActivityManager.isActivityAvailable()) {
                throw new Error('Activity detection is not available on this device');
            }

            this.activityManager = new CMMotionActivityManager();
        }
        this.activityManager.startActivityUpdatesToQueueWithHandler(NSOperationQueue.mainQueue, (activity) => {
            this.notifyActivity(getActivityType(activity), activity.confidence * 50);
        });
    }

    async stop() {
        if (this.activityManager) {
            this.activityManager.stopActivityUpdates();
        }
    }
}

function getActivityType(activity: CMMotionActivity) {
    if (activity.stationary) {
        return ACTIVITY_TYPE.STILL;
    }
    if (activity.walking) {
        return ACTIVITY_TYPE.WALKING;
    }
    if (activity.running) {
        return ACTIVITY_TYPE.RUNNING;
    }
    if (activity.automotive) {
        return ACTIVITY_TYPE.IN_VEHICLE;
    }
    if (activity.cycling) {
        return ACTIVITY_TYPE.ON_BICYCLE;
    }
    return ACTIVITY_TYPE.UNKNOWN;
}
export const activityRecognition = new ActivityRecognition();
