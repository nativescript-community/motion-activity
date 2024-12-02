<template>
    <Page>
        <ActionBar>
            <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
            <Label text="Basic Pager" />
        </ActionBar>
        <GridLayout paddingTop="30">
            <StackLayout class="page" columns="auto,*,auto" verticalAlignment="center">
                <Label textAlignment="center" :text="`current activity: ${currentActivity}`" />
                <Button text="start" @tap="start" />
                <Button text="stop" @tap="stop" />
            </StackLayout>
        </GridLayout>
    </Page>
</template>

<script lang="ts">
import { activityEvent, activityRecognition, ACTIVITY_TYPE } from '@nativescript-community/motion-activity';
import { request } from '@nativescript-community/perms';
export default {
    data() {
        return {
            currentActivity: null
        };
    },
    mounted() {
        activityRecognition.on(activityEvent, this.onActivityEvent);
    },
    methods: {
        onActivityEvent(event) {
            console.log('onActivityEvent', event.activity.type, ACTIVITY_TYPE[event.activity.type]);
            this.currentActivity = ACTIVITY_TYPE[event.activity.type];
        },
        async start() {
            console.log('start');
            try {
                if (__ANDROID__ && android.os.Build.VERSION.SDK_INT >= 29) {
                    const result = await request('android.permission.ACTIVITY_RECOGNITION');
                    if (result[0] !== 'authorized') {
                        throw new Error('missing ACTIVITY_RECOGNITION permission: ' + result[0])
                    }
                }
                await activityRecognition.start();
            } catch (error) {
                console.error(error);
            }
        },
        async stop() {
            console.log('stop');
            try {
                await activityRecognition.stop();
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.range-seek-bar {
    bar-color: #8990c4;
    bar-highlight-color: #2434ad;
    thumb-color: #1a246d;
    bar-height: 10;
    corner-radius: 30;
}
</style>
