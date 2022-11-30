import { EventData, Observable } from '@nativescript/core';
import type { ACTIVITY_TYPE } from './';
export const activityEvent = 'activity-event';

export interface ActivityRecognitionEvent extends EventData {
    activity?: {
        type: ACTIVITY_TYPE;
        confidence: number;
    };
    error?: Error;
}

export class ActivityRecognitionBase extends Observable {
    notifyActivity(type, confidence, error?) {
        const args = {
            eventName: activityEvent
        } as ActivityRecognitionEvent;
        if (error) {
            args.error = error;
        } else {
            args.activity = {
                type,
                confidence
            };
        }
        this.notify(args);
    }
}
