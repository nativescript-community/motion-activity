import { Utils } from '@nativescript/core';
import { ActivityRecognitionBase, activityEvent } from './index.common';
export { ActivityRecognitionEvent, activityEvent } from './index.common';

const GoogleApiClient = com.google.android.gms.common.api.GoogleApiClient;
const AActivityRecognition = com.google.android.gms.location.ActivityRecognition;
const ActivityRecognitionResult = com.google.android.gms.location.ActivityRecognitionResult;
const DetectedActivity = com.google.android.gms.location.DetectedActivity;

const REQUEST_CODE_INTENT_ACTIVITY_TRANSITION = 122;
export enum ACTIVITY_TYPE {
    IN_VEHICLE = DetectedActivity.IN_VEHICLE,
    ON_BICYCLE = DetectedActivity.ON_BICYCLE,
    ON_FOOT = DetectedActivity.ON_FOOT,
    STILL = DetectedActivity.STILL,
    UNKNOWN = DetectedActivity.UNKNOWN,
    RUNNING = DetectedActivity.RUNNING,
    WALKING = DetectedActivity.WALKING,
    TILTING = DetectedActivity.TILTING
}

@NativeClass
@JavaProxy('com.nativescript.motionactivity.ActivityTransitionReceiver')
class ActivityTransitionReceiver extends android.content.BroadcastReceiver {
    onReceive(context, intent) {
        try {
            if (activityRecognition && ActivityRecognitionResult.hasResult(intent)) {
                const result = ActivityRecognitionResult.extractResult(intent);
                const activity = result.getMostProbableActivity();
                const activityType = activity.getType();
                activityRecognition.notifyActivity(activityType, activity.getConfidence());
            }
        } catch (error) {
            activityRecognition.notifyActivity(null, null, error);
        }
    }
}

export class ActivityRecognition extends ActivityRecognitionBase {
    context: android.content.Context;
    activityReconPendingIntent: android.app.PendingIntent;
    constructor() {
        super();
        this.context = Utils.ad.getApplicationContext();
    }

    connectToGooleAPI() {
        return new Promise<any>(
            function (resolve, reject) {
                const api = new GoogleApiClient.Builder(this.context)
                    .addConnectionCallbacks(
                        new GoogleApiClient.ConnectionCallbacks({
                            onConnected() {
                                resolve(api);
                            },
                            onConnectionSuspended() {}
                        })
                    )
                    .addOnConnectionFailedListener(
                        new GoogleApiClient.OnConnectionFailedListener({
                            onConnectionFailed() {
                                reject(new Error('Google API connection failed'));
                            }
                        })
                    )
                    .addApi(AActivityRecognition.API)
                    .build();

                api.connect();
            }.bind(this)
        );
    }

    async start() {
        const api = await this.connectToGooleAPI();
        if (!this.activityReconPendingIntent) {
            const intent = new android.content.Intent(this.context, ActivityTransitionReceiver.class);
            this.activityReconPendingIntent = android.app.PendingIntent.getBroadcast(this.context, REQUEST_CODE_INTENT_ACTIVITY_TRANSITION, intent, android.app.PendingIntent.FLAG_UPDATE_CURRENT);
        }
        AActivityRecognition.ActivityRecognitionApi.requestActivityUpdates(api, 0, this.activityReconPendingIntent);
        api.disconnect();
    }

    async stop() {
        const api = await this.connectToGooleAPI();
        AActivityRecognition.ActivityRecognitionApi.removeActivityUpdates(api, this.activityReconPendingIntent);
        api.disconnect();
    }
}
export const activityRecognition = new ActivityRecognition();
