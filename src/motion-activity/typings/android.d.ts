
declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class GoogleSignInAccount {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignInAccount>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.signin.GoogleSignInAccount>;
								public getAccount(): globalAndroid.accounts.Account;
								public getGrantedScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
								public getGivenName(): string;
								public static createDefault(): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
								public equals(param0: any): boolean;
								public zad(): string;
								public getDisplayName(): string;
								public getIdToken(): string;
								public isExpired(): boolean;
								public getFamilyName(): string;
								public getRequestedScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public static zab(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
								public getPhotoUrl(): globalAndroid.net.Uri;
								public getEmail(): string;
								public getServerAuthCode(): string;
								public zac(): string;
								public static zaa(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: globalAndroid.net.Uri, param7: java.lang.Long, param8: string, param9: java.util.Set<any>): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
								public hashCode(): number;
								public getId(): string;
								public requestExtraScopes(param0: androidNative.Array<com.google.android.gms.common.api.Scope>): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
								public static fromAccount(param0: globalAndroid.accounts.Account): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class GoogleSignInOptions implements com.google.android.gms.common.api.Api.ApiOptions.Optional {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignInOptions>;
								public static DEFAULT_SIGN_IN: com.google.android.gms.auth.api.signin.GoogleSignInOptions;
								public static DEFAULT_GAMES_SIGN_IN: com.google.android.gms.auth.api.signin.GoogleSignInOptions;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.signin.GoogleSignInOptions>;
								public static zaa: com.google.android.gms.common.api.Scope;
								public static zac: com.google.android.gms.common.api.Scope;
								public static zad: com.google.android.gms.common.api.Scope;
								public static zae: com.google.android.gms.common.api.Scope;
								public getAccount(): globalAndroid.accounts.Account;
								public getServerClientId(): string;
								public isForceCodeForRefreshToken(): boolean;
								public zaf(): string;
								public equals(param0: any): boolean;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public static zab(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInOptions;
								public getLogSessionId(): string;
								public getScopes(): java.util.ArrayList<com.google.android.gms.common.api.Scope>;
								public isServerAuthCodeRequested(): boolean;
								public getScopeArray(): androidNative.Array<com.google.android.gms.common.api.Scope>;
								public isIdTokenRequested(): boolean;
								public hashCode(): number;
								public getExtensions(): java.util.ArrayList<com.google.android.gms.auth.api.signin.internal.GoogleSignInOptionsExtensionParcelable>;
							}
							export module GoogleSignInOptions {
								export class Builder extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder>;
									public requestServerAuthCode(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public constructor();
									public addExtension(param0: com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public requestIdToken(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public requestEmail(): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public setAccountName(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public requestServerAuthCode(param0: string, param1: boolean): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public setHostedDomain(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public requestScopes(param0: com.google.android.gms.common.api.Scope, param1: androidNative.Array<com.google.android.gms.common.api.Scope>): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public constructor(param0: com.google.android.gms.auth.api.signin.GoogleSignInOptions);
									public requestId(): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public requestProfile(): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public setLogSessionId(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public build(): com.google.android.gms.auth.api.signin.GoogleSignInOptions;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class GoogleSignInOptionsExtension extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension>;
								/**
								 * Constructs a new instance of the com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getExtensionType(): number;
									toBundle(): globalAndroid.os.Bundle;
									getImpliedScopes(): java.util.List<com.google.android.gms.common.api.Scope>;
								});
								public constructor();
								public static FITNESS: number;
								public static GAMES: number;
								public toBundle(): globalAndroid.os.Bundle;
								public getImpliedScopes(): java.util.List<com.google.android.gms.common.api.Scope>;
								public getExtensionType(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export class GoogleSignInOptionsExtensionParcelable {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.GoogleSignInOptionsExtensionParcelable>;
									public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.signin.internal.GoogleSignInOptionsExtensionParcelable>;
									public constructor(param0: com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension);
									public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
									public getType(): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export class HashAccumulator extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.HashAccumulator>;
									public constructor();
									public zaa(param0: boolean): com.google.android.gms.auth.api.signin.internal.HashAccumulator;
									public addObject(param0: any): com.google.android.gms.auth.api.signin.internal.HashAccumulator;
									public hash(): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export class Storage extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.Storage>;
									public zad(param0: string, param1: string): void;
									public getSavedRefreshToken(): string;
									public zac(): void;
									public getSavedDefaultGoogleSignInAccount(): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
									public zaa(param0: string): string;
									public clear(): void;
									public getSavedDefaultGoogleSignInOptions(): com.google.android.gms.auth.api.signin.GoogleSignInOptions;
									public static getInstance(param0: globalAndroid.content.Context): com.google.android.gms.auth.api.signin.internal.Storage;
									public saveDefaultGoogleSignInAccount(param0: com.google.android.gms.auth.api.signin.GoogleSignInAccount, param1: com.google.android.gms.auth.api.signin.GoogleSignInOptions): void;
									public zab(param0: string): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export class zaa extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zaa>;
									public newArray(param0: number): androidNative.Array<any>;
									public constructor();
									public createFromParcel(param0: globalAndroid.os.Parcel): any;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class zaa extends java.lang.Object implements java.util.Comparator<any> {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.zaa>;
								public static reverseOrder(): java.util.Comparator<any>;
								public static naturalOrder(): java.util.Comparator<any>;
								public thenComparing(param0: java.util.Comparator<any>): java.util.Comparator<any>;
								public equals(param0: any): boolean;
								public static nullsFirst(param0: java.util.Comparator<any>): java.util.Comparator<any>;
								public thenComparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
								public thenComparingInt(param0: any /* any*/): java.util.Comparator<any>;
								public static comparingInt(param0: any /* any*/): java.util.Comparator<any>;
								public static nullsLast(param0: java.util.Comparator<any>): java.util.Comparator<any>;
								public static comparing(param0: any /* any*/): java.util.Comparator<any>;
								public thenComparing(param0: any /* any*/): java.util.Comparator<any>;
								public static comparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
								public static comparingDouble(param0: any /* any*/): java.util.Comparator<any>;
								public thenComparingDouble(param0: any /* any*/): java.util.Comparator<any>;
								public static comparingLong(param0: any /* any*/): java.util.Comparator<any>;
								public compare(param0: any, param1: any): number;
								public reversed(): java.util.Comparator<any>;
								public thenComparingLong(param0: any /* any*/): java.util.Comparator<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class zab extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.zab>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public constructor();
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class zac extends java.lang.Object implements java.util.Comparator<any> {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.zac>;
								public static reverseOrder(): java.util.Comparator<any>;
								public static naturalOrder(): java.util.Comparator<any>;
								public thenComparing(param0: java.util.Comparator<any>): java.util.Comparator<any>;
								public equals(param0: any): boolean;
								public static nullsFirst(param0: java.util.Comparator<any>): java.util.Comparator<any>;
								public thenComparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
								public thenComparingInt(param0: any /* any*/): java.util.Comparator<any>;
								public static comparingInt(param0: any /* any*/): java.util.Comparator<any>;
								public static nullsLast(param0: java.util.Comparator<any>): java.util.Comparator<any>;
								public static comparing(param0: any /* any*/): java.util.Comparator<any>;
								public thenComparing(param0: any /* any*/): java.util.Comparator<any>;
								public static comparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
								public static comparingDouble(param0: any /* any*/): java.util.Comparator<any>;
								public thenComparingDouble(param0: any /* any*/): java.util.Comparator<any>;
								public static comparingLong(param0: any /* any*/): java.util.Comparator<any>;
								public compare(param0: any, param1: any): number;
								public reversed(): java.util.Comparator<any>;
								public thenComparingLong(param0: any /* any*/): java.util.Comparator<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class zad extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.zad>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class zae extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.zae>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public constructor();
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module base {
					export class R extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.base.R>;
					}
					export module R {
						export class attr extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.base.R.attr>;
							public static buttonSize: number;
							public static circleCrop: number;
							public static colorScheme: number;
							public static imageAspectRatio: number;
							public static imageAspectRatioAdjust: number;
							public static scopeUris: number;
						}
						export class color extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.base.R.color>;
							public static common_google_signin_btn_text_dark: number;
							public static common_google_signin_btn_text_dark_default: number;
							public static common_google_signin_btn_text_dark_disabled: number;
							public static common_google_signin_btn_text_dark_focused: number;
							public static common_google_signin_btn_text_dark_pressed: number;
							public static common_google_signin_btn_text_light: number;
							public static common_google_signin_btn_text_light_default: number;
							public static common_google_signin_btn_text_light_disabled: number;
							public static common_google_signin_btn_text_light_focused: number;
							public static common_google_signin_btn_text_light_pressed: number;
							public static common_google_signin_btn_tint: number;
						}
						export class drawable extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.base.R.drawable>;
							public static common_full_open_on_phone: number;
							public static common_google_signin_btn_icon_dark: number;
							public static common_google_signin_btn_icon_dark_focused: number;
							public static common_google_signin_btn_icon_dark_normal: number;
							public static common_google_signin_btn_icon_dark_normal_background: number;
							public static common_google_signin_btn_icon_disabled: number;
							public static common_google_signin_btn_icon_light: number;
							public static common_google_signin_btn_icon_light_focused: number;
							public static common_google_signin_btn_icon_light_normal: number;
							public static common_google_signin_btn_icon_light_normal_background: number;
							public static common_google_signin_btn_text_dark: number;
							public static common_google_signin_btn_text_dark_focused: number;
							public static common_google_signin_btn_text_dark_normal: number;
							public static common_google_signin_btn_text_dark_normal_background: number;
							public static common_google_signin_btn_text_disabled: number;
							public static common_google_signin_btn_text_light: number;
							public static common_google_signin_btn_text_light_focused: number;
							public static common_google_signin_btn_text_light_normal: number;
							public static common_google_signin_btn_text_light_normal_background: number;
							public static googleg_disabled_color_18: number;
							public static googleg_standard_color_18: number;
						}
						export class id extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.base.R.id>;
							public static adjust_height: number;
							public static adjust_width: number;
							public static auto: number;
							public static dark: number;
							public static icon_only: number;
							public static light: number;
							public static none: number;
							public static standard: number;
							public static wide: number;
						}
						export class styleable extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.base.R.styleable>;
							public static LoadingImageView: androidNative.Array<number>;
							public static LoadingImageView_circleCrop: number;
							public static LoadingImageView_imageAspectRatio: number;
							public static LoadingImageView_imageAspectRatioAdjust: number;
							public static SignInButton: androidNative.Array<number>;
							public static SignInButton_buttonSize: number;
							public static SignInButton_colorScheme: number;
							public static SignInButton_scopeUris: number;
							public static <clinit>(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class ErrorDialogFragment extends globalAndroid.app.DialogFragment {
						public static class: java.lang.Class<com.google.android.gms.common.ErrorDialogFragment>;
						/** @deprecated */
						public show(param0: globalAndroid.app.FragmentManager, param1: string): void;
						public constructor();
						public onDismiss(param0: globalAndroid.content.DialogInterface): void;
						public onTrimMemory(param0: number): void;
						/** @deprecated */
						public onCreateContextMenu(param0: globalAndroid.view.ContextMenu, param1: globalAndroid.view.View, param2: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
						public onCreateContextMenu(param0: globalAndroid.view.ContextMenu, param1: globalAndroid.view.View, param2: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
						public show(param0: globalAndroid.app.FragmentManager, param1: string): void;
						/** @deprecated */
						public onDismiss(param0: globalAndroid.content.DialogInterface): void;
						/** @deprecated */
						public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
						/** @deprecated */
						public constructor();
						/** @deprecated */
						public onTrimMemory(param0: number): void;
						public static newInstance(param0: globalAndroid.app.Dialog): com.google.android.gms.common.ErrorDialogFragment;
						/** @deprecated */
						public show(param0: globalAndroid.app.FragmentTransaction, param1: string): number;
						public onCancel(param0: globalAndroid.content.DialogInterface): void;
						/** @deprecated */
						public onCancel(param0: globalAndroid.content.DialogInterface): void;
						public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
						public static newInstance(param0: globalAndroid.app.Dialog, param1: globalAndroid.content.DialogInterface.OnCancelListener): com.google.android.gms.common.ErrorDialogFragment;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class GoogleApiAvailability {
						public static class: java.lang.Class<com.google.android.gms.common.GoogleApiAvailability>;
						public static GOOGLE_PLAY_SERVICES_VERSION_CODE: number;
						public static GOOGLE_PLAY_SERVICES_PACKAGE: string;
						public zag(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.internal.LifecycleFragment, param2: number, param3: number, param4: globalAndroid.content.DialogInterface.OnCancelListener): boolean;
						public getErrorDialog(param0: globalAndroid.app.Activity, param1: number, param2: number, param3: globalAndroid.content.DialogInterface.OnCancelListener): globalAndroid.app.Dialog;
						public showErrorDialogFragment(param0: globalAndroid.app.Activity, param1: number, param2: number): boolean;
						public getErrorDialog(param0: androidx.fragment.app.Fragment, param1: number, param2: number, param3: globalAndroid.content.DialogInterface.OnCancelListener): globalAndroid.app.Dialog;
						public showErrorNotification(param0: globalAndroid.content.Context, param1: number): void;
						public getErrorResolutionPendingIntent(param0: globalAndroid.content.Context, param1: number, param2: number): globalAndroid.app.PendingIntent;
						public setDefaultNotificationChannelId(param0: globalAndroid.content.Context, param1: string): void;
						public getErrorDialog(param0: globalAndroid.app.Activity, param1: number, param2: number): globalAndroid.app.Dialog;
						public zab(param0: globalAndroid.app.Activity, param1: globalAndroid.content.DialogInterface.OnCancelListener): globalAndroid.app.Dialog;
						public isGooglePlayServicesAvailable(param0: globalAndroid.content.Context): number;
						public checkApiAvailability(param0: com.google.android.gms.common.api.GoogleApi<any>, param1: androidNative.Array<com.google.android.gms.common.api.GoogleApi<any>>): com.google.android.gms.tasks.Task<java.lang.Void>;
						public static zai(param0: com.google.android.gms.common.api.HasApiKey<any>, param1: androidNative.Array<com.google.android.gms.common.api.HasApiKey<any>>): com.google.android.gms.tasks.Task;
						public isGooglePlayServicesAvailable(param0: globalAndroid.content.Context, param1: number): number;
						public makeGooglePlayServicesAvailable(param0: globalAndroid.app.Activity): com.google.android.gms.tasks.Task<java.lang.Void>;
						public zah(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.ConnectionResult, param2: number): boolean;
						public getErrorResolutionPendingIntent(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.ConnectionResult): globalAndroid.app.PendingIntent;
						public constructor();
						public showErrorNotification(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.ConnectionResult): void;
						public getClientVersion(param0: globalAndroid.content.Context): number;
						public checkApiAvailability(param0: com.google.android.gms.common.api.HasApiKey<any>, param1: androidNative.Array<com.google.android.gms.common.api.HasApiKey<any>>): com.google.android.gms.tasks.Task<java.lang.Void>;
						public static getInstance(): com.google.android.gms.common.GoogleApiAvailability;
						public zac(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.internal.zabw): com.google.android.gms.common.api.internal.zabx;
						public getErrorResolutionIntent(param0: globalAndroid.content.Context, param1: number, param2: string): globalAndroid.content.Intent;
						public showErrorDialogFragment(param0: globalAndroid.app.Activity, param1: number, param2: number, param3: globalAndroid.content.DialogInterface.OnCancelListener): boolean;
						public getErrorString(param0: number): string;
						public getErrorDialog(param0: androidx.fragment.app.Fragment, param1: number, param2: number): globalAndroid.app.Dialog;
						public isUserResolvableError(param0: number): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class GooglePlayServicesUtil {
						public static class: java.lang.Class<com.google.android.gms.common.GooglePlayServicesUtil>;
						public static GMS_ERROR_DIALOG: string;
						public static GOOGLE_PLAY_SERVICES_VERSION_CODE: number;
						public static GOOGLE_PLAY_SERVICES_PACKAGE: string;
						public static GOOGLE_PLAY_STORE_PACKAGE: string;
						/** @deprecated */
						public static showErrorNotification(param0: number, param1: globalAndroid.content.Context): void;
						/** @deprecated */
						public static isGooglePlayServicesAvailable(param0: globalAndroid.content.Context, param1: number): number;
						public static getRemoteContext(param0: globalAndroid.content.Context): globalAndroid.content.Context;
						/** @deprecated */
						public static getErrorString(param0: number): string;
						public static showErrorDialogFragment(param0: number, param1: globalAndroid.app.Activity, param2: androidx.fragment.app.Fragment, param3: number, param4: globalAndroid.content.DialogInterface.OnCancelListener): boolean;
						public static getRemoteResource(param0: globalAndroid.content.Context): globalAndroid.content.res.Resources;
						/** @deprecated */
						public static showErrorDialogFragment(param0: number, param1: globalAndroid.app.Activity, param2: number, param3: globalAndroid.content.DialogInterface.OnCancelListener): boolean;
						/** @deprecated */
						public static getErrorPendingIntent(param0: number, param1: globalAndroid.content.Context, param2: number): globalAndroid.app.PendingIntent;
						/** @deprecated */
						public static isUserRecoverableError(param0: number): boolean;
						/** @deprecated */
						public static getErrorDialog(param0: number, param1: globalAndroid.app.Activity, param2: number, param3: globalAndroid.content.DialogInterface.OnCancelListener): globalAndroid.app.Dialog;
						/** @deprecated */
						public static showErrorDialogFragment(param0: number, param1: globalAndroid.app.Activity, param2: number): boolean;
						/** @deprecated */
						public static isGooglePlayServicesAvailable(param0: globalAndroid.content.Context): number;
						/** @deprecated */
						public static getErrorDialog(param0: number, param1: globalAndroid.app.Activity, param2: number): globalAndroid.app.Dialog;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class SignInButton extends globalAndroid.widget.FrameLayout implements globalAndroid.view.View.OnClickListener {
						public static class: java.lang.Class<com.google.android.gms.common.SignInButton>;
						public static SIZE_STANDARD: number;
						public static SIZE_WIDE: number;
						public static SIZE_ICON_ONLY: number;
						public static COLOR_DARK: number;
						public static COLOR_LIGHT: number;
						public static COLOR_AUTO: number;
						public isLayoutRequested(): boolean;
						public canResolveLayoutDirection(): boolean;
						public constructor(param0: globalAndroid.content.Context);
						public onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: androidNative.Array<number>): void;
						public sendAccessibilityEvent(param0: number): void;
						public onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): boolean;
						public onNestedPrePerformAccessibilityAction(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.os.Bundle): boolean;
						public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public clearChildFocus(param0: globalAndroid.view.View): void;
						public requestChildFocus(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
						/** @deprecated */
						public invalidateChild(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect): void;
						public onNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
						public childHasTransientStateChanged(param0: globalAndroid.view.View, param1: boolean): void;
						public isTextAlignmentResolved(): boolean;
						public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
						public getTextDirection(): number;
						public showContextMenuForChild(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
						public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
						public onDescendantInvalidated(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
						public removeView(param0: globalAndroid.view.View): void;
						public getChildVisibleRect(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.Point): boolean;
						public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public recomputeViewAttributes(param0: globalAndroid.view.View): void;
						public showContextMenuForChild(param0: globalAndroid.view.View): boolean;
						public canResolveTextDirection(): boolean;
						public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public requestDisallowInterceptTouchEvent(param0: boolean): void;
						public isLayoutDirectionResolved(): boolean;
						/** @deprecated */
						public invalidateChildInParent(param0: androidNative.Array<number>, param1: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
						public onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
						public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
						public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public requestLayout(): void;
						public notifySubtreeAccessibilityStateChanged(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
						public keyboardNavigationClusterSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
						public bringChildToFront(param0: globalAndroid.view.View): void;
						public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
						public addView(param0: globalAndroid.view.View, param1: number): void;
						public onClick(param0: globalAndroid.view.View): void;
						/** @deprecated */
						public setStyle(param0: number, param1: number, param2: androidNative.Array<com.google.android.gms.common.api.Scope>): void;
						public requestChildRectangleOnScreen(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: boolean): boolean;
						public setSize(param0: number): void;
						public isTextDirectionResolved(): boolean;
						public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback, param2: number): globalAndroid.view.ActionMode;
						/** @deprecated */
						public requestFitSystemWindows(): void;
						public setStyle(param0: number, param1: number): void;
						public focusSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
						public onStopNestedScroll(param0: globalAndroid.view.View): void;
						public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public requestTransparentRegion(param0: globalAndroid.view.View): void;
						public setColorScheme(param0: number): void;
						public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
						public addView(param0: globalAndroid.view.View): void;
						public onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
						public createContextMenu(param0: globalAndroid.view.ContextMenu): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public childDrawableStateChanged(param0: globalAndroid.view.View): void;
						public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						public requestFitSystemWindows(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						/** @deprecated */
						public setScopes(param0: androidNative.Array<com.google.android.gms.common.api.Scope>): void;
						public updateViewLayout(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
						public getParentForAccessibility(): globalAndroid.view.ViewParent;
						public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public focusableViewAvailable(param0: globalAndroid.view.View): void;
						public setEnabled(param0: boolean): void;
						public focusSearch(param0: number): globalAndroid.view.View;
						public requestSendAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
						public getTextAlignment(): number;
						public onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
						public getParent(): globalAndroid.view.ViewParent;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
					}
					export module SignInButton {
						export class ButtonSize extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.google.android.gms.common.SignInButton.ButtonSize>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.SignInButton$ButtonSize interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								equals(param0: any): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class<any>;
							});
							public constructor();
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export class ColorScheme extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.google.android.gms.common.SignInButton.ColorScheme>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.SignInButton$ColorScheme interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								equals(param0: any): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class<any>;
							});
							public constructor();
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class SupportErrorDialogFragment {
						public static class: java.lang.Class<com.google.android.gms.common.SupportErrorDialogFragment>;
						public constructor();
						public show(param0: androidx.fragment.app.FragmentManager, param1: string): void;
						public onCancel(param0: globalAndroid.content.DialogInterface): void;
						public static newInstance(param0: globalAndroid.app.Dialog, param1: globalAndroid.content.DialogInterface.OnCancelListener): com.google.android.gms.common.SupportErrorDialogFragment;
						public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
						public static newInstance(param0: globalAndroid.app.Dialog): com.google.android.gms.common.SupportErrorDialogFragment;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class Api<O>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.Api<any>>;
							public constructor(param0: string, param1: com.google.android.gms.common.api.Api.AbstractClientBuilder<any,any>, param2: com.google.android.gms.common.api.Api.ClientKey<any>);
							public zab(): com.google.android.gms.common.api.Api.AnyClientKey<any>;
							public zaa(): com.google.android.gms.common.api.Api.AbstractClientBuilder<any,any>;
							public zac(): com.google.android.gms.common.api.Api.BaseClientBuilder<any,any>;
							public zad(): string;
						}
						export module Api {
							export abstract class AbstractClientBuilder<T, O>  extends com.google.android.gms.common.api.Api.BaseClientBuilder<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.AbstractClientBuilder<any,any>>;
								public buildClient(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.ClientSettings, param3: any, param4: com.google.android.gms.common.api.internal.ConnectionCallbacks, param5: com.google.android.gms.common.api.internal.OnConnectionFailedListener): any;
								public constructor();
								/** @deprecated */
								public buildClient(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.ClientSettings, param3: any, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): any;
							}
							export class AnyClient extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.AnyClient>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.Api$AnyClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
							}
							export class AnyClientKey<C>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.AnyClientKey<any>>;
								public constructor();
							}
							export class ApiOptions extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									<clinit>(): void;
								});
								public constructor();
								public static NO_OPTIONS: com.google.android.gms.common.api.Api.ApiOptions.NoOptions;
							}
							export module ApiOptions {
								export class HasAccountOptions extends java.lang.Object implements com.google.android.gms.common.api.Api.ApiOptions.HasOptions, com.google.android.gms.common.api.Api.ApiOptions.NotRequiredOptions {
									public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions.HasAccountOptions>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions$HasAccountOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										getAccount(): globalAndroid.accounts.Account;
										<clinit>(): void;
										<clinit>(): void;
									});
									public constructor();
									public static NO_OPTIONS: com.google.android.gms.common.api.Api.ApiOptions.NoOptions;
									public getAccount(): globalAndroid.accounts.Account;
								}
								export class HasGoogleSignInAccountOptions extends java.lang.Object implements com.google.android.gms.common.api.Api.ApiOptions.HasOptions {
									public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions.HasGoogleSignInAccountOptions>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions$HasGoogleSignInAccountOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										getGoogleSignInAccount(): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
										<clinit>(): void;
									});
									public constructor();
									public static NO_OPTIONS: com.google.android.gms.common.api.Api.ApiOptions.NoOptions;
									public getGoogleSignInAccount(): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
								}
								export class HasOptions extends java.lang.Object implements com.google.android.gms.common.api.Api.ApiOptions {
									public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions.HasOptions>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions$HasOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										<clinit>(): void;
									});
									public constructor();
									public static NO_OPTIONS: com.google.android.gms.common.api.Api.ApiOptions.NoOptions;
								}
								export class NoOptions extends java.lang.Object implements com.google.android.gms.common.api.Api.ApiOptions.NotRequiredOptions {
									public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions.NoOptions>;
								}
								export class NotRequiredOptions extends java.lang.Object implements com.google.android.gms.common.api.Api.ApiOptions {
									public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions.NotRequiredOptions>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions$NotRequiredOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										<clinit>(): void;
									});
									public constructor();
									public static NO_OPTIONS: com.google.android.gms.common.api.Api.ApiOptions.NoOptions;
								}
								export class Optional extends java.lang.Object implements com.google.android.gms.common.api.Api.ApiOptions.HasOptions, com.google.android.gms.common.api.Api.ApiOptions.NotRequiredOptions {
									public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions.Optional>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions$Optional interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										<clinit>(): void;
										<clinit>(): void;
									});
									public constructor();
									public static NO_OPTIONS: com.google.android.gms.common.api.Api.ApiOptions.NoOptions;
								}
							}
							export abstract class BaseClientBuilder<T, O>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.BaseClientBuilder<any,any>>;
								public static API_PRIORITY_GAMES: number;
								public static API_PRIORITY_PLUS: number;
								public static API_PRIORITY_OTHER: number;
								public getImpliedScopes(param0: O): java.util.List<com.google.android.gms.common.api.Scope>;
								public getPriority(): number;
								public constructor();
							}
							export class Client extends java.lang.Object implements com.google.android.gms.common.api.Api.AnyClient {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.Client>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.Api$Client interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getMinApkVersion(): number;
									getSignInIntent(): globalAndroid.content.Intent;
									getServiceBrokerBinder(): globalAndroid.os.IBinder;
									getEndpointPackageName(): string;
									getLastDisconnectMessage(): string;
									getScopesForConnectionlessNonSignIn(): java.util.Set<com.google.android.gms.common.api.Scope>;
									connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
									disconnect(): void;
									disconnect(param0: string): void;
									dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
									getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
									onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
									isConnected(): boolean;
									isConnecting(): boolean;
									providesSignIn(): boolean;
									requiresAccount(): boolean;
									requiresGooglePlayServices(): boolean;
									requiresSignIn(): boolean;
									getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
									getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
								});
								public constructor();
								public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
								public disconnect(param0: string): void;
								public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
								public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
								public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
								public requiresSignIn(): boolean;
								public getSignInIntent(): globalAndroid.content.Intent;
								public getServiceBrokerBinder(): globalAndroid.os.IBinder;
								public getScopesForConnectionlessNonSignIn(): java.util.Set<com.google.android.gms.common.api.Scope>;
								public getEndpointPackageName(): string;
								public getLastDisconnectMessage(): string;
								public requiresGooglePlayServices(): boolean;
								public isConnected(): boolean;
								public requiresAccount(): boolean;
								public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
								public getMinApkVersion(): number;
								public disconnect(): void;
								public isConnecting(): boolean;
								public providesSignIn(): boolean;
							}
							export class ClientKey<C>  extends com.google.android.gms.common.api.Api.AnyClientKey<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.ClientKey<any>>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class AvailabilityException extends java.lang.Exception {
							public static class: java.lang.Class<com.google.android.gms.common.api.AvailabilityException>;
							public constructor();
							public constructor(param0: string);
							public constructor(param0: java.lang.Throwable);
							public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
							public constructor(param0: androidx.collection.ArrayMap);
							public constructor(param0: string, param1: java.lang.Throwable);
							public getMessage(): string;
							public getConnectionResult(param0: com.google.android.gms.common.api.GoogleApi<any>): com.google.android.gms.common.ConnectionResult;
							public getConnectionResult(param0: com.google.android.gms.common.api.HasApiKey<any>): com.google.android.gms.common.ConnectionResult;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class Batch extends com.google.android.gms.common.api.internal.BasePendingResult<com.google.android.gms.common.api.BatchResult> {
							public static class: java.lang.Class<com.google.android.gms.common.api.Batch>;
							public cancel(): void;
							public createFailedResult(param0: com.google.android.gms.common.api.Status): com.google.android.gms.common.api.BatchResult;
							public createFailedResult(param0: com.google.android.gms.common.api.Status): any;
						}
						export module Batch {
							export class Builder extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.Batch.Builder>;
								public build(): com.google.android.gms.common.api.Batch;
								public add(param0: com.google.android.gms.common.api.PendingResult<any>): com.google.android.gms.common.api.BatchResultToken<any>;
								public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class BatchResult extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.BatchResult>;
							public getStatus(): com.google.android.gms.common.api.Status;
							public take(param0: com.google.android.gms.common.api.BatchResultToken<any>): com.google.android.gms.common.api.Result;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class BatchResultToken<R>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.BatchResultToken<any>>;
							public mId: number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class BooleanResult extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.BooleanResult>;
							public constructor(param0: com.google.android.gms.common.api.Status, param1: boolean);
							public getStatus(): com.google.android.gms.common.api.Status;
							public hashCode(): number;
							public getValue(): boolean;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class DataBufferResponse<T, R>  extends com.google.android.gms.common.api.Response<any> implements com.google.android.gms.common.data.DataBuffer<any>  {
							public static class: java.lang.Class<com.google.android.gms.common.api.DataBufferResponse<any,any>>;
							public singleRefIterator(): java.util.Iterator<any>;
							public constructor();
							public close(): void;
							public iterator(): java.util.Iterator<any>;
							public spliterator(): java.util.Spliterator<any>;
							public get(param0: number): any;
							public release(): void;
							public isClosed(): boolean;
							/** @deprecated */
							public isClosed(): boolean;
							public getCount(): number;
							public getMetadata(): globalAndroid.os.Bundle;
							public forEach(param0: any /* any*/): void;
							public constructor(param0: any);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export abstract class GoogleApi<O>  extends com.google.android.gms.common.api.HasApiKey<any> {
							public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApi<any>>;
							public registerListener(param0: any, param1: string): com.google.android.gms.common.api.internal.ListenerHolder<any>;
							public doRegisterEventListener(param0: com.google.android.gms.common.api.internal.RegistrationMethods<any,any>): com.google.android.gms.tasks.Task;
							/** @deprecated */
							public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
							public doWrite(param0: com.google.android.gms.common.api.internal.TaskApiCall<any,any>): com.google.android.gms.tasks.Task;
							/** @deprecated */
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: globalAndroid.os.Looper, param4: com.google.android.gms.common.api.internal.StatusExceptionMapper);
							/** @deprecated */
							public getContextFeatureId(): string;
							public doBestEffortWrite(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
							public getLooper(): globalAndroid.os.Looper;
							public doUnregisterEventListener(param0: com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<any>): com.google.android.gms.tasks.Task<java.lang.Boolean>;
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
							public getApiKey(): com.google.android.gms.common.api.internal.ApiKey<any>;
							public createClientSettingsBuilder(): com.google.android.gms.common.internal.ClientSettings.Builder;
							public zab(param0: globalAndroid.os.Looper, param1: com.google.android.gms.common.api.internal.zabq): com.google.android.gms.common.api.Api.Client;
							/** @deprecated */
							public doRegisterEventListener(param0: com.google.android.gms.common.api.internal.RegisterListenerMethod<any,any>, param1: com.google.android.gms.common.api.internal.UnregisterListenerMethod<any,any>): com.google.android.gms.tasks.Task;
							public getApiOptions(): any;
							public doRead(param0: com.google.android.gms.common.api.internal.TaskApiCall<any,any>): com.google.android.gms.tasks.Task;
							public getApplicationContext(): globalAndroid.content.Context;
							public getContextAttributionTag(): string;
							public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
							public zac(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler): com.google.android.gms.common.api.internal.zact;
							public doWrite(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
							public disconnectService(): com.google.android.gms.tasks.Task<java.lang.Boolean>;
							public doBestEffortWrite(param0: com.google.android.gms.common.api.internal.TaskApiCall<any,any>): com.google.android.gms.tasks.Task;
							/** @deprecated */
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
							public asGoogleApiClient(): com.google.android.gms.common.api.GoogleApiClient;
							public doUnregisterEventListener(param0: com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<any>, param1: number): com.google.android.gms.tasks.Task<java.lang.Boolean>;
							public zaa(): number;
							public doRead(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
						}
						export module GoogleApi {
							export class Settings extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApi.Settings>;
								public static DEFAULT_SETTINGS: com.google.android.gms.common.api.GoogleApi.Settings;
								public zaa: com.google.android.gms.common.api.internal.StatusExceptionMapper;
								public zab: globalAndroid.os.Looper;
							}
							export module Settings {
								export class Builder extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApi.Settings.Builder>;
									public setLooper(param0: globalAndroid.os.Looper): com.google.android.gms.common.api.GoogleApi.Settings.Builder;
									public constructor();
									public build(): com.google.android.gms.common.api.GoogleApi.Settings;
									public setMapper(param0: com.google.android.gms.common.api.internal.StatusExceptionMapper): com.google.android.gms.common.api.GoogleApi.Settings.Builder;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class GoogleApiActivity extends globalAndroid.app.Activity implements globalAndroid.content.DialogInterface.OnCancelListener {
							public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApiActivity>;
							public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
							public onWindowStartingActionMode(param0: globalAndroid.view.ActionMode.Callback, param1: number): globalAndroid.view.ActionMode;
							public onTrimMemory(param0: number): void;
							public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
							public onPreparePanel(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.Menu): boolean;
							public onCreate(param0: globalAndroid.os.Bundle, param1: any): void;
							public dispatchTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
							public onCreatePanelMenu(param0: number, param1: globalAndroid.view.Menu): boolean;
							public onWindowStartingActionMode(param0: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
							public dispatchKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
							public onWindowFocusChanged(param0: boolean): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public dispatchTrackballEvent(param0: globalAndroid.view.MotionEvent): boolean;
							public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
							public onAttachedToWindow(): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle, param1: any): void;
							public onMenuOpened(param0: number, param1: globalAndroid.view.Menu): boolean;
							public onMenuItemSelected(param0: number, param1: globalAndroid.view.MenuItem): boolean;
							public onSearchRequested(): boolean;
							public constructor();
							public onWindowAttributesChanged(param0: globalAndroid.view.WindowManager.LayoutParams): void;
							public onPointerCaptureChanged(param0: boolean): void;
							public onDetachedFromWindow(): void;
							public onCreateView(param0: globalAndroid.view.View, param1: string, param2: globalAndroid.content.Context, param3: globalAndroid.util.AttributeSet): globalAndroid.view.View;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public static zaa(param0: globalAndroid.content.Context, param1: globalAndroid.app.PendingIntent, param2: number, param3: boolean): globalAndroid.content.Intent;
							public onContentChanged(): void;
							public onCancel(param0: globalAndroid.content.DialogInterface): void;
							public onCreateView(param0: string, param1: globalAndroid.content.Context, param2: globalAndroid.util.AttributeSet): globalAndroid.view.View;
							public onActionModeFinished(param0: globalAndroid.view.ActionMode): void;
							public constructor(param0: globalAndroid.content.Context, param1: number);
							public onProvideKeyboardShortcuts(param0: java.util.List<any>, param1: globalAndroid.view.Menu, param2: number): void;
							public dispatchKeyShortcutEvent(param0: globalAndroid.view.KeyEvent): boolean;
							public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
							public dispatchPopulateAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
							public onActionModeStarted(param0: globalAndroid.view.ActionMode): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.content.res.Resources.Theme);
							public onPanelClosed(param0: number, param1: globalAndroid.view.Menu): void;
							public onCreatePanelView(param0: number): globalAndroid.view.View;
							public onCreateContextMenu(param0: globalAndroid.view.ContextMenu, param1: globalAndroid.view.View, param2: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
							public dispatchGenericMotionEvent(param0: globalAndroid.view.MotionEvent): boolean;
							public constructor(param0: globalAndroid.content.Context);
							public onSearchRequested(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export abstract class GoogleApiClient extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApiClient>;
							public static DEFAULT_ACCOUNT: string;
							public static SIGN_IN_MODE_REQUIRED: number;
							public static SIGN_IN_MODE_OPTIONAL: number;
							public isConnectionFailedListenerRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): boolean;
							public zao(param0: com.google.android.gms.common.api.internal.zada<any>): void;
							public registerConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
							public unregisterConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
							public registerConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
							public getLooper(): globalAndroid.os.Looper;
							public zap(param0: com.google.android.gms.common.api.internal.zada<any>): void;
							public hasConnectedApi(param0: com.google.android.gms.common.api.Api<any>): boolean;
							public blockingConnect(): com.google.android.gms.common.ConnectionResult;
							public connect(): void;
							public execute(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
							public clearDefaultAccountAndReconnect(): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public maybeSignOut(): void;
							public stopAutoManage(param0: androidx.fragment.app.FragmentActivity): void;
							public hasApi(param0: com.google.android.gms.common.api.Api<any>): boolean;
							public constructor();
							public isConnectionCallbacksRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): boolean;
							public getContext(): globalAndroid.content.Context;
							public disconnect(): void;
							public isConnected(): boolean;
							public reconnect(): void;
							public unregisterConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
							public getConnectionResult(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
							public isConnecting(): boolean;
							public enqueue(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
							public registerListener(param0: any): com.google.android.gms.common.api.internal.ListenerHolder<any>;
							public blockingConnect(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
							public static dumpAll(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
							public maybeSignIn(param0: com.google.android.gms.common.api.internal.SignInConnectionListener): boolean;
							public getClient(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>): com.google.android.gms.common.api.Api.Client;
							public static getAllClients(): java.util.Set<com.google.android.gms.common.api.GoogleApiClient>;
							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
							public connect(param0: number): void;
						}
						export module GoogleApiClient {
							export class Builder extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApiClient.Builder>;
								public build(): com.google.android.gms.common.api.GoogleApiClient;
								public enableAutoManage(param0: androidx.fragment.app.FragmentActivity, param1: number, param2: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public useDefaultAccount(): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public addConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public addApiIfAvailable(param0: com.google.android.gms.common.api.Api<any>, param1: androidNative.Array<com.google.android.gms.common.api.Scope>): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public addApiIfAvailable(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.Api.ApiOptions.HasOptions, param2: androidNative.Array<com.google.android.gms.common.api.Scope>): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public addScope(param0: com.google.android.gms.common.api.Scope): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public addOnConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param2: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
								public setViewForPopups(param0: globalAndroid.view.View): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public setHandler(param0: globalAndroid.os.Handler): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public zaa(): com.google.android.gms.common.internal.ClientSettings;
								public addApi(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public addApi(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.Api.ApiOptions.HasOptions): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public constructor(param0: globalAndroid.content.Context);
								public enableAutoManage(param0: androidx.fragment.app.FragmentActivity, param1: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public setGravityForPopups(param0: number): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public setAccountName(param0: string): com.google.android.gms.common.api.GoogleApiClient.Builder;
							}
							export class ConnectionCallbacks extends java.lang.Object implements com.google.android.gms.common.api.internal.ConnectionCallbacks {
								public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.GoogleApiClient$ConnectionCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onConnected(param0: globalAndroid.os.Bundle): void;
									onConnectionSuspended(param0: number): void;
								});
								public constructor();
								public static CAUSE_SERVICE_DISCONNECTED: number;
								public static CAUSE_NETWORK_LOST: number;
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public onConnectionSuspended(param0: number): void;
							}
							export class OnConnectionFailedListener extends java.lang.Object implements com.google.android.gms.common.api.internal.OnConnectionFailedListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.GoogleApiClient$OnConnectionFailedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
								});
								public constructor();
								public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class HasApiKey<O>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.HasApiKey<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.api.HasApiKey<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getApiKey(): com.google.android.gms.common.api.internal.ApiKey<O>;
							});
							public constructor();
							public getApiKey(): com.google.android.gms.common.api.internal.ApiKey<O>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class OptionalModuleApi extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.OptionalModuleApi>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.api.OptionalModuleApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getOptionalFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							});
							public constructor();
							public getOptionalFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export abstract class OptionalPendingResult<R>  extends com.google.android.gms.common.api.PendingResult<any> {
							public static class: java.lang.Class<com.google.android.gms.common.api.OptionalPendingResult<any>>;
							public get(): any;
							public constructor();
							public isDone(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export abstract class PendingResult<R>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.PendingResult<any>>;
							public constructor();
							public cancel(): void;
							public isCanceled(): boolean;
							public await(param0: number, param1: java.util.concurrent.TimeUnit): R;
							public await(): R;
							public then(param0: com.google.android.gms.common.api.ResultTransform<any,any>): com.google.android.gms.common.api.TransformedResult<any>;
							public addStatusListener(param0: com.google.android.gms.common.api.PendingResult.StatusListener): void;
							public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>, param1: number, param2: java.util.concurrent.TimeUnit): void;
							public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>): void;
						}
						export module PendingResult {
							export class StatusListener extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.PendingResult.StatusListener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.PendingResult$StatusListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onComplete(param0: com.google.android.gms.common.api.Status): void;
								});
								public constructor();
								public onComplete(param0: com.google.android.gms.common.api.Status): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class PendingResults extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.PendingResults>;
							public static immediateFailedResult(param0: com.google.android.gms.common.api.Result, param1: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<any>;
							public static immediatePendingResult(param0: com.google.android.gms.common.api.Status): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public static canceledPendingResult(param0: com.google.android.gms.common.api.Result): com.google.android.gms.common.api.PendingResult<any>;
							public static immediatePendingResult(param0: com.google.android.gms.common.api.Result, param1: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.OptionalPendingResult<any>;
							public static immediatePendingResult(param0: com.google.android.gms.common.api.Result): com.google.android.gms.common.api.OptionalPendingResult<any>;
							public static immediatePendingResult(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public static canceledPendingResult(): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export abstract class ResultTransform<R, S>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.ResultTransform<any,any>>;
							public constructor();
							public onSuccess(param0: R): com.google.android.gms.common.api.PendingResult<S>;
							public createFailedResult(param0: com.google.android.gms.common.api.Status): com.google.android.gms.common.api.PendingResult<S>;
							public onFailure(param0: com.google.android.gms.common.api.Status): com.google.android.gms.common.api.Status;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export abstract class TransformedResult<R>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.TransformedResult<any>>;
							public constructor();
							public then(param0: com.google.android.gms.common.api.ResultTransform<any,any>): com.google.android.gms.common.api.TransformedResult<any>;
							public andFinally(param0: com.google.android.gms.common.api.ResultCallbacks<any>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class ActivityLifecycleObserver extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.ActivityLifecycleObserver>;
								public onStopCallOnce(param0: java.lang.Runnable): com.google.android.gms.common.api.internal.ActivityLifecycleObserver;
								public static of(param0: globalAndroid.app.Activity): com.google.android.gms.common.api.internal.ActivityLifecycleObserver;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class ApiExceptionMapper extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.ApiExceptionMapper>;
								public constructor();
								public getException(param0: com.google.android.gms.common.api.Status): java.lang.Exception;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class ApiKey<O>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.ApiKey<any>>;
								public static getSharedApiKey(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.Api.ApiOptions, param2: string): com.google.android.gms.common.api.internal.ApiKey<any>;
								public zaa(): string;
								public equals(param0: any): boolean;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class BaseImplementation extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.BaseImplementation>;
								public constructor();
							}
							export module BaseImplementation {
								export abstract class ApiMethodImpl<R, A>  extends com.google.android.gms.common.api.internal.BasePendingResult<any> implements com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<any>  {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>>;
									public getApi(): com.google.android.gms.common.api.Api<any>;
									public constructor();
									/** @deprecated */
									public constructor(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
									public run(param0: any): void;
									public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
									public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
									/** @deprecated */
									public constructor(param0: globalAndroid.os.Looper);
									public getClientKey(): com.google.android.gms.common.api.Api.AnyClientKey<any>;
									public onSetFailedResult(param0: any): void;
									public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
									public doExecute(param0: any): void;
									public setResult(param0: any): void;
									public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
								}
								export class ResultHolder<R>  extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<any>>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.api.internal.BaseImplementation$ResultHolder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										setFailedResult(param0: com.google.android.gms.common.api.Status): void;
										setResult(param0: R): void;
									});
									public constructor();
									public setResult(param0: R): void;
									public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class BasePendingResult<R>  extends com.google.android.gms.common.api.PendingResult<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.BasePendingResult<any>>;
								public zab: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>;
								public zac: java.lang.ref.WeakReference<any>;
								public setCancelToken(param0: com.google.android.gms.common.internal.ICancelToken): void;
								public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>): void;
								public then(param0: com.google.android.gms.common.api.ResultTransform<any,any>): com.google.android.gms.common.api.TransformedResult<any>;
								public cancel(): void;
								public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
								public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
								public createFailedResult(param0: com.google.android.gms.common.api.Status): any;
								public await(param0: number, param1: java.util.concurrent.TimeUnit): any;
								public constructor();
								public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>, param1: number, param2: java.util.concurrent.TimeUnit): void;
								public zam(): boolean;
								/** @deprecated */
								public constructor(param0: globalAndroid.os.Looper);
								public setResult(param0: any): void;
								public await(): any;
								public isCanceled(): boolean;
								public isReady(): boolean;
								public addStatusListener(param0: com.google.android.gms.common.api.PendingResult.StatusListener): void;
								/** @deprecated */
								public forceFailureUnlessReady(param0: com.google.android.gms.common.api.Status): void;
								public zak(): void;
								public zan(param0: com.google.android.gms.common.api.internal.zadb): void;
								public static zal(param0: com.google.android.gms.common.api.Result): void;
							}
							export module BasePendingResult {
								export class CallbackHandler<R>  extends com.google.android.gms.internal.base.zau {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>>;
									public constructor();
									public constructor(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback);
									/** @deprecated */
									public constructor(param0: globalAndroid.os.Handler.Callback);
									public zaa(param0: com.google.android.gms.common.api.ResultCallback, param1: com.google.android.gms.common.api.Result): void;
									public handleMessage(param0: globalAndroid.os.Message): void;
									public constructor(param0: globalAndroid.os.Looper);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class ConnectionCallbacks extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.ConnectionCallbacks>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.ConnectionCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onConnected(param0: globalAndroid.os.Bundle): void;
									onConnectionSuspended(param0: number): void;
								});
								public constructor();
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public onConnectionSuspended(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class DataHolderNotifier<L>  extends com.google.android.gms.common.api.internal.ListenerHolder.Notifier<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.DataHolderNotifier<any>>;
								public notifyListener(param0: any, param1: com.google.android.gms.common.data.DataHolder): void;
								public onNotifyListenerFailed(): void;
								public notifyListener(param0: any): void;
								public constructor(param0: com.google.android.gms.common.data.DataHolder);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class DataHolderResult extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.DataHolderResult>;
								public mStatus: com.google.android.gms.common.api.Status;
								public mDataHolder: com.google.android.gms.common.data.DataHolder;
								public getStatus(): com.google.android.gms.common.api.Status;
								public constructor(param0: com.google.android.gms.common.data.DataHolder, param1: com.google.android.gms.common.api.Status);
								public release(): void;
								public constructor(param0: com.google.android.gms.common.data.DataHolder);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class GoogleApiManager extends java.lang.Object implements globalAndroid.os.Handler.Callback {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.GoogleApiManager>;
								public zaA(): void;
								public handleMessage(param0: globalAndroid.os.Message): boolean;
								public static zal(): com.google.android.gms.common.api.internal.GoogleApiManager;
								public zaB(param0: com.google.android.gms.common.api.GoogleApi<any>): void;
								public zaw(param0: com.google.android.gms.common.api.GoogleApi<any>, param1: number, param2: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): void;
								public static reportSignOut(): void;
								public zap(param0: com.google.android.gms.common.api.GoogleApi<any>): com.google.android.gms.tasks.Task;
								public zaC(param0: com.google.android.gms.common.api.internal.zaae): void;
								public zax(param0: com.google.android.gms.common.api.GoogleApi<any>, param1: number, param2: com.google.android.gms.common.api.internal.TaskApiCall<any,any>, param3: com.google.android.gms.tasks.TaskCompletionSource, param4: com.google.android.gms.common.api.internal.StatusExceptionMapper): void;
								public zao(param0: java.lang.Iterable<any>): com.google.android.gms.tasks.Task;
								public zar(param0: com.google.android.gms.common.api.GoogleApi<any>, param1: com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<any>, param2: number): com.google.android.gms.tasks.Task;
								public zaa(): number;
								public zaz(param0: com.google.android.gms.common.ConnectionResult, param1: number): void;
								public static zam(param0: globalAndroid.content.Context): com.google.android.gms.common.api.internal.GoogleApiManager;
								public zaq(param0: com.google.android.gms.common.api.GoogleApi<any>, param1: com.google.android.gms.common.api.internal.RegisterListenerMethod<any,any>, param2: com.google.android.gms.common.api.internal.UnregisterListenerMethod<any,any>, param3: java.lang.Runnable): com.google.android.gms.tasks.Task;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class IStatusCallback extends java.lang.Object implements globalAndroid.os.IInterface {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.IStatusCallback>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.IStatusCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onResult(param0: com.google.android.gms.common.api.Status): void;
									asBinder(): globalAndroid.os.IBinder;
								});
								public constructor();
								public onResult(param0: com.google.android.gms.common.api.Status): void;
								public asBinder(): globalAndroid.os.IBinder;
							}
							export module IStatusCallback {
								export abstract class Stub extends com.google.android.gms.internal.base.zab implements com.google.android.gms.common.api.internal.IStatusCallback {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.IStatusCallback.Stub>;
									public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
									public constructor();
									public asBinder(): globalAndroid.os.IBinder;
									public isBinderAlive(): boolean;
									public zaa(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
									public getInterfaceDescriptor(): string;
									public static getSuggestedMaxIpcSizeBytes(): number;
									public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
									public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
									public constructor(param0: string);
									public onResult(param0: com.google.android.gms.common.api.Status): void;
									public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
									public pingBinder(): boolean;
									public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
									public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
									public static asInterface(param0: globalAndroid.os.IBinder): com.google.android.gms.common.api.internal.IStatusCallback;
									public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class ListenerHolder<L>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.ListenerHolder<any>>;
								public getListenerKey(): com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<L>;
								public clear(): void;
								public notifyListener(param0: com.google.android.gms.common.api.internal.ListenerHolder.Notifier<any>): void;
								public hasListener(): boolean;
							}
							export module ListenerHolder {
								export class ListenerKey<L>  extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<any>>;
									public hashCode(): number;
									public toIdString(): string;
									public equals(param0: any): boolean;
								}
								export class Notifier<L>  extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.ListenerHolder.Notifier<any>>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.api.internal.ListenerHolder$Notifier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										notifyListener(param0: L): void;
										onNotifyListenerFailed(): void;
									});
									public constructor();
									public notifyListener(param0: L): void;
									public onNotifyListenerFailed(): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class ListenerHolders extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.ListenerHolders>;
								public static createListenerKey(param0: any, param1: string): com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<any>;
								public static createListenerHolder(param0: any, param1: java.util.concurrent.Executor, param2: string): com.google.android.gms.common.api.internal.ListenerHolder<any>;
								public zab(): void;
								public static createListenerHolder(param0: any, param1: globalAndroid.os.Looper, param2: string): com.google.android.gms.common.api.internal.ListenerHolder<any>;
								public constructor();
								public zaa(param0: any, param1: globalAndroid.os.Looper, param2: string): com.google.android.gms.common.api.internal.ListenerHolder<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class NonGmsServiceBrokerClient extends java.lang.Object implements com.google.android.gms.common.api.Api.Client, globalAndroid.content.ServiceConnection {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.NonGmsServiceBrokerClient>;
								public onNullBinding(param0: globalAndroid.content.ComponentName): void;
								public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: string, param3: string, param4: com.google.android.gms.common.api.internal.ConnectionCallbacks, param5: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
								public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
								public onServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.os.IBinder): void;
								public getServiceBrokerBinder(): globalAndroid.os.IBinder;
								public getScopesForConnectionlessNonSignIn(): java.util.Set<com.google.android.gms.common.api.Scope>;
								public getEndpointPackageName(): string;
								public requiresGooglePlayServices(): boolean;
								public getBinder(): globalAndroid.os.IBinder;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: globalAndroid.content.ComponentName, param3: com.google.android.gms.common.api.internal.ConnectionCallbacks, param4: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
								public requiresAccount(): boolean;
								public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
								public getMinApkVersion(): number;
								public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
								public disconnect(param0: string): void;
								public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
								public requiresSignIn(): boolean;
								public getSignInIntent(): globalAndroid.content.Intent;
								public zac(param0: string): void;
								public onBindingDied(param0: globalAndroid.content.ComponentName): void;
								public getLastDisconnectMessage(): string;
								public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
								public isConnected(): boolean;
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
								public disconnect(): void;
								public isConnecting(): boolean;
								public providesSignIn(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class OnConnectionFailedListener extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.OnConnectionFailedListener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.OnConnectionFailedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
								});
								public constructor();
								public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class OptionalPendingResultImpl<R>  extends com.google.android.gms.common.api.OptionalPendingResult<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.OptionalPendingResultImpl<any>>;
								public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>): void;
								public constructor(param0: com.google.android.gms.common.api.PendingResult<any>);
								public then(param0: com.google.android.gms.common.api.ResultTransform<any,any>): com.google.android.gms.common.api.TransformedResult<any>;
								public cancel(): void;
								public isCanceled(): boolean;
								public get(): any;
								public addStatusListener(param0: com.google.android.gms.common.api.PendingResult.StatusListener): void;
								public await(param0: number, param1: java.util.concurrent.TimeUnit): any;
								public constructor();
								public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>, param1: number, param2: java.util.concurrent.TimeUnit): void;
								public isDone(): boolean;
								public await(): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class PendingResultFacade<A, B>  extends com.google.android.gms.common.api.PendingResult<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.PendingResultFacade<any,any>>;
								public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>): void;
								public then(param0: com.google.android.gms.common.api.ResultTransform<any,any>): com.google.android.gms.common.api.TransformedResult<any>;
								public cancel(): void;
								public isCanceled(): boolean;
								public addStatusListener(param0: com.google.android.gms.common.api.PendingResult.StatusListener): void;
								public await(param0: number, param1: java.util.concurrent.TimeUnit): any;
								public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>, param1: number, param2: java.util.concurrent.TimeUnit): void;
								public await(): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class RegisterListenerMethod<A, L>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.RegisterListenerMethod<any,any>>;
								public getListenerKey(): com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<L>;
								public registerListener(param0: A, param1: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Void>): void;
								public clearListener(): void;
								public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
								public constructor(param0: com.google.android.gms.common.api.internal.ListenerHolder<L>, param1: androidNative.Array<com.google.android.gms.common.Feature>, param2: boolean);
								public zaa(): number;
								public constructor(param0: com.google.android.gms.common.api.internal.ListenerHolder<L>);
								public constructor(param0: com.google.android.gms.common.api.internal.ListenerHolder<L>, param1: androidNative.Array<com.google.android.gms.common.Feature>, param2: boolean, param3: number);
								public zab(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class RegistrationMethods<A, L>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.RegistrationMethods<any,any>>;
								public register: com.google.android.gms.common.api.internal.RegisterListenerMethod<A,L>;
								public zaa: com.google.android.gms.common.api.internal.UnregisterListenerMethod<any,any>;
								public zab: java.lang.Runnable;
								public static builder(): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<any,any>;
							}
							export module RegistrationMethods {
								export class Builder<A, L>  extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.RegistrationMethods.Builder<any,any>>;
									public onConnectionSuspended(param0: java.lang.Runnable): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A,L>;
									public setAutoResolveMissingFeatures(param0: boolean): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A,L>;
									public withHolder(param0: com.google.android.gms.common.api.internal.ListenerHolder<L>): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A,L>;
									public unregister(param0: com.google.android.gms.common.api.internal.RemoteCall<A,com.google.android.gms.tasks.TaskCompletionSource<java.lang.Boolean>>): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A,L>;
									public register(param0: com.google.android.gms.common.api.internal.RemoteCall<A,com.google.android.gms.tasks.TaskCompletionSource<java.lang.Void>>): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A,L>;
									public build(): com.google.android.gms.common.api.internal.RegistrationMethods<A,L>;
									public setFeatures(param0: androidNative.Array<com.google.android.gms.common.Feature>): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A,L>;
									public setMethodKey(param0: number): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A,L>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class RemoteCall<T, U>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.RemoteCall<any,any>>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.RemoteCall<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									accept(param0: T, param1: U): void;
								});
								public constructor();
								public accept(param0: T, param1: U): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class SignInConnectionListener extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.SignInConnectionListener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.SignInConnectionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onComplete(): void;
								});
								public constructor();
								public onComplete(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class StatusCallback extends com.google.android.gms.common.api.internal.IStatusCallback.Stub {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.StatusCallback>;
								public constructor(param0: com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<com.google.android.gms.common.api.Status>);
								public isBinderAlive(): boolean;
								public static getSuggestedMaxIpcSizeBytes(): number;
								public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
								public getInterfaceDescriptor(): string;
								public constructor();
								public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
								public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
								public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
								public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
								public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
								public onResult(param0: com.google.android.gms.common.api.Status): void;
								public constructor(param0: string);
								public pingBinder(): boolean;
								public asBinder(): globalAndroid.os.IBinder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class StatusPendingResult extends com.google.android.gms.common.api.internal.BasePendingResult<com.google.android.gms.common.api.Status> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.StatusPendingResult>;
								public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
								public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
								public constructor();
								/** @deprecated */
								public constructor(param0: globalAndroid.os.Looper);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class TaskApiCall<A, ResultT>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.TaskApiCall<any,any>>;
								/** @deprecated */
								public constructor();
								public zab(): androidNative.Array<com.google.android.gms.common.Feature>;
								public doExecute(param0: A, param1: com.google.android.gms.tasks.TaskCompletionSource<ResultT>): void;
								public constructor(param0: androidNative.Array<com.google.android.gms.common.Feature>, param1: boolean, param2: number);
								public zaa(): number;
								public shouldAutoResolveMissingFeatures(): boolean;
								public static builder(): com.google.android.gms.common.api.internal.TaskApiCall.Builder<any,any>;
							}
							export module TaskApiCall {
								export class Builder<A, ResultT>  extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.TaskApiCall.Builder<any,any>>;
									public setMethodKey(param0: number): com.google.android.gms.common.api.internal.TaskApiCall.Builder<A,ResultT>;
									public build(): com.google.android.gms.common.api.internal.TaskApiCall<A,ResultT>;
									public setFeatures(param0: androidNative.Array<com.google.android.gms.common.Feature>): com.google.android.gms.common.api.internal.TaskApiCall.Builder<A,ResultT>;
									public run(param0: com.google.android.gms.common.api.internal.RemoteCall<A,com.google.android.gms.tasks.TaskCompletionSource<ResultT>>): com.google.android.gms.common.api.internal.TaskApiCall.Builder<A,ResultT>;
									public setAutoResolveMissingFeatures(param0: boolean): com.google.android.gms.common.api.internal.TaskApiCall.Builder<A,ResultT>;
									/** @deprecated */
									public execute(param0: com.google.android.gms.common.util.BiConsumer<A,com.google.android.gms.tasks.TaskCompletionSource<ResultT>>): com.google.android.gms.common.api.internal.TaskApiCall.Builder<A,ResultT>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class TaskUtil extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.TaskUtil>;
								public static setResultOrApiException(param0: com.google.android.gms.common.api.Status, param1: any, param2: com.google.android.gms.tasks.TaskCompletionSource): void;
								public static setResultOrApiException(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Void>): void;
								public constructor();
								/** @deprecated */
								public static toVoidTaskThatFailsOnFalse(param0: com.google.android.gms.tasks.Task<java.lang.Boolean>): com.google.android.gms.tasks.Task<java.lang.Void>;
								public static trySetResultOrApiException(param0: com.google.android.gms.common.api.Status, param1: any, param2: com.google.android.gms.tasks.TaskCompletionSource): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class UnregisterListenerMethod<A, L>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.UnregisterListenerMethod<any,any>>;
								public getListenerKey(): com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<L>;
								public unregisterListener(param0: A, param1: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Boolean>): void;
								public constructor(param0: com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<L>);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaa {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaa>;
								public onStop(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaaa extends java.lang.Object implements com.google.android.gms.common.api.internal.zaca {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaaa>;
								public zas(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
								public zar(): void;
								public zad(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
								public static zag(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.internal.zabe, param2: java.util.concurrent.locks.Lock, param3: globalAndroid.os.Looper, param4: com.google.android.gms.common.GoogleApiAvailabilityLight, param5: java.util.Map<any,any>, param6: com.google.android.gms.common.internal.ClientSettings, param7: java.util.Map<any,any>, param8: com.google.android.gms.common.api.Api.AbstractClientBuilder<any,any>, param9: java.util.ArrayList<any>): com.google.android.gms.common.api.internal.zaaa;
								public zaq(): void;
								public zay(param0: com.google.android.gms.common.api.internal.SignInConnectionListener): boolean;
								public zau(): void;
								public zac(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
								public zab(): com.google.android.gms.common.ConnectionResult;
								public zaf(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public zae(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public zaw(): boolean;
								public zat(): void;
								public zax(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaab extends java.lang.Object implements com.google.android.gms.common.api.PendingResult.StatusListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaab>;
								public onComplete(param0: com.google.android.gms.common.api.Status): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaac extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaac>;
								public onComplete(param0: com.google.android.gms.tasks.Task): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaad extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaad>;
								public zaf(): void;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaae extends com.google.android.gms.common.api.internal.zap {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaae>;
								public zab(param0: com.google.android.gms.common.ConnectionResult, param1: number): void;
								public zac(): void;
								public onResume(): void;
								public onCancel(param0: globalAndroid.content.DialogInterface): void;
								public static zad(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.internal.GoogleApiManager, param2: com.google.android.gms.common.api.internal.ApiKey<any>): void;
								public onStop(): void;
								public onStart(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaaf extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaaf>;
								public zaa(): com.google.android.gms.common.api.internal.ApiKey<any>;
								public constructor(param0: com.google.android.gms.common.api.internal.ApiKey<any>);
								public zab(): com.google.android.gms.tasks.TaskCompletionSource;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaag extends com.google.android.gms.common.api.GoogleApiClient {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaag>;
								public unregisterConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
								public clearDefaultAccountAndReconnect(): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
								public blockingConnect(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
								public registerConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
								public blockingConnect(): com.google.android.gms.common.ConnectionResult;
								public constructor();
								public connect(param0: number): void;
								public connect(): void;
								public registerConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
								public stopAutoManage(param0: androidx.fragment.app.FragmentActivity): void;
								public isConnected(): boolean;
								public isConnectionFailedListenerRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): boolean;
								public getConnectionResult(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
								public reconnect(): void;
								public unregisterConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
								public isConnectionCallbacksRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): boolean;
								public hasConnectedApi(param0: com.google.android.gms.common.api.Api<any>): boolean;
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
								public constructor(param0: string);
								public disconnect(): void;
								public isConnecting(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaah extends com.google.android.gms.common.api.internal.zabg {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaah>;
								public zaa(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaai extends com.google.android.gms.common.api.internal.zabg {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaai>;
								public zaa(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaaj extends java.lang.Object implements com.google.android.gms.common.api.internal.zabf {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaaj>;
								public constructor(param0: com.google.android.gms.common.api.internal.zabi);
								public zab(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public zah(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
								public zai(param0: number): void;
								public zae(): void;
								public zag(param0: globalAndroid.os.Bundle): void;
								public zad(): void;
								public zaa(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public zaj(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaak extends java.lang.Object implements java.lang.Runnable {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaak>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaal extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaal>;
								public onReportServiceBinding(param0: com.google.android.gms.common.ConnectionResult): void;
								public constructor(param0: com.google.android.gms.common.api.internal.zaaw, param1: com.google.android.gms.common.api.Api<any>, param2: boolean);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaam extends com.google.android.gms.common.api.internal.zabg {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaam>;
								public zaa(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaan extends com.google.android.gms.common.api.internal.zabg {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaan>;
								public zaa(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaao extends com.google.android.gms.common.api.internal.zaav {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaao>;
								public constructor(param0: com.google.android.gms.common.api.internal.zaaw, param1: java.util.Map<any,any>);
								public zaa(): void;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaap extends com.google.android.gms.common.api.internal.zaav {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaap>;
								public constructor(param0: com.google.android.gms.common.api.internal.zaaw, param1: java.util.ArrayList<any>);
								public zaa(): void;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaaq extends com.google.android.gms.common.api.internal.zabg {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaaq>;
								public zaa(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaar extends com.google.android.gms.signin.internal.zac {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaar>;
								public isBinderAlive(): boolean;
								public static getSuggestedMaxIpcSizeBytes(): number;
								public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
								public getInterfaceDescriptor(): string;
								public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
								public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
								public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
								public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
								public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
								public zab(param0: com.google.android.gms.signin.internal.zak): void;
								public pingBinder(): boolean;
								public asBinder(): globalAndroid.os.IBinder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaas extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaas>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaat extends java.lang.Object implements com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaat>;
								public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public onConnectionSuspended(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaau extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaau>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class zaav extends java.lang.Object implements java.lang.Runnable {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaav>;
								public zaa(): void;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaaw extends java.lang.Object implements com.google.android.gms.common.api.internal.zabf {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaaw>;
								public constructor(param0: com.google.android.gms.common.api.internal.zabi, param1: com.google.android.gms.common.internal.ClientSettings, param2: java.util.Map<any,any>, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: com.google.android.gms.common.api.Api.AbstractClientBuilder<any,any>, param5: java.util.concurrent.locks.Lock, param6: globalAndroid.content.Context);
								public zab(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public zah(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
								public zai(param0: number): void;
								public zae(): void;
								public zag(param0: globalAndroid.os.Bundle): void;
								public zad(): void;
								public zaa(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public zaj(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaax extends java.lang.Object implements com.google.android.gms.common.api.internal.zabf {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaax>;
								public constructor(param0: com.google.android.gms.common.api.internal.zabi);
								public zab(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public zah(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
								public zai(param0: number): void;
								public zae(): void;
								public zag(param0: globalAndroid.os.Bundle): void;
								public zad(): void;
								public zaa(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public zaj(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaay extends java.lang.Object implements com.google.android.gms.common.internal.zaj {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaay>;
								public isConnected(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaaz extends java.lang.Object implements com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaaz>;
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public onConnectionSuspended(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zab extends com.google.android.gms.common.api.internal.ActivityLifecycleObserver {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zab>;
								public onStopCallOnce(param0: java.lang.Runnable): com.google.android.gms.common.api.internal.ActivityLifecycleObserver;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaba extends java.lang.Object implements com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaba>;
								public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabb extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabb>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabc extends com.google.android.gms.internal.base.zau {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabc>;
								public handleMessage(param0: globalAndroid.os.Message): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabd extends com.google.android.gms.common.api.internal.zabw {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabd>;
								public zaa(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabe extends com.google.android.gms.common.api.GoogleApiClient implements com.google.android.gms.common.api.internal.zabz {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabe>;
								public unregisterConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
								public blockingConnect(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
								public getClient(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>): com.google.android.gms.common.api.Api.Client;
								public zab(param0: globalAndroid.os.Bundle): void;
								public getContext(): globalAndroid.content.Context;
								public connect(param0: number): void;
								public zac(param0: number, param1: boolean): void;
								public connect(): void;
								public unregisterConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
								public isConnectionCallbacksRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): boolean;
								public hasConnectedApi(param0: com.google.android.gms.common.api.Api<any>): boolean;
								public zap(param0: com.google.android.gms.common.api.internal.zada<any>): void;
								public clearDefaultAccountAndReconnect(): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
								public zao(param0: com.google.android.gms.common.api.internal.zada<any>): void;
								public enqueue(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public registerConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
								public blockingConnect(): com.google.android.gms.common.ConnectionResult;
								public constructor();
								public maybeSignOut(): void;
								public registerConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
								public stopAutoManage(param0: androidx.fragment.app.FragmentActivity): void;
								public maybeSignIn(param0: com.google.android.gms.common.api.internal.SignInConnectionListener): boolean;
								public isConnected(): boolean;
								public isConnectionFailedListenerRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): boolean;
								public getConnectionResult(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
								public zaa(param0: com.google.android.gms.common.ConnectionResult): void;
								public reconnect(): void;
								public static zad(param0: java.lang.Iterable<any>, param1: boolean): number;
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
								public hasApi(param0: com.google.android.gms.common.api.Api<any>): boolean;
								public execute(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public constructor(param0: globalAndroid.content.Context, param1: java.util.concurrent.locks.Lock, param2: globalAndroid.os.Looper, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.GoogleApiAvailability, param5: com.google.android.gms.common.api.Api.AbstractClientBuilder<any,any>, param6: java.util.Map<any,any>, param7: java.util.List<any>, param8: java.util.List<any>, param9: java.util.Map<any,any>, param10: number, param11: number, param12: java.util.ArrayList<any>);
								public disconnect(): void;
								public isConnecting(): boolean;
								public getLooper(): globalAndroid.os.Looper;
								public registerListener(param0: any): com.google.android.gms.common.api.internal.ListenerHolder<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabf extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabf>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.zabf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zaa(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
									zab(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
									zad(): void;
									zae(): void;
									zag(param0: globalAndroid.os.Bundle): void;
									zah(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
									zai(param0: number): void;
									zaj(): boolean;
								});
								public constructor();
								public zab(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public zah(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
								public zai(param0: number): void;
								public zae(): void;
								public zag(param0: globalAndroid.os.Bundle): void;
								public zad(): void;
								public zaa(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public zaj(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class zabg extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabg>;
								public constructor(param0: com.google.android.gms.common.api.internal.zabf);
								public zaa(): void;
								public zab(param0: com.google.android.gms.common.api.internal.zabi): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabh extends com.google.android.gms.internal.base.zau {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabh>;
								public handleMessage(param0: globalAndroid.os.Message): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabi extends java.lang.Object implements com.google.android.gms.common.api.internal.zaca, com.google.android.gms.common.api.internal.zau {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabi>;
								public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.internal.zabe, param2: java.util.concurrent.locks.Lock, param3: globalAndroid.os.Looper, param4: com.google.android.gms.common.GoogleApiAvailabilityLight, param5: java.util.Map<any,any>, param6: com.google.android.gms.common.internal.ClientSettings, param7: java.util.Map<any,any>, param8: com.google.android.gms.common.api.Api.AbstractClientBuilder<any,any>, param9: java.util.ArrayList<any>, param10: com.google.android.gms.common.api.internal.zabz);
								public zas(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
								public zar(): void;
								public zad(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
								public zaq(): void;
								public zay(param0: com.google.android.gms.common.api.internal.SignInConnectionListener): boolean;
								public zau(): void;
								public zac(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
								public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
								public zab(): com.google.android.gms.common.ConnectionResult;
								public zaf(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public zae(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public zaw(): boolean;
								public zat(): void;
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public zax(): boolean;
								public onConnectionSuspended(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabj extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabj>;
								public static zaa(): java.util.concurrent.ExecutorService;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabk extends java.lang.Object implements java.util.concurrent.Executor {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabk>;
								public execute(param0: java.lang.Runnable): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabl extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabl>;
								public onBackgroundStateChanged(param0: boolean): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabm extends java.lang.Object implements java.lang.Runnable {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabm>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabn extends java.lang.Object implements java.lang.Runnable {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabn>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabo extends java.lang.Object implements java.lang.Runnable {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabo>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabp extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabp>;
								public onSignOutComplete(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabq extends java.lang.Object implements com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener, com.google.android.gms.common.api.internal.zau {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabq>;
								public zap(param0: com.google.android.gms.common.api.internal.zai): void;
								public zaA(): boolean;
								public zaf(): com.google.android.gms.common.api.Api.Client;
								public zao(): void;
								public zad(): com.google.android.gms.common.ConnectionResult;
								public zab(): number;
								public zar(param0: com.google.android.gms.common.ConnectionResult, param1: java.lang.Exception): void;
								public zah(): java.util.Map<any,any>;
								public zau(): void;
								public constructor(param0: com.google.android.gms.common.api.internal.GoogleApiManager, param1: com.google.android.gms.common.api.GoogleApi<any>);
								public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
								public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
								public zas(param0: com.google.android.gms.common.ConnectionResult): void;
								public zan(): void;
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public zav(): void;
								public zaw(): void;
								public onConnectionSuspended(param0: number): void;
								public zat(param0: com.google.android.gms.common.api.internal.zal): void;
								public zaz(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabr extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabr>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabs extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabs>;
								public toString(): string;
								public equals(param0: any): boolean;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabt extends java.lang.Object implements java.lang.Runnable {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabt>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabu extends java.lang.Object implements com.google.android.gms.common.api.internal.zacs {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabu>;
								public constructor(param0: com.google.android.gms.common.api.internal.GoogleApiManager, param1: com.google.android.gms.common.api.Api.Client, param2: com.google.android.gms.common.api.internal.ApiKey<any>);
								public onReportServiceBinding(param0: com.google.android.gms.common.ConnectionResult): void;
								public zae(param0: com.google.android.gms.common.ConnectionResult): void;
								public zaf(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<any>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabv extends com.google.android.gms.common.api.internal.zaag {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabv>;
								public zap(param0: com.google.android.gms.common.api.internal.zada<any>): void;
								public zao(param0: com.google.android.gms.common.api.internal.zada<any>): void;
								public enqueue(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public constructor(param0: com.google.android.gms.common.api.GoogleApi<any>);
								public constructor();
								public constructor(param0: string);
								public getContext(): globalAndroid.content.Context;
								public execute(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public getLooper(): globalAndroid.os.Looper;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class zabw extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabw>;
								public zaa(): void;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabx extends globalAndroid.content.BroadcastReceiver {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabx>;
								public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
								public constructor(param0: com.google.android.gms.common.api.internal.zabw);
								public zaa(param0: globalAndroid.content.Context): void;
								public zab(): void;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaby extends com.google.android.gms.internal.base.zaa implements com.google.android.gms.common.api.internal.IStatusCallback {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaby>;
								public onResult(param0: com.google.android.gms.common.api.Status): void;
								public asBinder(): globalAndroid.os.IBinder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabz extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabz>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.zabz interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zaa(param0: com.google.android.gms.common.ConnectionResult): void;
									zab(param0: globalAndroid.os.Bundle): void;
									zac(param0: number, param1: boolean): void;
								});
								public constructor();
								public zaa(param0: com.google.android.gms.common.ConnectionResult): void;
								public zab(param0: globalAndroid.os.Bundle): void;
								public zac(param0: number, param1: boolean): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class zac extends com.google.android.gms.common.api.internal.zai {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zac>;
								public constructor(param0: number);
								public zab(param0: com.google.android.gms.common.api.internal.zabq): androidNative.Array<com.google.android.gms.common.Feature>;
								public zaa(param0: com.google.android.gms.common.api.internal.zabq): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaca extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaca>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.zaca interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zab(): com.google.android.gms.common.ConnectionResult;
									zac(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
									zad(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
									zae(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
									zaf(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
									zaq(): void;
									zar(): void;
									zas(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
									zat(): void;
									zau(): void;
									zaw(): boolean;
									zax(): boolean;
									zay(param0: com.google.android.gms.common.api.internal.SignInConnectionListener): boolean;
								});
								public constructor();
								public zas(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
								public zar(): void;
								public zad(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
								public zaq(): void;
								public zay(param0: com.google.android.gms.common.api.internal.SignInConnectionListener): boolean;
								public zau(): void;
								public zac(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
								public zab(): com.google.android.gms.common.ConnectionResult;
								public zaf(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public zae(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public zaw(): boolean;
								public zat(): void;
								public zax(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacb extends java.lang.Object implements java.lang.Runnable {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacb>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacc extends com.google.android.gms.common.api.internal.zap {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacc>;
								public static zaa(param0: globalAndroid.app.Activity): com.google.android.gms.common.api.internal.zacc;
								public zab(param0: com.google.android.gms.common.ConnectionResult, param1: number): void;
								public zad(): com.google.android.gms.tasks.Task;
								public zac(): void;
								public onCancel(param0: globalAndroid.content.DialogInterface): void;
								public onDestroy(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacd extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacd>;
								public onComplete(param0: com.google.android.gms.tasks.Task): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zace extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zace>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacf extends java.lang.Object implements java.lang.Runnable {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacf>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacg extends java.lang.Object implements java.lang.Runnable {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacg>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zach extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zach>;
								public zaa: com.google.android.gms.common.api.internal.zai;
								public zab: number;
								public zac: com.google.android.gms.common.api.GoogleApi<any>;
								public constructor(param0: com.google.android.gms.common.api.internal.zai, param1: number, param2: com.google.android.gms.common.api.GoogleApi<any>);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaci extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaci>;
								public zaa: com.google.android.gms.common.api.internal.RegisterListenerMethod<any,any>;
								public zab: com.google.android.gms.common.api.internal.UnregisterListenerMethod<any,any>;
								public zac: java.lang.Runnable;
								public constructor(param0: com.google.android.gms.common.api.internal.RegisterListenerMethod<any,any>, param1: com.google.android.gms.common.api.internal.UnregisterListenerMethod<any,any>, param2: java.lang.Runnable);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacj extends java.lang.Object implements java.lang.Runnable {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacj>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zack extends com.google.android.gms.common.api.internal.RegisterListenerMethod<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zack>;
								public registerListener(param0: com.google.android.gms.common.api.Api.AnyClient, param1: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Void>): void;
								public registerListener(param0: any, param1: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Void>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacl extends com.google.android.gms.common.api.internal.UnregisterListenerMethod<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacl>;
								public unregisterListener(param0: com.google.android.gms.common.api.Api.AnyClient, param1: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Boolean>): void;
								public unregisterListener(param0: any, param1: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Boolean>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacm extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacm>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacn extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacn>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaco extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaco>;
								public static zaa(): java.util.concurrent.ExecutorService;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacp<R>  extends com.google.android.gms.common.api.PendingResult<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacp<any>>;
								public constructor(param0: com.google.android.gms.common.api.Status);
								public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>): void;
								public then(param0: com.google.android.gms.common.api.ResultTransform<any,any>): com.google.android.gms.common.api.TransformedResult<any>;
								public cancel(): void;
								public isCanceled(): boolean;
								public addStatusListener(param0: com.google.android.gms.common.api.PendingResult.StatusListener): void;
								public await(param0: number, param1: java.util.concurrent.TimeUnit): any;
								public constructor();
								public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>, param1: number, param2: java.util.concurrent.TimeUnit): void;
								public await(): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacq extends java.lang.Object implements java.lang.Runnable {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacq>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacr extends java.lang.Object implements java.lang.Runnable {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacr>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacs extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacs>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.zacs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zae(param0: com.google.android.gms.common.ConnectionResult): void;
									zaf(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<any>): void;
								});
								public constructor();
								public zae(param0: com.google.android.gms.common.ConnectionResult): void;
								public zaf(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<any>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zact extends com.google.android.gms.signin.internal.zac implements com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zact>;
								public zaf(): void;
								public isBinderAlive(): boolean;
								public static getSuggestedMaxIpcSizeBytes(): number;
								public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
								public getInterfaceDescriptor(): string;
								public constructor();
								public zae(param0: com.google.android.gms.common.api.internal.zacs): void;
								public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
								public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
								public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
								public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
								public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
								public zab(param0: com.google.android.gms.signin.internal.zak): void;
								public constructor(param0: string);
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: com.google.android.gms.common.internal.ClientSettings);
								public pingBinder(): boolean;
								public asBinder(): globalAndroid.os.IBinder;
								public onConnectionSuspended(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacu extends java.lang.Object implements com.google.android.gms.common.api.internal.RemoteCall<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacu>;
								public accept(param0: any, param1: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacv extends com.google.android.gms.common.api.internal.TaskApiCall<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacv>;
								public doExecute(param0: com.google.android.gms.common.api.Api.AnyClient, param1: com.google.android.gms.tasks.TaskCompletionSource): void;
								public doExecute(param0: any, param1: com.google.android.gms.tasks.TaskCompletionSource<any>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacw extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacw>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacx extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacx>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacy extends java.lang.Object implements java.lang.Runnable {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacy>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacz extends com.google.android.gms.internal.base.zau {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacz>;
								public constructor(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback);
								public handleMessage(param0: globalAndroid.os.Message): void;
								public constructor();
								public constructor(param0: globalAndroid.os.Looper);
								/** @deprecated */
								public constructor(param0: globalAndroid.os.Handler.Callback);
								public constructor(param0: com.google.android.gms.common.api.internal.zada<any>, param1: globalAndroid.os.Looper);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class zad extends com.google.android.gms.common.api.internal.zac {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zad>;
								public zaa: com.google.android.gms.tasks.TaskCompletionSource;
								public constructor(param0: number);
								public zag(param0: com.google.android.gms.common.api.internal.zaad, param1: boolean): void;
								public constructor(param0: number, param1: com.google.android.gms.tasks.TaskCompletionSource);
								public zad(param0: com.google.android.gms.common.api.Status): void;
								public zae(param0: java.lang.Exception): void;
								public zac(param0: com.google.android.gms.common.api.internal.zabq): void;
								public zaf(param0: com.google.android.gms.common.api.internal.zabq): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zada<R>  extends com.google.android.gms.common.api.TransformedResult<any> implements com.google.android.gms.common.api.ResultCallback<any>  {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zada<any>>;
								public constructor(param0: java.lang.ref.WeakReference<any>);
								public then(param0: com.google.android.gms.common.api.ResultTransform<any,any>): com.google.android.gms.common.api.TransformedResult<any>;
								public onResult(param0: com.google.android.gms.common.api.Result): void;
								public zai(param0: com.google.android.gms.common.api.PendingResult<any>): void;
								public constructor();
								public andFinally(param0: com.google.android.gms.common.api.ResultCallbacks<any>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zadb extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zadb>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zadc extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zadc>;
								public static zaa: com.google.android.gms.common.api.Status;
								public zab(): void;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zae extends com.google.android.gms.common.api.internal.zai {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zae>;
								public zaa: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public constructor(param0: number);
								public zag(param0: com.google.android.gms.common.api.internal.zaad, param1: boolean): void;
								public constructor(param0: number, param1: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>);
								public zad(param0: com.google.android.gms.common.api.Status): void;
								public zae(param0: java.lang.Exception): void;
								public zaf(param0: com.google.android.gms.common.api.internal.zabq): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaf extends com.google.android.gms.common.api.internal.zad {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaf>;
								public constructor(param0: com.google.android.gms.common.api.internal.zaci, param1: com.google.android.gms.tasks.TaskCompletionSource);
								public constructor(param0: number);
								public constructor(param0: number, param1: com.google.android.gms.tasks.TaskCompletionSource);
								public zab(param0: com.google.android.gms.common.api.internal.zabq): androidNative.Array<com.google.android.gms.common.Feature>;
								public zaa(param0: com.google.android.gms.common.api.internal.zabq): boolean;
								public zac(param0: com.google.android.gms.common.api.internal.zabq): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zag extends com.google.android.gms.common.api.internal.zac {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zag>;
								public constructor(param0: number);
								public constructor(param0: number, param1: com.google.android.gms.common.api.internal.TaskApiCall<any,any>, param2: com.google.android.gms.tasks.TaskCompletionSource, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
								public zag(param0: com.google.android.gms.common.api.internal.zaad, param1: boolean): void;
								public zab(param0: com.google.android.gms.common.api.internal.zabq): androidNative.Array<com.google.android.gms.common.Feature>;
								public zaa(param0: com.google.android.gms.common.api.internal.zabq): boolean;
								public zad(param0: com.google.android.gms.common.api.Status): void;
								public zae(param0: java.lang.Exception): void;
								public zaf(param0: com.google.android.gms.common.api.internal.zabq): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zah extends com.google.android.gms.common.api.internal.zad {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zah>;
								public constructor(param0: number);
								public constructor(param0: number, param1: com.google.android.gms.tasks.TaskCompletionSource);
								public zab(param0: com.google.android.gms.common.api.internal.zabq): androidNative.Array<com.google.android.gms.common.Feature>;
								public zaa(param0: com.google.android.gms.common.api.internal.zabq): boolean;
								public constructor(param0: com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<any>, param1: com.google.android.gms.tasks.TaskCompletionSource);
								public zac(param0: com.google.android.gms.common.api.internal.zabq): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class zai extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zai>;
								public zac: number;
								public constructor(param0: number);
								public zag(param0: com.google.android.gms.common.api.internal.zaad, param1: boolean): void;
								public zad(param0: com.google.android.gms.common.api.Status): void;
								public zae(param0: java.lang.Exception): void;
								public zaf(param0: com.google.android.gms.common.api.internal.zabq): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaj extends java.lang.Object implements com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaj>;
								public zaa: number;
								public zab: com.google.android.gms.common.api.GoogleApiClient;
								public zac: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener;
								public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
								public constructor(param0: com.google.android.gms.common.api.internal.zak, param1: number, param2: com.google.android.gms.common.api.GoogleApiClient, param3: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zak extends com.google.android.gms.common.api.internal.zap {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zak>;
								public zab(param0: com.google.android.gms.common.ConnectionResult, param1: number): void;
								public zae(param0: number): void;
								public static zaa(param0: com.google.android.gms.common.api.internal.LifecycleActivity): com.google.android.gms.common.api.internal.zak;
								public zad(param0: number, param1: com.google.android.gms.common.api.GoogleApiClient, param2: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
								public zac(): void;
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
								public onCancel(param0: globalAndroid.content.DialogInterface): void;
								public onStop(): void;
								public onStart(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zal extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zal>;
								public zac(param0: com.google.android.gms.common.api.internal.ApiKey<any>, param1: com.google.android.gms.common.ConnectionResult, param2: string): void;
								public zab(): java.util.Set<any>;
								public constructor(param0: java.lang.Iterable<any>);
								public zaa(): com.google.android.gms.tasks.Task;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zam extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zam>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zan extends com.google.android.gms.common.api.internal.zabw {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zan>;
								public zaa(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zao extends java.lang.Object implements java.lang.Runnable {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zao>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class zap implements globalAndroid.content.DialogInterface.OnCancelListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zap>;
								public zaa: boolean;
								public zab(param0: com.google.android.gms.common.ConnectionResult, param1: number): void;
								public zac(): void;
								public zah(param0: com.google.android.gms.common.ConnectionResult, param1: number): void;
								public onCreate(param0: globalAndroid.os.Bundle): void;
								public onCancel(param0: globalAndroid.content.DialogInterface): void;
								public onStop(): void;
								public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
								public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
								public onStart(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaq extends java.lang.ThreadLocal<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaq>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zar extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zar>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zas extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zas>;
								public finalize(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zat extends java.lang.Object implements com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zat>;
								public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
								public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: boolean);
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public onConnectionSuspended(param0: number): void;
								public zaa(param0: com.google.android.gms.common.api.internal.zau): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zau extends java.lang.Object implements com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zau>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.zau interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
									onConnected(param0: globalAndroid.os.Bundle): void;
									onConnectionSuspended(param0: number): void;
								});
								public constructor();
								public static CAUSE_SERVICE_DISCONNECTED: number;
								public static CAUSE_NETWORK_LOST: number;
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
								public onConnectionSuspended(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zav extends java.lang.Object implements java.lang.Runnable {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zav>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaw extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaw>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zax extends java.lang.Object implements com.google.android.gms.common.api.internal.zabz {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zax>;
								public zaa(param0: com.google.android.gms.common.ConnectionResult): void;
								public zab(param0: globalAndroid.os.Bundle): void;
								public zac(param0: number, param1: boolean): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zay extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zay>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaz extends java.lang.Object implements com.google.android.gms.common.api.internal.zabz {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaz>;
								public zaa(param0: com.google.android.gms.common.ConnectionResult): void;
								public zab(param0: globalAndroid.os.Bundle): void;
								public zac(param0: number, param1: boolean): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class zaa extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.zaa>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class zab extends java.lang.Object implements com.google.android.gms.common.api.PendingResult.StatusListener {
							public static class: java.lang.Class<com.google.android.gms.common.api.zab>;
							public onComplete(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class zac extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.zac>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class zad extends java.lang.Object implements java.lang.Runnable {
							public static class: java.lang.Class<com.google.android.gms.common.api.zad>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class zae extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.zae>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class zaf<R>  extends com.google.android.gms.common.api.internal.BasePendingResult<any> {
							public static class: java.lang.Class<com.google.android.gms.common.api.zaf<any>>;
							public constructor();
							public constructor(param0: com.google.android.gms.common.api.Result);
							public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
							/** @deprecated */
							public constructor(param0: globalAndroid.os.Looper);
							public createFailedResult(param0: com.google.android.gms.common.api.Status): any;
							public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class zag<R>  extends com.google.android.gms.common.api.internal.BasePendingResult<any> {
							public static class: java.lang.Class<com.google.android.gms.common.api.zag<any>>;
							public constructor();
							public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
							/** @deprecated */
							public constructor(param0: globalAndroid.os.Looper);
							public constructor(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.common.api.Result);
							public createFailedResult(param0: com.google.android.gms.common.api.Status): any;
							public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class zah<R>  extends com.google.android.gms.common.api.internal.BasePendingResult<any> {
							public static class: java.lang.Class<com.google.android.gms.common.api.zah<any>>;
							public constructor();
							public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
							/** @deprecated */
							public constructor(param0: globalAndroid.os.Looper);
							public createFailedResult(param0: com.google.android.gms.common.api.Status): any;
							public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export abstract class AbstractDataBuffer<T>  extends com.google.android.gms.common.data.DataBuffer<any> {
							public static class: java.lang.Class<com.google.android.gms.common.data.AbstractDataBuffer<any>>;
							public mDataHolder: com.google.android.gms.common.data.DataHolder;
							public singleRefIterator(): java.util.Iterator<any>;
							public getMetadata(): globalAndroid.os.Bundle;
							public close(): void;
							public iterator(): java.util.Iterator<any>;
							public spliterator(): java.util.Spliterator<any>;
							public get(param0: number): any;
							public forEach(param0: any /* any*/): void;
							public release(): void;
							/** @deprecated */
							public isClosed(): boolean;
							public getCount(): number;
							public constructor(param0: com.google.android.gms.common.data.DataHolder);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class BitmapTeleporter {
							public static class: java.lang.Class<com.google.android.gms.common.data.BitmapTeleporter>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.data.BitmapTeleporter>;
							public constructor(param0: globalAndroid.graphics.Bitmap);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public release(): void;
							public setTempDir(param0: java.io.File): void;
							public get(): globalAndroid.graphics.Bitmap;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class DataBuffer<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataBuffer<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.data.DataBuffer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getCount(): number;
								getMetadata(): globalAndroid.os.Bundle;
								get(param0: number): T;
								iterator(): java.util.Iterator<T>;
								singleRefIterator(): java.util.Iterator<T>;
								close(): void;
								release(): void;
								isClosed(): boolean;
								iterator(): java.util.Iterator<T>;
								forEach(param0: any /* any*/): void;
								spliterator(): java.util.Spliterator<T>;
								close(): void;
								close(): void;
							});
							public constructor();
							public get(param0: number): T;
							public spliterator(): java.util.Spliterator<T>;
							public getMetadata(): globalAndroid.os.Bundle;
							public close(): void;
							public forEach(param0: any /* any*/): void;
							public release(): void;
							public singleRefIterator(): java.util.Iterator<T>;
							/** @deprecated */
							public isClosed(): boolean;
							public getCount(): number;
							public iterator(): java.util.Iterator<T>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class DataBufferIterator<T>  extends java.util.Iterator<any> {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferIterator<any>>;
							public zaa: com.google.android.gms.common.data.DataBuffer<any>;
							public zab: number;
							public remove(): void;
							public hasNext(): boolean;
							public next(): any;
							public constructor(param0: com.google.android.gms.common.data.DataBuffer<any>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class DataBufferObserver extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferObserver>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.data.DataBufferObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onDataChanged(): void;
								onDataRangeChanged(param0: number, param1: number): void;
								onDataRangeInserted(param0: number, param1: number): void;
								onDataRangeMoved(param0: number, param1: number, param2: number): void;
								onDataRangeRemoved(param0: number, param1: number): void;
							});
							public constructor();
							public onDataRangeInserted(param0: number, param1: number): void;
							public onDataChanged(): void;
							public onDataRangeChanged(param0: number, param1: number): void;
							public onDataRangeMoved(param0: number, param1: number, param2: number): void;
							public onDataRangeRemoved(param0: number, param1: number): void;
						}
						export module DataBufferObserver {
							export class Observable extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferObserver.Observable>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.data.DataBufferObserver$Observable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									addObserver(param0: com.google.android.gms.common.data.DataBufferObserver): void;
									removeObserver(param0: com.google.android.gms.common.data.DataBufferObserver): void;
								});
								public constructor();
								public removeObserver(param0: com.google.android.gms.common.data.DataBufferObserver): void;
								public addObserver(param0: com.google.android.gms.common.data.DataBufferObserver): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class DataBufferObserverSet extends java.lang.Object implements com.google.android.gms.common.data.DataBufferObserver, com.google.android.gms.common.data.DataBufferObserver.Observable {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferObserverSet>;
							public constructor();
							public addObserver(param0: com.google.android.gms.common.data.DataBufferObserver): void;
							public removeObserver(param0: com.google.android.gms.common.data.DataBufferObserver): void;
							public hasObservers(): boolean;
							public onDataRangeInserted(param0: number, param1: number): void;
							public clear(): void;
							public onDataChanged(): void;
							public onDataRangeChanged(param0: number, param1: number): void;
							public onDataRangeMoved(param0: number, param1: number, param2: number): void;
							public onDataRangeRemoved(param0: number, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export abstract class DataBufferRef extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferRef>;
							public mDataHolder: com.google.android.gms.common.data.DataHolder;
							public mDataRow: number;
							public getInteger(param0: string): number;
							public hasColumn(param0: string): boolean;
							public hashCode(): number;
							public getFloat(param0: string): number;
							public parseUri(param0: string): globalAndroid.net.Uri;
							public getByteArray(param0: string): androidNative.Array<number>;
							public copyToBuffer(param0: string, param1: globalAndroid.database.CharArrayBuffer): void;
							public getDouble(param0: string): number;
							public hasNull(param0: string): boolean;
							public isDataValid(): boolean;
							public getLong(param0: string): number;
							public getString(param0: string): string;
							public zaa(param0: number): void;
							public getDataRow(): number;
							public constructor(param0: com.google.android.gms.common.data.DataHolder, param1: number);
							public equals(param0: any): boolean;
							public getBoolean(param0: string): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class DataBufferSafeParcelable<T>  extends com.google.android.gms.common.data.AbstractDataBuffer<any> {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferSafeParcelable<any>>;
							public singleRefIterator(): java.util.Iterator<any>;
							public constructor(param0: com.google.android.gms.common.data.DataHolder, param1: globalAndroid.os.Parcelable.Creator<any>);
							public getMetadata(): globalAndroid.os.Bundle;
							public close(): void;
							public iterator(): java.util.Iterator<any>;
							public get(param0: number): any;
							public static addValue(param0: com.google.android.gms.common.data.DataHolder.Builder, param1: com.google.android.gms.common.internal.safeparcel.SafeParcelable): void;
							public release(): void;
							/** @deprecated */
							public isClosed(): boolean;
							public constructor(param0: com.google.android.gms.common.data.DataHolder);
							public getCount(): number;
							public static buildDataHolder(): com.google.android.gms.common.data.DataHolder.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class DataBufferUtils extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferUtils>;
							public static KEY_NEXT_PAGE_TOKEN: string;
							public static KEY_PREV_PAGE_TOKEN: string;
							public static freezeAndClose(param0: com.google.android.gms.common.data.DataBuffer<any>): java.util.ArrayList<any>;
							public static hasData(param0: com.google.android.gms.common.data.DataBuffer<any>): boolean;
							public static hasPrevPage(param0: com.google.android.gms.common.data.DataBuffer<any>): boolean;
							public static hasNextPage(param0: com.google.android.gms.common.data.DataBuffer<any>): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class DataHolder implements java.io.Closeable {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataHolder>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.data.DataHolder>;
							public getString(param0: string, param1: number, param2: number): string;
							public static empty(param0: number): com.google.android.gms.common.data.DataHolder;
							public close(): void;
							public hasColumn(param0: string): boolean;
							public hasNull(param0: string, param1: number, param2: number): boolean;
							public constructor(param0: globalAndroid.database.Cursor, param1: number, param2: globalAndroid.os.Bundle);
							public finalize(): void;
							public getLong(param0: string, param1: number, param2: number): number;
							public static builder(param0: androidNative.Array<string>): com.google.android.gms.common.data.DataHolder.Builder;
							public isClosed(): boolean;
							public getCount(): number;
							public zab(param0: string, param1: number, param2: number): number;
							public getStatusCode(): number;
							public getInteger(param0: string, param1: number, param2: number): number;
							public getMetadata(): globalAndroid.os.Bundle;
							public constructor(param0: androidNative.Array<string>, param1: androidNative.Array<globalAndroid.database.CursorWindow>, param2: number, param3: globalAndroid.os.Bundle);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public zaa(param0: string, param1: number, param2: number): number;
							public getBoolean(param0: string, param1: number, param2: number): boolean;
							public getByteArray(param0: string, param1: number, param2: number): androidNative.Array<number>;
							public getWindowIndex(param0: number): number;
							public zad(): void;
							public zac(param0: string, param1: number, param2: number, param3: globalAndroid.database.CharArrayBuffer): void;
						}
						export module DataHolder {
							export class Builder extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.data.DataHolder.Builder>;
								public build(param0: number, param1: globalAndroid.os.Bundle): com.google.android.gms.common.data.DataHolder;
								public zaa(param0: java.util.HashMap<any,any>): com.google.android.gms.common.data.DataHolder.Builder;
								public build(param0: number): com.google.android.gms.common.data.DataHolder;
								public withRow(param0: globalAndroid.content.ContentValues): com.google.android.gms.common.data.DataHolder.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export abstract class EntityBuffer<T>  extends com.google.android.gms.common.data.AbstractDataBuffer<any> {
							public static class: java.lang.Class<com.google.android.gms.common.data.EntityBuffer<any>>;
							public singleRefIterator(): java.util.Iterator<any>;
							public getMetadata(): globalAndroid.os.Bundle;
							public close(): void;
							public getChildDataMarkerColumn(): string;
							public iterator(): java.util.Iterator<any>;
							public getPrimaryDataMarkerColumn(): string;
							public get(param0: number): any;
							public release(): void;
							/** @deprecated */
							public isClosed(): boolean;
							public getCount(): number;
							public constructor(param0: com.google.android.gms.common.data.DataHolder);
							public getEntry(param0: number, param1: number): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class Freezable<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.data.Freezable<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.data.Freezable<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								freeze(): T;
								isDataValid(): boolean;
							});
							public constructor();
							public isDataValid(): boolean;
							public freeze(): T;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class FreezableUtils extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.data.FreezableUtils>;
							public constructor();
							public static freeze(param0: androidNative.Array<com.google.android.gms.common.data.Freezable<any>>): java.util.ArrayList<any>;
							public static freezeIterable(param0: java.lang.Iterable<any>): java.util.ArrayList<any>;
							public static freeze(param0: java.util.ArrayList<any>): java.util.ArrayList<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class SingleRefDataBufferIterator<T>  extends com.google.android.gms.common.data.DataBufferIterator<any> {
							public static class: java.lang.Class<com.google.android.gms.common.data.SingleRefDataBufferIterator<any>>;
							public next(): any;
							public constructor(param0: com.google.android.gms.common.data.DataBuffer<any>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class zaa extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
							public static class: java.lang.Class<com.google.android.gms.common.data.zaa>;
							public constructor();
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
							public newArray(param0: number): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class zab extends com.google.android.gms.common.data.DataHolder.Builder {
							public static class: java.lang.Class<com.google.android.gms.common.data.zab>;
							public withRow(param0: globalAndroid.content.ContentValues): com.google.android.gms.common.data.DataHolder.Builder;
							public zaa(param0: java.util.HashMap<any,any>): com.google.android.gms.common.data.DataHolder.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class zac extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.data.zac>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class zad extends java.lang.RuntimeException {
							public static class: java.lang.Class<com.google.android.gms.common.data.zad>;
							public constructor();
							public constructor(param0: string);
							public constructor(param0: java.lang.Throwable);
							public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
							public constructor(param0: string, param1: java.lang.Throwable);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class zae extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.data.zae>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class zaf extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
							public static class: java.lang.Class<com.google.android.gms.common.data.zaf>;
							public constructor();
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
							public newArray(param0: number): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module images {
						export class ImageManager extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.images.ImageManager>;
							public loadImage(param0: globalAndroid.widget.ImageView, param1: globalAndroid.net.Uri): void;
							public loadImage(param0: com.google.android.gms.common.images.ImageManager.OnImageLoadedListener, param1: globalAndroid.net.Uri, param2: number): void;
							public loadImage(param0: globalAndroid.widget.ImageView, param1: number): void;
							public loadImage(param0: com.google.android.gms.common.images.ImageManager.OnImageLoadedListener, param1: globalAndroid.net.Uri): void;
							public loadImage(param0: globalAndroid.widget.ImageView, param1: globalAndroid.net.Uri, param2: number): void;
							public static create(param0: globalAndroid.content.Context): com.google.android.gms.common.images.ImageManager;
							public zaj(param0: com.google.android.gms.common.images.zag): void;
						}
						export module ImageManager {
							export class ImageReceiver extends globalAndroid.os.ResultReceiver {
								public static class: java.lang.Class<com.google.android.gms.common.images.ImageManager.ImageReceiver>;
								public zac(param0: com.google.android.gms.common.images.zag): void;
								public describeContents(): number;
								public zab(param0: com.google.android.gms.common.images.zag): void;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public zad(): void;
								public onReceiveResult(param0: number, param1: globalAndroid.os.Bundle): void;
							}
							export class OnImageLoadedListener extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.images.ImageManager.OnImageLoadedListener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.images.ImageManager$OnImageLoadedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onImageLoaded(param0: globalAndroid.net.Uri, param1: globalAndroid.graphics.drawable.Drawable, param2: boolean): void;
								});
								public constructor();
								public onImageLoaded(param0: globalAndroid.net.Uri, param1: globalAndroid.graphics.drawable.Drawable, param2: boolean): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module images {
						export class Size extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.images.Size>;
							public getHeight(): number;
							public getWidth(): number;
							public hashCode(): number;
							public constructor(param0: number, param1: number);
							public toString(): string;
							public equals(param0: any): boolean;
							public static parseSize(param0: string): com.google.android.gms.common.images.Size;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module images {
						export class WebImage {
							public static class: java.lang.Class<com.google.android.gms.common.images.WebImage>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.images.WebImage>;
							public getHeight(): number;
							public getWidth(): number;
							public constructor(param0: globalAndroid.net.Uri);
							public getUrl(): globalAndroid.net.Uri;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: org.json.JSONObject);
							public constructor(param0: globalAndroid.net.Uri, param1: number, param2: number);
							public toJson(): org.json.JSONObject;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module images {
						export class zaa extends java.lang.Object implements java.lang.Runnable {
							public static class: java.lang.Class<com.google.android.gms.common.images.zaa>;
							public constructor(param0: com.google.android.gms.common.images.ImageManager, param1: globalAndroid.net.Uri, param2: globalAndroid.os.ParcelFileDescriptor);
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module images {
						export class zab extends java.lang.Object implements java.lang.Runnable {
							public static class: java.lang.Class<com.google.android.gms.common.images.zab>;
							public constructor(param0: com.google.android.gms.common.images.ImageManager, param1: com.google.android.gms.common.images.zag);
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module images {
						export class zac extends java.lang.Object implements java.lang.Runnable {
							public static class: java.lang.Class<com.google.android.gms.common.images.zac>;
							public constructor(param0: com.google.android.gms.common.images.ImageManager, param1: globalAndroid.net.Uri, param2: globalAndroid.graphics.Bitmap, param3: boolean, param4: java.util.concurrent.CountDownLatch);
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module images {
						export class zad extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.images.zad>;
							public zaa: globalAndroid.net.Uri;
							public constructor(param0: globalAndroid.net.Uri);
							public hashCode(): number;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module images {
						export class zae extends com.google.android.gms.common.images.zag {
							public static class: java.lang.Class<com.google.android.gms.common.images.zae>;
							public constructor(param0: globalAndroid.widget.ImageView, param1: globalAndroid.net.Uri);
							public hashCode(): number;
							public constructor(param0: globalAndroid.net.Uri, param1: number);
							public zaa(param0: globalAndroid.graphics.drawable.Drawable, param1: boolean, param2: boolean, param3: boolean): void;
							public equals(param0: any): boolean;
							public constructor(param0: globalAndroid.widget.ImageView, param1: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module images {
						export class zaf extends com.google.android.gms.common.images.zag {
							public static class: java.lang.Class<com.google.android.gms.common.images.zaf>;
							public hashCode(): number;
							public constructor(param0: globalAndroid.net.Uri, param1: number);
							public zaa(param0: globalAndroid.graphics.drawable.Drawable, param1: boolean, param2: boolean, param3: boolean): void;
							public equals(param0: any): boolean;
							public constructor(param0: com.google.android.gms.common.images.ImageManager.OnImageLoadedListener, param1: globalAndroid.net.Uri);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module images {
						export abstract class zag extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.images.zag>;
							public zab: number;
							public constructor(param0: globalAndroid.net.Uri, param1: number);
							public zaa(param0: globalAndroid.graphics.drawable.Drawable, param1: boolean, param2: boolean, param3: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module images {
						export class zah extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
							public static class: java.lang.Class<com.google.android.gms.common.images.zah>;
							public constructor();
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
							public newArray(param0: number): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class ApiExceptionUtil extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ApiExceptionUtil>;
							public constructor();
							public static fromStatus(param0: com.google.android.gms.common.api.Status): com.google.android.gms.common.api.ApiException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class ClientIdentity {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ClientIdentity>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.ClientIdentity>;
							public uid: number;
							public packageName: string;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public constructor(param0: number, param1: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class ClientSettings extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ClientSettings>;
							public zae(param0: java.lang.Integer): void;
							public constructor(param0: globalAndroid.accounts.Account, param1: java.util.Set<com.google.android.gms.common.api.Scope>, param2: java.util.Map<com.google.android.gms.common.api.Api<any>,com.google.android.gms.common.internal.zab>, param3: number, param4: globalAndroid.view.View, param5: string, param6: string, param7: com.google.android.gms.signin.SignInOptions);
							public getGravityForPopups(): number;
							public getRealClientPackageName(): string;
							public constructor(param0: globalAndroid.accounts.Account, param1: java.util.Set<any>, param2: java.util.Map<any,any>, param3: number, param4: globalAndroid.view.View, param5: string, param6: string, param7: com.google.android.gms.signin.SignInOptions, param8: boolean);
							public static createDefault(param0: globalAndroid.content.Context): com.google.android.gms.common.internal.ClientSettings;
							public zac(): string;
							public getViewForPopups(): globalAndroid.view.View;
							public zad(): java.util.Map<any,any>;
							public zab(): java.lang.Integer;
							public getRequiredScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
							public getAccountOrDefault(): globalAndroid.accounts.Account;
							public getApplicableScopes(param0: com.google.android.gms.common.api.Api<any>): java.util.Set<com.google.android.gms.common.api.Scope>;
							public getAccount(): globalAndroid.accounts.Account;
							/** @deprecated */
							public getAccountName(): string;
							public zaa(): com.google.android.gms.signin.SignInOptions;
							public getAllRequestedScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
						}
						export module ClientSettings {
							export class Builder extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.internal.ClientSettings.Builder>;
								public zac(param0: string): com.google.android.gms.common.internal.ClientSettings.Builder;
								public build(): com.google.android.gms.common.internal.ClientSettings;
								public constructor();
								public zaa(param0: java.util.Collection<any>): com.google.android.gms.common.internal.ClientSettings.Builder;
								public setRealClientPackageName(param0: string): com.google.android.gms.common.internal.ClientSettings.Builder;
								public zab(param0: globalAndroid.accounts.Account): com.google.android.gms.common.internal.ClientSettings.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export abstract class FallbackServiceBroker {
							public static class: java.lang.Class<com.google.android.gms.common.internal.FallbackServiceBroker>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export abstract class GmsClient<T>  extends com.google.android.gms.common.internal.BaseGmsClient<any> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.GmsClient<any>>;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailability, param4: number, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.internal.ConnectionCallbacks, param7: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
							public getServiceBrokerBinder(): globalAndroid.os.IBinder;
							public requiresGooglePlayServices(): boolean;
							public validateScopes(param0: java.util.Set<com.google.android.gms.common.api.Scope>): java.util.Set<com.google.android.gms.common.api.Scope>;
							public getAccount(): globalAndroid.accounts.Account;
							public getClientSettings(): com.google.android.gms.common.internal.ClientSettings;
							public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public getEndpointPackageName(): string;
							public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public getSignInIntent(): globalAndroid.content.Intent;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public getScopesForConnectionlessNonSignIn(): java.util.Set<com.google.android.gms.common.api.Scope>;
							public requiresAccount(): boolean;
							public getScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
							public disconnect(): void;
							public isConnected(): boolean;
							public providesSignIn(): boolean;
							/** @deprecated */
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public isConnecting(): boolean;
							public getLastDisconnectMessage(): string;
							public disconnect(param0: string): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.internal.ConnectionCallbacks, param5: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
							public getMinApkVersion(): number;
							public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
							public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
							public getBindServiceExecutor(): java.util.concurrent.Executor;
							public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
							public requiresSignIn(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class MethodInvocation {
							public static class: java.lang.Class<com.google.android.gms.common.internal.MethodInvocation>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.MethodInvocation>;
							/** @deprecated */
							public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: string, param6: string, param7: number);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: string, param6: string, param7: number, param8: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class PendingResultUtil extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.PendingResultUtil>;
							public static toVoidTask(param0: com.google.android.gms.common.api.PendingResult<any>): com.google.android.gms.tasks.Task;
							public constructor();
							public static toTask(param0: com.google.android.gms.common.api.PendingResult<any>, param1: com.google.android.gms.common.internal.PendingResultUtil.ResultConverter<any,any>): com.google.android.gms.tasks.Task;
							public static toResponseTask(param0: com.google.android.gms.common.api.PendingResult<any>, param1: com.google.android.gms.common.api.Response): com.google.android.gms.tasks.Task;
						}
						export module PendingResultUtil {
							export class ResultConverter<R, T>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.internal.PendingResultUtil.ResultConverter<any,any>>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.PendingResultUtil$ResultConverter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									convert(param0: R): T;
								});
								public constructor();
								public convert(param0: R): T;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class TelemetryData {
							public static class: java.lang.Class<com.google.android.gms.common.internal.TelemetryData>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.TelemetryData>;
							public constructor(param0: number, param1: java.util.List<any>);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public zac(param0: com.google.android.gms.common.internal.MethodInvocation): void;
							public zaa(): number;
							public zab(): java.util.List<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class TelemetryLogging extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.TelemetryLogging>;
							public static getClient(param0: globalAndroid.content.Context): com.google.android.gms.common.internal.TelemetryLoggingClient;
							public static getClient(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.internal.TelemetryLoggingOptions): com.google.android.gms.common.internal.TelemetryLoggingClient;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class TelemetryLoggingClient extends com.google.android.gms.common.api.HasApiKey<com.google.android.gms.common.internal.TelemetryLoggingOptions> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.TelemetryLoggingClient>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.TelemetryLoggingClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								log(param0: com.google.android.gms.common.internal.TelemetryData): com.google.android.gms.tasks.Task<java.lang.Void>;
								getApiKey(): com.google.android.gms.common.api.internal.ApiKey<any>;
							});
							public constructor();
							public log(param0: com.google.android.gms.common.internal.TelemetryData): com.google.android.gms.tasks.Task<java.lang.Void>;
							public getApiKey(): com.google.android.gms.common.api.internal.ApiKey<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class TelemetryLoggingOptions extends java.lang.Object implements com.google.android.gms.common.api.Api.ApiOptions.Optional {
							public static class: java.lang.Class<com.google.android.gms.common.internal.TelemetryLoggingOptions>;
							public hashCode(): number;
							public zaa(): globalAndroid.os.Bundle;
							public equals(param0: any): boolean;
							public static builder(): com.google.android.gms.common.internal.TelemetryLoggingOptions.Builder;
						}
						export module TelemetryLoggingOptions {
							export class Builder extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.internal.TelemetryLoggingOptions.Builder>;
								public setApi(param0: string): com.google.android.gms.common.internal.TelemetryLoggingOptions.Builder;
								public build(): com.google.android.gms.common.internal.TelemetryLoggingOptions;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module service {
							export class Common extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.Common>;
								public static CLIENT_KEY: com.google.android.gms.common.api.Api.ClientKey<com.google.android.gms.common.internal.service.zah>;
								public static API: com.google.android.gms.common.api.Api<com.google.android.gms.common.api.Api.ApiOptions.NoOptions>;
								public static zaa: com.google.android.gms.common.internal.service.zae;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module service {
							export class zaa extends com.google.android.gms.common.internal.service.zaj {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zaa>;
								public isBinderAlive(): boolean;
								public static getSuggestedMaxIpcSizeBytes(): number;
								public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
								public getInterfaceDescriptor(): string;
								public constructor();
								public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
								public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
								public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
								public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
								public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
								public zab(param0: number): void;
								public constructor(param0: string);
								public pingBinder(): boolean;
								public asBinder(): globalAndroid.os.IBinder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module service {
							export class zab extends com.google.android.gms.common.api.Api.AbstractClientBuilder<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zab>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module service {
							export class zac extends com.google.android.gms.common.internal.service.zaf {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zac>;
								public setResult(param0: any): void;
								public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module service {
							export class zad extends com.google.android.gms.common.internal.service.zaa {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zad>;
								public isBinderAlive(): boolean;
								public static getSuggestedMaxIpcSizeBytes(): number;
								public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
								public getInterfaceDescriptor(): string;
								public constructor();
								public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
								public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
								public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
								public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
								public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
								public zab(param0: number): void;
								public constructor(param0: string);
								public pingBinder(): boolean;
								public asBinder(): globalAndroid.os.IBinder;
								public constructor(param0: com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<any>);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module service {
							export class zae extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zae>;
								public constructor();
								public zaa(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module service {
							export abstract class zaf extends com.google.android.gms.common.internal.service.zag {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zaf>;
								public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
								public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
								public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
								public constructor();
								/** @deprecated */
								public constructor(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
								/** @deprecated */
								public constructor(param0: globalAndroid.os.Looper);
								public setResult(param0: any): void;
								public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module service {
							export abstract class zag extends com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zag>;
								public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
								public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
								public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
								public constructor();
								/** @deprecated */
								public constructor(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
								/** @deprecated */
								public constructor(param0: globalAndroid.os.Looper);
								public setResult(param0: any): void;
								public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module service {
							export class zah extends com.google.android.gms.common.internal.GmsClient<com.google.android.gms.common.internal.service.zal> {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zah>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
								public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.internal.ConnectionCallbacks, param5: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.ClientSettings, param3: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param4: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
								public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
								public getServiceBrokerBinder(): globalAndroid.os.IBinder;
								public getScopesForConnectionlessNonSignIn(): java.util.Set<com.google.android.gms.common.api.Scope>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailability, param4: number, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.internal.ConnectionCallbacks, param7: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
								public getEndpointPackageName(): string;
								public requiresGooglePlayServices(): boolean;
								public requiresAccount(): boolean;
								public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
								public getMinApkVersion(): number;
								public getServiceDescriptor(): string;
								public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
								public disconnect(param0: string): void;
								public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
								public requiresSignIn(): boolean;
								public getSignInIntent(): globalAndroid.content.Intent;
								public getLastDisconnectMessage(): string;
								public isConnected(): boolean;
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
								public getStartServiceAction(): string;
								/** @deprecated */
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
								public disconnect(): void;
								public isConnecting(): boolean;
								public providesSignIn(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module service {
							export class zai extends com.google.android.gms.internal.base.zaa implements globalAndroid.os.IInterface {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zai>;
								public zae(param0: com.google.android.gms.common.internal.TelemetryData): void;
								public asBinder(): globalAndroid.os.IBinder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module service {
							export abstract class zaj extends com.google.android.gms.internal.base.zab implements com.google.android.gms.common.internal.service.zak {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zaj>;
								public isBinderAlive(): boolean;
								public static getSuggestedMaxIpcSizeBytes(): number;
								public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
								public getInterfaceDescriptor(): string;
								public constructor();
								public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
								public zaa(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
								public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
								public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
								public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
								public zab(param0: number): void;
								public constructor(param0: string);
								public pingBinder(): boolean;
								public asBinder(): globalAndroid.os.IBinder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module service {
							export class zak extends java.lang.Object implements globalAndroid.os.IInterface {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zak>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.service.zak interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zab(param0: number): void;
									asBinder(): globalAndroid.os.IBinder;
								});
								public constructor();
								public zab(param0: number): void;
								public asBinder(): globalAndroid.os.IBinder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module service {
							export class zal extends com.google.android.gms.internal.base.zaa implements globalAndroid.os.IInterface {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zal>;
								public asBinder(): globalAndroid.os.IBinder;
								public zae(param0: com.google.android.gms.common.internal.service.zak): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module service {
							export class zam extends java.lang.Object implements com.google.android.gms.common.api.internal.RemoteCall<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zam>;
								public accept(param0: any, param1: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module service {
							export class zan extends com.google.android.gms.common.api.Api.AbstractClientBuilder<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zan>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module service {
							export class zao extends com.google.android.gms.common.api.GoogleApi<any> implements com.google.android.gms.common.internal.TelemetryLoggingClient {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zao>;
								public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
								public getApiKey(): com.google.android.gms.common.api.internal.ApiKey<any>;
								public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.internal.TelemetryLoggingOptions);
								/** @deprecated */
								public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
								public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
								/** @deprecated */
								public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
								public log(param0: com.google.android.gms.common.internal.TelemetryData): com.google.android.gms.tasks.Task<java.lang.Void>;
								/** @deprecated */
								public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: globalAndroid.os.Looper, param4: com.google.android.gms.common.api.internal.StatusExceptionMapper);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module service {
							export class zap extends com.google.android.gms.common.internal.GmsClient<any> {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zap>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
								public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.internal.ConnectionCallbacks, param5: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
								public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
								public getServiceBrokerBinder(): globalAndroid.os.IBinder;
								public getScopesForConnectionlessNonSignIn(): java.util.Set<com.google.android.gms.common.api.Scope>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailability, param4: number, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.internal.ConnectionCallbacks, param7: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
								public getEndpointPackageName(): string;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.ClientSettings, param3: com.google.android.gms.common.internal.TelemetryLoggingOptions, param4: com.google.android.gms.common.api.internal.ConnectionCallbacks, param5: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
								public requiresGooglePlayServices(): boolean;
								public requiresAccount(): boolean;
								public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
								public getMinApkVersion(): number;
								public getServiceDescriptor(): string;
								public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
								public disconnect(param0: string): void;
								public getGetServiceRequestExtraArgs(): globalAndroid.os.Bundle;
								public getApiFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
								public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
								public requiresSignIn(): boolean;
								public getSignInIntent(): globalAndroid.content.Intent;
								public getLastDisconnectMessage(): string;
								public isConnected(): boolean;
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
								public getStartServiceAction(): string;
								/** @deprecated */
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
								public getUseDynamicLookup(): boolean;
								public disconnect(): void;
								public isConnecting(): boolean;
								public providesSignIn(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zaa extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zaa>;
							public constructor();
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
							public newArray(param0: number): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zaaa extends globalAndroid.widget.Button {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zaaa>;
							public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
							public zaa(param0: globalAndroid.content.res.Resources, param1: number, param2: number): void;
							public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
							public onPreDraw(): boolean;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
							public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
							public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
							public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
							public sendAccessibilityEvent(param0: number): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
							public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
							public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zaab extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zaab>;
							public constructor();
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
							public newArray(param0: number): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zaac extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zaac>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zaad extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zaad>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zab extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zab>;
							public zaa: java.util.Set<any>;
							public constructor(param0: java.util.Set<any>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zac extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zac>;
							public static zaa(param0: globalAndroid.content.Context): string;
							public static zad(param0: globalAndroid.content.Context, param1: number): string;
							public static zae(param0: globalAndroid.content.Context, param1: number): string;
							public static zac(param0: globalAndroid.content.Context, param1: number): string;
							public static zaf(param0: globalAndroid.content.Context, param1: number): string;
							public static zag(param0: globalAndroid.content.Context, param1: number): string;
							public static zab(param0: globalAndroid.content.Context): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zad extends com.google.android.gms.common.internal.zag {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zad>;
							public zaa(): void;
							public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zae extends com.google.android.gms.common.internal.zag {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zae>;
							public zaa(): void;
							public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zaf extends com.google.android.gms.common.internal.zag {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zaf>;
							public zaa(): void;
							public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export abstract class zag extends java.lang.Object implements globalAndroid.content.DialogInterface.OnClickListener {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zag>;
							public constructor();
							public static zab(param0: globalAndroid.app.Activity, param1: globalAndroid.content.Intent, param2: number): com.google.android.gms.common.internal.zag;
							public zaa(): void;
							public static zac(param0: androidx.fragment.app.Fragment, param1: globalAndroid.content.Intent, param2: number): com.google.android.gms.common.internal.zag;
							public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
							public static zad(param0: com.google.android.gms.common.api.internal.LifecycleFragment, param1: globalAndroid.content.Intent, param2: number): com.google.android.gms.common.internal.zag;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zah extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zah>;
							public onConnected(param0: globalAndroid.os.Bundle): void;
							public onConnectionSuspended(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zai extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zai>;
							public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zaj extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zaj>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.zaj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								isConnected(): boolean;
							});
							public constructor();
							public isConnected(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zak extends java.lang.Object implements globalAndroid.os.Handler.Callback {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zak>;
							public constructor(param0: globalAndroid.os.Looper, param1: com.google.android.gms.common.internal.zaj);
							public zaj(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): boolean;
							public zaf(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
							public zaa(): void;
							public zab(): void;
							public zad(param0: globalAndroid.os.Bundle): void;
							public zak(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): boolean;
							public zae(param0: number): void;
							public zac(param0: com.google.android.gms.common.ConnectionResult): void;
							public zah(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
							public handleMessage(param0: globalAndroid.os.Message): boolean;
							public zai(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
							public zag(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zal extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zal>;
							public constructor();
							public zac(): void;
							public constructor(param0: com.google.android.gms.common.GoogleApiAvailabilityLight);
							public zab(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api.Client): number;
							public zaa(param0: globalAndroid.content.Context, param1: number): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zam extends com.google.android.gms.internal.base.zaa implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zam>;
							public asBinder(): globalAndroid.os.IBinder;
							public zae(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.common.internal.zax): com.google.android.gms.dynamic.IObjectWrapper;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zan extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zan>;
							public constructor();
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
							public newArray(param0: number): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zao extends java.lang.Object implements com.google.android.gms.common.internal.zas {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zao>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zap extends java.lang.Object implements com.google.android.gms.common.api.PendingResult.StatusListener {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zap>;
							public onComplete(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zaq extends java.lang.Object implements com.google.android.gms.common.internal.PendingResultUtil.ResultConverter<any,any> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zaq>;
							public convert(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zar extends java.lang.Object implements com.google.android.gms.common.internal.PendingResultUtil.ResultConverter<any,any> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zar>;
							public convert(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zas extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zas>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.zas interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zat {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zat>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.zat>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: globalAndroid.accounts.Account, param1: number, param2: com.google.android.gms.auth.api.signin.GoogleSignInAccount);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zau extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zau>;
							public constructor();
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
							public newArray(param0: number): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zav {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zav>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.zav>;
							public zaa(): com.google.android.gms.common.ConnectionResult;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public zac(): boolean;
							public zab(): com.google.android.gms.common.internal.IAccountAccessor;
							public equals(param0: any): boolean;
							public zad(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zaw extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zaw>;
							public constructor();
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
							public newArray(param0: number): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zax {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zax>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.zax>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zay extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zay>;
							public constructor();
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
							public newArray(param0: number): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zaz {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zaz>;
							public static zaa(param0: globalAndroid.content.Context, param1: number, param2: number): globalAndroid.view.View;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export class InstallStatusListener extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.InstallStatusListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.moduleinstall.InstallStatusListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onInstallStatusUpdated(param0: com.google.android.gms.common.moduleinstall.ModuleInstallStatusUpdate): void;
							});
							public constructor();
							public onInstallStatusUpdated(param0: com.google.android.gms.common.moduleinstall.ModuleInstallStatusUpdate): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export class ModuleAvailabilityResponse {
							public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.ModuleAvailabilityResponse>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.moduleinstall.ModuleAvailabilityResponse>;
							public getAvailabilityStatus(): number;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public areModulesAvailable(): boolean;
							public constructor(param0: boolean, param1: number);
						}
						export module ModuleAvailabilityResponse {
							export class AvailabilityStatus extends java.lang.Object implements java.lang.annotation.Annotation {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.ModuleAvailabilityResponse.AvailabilityStatus>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.moduleinstall.ModuleAvailabilityResponse$AvailabilityStatus interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									equals(param0: any): boolean;
									hashCode(): number;
									toString(): string;
									annotationType(): java.lang.Class<any>;
								});
								public constructor();
								public static STATUS_ALREADY_AVAILABLE: number;
								public static STATUS_UNKNOWN_MODULE: number;
								public static STATUS_READY_TO_DOWNLOAD: number;
								public toString(): string;
								public equals(param0: any): boolean;
								public annotationType(): java.lang.Class<any>;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export class ModuleInstall extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.ModuleInstall>;
							public static getClient(param0: globalAndroid.app.Activity): com.google.android.gms.common.moduleinstall.ModuleInstallClient;
							public static getClient(param0: globalAndroid.content.Context): com.google.android.gms.common.moduleinstall.ModuleInstallClient;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export class ModuleInstallClient extends com.google.android.gms.common.api.HasApiKey<com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
							public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.ModuleInstallClient>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.moduleinstall.ModuleInstallClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								areModulesAvailable(param0: androidNative.Array<com.google.android.gms.common.api.OptionalModuleApi>): com.google.android.gms.tasks.Task<com.google.android.gms.common.moduleinstall.ModuleAvailabilityResponse>;
								deferredInstall(param0: androidNative.Array<com.google.android.gms.common.api.OptionalModuleApi>): com.google.android.gms.tasks.Task<java.lang.Void>;
								getInstallModulesIntent(param0: androidNative.Array<com.google.android.gms.common.api.OptionalModuleApi>): com.google.android.gms.tasks.Task<com.google.android.gms.common.moduleinstall.ModuleInstallIntentResponse>;
								installModules(param0: com.google.android.gms.common.moduleinstall.ModuleInstallRequest): com.google.android.gms.tasks.Task<com.google.android.gms.common.moduleinstall.ModuleInstallResponse>;
								releaseModules(param0: androidNative.Array<com.google.android.gms.common.api.OptionalModuleApi>): com.google.android.gms.tasks.Task<java.lang.Void>;
								unregisterListener(param0: com.google.android.gms.common.moduleinstall.InstallStatusListener): com.google.android.gms.tasks.Task<java.lang.Boolean>;
								getApiKey(): com.google.android.gms.common.api.internal.ApiKey<any>;
							});
							public constructor();
							public deferredInstall(param0: androidNative.Array<com.google.android.gms.common.api.OptionalModuleApi>): com.google.android.gms.tasks.Task<java.lang.Void>;
							public getInstallModulesIntent(param0: androidNative.Array<com.google.android.gms.common.api.OptionalModuleApi>): com.google.android.gms.tasks.Task<com.google.android.gms.common.moduleinstall.ModuleInstallIntentResponse>;
							public installModules(param0: com.google.android.gms.common.moduleinstall.ModuleInstallRequest): com.google.android.gms.tasks.Task<com.google.android.gms.common.moduleinstall.ModuleInstallResponse>;
							public releaseModules(param0: androidNative.Array<com.google.android.gms.common.api.OptionalModuleApi>): com.google.android.gms.tasks.Task<java.lang.Void>;
							public unregisterListener(param0: com.google.android.gms.common.moduleinstall.InstallStatusListener): com.google.android.gms.tasks.Task<java.lang.Boolean>;
							public areModulesAvailable(param0: androidNative.Array<com.google.android.gms.common.api.OptionalModuleApi>): com.google.android.gms.tasks.Task<com.google.android.gms.common.moduleinstall.ModuleAvailabilityResponse>;
							public getApiKey(): com.google.android.gms.common.api.internal.ApiKey<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export class ModuleInstallIntentResponse {
							public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.ModuleInstallIntentResponse>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.moduleinstall.ModuleInstallIntentResponse>;
							public constructor(param0: globalAndroid.app.PendingIntent);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getPendingIntent(): globalAndroid.app.PendingIntent;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export class ModuleInstallRequest extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.ModuleInstallRequest>;
							public getListenerExecutor(): java.util.concurrent.Executor;
							public getApis(): java.util.List<com.google.android.gms.common.api.OptionalModuleApi>;
							public getListener(): com.google.android.gms.common.moduleinstall.InstallStatusListener;
							public static newBuilder(): com.google.android.gms.common.moduleinstall.ModuleInstallRequest.Builder;
							public zaa(): boolean;
						}
						export module ModuleInstallRequest {
							export class Builder extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.ModuleInstallRequest.Builder>;
								public setListener(param0: com.google.android.gms.common.moduleinstall.InstallStatusListener): com.google.android.gms.common.moduleinstall.ModuleInstallRequest.Builder;
								public setListener(param0: com.google.android.gms.common.moduleinstall.InstallStatusListener, param1: java.util.concurrent.Executor): com.google.android.gms.common.moduleinstall.ModuleInstallRequest.Builder;
								public constructor();
								public addApi(param0: com.google.android.gms.common.api.OptionalModuleApi): com.google.android.gms.common.moduleinstall.ModuleInstallRequest.Builder;
								public build(): com.google.android.gms.common.moduleinstall.ModuleInstallRequest;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export class ModuleInstallResponse {
							public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.ModuleInstallResponse>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.moduleinstall.ModuleInstallResponse>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: number, param1: boolean);
							public getSessionId(): number;
							public areModulesAlreadyInstalled(): boolean;
							public zaa(): boolean;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export class ModuleInstallStatusCodes {
							public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.ModuleInstallStatusCodes>;
							public static SUCCESS: number;
							public static UNKNOWN_MODULE: number;
							public static NOT_ALLOWED_MODULE: number;
							public static MODULE_NOT_FOUND: number;
							public static INSUFFICIENT_STORAGE: number;
							public static getStatusCodeString(param0: number): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export class ModuleInstallStatusUpdate {
							public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.ModuleInstallStatusUpdate>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.moduleinstall.ModuleInstallStatusUpdate>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getErrorCode(): number;
							public getProgressInfo(): com.google.android.gms.common.moduleinstall.ModuleInstallStatusUpdate.ProgressInfo;
							public getSessionId(): number;
							public constructor(param0: number, param1: number, param2: java.lang.Long, param3: java.lang.Long, param4: number);
							public getInstallState(): number;
						}
						export module ModuleInstallStatusUpdate {
							export class InstallState extends java.lang.Object implements java.lang.annotation.Annotation {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.ModuleInstallStatusUpdate.InstallState>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.moduleinstall.ModuleInstallStatusUpdate$InstallState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									equals(param0: any): boolean;
									hashCode(): number;
									toString(): string;
									annotationType(): java.lang.Class<any>;
								});
								public constructor();
								public static STATE_INSTALLING: number;
								public static STATE_COMPLETED: number;
								public static STATE_DOWNLOAD_PAUSED: number;
								public static STATE_CANCELED: number;
								public static STATE_UNKNOWN: number;
								public static STATE_DOWNLOADING: number;
								public static STATE_FAILED: number;
								public static STATE_PENDING: number;
								public toString(): string;
								public equals(param0: any): boolean;
								public annotationType(): java.lang.Class<any>;
								public hashCode(): number;
							}
							export class ProgressInfo extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.ModuleInstallStatusUpdate.ProgressInfo>;
								public getTotalBytesToDownload(): number;
								public getBytesDownloaded(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export module internal {
							export class ApiFeatureRequest {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.ApiFeatureRequest>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.moduleinstall.internal.ApiFeatureRequest>;
								public constructor(param0: java.util.List<any>, param1: boolean, param2: string, param3: string);
								public static fromModuleInstallRequest(param0: com.google.android.gms.common.moduleinstall.ModuleInstallRequest): com.google.android.gms.common.moduleinstall.internal.ApiFeatureRequest;
								public equals(param0: any): boolean;
								public getApiFeatures(): java.util.List<com.google.android.gms.common.Feature>;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export module internal {
							export class zaa extends com.google.android.gms.common.moduleinstall.internal.zad {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zaa>;
								public zac(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleInstallIntentResponse): void;
								public isBinderAlive(): boolean;
								public zab(param0: com.google.android.gms.common.api.Status): void;
								public static getSuggestedMaxIpcSizeBytes(): number;
								public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
								public getInterfaceDescriptor(): string;
								public constructor();
								public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
								public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
								public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
								public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
								public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
								public constructor(param0: string);
								public zae(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleAvailabilityResponse): void;
								public pingBinder(): boolean;
								public asBinder(): globalAndroid.os.IBinder;
								public zad(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleInstallResponse): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export module internal {
							export class zaaa extends java.lang.Object implements com.google.android.gms.common.api.internal.ListenerHolder.Notifier<any> {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zaaa>;
								public onNotifyListenerFailed(): void;
								public notifyListener(param0: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export module internal {
							export class zaab extends com.google.android.gms.common.moduleinstall.internal.zag {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zaab>;
								public constructor(param0: com.google.android.gms.common.api.internal.ListenerHolder<any>);
								public zab(param0: com.google.android.gms.common.moduleinstall.ModuleInstallStatusUpdate): void;
								public isBinderAlive(): boolean;
								public static getSuggestedMaxIpcSizeBytes(): number;
								public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
								public getInterfaceDescriptor(): string;
								public constructor();
								public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
								public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
								public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
								public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
								public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
								public constructor(param0: string);
								public pingBinder(): boolean;
								public asBinder(): globalAndroid.os.IBinder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export module internal {
							export class zab extends java.lang.Object implements java.util.Comparator<any> {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zab>;
								public static reverseOrder(): java.util.Comparator<any>;
								public static naturalOrder(): java.util.Comparator<any>;
								public thenComparing(param0: java.util.Comparator<any>): java.util.Comparator<any>;
								public equals(param0: any): boolean;
								public static nullsFirst(param0: java.util.Comparator<any>): java.util.Comparator<any>;
								public thenComparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
								public thenComparingInt(param0: any /* any*/): java.util.Comparator<any>;
								public static comparingInt(param0: any /* any*/): java.util.Comparator<any>;
								public static nullsLast(param0: java.util.Comparator<any>): java.util.Comparator<any>;
								public static comparing(param0: any /* any*/): java.util.Comparator<any>;
								public thenComparing(param0: any /* any*/): java.util.Comparator<any>;
								public static comparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
								public static comparingDouble(param0: any /* any*/): java.util.Comparator<any>;
								public thenComparingDouble(param0: any /* any*/): java.util.Comparator<any>;
								public static comparingLong(param0: any /* any*/): java.util.Comparator<any>;
								public compare(param0: any, param1: any): number;
								public reversed(): java.util.Comparator<any>;
								public thenComparingLong(param0: any /* any*/): java.util.Comparator<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export module internal {
							export class zac extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zac>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public constructor();
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export module internal {
							export abstract class zad extends com.google.android.gms.internal.base.zab implements com.google.android.gms.common.moduleinstall.internal.zae {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zad>;
								public zac(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleInstallIntentResponse): void;
								public isBinderAlive(): boolean;
								public zab(param0: com.google.android.gms.common.api.Status): void;
								public static getSuggestedMaxIpcSizeBytes(): number;
								public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
								public getInterfaceDescriptor(): string;
								public constructor();
								public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
								public zaa(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
								public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
								public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
								public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
								public constructor(param0: string);
								public zae(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleAvailabilityResponse): void;
								public pingBinder(): boolean;
								public asBinder(): globalAndroid.os.IBinder;
								public zad(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleInstallResponse): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export module internal {
							export class zae extends java.lang.Object implements globalAndroid.os.IInterface {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zae>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.moduleinstall.internal.zae interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zab(param0: com.google.android.gms.common.api.Status): void;
									zac(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleInstallIntentResponse): void;
									zad(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleInstallResponse): void;
									zae(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleAvailabilityResponse): void;
									asBinder(): globalAndroid.os.IBinder;
								});
								public constructor();
								public zac(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleInstallIntentResponse): void;
								public zab(param0: com.google.android.gms.common.api.Status): void;
								public zae(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleAvailabilityResponse): void;
								public asBinder(): globalAndroid.os.IBinder;
								public zad(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleInstallResponse): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export module internal {
							export class zaf extends com.google.android.gms.internal.base.zaa implements globalAndroid.os.IInterface {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zaf>;
								public zaf(param0: com.google.android.gms.common.moduleinstall.internal.zae, param1: com.google.android.gms.common.moduleinstall.internal.ApiFeatureRequest): void;
								public zai(param0: com.google.android.gms.common.api.internal.IStatusCallback, param1: com.google.android.gms.common.moduleinstall.internal.zah): void;
								public zah(param0: com.google.android.gms.common.api.internal.IStatusCallback, param1: com.google.android.gms.common.moduleinstall.internal.ApiFeatureRequest): void;
								public zae(param0: com.google.android.gms.common.moduleinstall.internal.zae, param1: com.google.android.gms.common.moduleinstall.internal.ApiFeatureRequest): void;
								public zag(param0: com.google.android.gms.common.moduleinstall.internal.zae, param1: com.google.android.gms.common.moduleinstall.internal.ApiFeatureRequest, param2: com.google.android.gms.common.moduleinstall.internal.zah): void;
								public asBinder(): globalAndroid.os.IBinder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export module internal {
							export abstract class zag extends com.google.android.gms.internal.base.zab implements com.google.android.gms.common.moduleinstall.internal.zah {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zag>;
								public zab(param0: com.google.android.gms.common.moduleinstall.ModuleInstallStatusUpdate): void;
								public isBinderAlive(): boolean;
								public static getSuggestedMaxIpcSizeBytes(): number;
								public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
								public getInterfaceDescriptor(): string;
								public constructor();
								public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
								public zaa(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
								public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
								public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
								public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
								public constructor(param0: string);
								public pingBinder(): boolean;
								public asBinder(): globalAndroid.os.IBinder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export module internal {
							export class zah extends java.lang.Object implements globalAndroid.os.IInterface {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zah>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.moduleinstall.internal.zah interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zab(param0: com.google.android.gms.common.moduleinstall.ModuleInstallStatusUpdate): void;
									asBinder(): globalAndroid.os.IBinder;
								});
								public constructor();
								public zab(param0: com.google.android.gms.common.moduleinstall.ModuleInstallStatusUpdate): void;
								public asBinder(): globalAndroid.os.IBinder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export module internal {
							export class zai extends java.lang.Object implements com.google.android.gms.common.api.internal.RemoteCall<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zai>;
								public accept(param0: any, param1: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export module internal {
							export class zaj extends java.lang.Object implements com.google.android.gms.common.api.internal.RemoteCall<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zaj>;
								public accept(param0: any, param1: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export module internal {
							export class zak extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zak>;
								public then(param0: any): com.google.android.gms.tasks.Task;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export module internal {
							export class zal extends java.lang.Object implements com.google.android.gms.common.api.internal.RemoteCall<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zal>;
								public accept(param0: any, param1: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export module internal {
							export class zam extends java.lang.Object implements com.google.android.gms.common.api.internal.RemoteCall<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zam>;
								public accept(param0: any, param1: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export module internal {
							export class zan extends java.lang.Object implements com.google.android.gms.common.api.internal.RemoteCall<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zan>;
								public accept(param0: any, param1: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export module internal {
							export class zao extends java.lang.Object implements com.google.android.gms.common.api.internal.RemoteCall<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zao>;
								public accept(param0: any, param1: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export module internal {
							export class zap extends java.lang.Object implements com.google.android.gms.common.api.internal.RemoteCall<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zap>;
								public accept(param0: any, param1: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export module internal {
							export class zaq extends com.google.android.gms.common.api.Api.AbstractClientBuilder<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zaq>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export module internal {
							export class zar extends com.google.android.gms.common.moduleinstall.internal.zaa {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zar>;
								public zac(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleInstallIntentResponse): void;
								public isBinderAlive(): boolean;
								public zab(param0: com.google.android.gms.common.api.Status): void;
								public static getSuggestedMaxIpcSizeBytes(): number;
								public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
								public getInterfaceDescriptor(): string;
								public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
								public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
								public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
								public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
								public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
								public zae(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleAvailabilityResponse): void;
								public pingBinder(): boolean;
								public asBinder(): globalAndroid.os.IBinder;
								public zad(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleInstallResponse): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export module internal {
							export class zas extends com.google.android.gms.common.moduleinstall.internal.zaa {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zas>;
								public zac(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleInstallIntentResponse): void;
								public isBinderAlive(): boolean;
								public zab(param0: com.google.android.gms.common.api.Status): void;
								public static getSuggestedMaxIpcSizeBytes(): number;
								public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
								public getInterfaceDescriptor(): string;
								public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
								public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
								public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
								public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
								public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
								public zae(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleAvailabilityResponse): void;
								public pingBinder(): boolean;
								public asBinder(): globalAndroid.os.IBinder;
								public zad(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleInstallResponse): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export module internal {
							export class zat extends com.google.android.gms.common.moduleinstall.internal.zaa {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zat>;
								public zac(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleInstallIntentResponse): void;
								public isBinderAlive(): boolean;
								public zab(param0: com.google.android.gms.common.api.Status): void;
								public static getSuggestedMaxIpcSizeBytes(): number;
								public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
								public getInterfaceDescriptor(): string;
								public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
								public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
								public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
								public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
								public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
								public zae(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleAvailabilityResponse): void;
								public pingBinder(): boolean;
								public asBinder(): globalAndroid.os.IBinder;
								public zad(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleInstallResponse): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export module internal {
							export class zau extends com.google.android.gms.common.moduleinstall.internal.zaa {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zau>;
								public zac(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleInstallIntentResponse): void;
								public isBinderAlive(): boolean;
								public zab(param0: com.google.android.gms.common.api.Status): void;
								public static getSuggestedMaxIpcSizeBytes(): number;
								public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
								public getInterfaceDescriptor(): string;
								public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
								public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
								public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
								public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
								public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
								public zae(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleAvailabilityResponse): void;
								public pingBinder(): boolean;
								public asBinder(): globalAndroid.os.IBinder;
								public zad(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleInstallResponse): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export module internal {
							export class zav extends com.google.android.gms.common.api.internal.IStatusCallback.Stub {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zav>;
								public isBinderAlive(): boolean;
								public static getSuggestedMaxIpcSizeBytes(): number;
								public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
								public getInterfaceDescriptor(): string;
								public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
								public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
								public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
								public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
								public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
								public onResult(param0: com.google.android.gms.common.api.Status): void;
								public pingBinder(): boolean;
								public asBinder(): globalAndroid.os.IBinder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export module internal {
							export class zaw extends com.google.android.gms.common.moduleinstall.internal.zaa {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zaw>;
								public zac(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleInstallIntentResponse): void;
								public isBinderAlive(): boolean;
								public zab(param0: com.google.android.gms.common.api.Status): void;
								public static getSuggestedMaxIpcSizeBytes(): number;
								public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
								public getInterfaceDescriptor(): string;
								public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
								public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
								public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
								public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
								public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
								public zae(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleAvailabilityResponse): void;
								public pingBinder(): boolean;
								public asBinder(): globalAndroid.os.IBinder;
								public zad(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleInstallResponse): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export module internal {
							export class zax extends com.google.android.gms.common.api.internal.IStatusCallback.Stub {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zax>;
								public isBinderAlive(): boolean;
								public static getSuggestedMaxIpcSizeBytes(): number;
								public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
								public getInterfaceDescriptor(): string;
								public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
								public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
								public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
								public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
								public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
								public onResult(param0: com.google.android.gms.common.api.Status): void;
								public pingBinder(): boolean;
								public asBinder(): globalAndroid.os.IBinder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export module internal {
							export class zay extends com.google.android.gms.common.api.GoogleApi<any> implements com.google.android.gms.common.moduleinstall.ModuleInstallClient {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zay>;
								public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
								public getApiKey(): com.google.android.gms.common.api.internal.ApiKey<any>;
								public constructor(param0: globalAndroid.app.Activity);
								/** @deprecated */
								public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
								public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
								public releaseModules(param0: androidNative.Array<com.google.android.gms.common.api.OptionalModuleApi>): com.google.android.gms.tasks.Task<java.lang.Void>;
								/** @deprecated */
								public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
								public getInstallModulesIntent(param0: androidNative.Array<com.google.android.gms.common.api.OptionalModuleApi>): com.google.android.gms.tasks.Task<com.google.android.gms.common.moduleinstall.ModuleInstallIntentResponse>;
								public areModulesAvailable(param0: androidNative.Array<com.google.android.gms.common.api.OptionalModuleApi>): com.google.android.gms.tasks.Task<com.google.android.gms.common.moduleinstall.ModuleAvailabilityResponse>;
								public deferredInstall(param0: androidNative.Array<com.google.android.gms.common.api.OptionalModuleApi>): com.google.android.gms.tasks.Task<java.lang.Void>;
								public unregisterListener(param0: com.google.android.gms.common.moduleinstall.InstallStatusListener): com.google.android.gms.tasks.Task<java.lang.Boolean>;
								public installModules(param0: com.google.android.gms.common.moduleinstall.ModuleInstallRequest): com.google.android.gms.tasks.Task<com.google.android.gms.common.moduleinstall.ModuleInstallResponse>;
								public constructor(param0: globalAndroid.content.Context);
								/** @deprecated */
								public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: globalAndroid.os.Looper, param4: com.google.android.gms.common.api.internal.StatusExceptionMapper);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export module internal {
							export class zaz extends com.google.android.gms.common.internal.GmsClient<any> {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zaz>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
								public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.internal.ConnectionCallbacks, param5: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
								public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.ClientSettings, param3: com.google.android.gms.common.api.internal.ConnectionCallbacks, param4: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
								public getServiceBrokerBinder(): globalAndroid.os.IBinder;
								public getScopesForConnectionlessNonSignIn(): java.util.Set<com.google.android.gms.common.api.Scope>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailability, param4: number, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.internal.ConnectionCallbacks, param7: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
								public getEndpointPackageName(): string;
								public requiresGooglePlayServices(): boolean;
								public requiresAccount(): boolean;
								public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
								public getMinApkVersion(): number;
								public getServiceDescriptor(): string;
								public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
								public disconnect(param0: string): void;
								public getApiFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
								public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
								public requiresSignIn(): boolean;
								public getSignInIntent(): globalAndroid.content.Intent;
								public getLastDisconnectMessage(): string;
								public usesClientTelemetry(): boolean;
								public isConnected(): boolean;
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
								public getStartServiceAction(): string;
								/** @deprecated */
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
								public getUseDynamicLookup(): boolean;
								public disconnect(): void;
								public isConnecting(): boolean;
								public providesSignIn(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export class zaa extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
							public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.zaa>;
							public constructor();
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
							public newArray(param0: number): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export class zab extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
							public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.zab>;
							public constructor();
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
							public newArray(param0: number): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export class zac extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.zac>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export class zad extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
							public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.zad>;
							public constructor();
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
							public newArray(param0: number): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module moduleinstall {
						export class zae extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
							public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.zae>;
							public constructor();
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
							public newArray(param0: number): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export class FavaDiagnosticsEntity {
							public static class: java.lang.Class<com.google.android.gms.common.server.FavaDiagnosticsEntity>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.FavaDiagnosticsEntity>;
							public zab: string;
							public zac: number;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: number, param1: string, param2: number);
							public constructor(param0: string, param1: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module converter {
							export class StringToIntConverter extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter<string,java.lang.Integer>  {
								public static class: java.lang.Class<com.google.android.gms.common.server.converter.StringToIntConverter>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.converter.StringToIntConverter>;
								public zad(param0: any): any;
								public zab(): number;
								public add(param0: string, param1: number): com.google.android.gms.common.server.converter.StringToIntConverter;
								public zac(param0: any): any;
								public zaa(): number;
								public constructor();
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module converter {
							export class zaa {
								public static class: java.lang.Class<com.google.android.gms.common.server.converter.zaa>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.converter.zaa>;
								public static zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter<any,any>): com.google.android.gms.common.server.converter.zaa;
								public zab(): com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter<any,any>;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module converter {
							export class zab extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
								public static class: java.lang.Class<com.google.android.gms.common.server.converter.zab>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public constructor();
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module converter {
							export class zac {
								public static class: java.lang.Class<com.google.android.gms.common.server.converter.zac>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.converter.zac>;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module converter {
							export class zad extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
								public static class: java.lang.Class<com.google.android.gms.common.server.converter.zad>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public constructor();
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module converter {
							export class zae extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
								public static class: java.lang.Class<com.google.android.gms.common.server.converter.zae>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public constructor();
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export abstract class FastJsonResponse extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.FastJsonResponse>;
								public toString(): string;
								public zae(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.math.BigInteger): void;
								public zar(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: number): void;
								public zaA(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string): void;
								public zaC(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.ArrayList<any>): void;
								public setIntegerInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: number): void;
								public zad(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<any>): void;
								public zab(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.math.BigDecimal): void;
								public addConcreteTypeInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: com.google.android.gms.common.server.response.FastJsonResponse): void;
								public zam(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: number): void;
								public static zaD(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: any): any;
								public zay(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.ArrayList<any>): void;
								public zaz(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<any>): void;
								public setStringsInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<string>): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.math.BigDecimal): void;
								public zah(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<any>): void;
								public zai(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: boolean): void;
								public setLongInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: number): void;
								public zaB(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.Map<any,any>): void;
								public zaw(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<any>): void;
								public zac(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.ArrayList<any>): void;
								public zal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: androidNative.Array<number>): void;
								public zag(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.ArrayList<any>): void;
								public zan(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: number): void;
								public zap(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<any>): void;
								public zat(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<any>): void;
								public zax(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: number): void;
								public setStringMapInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.Map<string,string>): void;
								public constructor();
								public getFieldMappings(): java.util.Map<string,com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>>;
								public setDecodedBytesInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: androidNative.Array<number>): void;
								public zak(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<any>): void;
								public zaf(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.math.BigInteger): void;
								public zav(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.ArrayList<any>): void;
								public zaj(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.ArrayList<any>): void;
								public zaq(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: number): void;
								public addConcreteTypeArrayInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<any>): void;
								public isPrimitiveFieldSet(param0: string): boolean;
								public zas(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.ArrayList<any>): void;
								public zau(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: number): void;
								public isFieldSet(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>): boolean;
								public getValueObject(param0: string): any;
								public getFieldValue(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>): any;
								public setBooleanInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: boolean): void;
								public zao(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.ArrayList<any>): void;
								public setStringInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: string): void;
							}
							export module FastJsonResponse {
								export class Field<I, O>  extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
									public static class: java.lang.Class<com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>>;
									public static CREATOR: com.google.android.gms.common.server.response.zaj;
									public zaa: number;
									public zac: number;
									public zag: java.lang.Class<any>;
									public constructor(param0: number, param1: boolean, param2: number, param3: boolean, param4: string, param5: number, param6: java.lang.Class<any>, param7: com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter<any,any>);
									public zae(param0: any): any;
									public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
									public static forConcreteTypeArray(param0: string, param1: number, param2: java.lang.Class<any>): com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>;
									public static forBoolean(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.lang.Boolean,java.lang.Boolean>;
									public zaj(): boolean;
									public zab(): com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>;
									public toString(): string;
									public zaf(param0: any): any;
									public static forLong(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.lang.Long,java.lang.Long>;
									public static forStrings(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.util.ArrayList<string>,java.util.ArrayList<string>>;
									public static forFloat(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.lang.Float,java.lang.Float>;
									public zai(param0: com.google.android.gms.common.server.response.zan): void;
									public getSafeParcelableFieldId(): number;
									public static forString(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<string,string>;
									public static forStringMap(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.util.HashMap<string,string>,java.util.HashMap<string,string>>;
									public static forDouble(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.lang.Double,java.lang.Double>;
									public zad(): com.google.android.gms.common.server.response.FastJsonResponse;
									public static forBase64(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<androidNative.Array<number>,androidNative.Array<number>>;
									public static forConcreteType(param0: string, param1: number, param2: java.lang.Class<any>): com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>;
									public static forInteger(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.lang.Integer,java.lang.Integer>;
									public static withConverter(param0: string, param1: number, param2: com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter<any,any>, param3: boolean): com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>;
									public zah(): java.util.Map<any,any>;
								}
								export class FieldConverter<I, O>  extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter<any,any>>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.server.response.FastJsonResponse$FieldConverter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										zaa(): number;
										zab(): number;
										zac(param0: any): any;
										zad(param0: any): any;
									});
									public constructor();
									public zad(param0: any): any;
									public zac(param0: any): any;
									public zab(): number;
									public zaa(): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class FastParser<T>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.FastParser<any>>;
								public constructor();
								public parse(param0: java.io.InputStream, param1: T): void;
							}
							export module FastParser {
								export class ParseException extends java.lang.Exception {
									public static class: java.lang.Class<com.google.android.gms.common.server.response.FastParser.ParseException>;
									public constructor(param0: java.lang.Throwable);
									public constructor();
									public constructor(param0: string);
									public constructor(param0: string, param1: java.lang.Throwable);
									public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export abstract class FastSafeParcelableJsonResponse extends com.google.android.gms.common.server.response.FastJsonResponse {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.FastSafeParcelableJsonResponse>;
								public describeContents(): number;
								public isPrimitiveFieldSet(param0: string): boolean;
								public equals(param0: any): boolean;
								public toByteArray(): androidNative.Array<number>;
								public getValueObject(param0: string): any;
								public constructor();
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class SafeParcelResponse extends com.google.android.gms.common.server.response.FastSafeParcelableJsonResponse {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.SafeParcelResponse>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.response.SafeParcelResponse>;
								public toString(): string;
								public zar(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: number): void;
								public setIntegerInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: number): void;
								public zad(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<any>): void;
								public zab(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.math.BigDecimal): void;
								public static from(param0: com.google.android.gms.common.server.response.FastJsonResponse): com.google.android.gms.common.server.response.SafeParcelResponse;
								public addConcreteTypeInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: com.google.android.gms.common.server.response.FastJsonResponse): void;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public zaE(): globalAndroid.os.Parcel;
								public zaz(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<any>): void;
								public setStringsInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<string>): void;
								public zah(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<any>): void;
								public setLongInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: number): void;
								public zaw(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<any>): void;
								public zan(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: number): void;
								public constructor(param0: com.google.android.gms.common.server.response.zan, param1: string);
								public zap(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<any>): void;
								public zat(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<any>): void;
								public setStringMapInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.Map<string,string>): void;
								public constructor();
								public getFieldMappings(): java.util.Map<string,com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>>;
								public setDecodedBytesInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: androidNative.Array<number>): void;
								public zak(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<any>): void;
								public zaf(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.math.BigInteger): void;
								public addConcreteTypeArrayInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<any>): void;
								public isPrimitiveFieldSet(param0: string): boolean;
								public getValueObject(param0: string): any;
								public setBooleanInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: boolean): void;
								public setStringInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: string): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class zaa extends java.lang.Object implements com.google.android.gms.common.server.response.zai {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zaa>;
								public zaa(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class zab extends java.lang.Object implements com.google.android.gms.common.server.response.zai {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zab>;
								public zaa(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class zac extends java.lang.Object implements com.google.android.gms.common.server.response.zai {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zac>;
								public zaa(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class zad extends java.lang.Object implements com.google.android.gms.common.server.response.zai {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zad>;
								public zaa(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class zae extends java.lang.Object implements com.google.android.gms.common.server.response.zai {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zae>;
								public zaa(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class zaf extends java.lang.Object implements com.google.android.gms.common.server.response.zai {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zaf>;
								public zaa(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class zag extends java.lang.Object implements com.google.android.gms.common.server.response.zai {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zag>;
								public zaa(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class zah extends java.lang.Object implements com.google.android.gms.common.server.response.zai {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zah>;
								public zaa(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class zai extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zai>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.server.response.zai interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zaa(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): any;
								});
								public constructor();
								public zaa(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class zaj extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zaj>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public constructor();
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class zak extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zak>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public constructor();
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class zal {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zal>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.response.zal>;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class zam {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zam>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.response.zam>;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class zan {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zan>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.response.zan>;
								public toString(): string;
								public zab(param0: string): java.util.Map<any,any>;
								public zaa(): string;
								public zac(): void;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public zae(param0: java.lang.Class<any>, param1: java.util.Map<any,any>): void;
								public zad(): void;
								public constructor(param0: java.lang.Class<any>);
								public zaf(param0: java.lang.Class<any>): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class zao extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zao>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public constructor();
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class zap extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zap>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public constructor();
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class zaq extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zaq>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public constructor();
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export class zaa extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
							public static class: java.lang.Class<com.google.android.gms.common.server.zaa>;
							public constructor();
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
							public newArray(param0: number): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zaa extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.common.zaa>;
						public then(param0: any): com.google.android.gms.tasks.Task;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zab extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.common.zab>;
						public then(param0: any): com.google.android.gms.tasks.Task;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zac extends com.google.android.gms.internal.base.zau {
						public static class: java.lang.Class<com.google.android.gms.common.zac>;
						public constructor(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback);
						public constructor();
						public constructor(param0: com.google.android.gms.common.GoogleApiAvailability, param1: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.os.Looper);
						public handleMessage(param0: globalAndroid.os.Message): void;
						/** @deprecated */
						public constructor(param0: globalAndroid.os.Handler.Callback);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export abstract class DeferredLifecycleHelper<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.dynamic.DeferredLifecycleHelper<any>>;
						public constructor();
						public onResume(): void;
						public createDelegate(param0: com.google.android.gms.dynamic.OnDelegateCreatedListener<T>): void;
						public handleGooglePlayUnavailable(param0: globalAndroid.widget.FrameLayout): void;
						public onLowMemory(): void;
						public onStop(): void;
						public onPause(): void;
						public onDestroyView(): void;
						public onDestroy(): void;
						public onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public static showGooglePlayUnavailableMessage(param0: globalAndroid.widget.FrameLayout): void;
						public onStart(): void;
						public getDelegate(): T;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class zaa extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zaa>;
						public onDelegateCreated(param0: com.google.android.gms.dynamic.LifecycleDelegate): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class zab extends java.lang.Object implements com.google.android.gms.dynamic.zah {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zab>;
						public zaa(): number;
						public zab(param0: com.google.android.gms.dynamic.LifecycleDelegate): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class zac extends java.lang.Object implements com.google.android.gms.dynamic.zah {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zac>;
						public zaa(): number;
						public zab(param0: com.google.android.gms.dynamic.LifecycleDelegate): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class zad extends java.lang.Object implements com.google.android.gms.dynamic.zah {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zad>;
						public zaa(): number;
						public zab(param0: com.google.android.gms.dynamic.LifecycleDelegate): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class zae extends java.lang.Object implements globalAndroid.view.View.OnClickListener {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zae>;
						public onClick(param0: globalAndroid.view.View): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class zaf extends java.lang.Object implements com.google.android.gms.dynamic.zah {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zaf>;
						public zaa(): number;
						public zab(param0: com.google.android.gms.dynamic.LifecycleDelegate): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class zag extends java.lang.Object implements com.google.android.gms.dynamic.zah {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zag>;
						public zaa(): number;
						public zab(param0: com.google.android.gms.dynamic.LifecycleDelegate): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class zah extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zah>;
						/**
						 * Constructs a new instance of the com.google.android.gms.dynamic.zah interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zaa(): number;
							zab(param0: com.google.android.gms.dynamic.LifecycleDelegate): void;
						});
						public constructor();
						public zaa(): number;
						public zab(param0: com.google.android.gms.dynamic.LifecycleDelegate): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module base {
						export class zaa extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zaa>;
							public constructor(param0: globalAndroid.os.IBinder, param1: string);
							public asBinder(): globalAndroid.os.IBinder;
							public zab(param0: number, param1: globalAndroid.os.Parcel): globalAndroid.os.Parcel;
							public zad(param0: number, param1: globalAndroid.os.Parcel): void;
							public zac(param0: number, param1: globalAndroid.os.Parcel): void;
							public zaa(): globalAndroid.os.Parcel;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module base {
						export class zab extends globalAndroid.os.Binder implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zab>;
							public constructor();
							public zaa(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
							public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public static getSuggestedMaxIpcSizeBytes(): number;
							public pingBinder(): boolean;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public constructor(param0: string);
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module base {
						export class zac extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zac>;
							public static zac(param0: globalAndroid.os.Parcel, param1: boolean): void;
							public static zaa(param0: globalAndroid.os.Parcel, param1: globalAndroid.os.Parcelable.Creator<any>): globalAndroid.os.Parcelable;
							public static zad(param0: globalAndroid.os.Parcel, param1: globalAndroid.os.Parcelable): void;
							public static zab(param0: globalAndroid.os.Parcel): void;
							public static zae(param0: globalAndroid.os.Parcel, param1: globalAndroid.os.IInterface): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module base {
						export class zad extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zad>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.base.zad interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								equals(param0: any): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class<any>;
							});
							public constructor();
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module base {
						export class zae extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zae>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.base.zae interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								equals(param0: any): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class<any>;
							});
							public constructor();
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module base {
						export class zaf extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zaf>;
							public static zaa: com.google.android.gms.common.Feature;
							public static zab: androidNative.Array<com.google.android.gms.common.Feature>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module base {
						export class zag extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zag>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module base {
						export class zah extends globalAndroid.graphics.drawable.Drawable.ConstantState {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zah>;
							public newDrawable(): globalAndroid.graphics.drawable.Drawable;
							public getChangingConfigurations(): number;
							public newDrawable(param0: globalAndroid.content.res.Resources): globalAndroid.graphics.drawable.Drawable;
							public newDrawable(param0: globalAndroid.content.res.Resources, param1: globalAndroid.content.res.Resources.Theme): globalAndroid.graphics.drawable.Drawable;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module base {
						export class zai extends globalAndroid.graphics.drawable.Drawable {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zai>;
							public setAlpha(param0: number): void;
							public getConstantState(): globalAndroid.graphics.drawable.Drawable.ConstantState;
							/** @deprecated */
							public getOpacity(): number;
							public getOpacity(): number;
							public draw(param0: globalAndroid.graphics.Canvas): void;
							/** @deprecated */
							public setColorFilter(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode): void;
							public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module base {
						export class zaj extends globalAndroid.graphics.drawable.Drawable.ConstantState {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zaj>;
							public newDrawable(): globalAndroid.graphics.drawable.Drawable;
							public getChangingConfigurations(): number;
							public newDrawable(param0: globalAndroid.content.res.Resources): globalAndroid.graphics.drawable.Drawable;
							public newDrawable(param0: globalAndroid.content.res.Resources, param1: globalAndroid.content.res.Resources.Theme): globalAndroid.graphics.drawable.Drawable;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module base {
						export class zak extends globalAndroid.graphics.drawable.Drawable implements globalAndroid.graphics.drawable.Drawable.Callback {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zak>;
							public constructor();
							public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
							public getConstantState(): globalAndroid.graphics.drawable.Drawable.ConstantState;
							/** @deprecated */
							public getOpacity(): number;
							public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
							public draw(param0: globalAndroid.graphics.Canvas): void;
							public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
							/** @deprecated */
							public setColorFilter(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode): void;
							public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
							public getIntrinsicHeight(): number;
							public getChangingConfigurations(): number;
							public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
							public mutate(): globalAndroid.graphics.drawable.Drawable;
							public setAlpha(param0: number): void;
							public zab(param0: number): void;
							public getIntrinsicWidth(): number;
							public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.drawable.Drawable);
							public zac(): boolean;
							public getOpacity(): number;
							public zaa(): globalAndroid.graphics.drawable.Drawable;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module base {
						export class zal extends globalAndroid.widget.ImageView {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zal>;
							public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
							public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
							public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
							public onMeasure(param0: number, param1: number): void;
							public sendAccessibilityEvent(param0: number): void;
							public onDraw(param0: globalAndroid.graphics.Canvas): void;
							public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
							public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
							public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
							public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
							public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
							public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module base {
						export class zam {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zam>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module base {
						export class zan extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zan>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module base {
						export class zao {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zao>;
							/** @deprecated */
							public static zaa(param0: globalAndroid.content.Context, param1: globalAndroid.content.BroadcastReceiver, param2: globalAndroid.content.IntentFilter): globalAndroid.content.Intent;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module base {
						export class zap extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zap>;
							public static zaa: number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module base {
						export class zaq extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zaq>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.base.zaq interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zaa(param0: java.util.concurrent.ThreadFactory, param1: number): java.util.concurrent.ExecutorService;
								zab(param0: number, param1: number): java.util.concurrent.ExecutorService;
								zac(param0: number, param1: java.util.concurrent.ThreadFactory, param2: number): java.util.concurrent.ExecutorService;
							});
							public constructor();
							public zab(param0: number, param1: number): java.util.concurrent.ExecutorService;
							public zac(param0: number, param1: java.util.concurrent.ThreadFactory, param2: number): java.util.concurrent.ExecutorService;
							public zaa(param0: java.util.concurrent.ThreadFactory, param1: number): java.util.concurrent.ExecutorService;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module base {
						export class zar extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zar>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module base {
						export class zas extends java.lang.Object implements com.google.android.gms.internal.base.zaq {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zas>;
							public zab(param0: number, param1: number): java.util.concurrent.ExecutorService;
							public zac(param0: number, param1: java.util.concurrent.ThreadFactory, param2: number): java.util.concurrent.ExecutorService;
							public zaa(param0: java.util.concurrent.ThreadFactory, param1: number): java.util.concurrent.ExecutorService;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module base {
						export class zat extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zat>;
							public static zaa(): com.google.android.gms.internal.base.zaq;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module base {
						export class zau extends globalAndroid.os.Handler {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zau>;
							/** @deprecated */
							public constructor();
							public constructor();
							public constructor(param0: globalAndroid.os.Looper);
							/** @deprecated */
							public constructor(param0: globalAndroid.os.Handler.Callback);
							public constructor(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module base {
						export class zav extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zav>;
							public static zaa: com.google.android.gms.common.Feature;
							public static zab: androidNative.Array<com.google.android.gms.common.Feature>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zza extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zza>;
							public constructor(param0: globalAndroid.os.IBinder, param1: string);
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzaa extends java.lang.Object implements com.google.android.gms.common.api.internal.RemoteCall<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzaa>;
							public accept(param0: any, param1: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzab extends java.lang.Object implements com.google.android.gms.common.api.internal.RemoteCall<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzab>;
							public accept(param0: any, param1: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzac extends java.lang.Object implements com.google.android.gms.common.api.internal.RemoteCall<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzac>;
							public accept(param0: any, param1: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzad extends com.google.android.gms.common.api.Api.AbstractClientBuilder<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzad>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzae extends com.google.android.gms.common.api.internal.IStatusCallback.Stub {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzae>;
							public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
							public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public static getSuggestedMaxIpcSizeBytes(): number;
							public pingBinder(): boolean;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
							public onResult(param0: com.google.android.gms.common.api.Status): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzaf extends java.lang.Object implements com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzaf>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
							public constructor(param0: com.google.android.gms.tasks.TaskCompletionSource);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzag extends com.google.android.gms.common.api.GoogleApi<any> implements com.google.android.gms.location.ActivityRecognitionClient {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzag>;
							public removeActivityTransitionUpdates(param0: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
							/** @deprecated */
							public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
							/** @deprecated */
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: globalAndroid.os.Looper, param4: com.google.android.gms.common.api.internal.StatusExceptionMapper);
							public removeSleepSegmentUpdates(param0: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
							public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
							public requestSleepSegmentUpdates(param0: globalAndroid.app.PendingIntent, param1: com.google.android.gms.location.SleepSegmentRequest): com.google.android.gms.tasks.Task<java.lang.Void>;
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
							public getApiKey(): com.google.android.gms.common.api.internal.ApiKey<any>;
							public removeActivityUpdates(param0: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
							/** @deprecated */
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
							public requestActivityTransitionUpdates(param0: com.google.android.gms.location.ActivityTransitionRequest, param1: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
							public constructor(param0: globalAndroid.app.Activity);
							public requestActivityUpdates(param0: number, param1: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzah extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzah>;
							public onComplete(param0: com.google.android.gms.tasks.Task): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzai extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzai>;
							public onComplete(param0: com.google.android.gms.tasks.Task): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzaj extends com.google.android.gms.internal.location.zzat {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzaj>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzak extends com.google.android.gms.internal.location.zzat {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzak>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzal extends com.google.android.gms.internal.location.zzat {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzal>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzam extends com.google.android.gms.internal.location.zzat {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzam>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzan extends com.google.android.gms.internal.location.zzat {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzan>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzao extends com.google.android.gms.internal.location.zzat {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzao>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzap extends com.google.android.gms.internal.location.zzat {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzap>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzaq extends com.google.android.gms.internal.location.zzat {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzaq>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzar extends com.google.android.gms.internal.location.zzat {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzar>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzas extends java.lang.Object implements com.google.android.gms.internal.location.zzcs {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzas>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export abstract class zzat extends com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzat>;
							public constructor();
							public setResult(param0: any): void;
							public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
							/** @deprecated */
							public constructor(param0: globalAndroid.os.Looper);
							/** @deprecated */
							public constructor(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
							public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
							public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzau extends java.lang.Object implements com.google.android.gms.location.FusedLocationProviderApi {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzau>;
							public getLocationAvailability(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.location.LocationAvailability;
							public constructor();
							public removeLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationListener): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public requestLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationRequest, param2: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public requestLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationRequest, param2: com.google.android.gms.location.LocationCallback, param3: globalAndroid.os.Looper): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public requestLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationRequest, param2: com.google.android.gms.location.LocationListener, param3: globalAndroid.os.Looper): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public getLastLocation(param0: com.google.android.gms.common.api.GoogleApiClient): globalAndroid.location.Location;
							public removeLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public setMockMode(param0: com.google.android.gms.common.api.GoogleApiClient, param1: boolean): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public flushLocations(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public setMockLocation(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.location.Location): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public requestLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationRequest, param2: com.google.android.gms.location.LocationListener): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public removeLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationCallback): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzav extends java.lang.Object implements com.google.android.gms.common.api.internal.RemoteCall<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzav>;
							public accept(param0: any, param1: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzaw extends java.lang.Object implements com.google.android.gms.common.api.internal.RemoteCall<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzaw>;
							public accept(param0: any, param1: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzax extends java.lang.Object implements com.google.android.gms.internal.location.zzbn {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzax>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzay extends java.lang.Object implements com.google.android.gms.common.api.internal.RemoteCall<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzay>;
							public accept(param0: any, param1: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzaz extends java.lang.Object implements com.google.android.gms.common.api.internal.RemoteCall<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzaz>;
							public accept(param0: any, param1: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzb extends globalAndroid.os.Binder implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzb>;
							public constructor();
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
							public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public static getSuggestedMaxIpcSizeBytes(): number;
							public pingBinder(): boolean;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public constructor(param0: string);
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzba extends java.lang.Object implements com.google.android.gms.common.api.internal.RemoteCall<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzba>;
							public accept(param0: any, param1: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbb extends java.lang.Object implements com.google.android.gms.common.api.internal.RemoteCall<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbb>;
							public accept(param0: any, param1: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbc extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbc>;
							public then(param0: com.google.android.gms.tasks.Task): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbd extends java.lang.Object implements com.google.android.gms.internal.location.zzbn {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbd>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbe extends java.lang.Object implements com.google.android.gms.common.api.internal.RemoteCall<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbe>;
							public accept(param0: any, param1: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbf extends java.lang.Object implements com.google.android.gms.common.api.internal.RemoteCall<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbf>;
							public accept(param0: any, param1: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbg extends java.lang.Object implements com.google.android.gms.common.api.internal.RemoteCall<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbg>;
							public accept(param0: any, param1: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbh extends java.lang.Object implements com.google.android.gms.common.api.internal.RemoteCall<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbh>;
							public accept(param0: any, param1: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbi extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbi>;
							public then(param0: com.google.android.gms.tasks.Task): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbj extends java.lang.Object implements com.google.android.gms.common.api.internal.RemoteCall<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbj>;
							public accept(param0: any, param1: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbk extends java.lang.Object implements java.util.concurrent.Executor {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbk>;
							public execute(param0: java.lang.Runnable): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbl extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbl>;
							public then(param0: com.google.android.gms.tasks.Task): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbm extends com.google.android.gms.common.api.Api.AbstractClientBuilder<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbn extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbn>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.location.zzbn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: any /* com.google.android.gms.internal.location.zzda*/, param1: com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<any>, param2: boolean, param3: com.google.android.gms.tasks.TaskCompletionSource): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbo extends java.lang.Object implements com.google.android.gms.common.api.internal.RemoteCall<any,any>, com.google.android.gms.internal.location.zzcs {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbo>;
							public accept(param0: any, param1: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbp extends com.google.android.gms.common.api.GoogleApi<any> implements com.google.android.gms.location.FusedLocationProviderClient {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbp>;
							public requestLocationUpdates(param0: com.google.android.gms.location.LocationRequest, param1: com.google.android.gms.location.LocationListener, param2: globalAndroid.os.Looper): com.google.android.gms.tasks.Task<java.lang.Void>;
							public requestLocationUpdates(param0: com.google.android.gms.location.LocationRequest, param1: java.util.concurrent.Executor, param2: com.google.android.gms.location.LocationListener): com.google.android.gms.tasks.Task<java.lang.Void>;
							public setMockLocation(param0: globalAndroid.location.Location): com.google.android.gms.tasks.Task<java.lang.Void>;
							/** @deprecated */
							public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
							public flushLocations(): com.google.android.gms.tasks.Task<java.lang.Void>;
							/** @deprecated */
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: globalAndroid.os.Looper, param4: com.google.android.gms.common.api.internal.StatusExceptionMapper);
							public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
							public setMockMode(param0: boolean): com.google.android.gms.tasks.Task<java.lang.Void>;
							public removeLocationUpdates(param0: com.google.android.gms.location.LocationCallback): com.google.android.gms.tasks.Task<java.lang.Void>;
							public getLocationAvailability(): com.google.android.gms.tasks.Task<com.google.android.gms.location.LocationAvailability>;
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
							public getLastLocation(param0: com.google.android.gms.location.LastLocationRequest): com.google.android.gms.tasks.Task<globalAndroid.location.Location>;
							public removeLocationUpdates(param0: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
							public getApiKey(): com.google.android.gms.common.api.internal.ApiKey<any>;
							public getLastLocation(): com.google.android.gms.tasks.Task<globalAndroid.location.Location>;
							public requestLocationUpdates(param0: com.google.android.gms.location.LocationRequest, param1: com.google.android.gms.location.LocationCallback, param2: globalAndroid.os.Looper): com.google.android.gms.tasks.Task<java.lang.Void>;
							public getCurrentLocation(param0: com.google.android.gms.location.CurrentLocationRequest, param1: com.google.android.gms.tasks.CancellationToken): com.google.android.gms.tasks.Task<globalAndroid.location.Location>;
							public requestLocationUpdates(param0: com.google.android.gms.location.LocationRequest, param1: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
							public removeLocationUpdates(param0: com.google.android.gms.location.LocationListener): com.google.android.gms.tasks.Task<java.lang.Void>;
							/** @deprecated */
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
							public requestLocationUpdates(param0: com.google.android.gms.location.LocationRequest, param1: java.util.concurrent.Executor, param2: com.google.android.gms.location.LocationCallback): com.google.android.gms.tasks.Task<java.lang.Void>;
							public constructor(param0: globalAndroid.app.Activity);
							public getCurrentLocation(param0: number, param1: com.google.android.gms.tasks.CancellationToken): com.google.android.gms.tasks.Task<globalAndroid.location.Location>;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbq extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbq>;
							public onComplete(param0: com.google.android.gms.tasks.Task): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbr extends com.google.android.gms.internal.location.zzbu {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbr>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbs extends com.google.android.gms.internal.location.zzbu {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbs>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbt extends com.google.android.gms.internal.location.zzbu {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbt>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export abstract class zzbu extends com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbu>;
							public constructor();
							public setResult(param0: any): void;
							public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
							/** @deprecated */
							public constructor(param0: globalAndroid.os.Looper);
							/** @deprecated */
							public constructor(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
							public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
							public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbv extends java.lang.Object implements com.google.android.gms.location.GeofencingApi {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbv>;
							public constructor();
							public addGeofences(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.GeofencingRequest, param2: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public removeGeofences(param0: com.google.android.gms.common.api.GoogleApiClient, param1: java.util.List<string>): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							/** @deprecated */
							public addGeofences(param0: com.google.android.gms.common.api.GoogleApiClient, param1: java.util.List<com.google.android.gms.location.Geofence>, param2: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public removeGeofences(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbw extends java.lang.Object implements com.google.android.gms.common.api.internal.RemoteCall<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbw>;
							public accept(param0: any, param1: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbx extends java.lang.Object implements com.google.android.gms.common.api.internal.RemoteCall<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbx>;
							public accept(param0: any, param1: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzby extends java.lang.Object implements com.google.android.gms.common.api.internal.RemoteCall<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzby>;
							public accept(param0: any, param1: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbz extends com.google.android.gms.common.api.GoogleApi<any> implements com.google.android.gms.location.GeofencingClient {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbz>;
							public removeGeofences(param0: java.util.List<string>): com.google.android.gms.tasks.Task<java.lang.Void>;
							/** @deprecated */
							public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
							/** @deprecated */
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: globalAndroid.os.Looper, param4: com.google.android.gms.common.api.internal.StatusExceptionMapper);
							public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
							/** @deprecated */
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
							public addGeofences(param0: com.google.android.gms.location.GeofencingRequest, param1: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
							public constructor(param0: globalAndroid.app.Activity);
							public removeGeofences(param0: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
							public getApiKey(): com.google.android.gms.common.api.internal.ApiKey<any>;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzc extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzca extends com.google.android.gms.internal.location.zzcb {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzca>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export abstract class zzcb extends com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzcb>;
							public constructor();
							public setResult(param0: any): void;
							public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
							/** @deprecated */
							public constructor(param0: globalAndroid.os.Looper);
							/** @deprecated */
							public constructor(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
							public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
							public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzcc extends java.lang.Object implements com.google.android.gms.location.SettingsApi {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzcc>;
							public constructor();
							public checkLocationSettings(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationSettingsRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.location.LocationSettingsResult>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzcd extends java.lang.Object implements com.google.android.gms.common.api.internal.RemoteCall<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzcd>;
							public accept(param0: any, param1: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzce extends com.google.android.gms.common.api.GoogleApi<any> implements com.google.android.gms.location.SettingsClient {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzce>;
							/** @deprecated */
							public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
							/** @deprecated */
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: globalAndroid.os.Looper, param4: com.google.android.gms.common.api.internal.StatusExceptionMapper);
							public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
							/** @deprecated */
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
							public constructor(param0: globalAndroid.app.Activity);
							public checkLocationSettings(param0: com.google.android.gms.location.LocationSettingsRequest): com.google.android.gms.tasks.Task<com.google.android.gms.location.LocationSettingsResponse>;
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
							public getApiKey(): com.google.android.gms.common.api.internal.ApiKey<any>;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzcf extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzcf>;
							public onCanceled(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzcg extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzcg>;
							public onComplete(param0: com.google.android.gms.tasks.Task): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzch extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzch>;
							public onCanceled(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzci extends com.google.android.gms.internal.location.zzl {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzci>;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
							public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public static getSuggestedMaxIpcSizeBytes(): number;
							public pingBinder(): boolean;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzcj extends com.google.android.gms.location.LocationCallback {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzcj>;
							public onLocationResult(param0: com.google.android.gms.location.LocationResult): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzck extends java.lang.Object implements com.google.android.gms.internal.location.zzcs {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzck>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzcl extends com.google.android.gms.common.api.internal.IStatusCallback.Stub {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzcl>;
							public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
							public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public static getSuggestedMaxIpcSizeBytes(): number;
							public pingBinder(): boolean;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
							public onResult(param0: com.google.android.gms.common.api.Status): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzcm extends com.google.android.gms.internal.location.zzp {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzcm>;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
							public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public static getSuggestedMaxIpcSizeBytes(): number;
							public pingBinder(): boolean;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzcn extends com.google.android.gms.internal.location.zzj {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzcn>;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
							public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public static getSuggestedMaxIpcSizeBytes(): number;
							public pingBinder(): boolean;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzco extends com.google.android.gms.internal.location.zzj {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzco>;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
							public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public static getSuggestedMaxIpcSizeBytes(): number;
							public pingBinder(): boolean;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzcp extends com.google.android.gms.internal.location.zzj {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzcp>;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
							public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public static getSuggestedMaxIpcSizeBytes(): number;
							public pingBinder(): boolean;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzcq extends com.google.android.gms.internal.location.zzr {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzcq>;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
							public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public static getSuggestedMaxIpcSizeBytes(): number;
							public pingBinder(): boolean;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzcr extends com.google.android.gms.internal.location.zzr {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzcr>;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
							public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public static getSuggestedMaxIpcSizeBytes(): number;
							public pingBinder(): boolean;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzcs extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzcs>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.location.zzcs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(): com.google.android.gms.common.api.internal.ListenerHolder<any>;
								zzb(): void;
								zzc(param0: com.google.android.gms.common.api.internal.ListenerHolder<any>): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzct extends java.lang.Object implements com.google.android.gms.common.api.internal.ListenerHolder.Notifier<any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzct>;
							public onNotifyListenerFailed(): void;
							public notifyListener(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzcu extends java.lang.Object implements com.google.android.gms.common.api.internal.ListenerHolder.Notifier<any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzcu>;
							public onNotifyListenerFailed(): void;
							public notifyListener(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzcv extends java.lang.Object implements com.google.android.gms.common.api.internal.ListenerHolder.Notifier<any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzcv>;
							public onNotifyListenerFailed(): void;
							public notifyListener(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzcw extends com.google.android.gms.location.zzq {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzcw>;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
							public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public static getSuggestedMaxIpcSizeBytes(): number;
							public pingBinder(): boolean;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzcx extends java.lang.Object implements com.google.android.gms.common.api.internal.ListenerHolder.Notifier<any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzcx>;
							public onNotifyListenerFailed(): void;
							public notifyListener(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzcy extends java.lang.Object implements com.google.android.gms.common.api.internal.ListenerHolder.Notifier<any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzcy>;
							public onNotifyListenerFailed(): void;
							public notifyListener(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzcz extends com.google.android.gms.location.zzt {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzcz>;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
							public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public static getSuggestedMaxIpcSizeBytes(): number;
							public pingBinder(): boolean;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzd {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzd>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.location.zzd>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzda extends com.google.android.gms.common.internal.GmsClient<any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzda>;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.ClientSettings, param3: com.google.android.gms.common.api.internal.ConnectionCallbacks, param4: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
							public getStartServiceAction(): string;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailability, param4: number, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.internal.ConnectionCallbacks, param7: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
							public getServiceBrokerBinder(): globalAndroid.os.IBinder;
							public requiresGooglePlayServices(): boolean;
							public getServiceDescriptor(): string;
							public onConnectionSuspended(param0: number): void;
							public usesClientTelemetry(): boolean;
							public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public getEndpointPackageName(): string;
							public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public getSignInIntent(): globalAndroid.content.Intent;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public getScopesForConnectionlessNonSignIn(): java.util.Set<com.google.android.gms.common.api.Scope>;
							public requiresAccount(): boolean;
							public disconnect(): void;
							public isConnected(): boolean;
							public providesSignIn(): boolean;
							/** @deprecated */
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public isConnecting(): boolean;
							public getLastDisconnectMessage(): string;
							public disconnect(param0: string): void;
							public getMinApkVersion(): number;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.internal.ConnectionCallbacks, param5: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
							public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
							public getApiFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
							public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
							public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
							public requiresSignIn(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzdb {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzdb>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.location.zzdb>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzdc extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzdc>;
							public constructor();
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
							public newArray(param0: number): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzdd {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzdd>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.location.zzdd>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzde extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzde>;
							public constructor();
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
							public newArray(param0: number): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzdf {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzdf>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.location.zzdf>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzdg extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzdg>;
							public constructor();
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
							public newArray(param0: number): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzdh implements com.google.android.gms.location.Geofence {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzdh>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.location.zzdh>*/;
							public getRadius(): number;
							public getNotificationResponsiveness(): number;
							public getLongitude(): number;
							public hashCode(): number;
							public toString(): string;
							public getTransitionTypes(): number;
							public getRequestId(): string;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getLoiteringDelay(): number;
							public getExpirationTime(): number;
							public constructor(param0: string, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number);
							public equals(param0: any): boolean;
							public getLatitude(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzdi extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzdi>;
							public constructor();
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
							public newArray(param0: number): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzdj extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzdj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzdk extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzdk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzdl extends com.google.android.gms.internal.location.zzdk {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzdl>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzdm extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzdm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzdn extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzdn>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export abstract class zzdo extends com.google.android.gms.internal.location.zzdv {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzdo>;
							public constructor();
							public add(param0: any): void;
							public previous(): any;
							public constructor(param0: number, param1: number);
							public hasNext(): boolean;
							public remove(): void;
							/** @deprecated */
							public add(param0: any): void;
							public set(param0: any): void;
							public previousIndex(): number;
							/** @deprecated */
							public remove(): void;
							public nextIndex(): number;
							public hasPrevious(): boolean;
							/** @deprecated */
							public set(param0: any): void;
							public next(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export abstract class zzdp extends java.util.AbstractCollection<any> implements java.io.Serializable {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzdp>;
							public contains(param0: any): boolean;
							public size(): number;
							public hashCode(): number;
							public spliterator(): java.util.Spliterator<any>;
							/** @deprecated */
							public clear(): void;
							public toArray(): androidNative.Array<any>;
							public stream(): java.util.stream.Stream<any>;
							public addAll(param0: java.util.Collection<any>): boolean;
							/** @deprecated */
							public retainAll(param0: java.util.Collection<any>): boolean;
							public add(param0: any): boolean;
							/** @deprecated */
							public addAll(param0: java.util.Collection<any>): boolean;
							/** @deprecated */
							public add(param0: any): boolean;
							public removeAll(param0: java.util.Collection<any>): boolean;
							public retainAll(param0: java.util.Collection<any>): boolean;
							public iterator(): java.util.Iterator<any>;
							public containsAll(param0: java.util.Collection<any>): boolean;
							public remove(param0: any): boolean;
							/** @deprecated */
							public remove(param0: any): boolean;
							public clear(): void;
							public removeIf(param0: any /* any*/): boolean;
							/** @deprecated */
							public removeAll(param0: java.util.Collection<any>): boolean;
							public toArray(param0: androidNative.Array<any>): androidNative.Array<any>;
							public isEmpty(): boolean;
							public equals(param0: any): boolean;
							public parallelStream(): java.util.stream.Stream<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzdq extends com.google.android.gms.internal.location.zzdo {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzdq>;
							public set(param0: any): void;
							public previousIndex(): number;
							public add(param0: any): void;
							public previous(): any;
							/** @deprecated */
							public remove(): void;
							public nextIndex(): number;
							public hasNext(): boolean;
							public remove(): void;
							/** @deprecated */
							public add(param0: any): void;
							public hasPrevious(): boolean;
							/** @deprecated */
							public set(param0: any): void;
							public next(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzdr extends com.google.android.gms.internal.location.zzds {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzdr>;
							public subList(param0: number, param1: number): java.util.List<any>;
							/** @deprecated */
							public addAll(param0: number, param1: java.util.Collection<any>): boolean;
							public static of(param0: any, param1: any): java.util.List<any>;
							/** @deprecated */
							public clear(): void;
							public stream(): java.util.stream.Stream<any>;
							/** @deprecated */
							public set(param0: number, param1: any): any;
							public addAll(param0: java.util.Collection<any>): boolean;
							/** @deprecated */
							public addAll(param0: java.util.Collection<any>): boolean;
							/** @deprecated */
							public add(param0: any): boolean;
							public removeAll(param0: java.util.Collection<any>): boolean;
							public add(param0: number, param1: any): void;
							public retainAll(param0: java.util.Collection<any>): boolean;
							public static of(): java.util.List<any>;
							public remove(param0: any): boolean;
							/** @deprecated */
							public remove(param0: any): boolean;
							public get(param0: number): any;
							/** @deprecated */
							public remove(param0: number): any;
							public indexOf(param0: any): number;
							public static of(param0: any, param1: any, param2: any, param3: any, param4: any): java.util.List<any>;
							public static of(param0: any, param1: any, param2: any, param3: any): java.util.List<any>;
							public addAll(param0: number, param1: java.util.Collection<any>): boolean;
							public static of(param0: any, param1: any, param2: any): java.util.List<any>;
							public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any): java.util.List<any>;
							public isEmpty(): boolean;
							/** @deprecated */
							public removeAll(param0: java.util.Collection<any>): boolean;
							public equals(param0: any): boolean;
							public parallelStream(): java.util.stream.Stream<any>;
							public contains(param0: any): boolean;
							public remove(param0: number): any;
							public size(): number;
							public hashCode(): number;
							public spliterator(): java.util.Spliterator<any>;
							public toArray(): androidNative.Array<any>;
							/** @deprecated */
							public add(param0: number, param1: any): void;
							public listIterator(): java.util.ListIterator<any>;
							public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any): java.util.List<any>;
							public static of(param0: any): java.util.List<any>;
							/** @deprecated */
							public retainAll(param0: java.util.Collection<any>): boolean;
							public set(param0: number, param1: any): any;
							public add(param0: any): boolean;
							public listIterator(param0: number): java.util.ListIterator<any>;
							public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any): java.util.List<any>;
							public static copyOf(param0: java.util.Collection<any>): java.util.List<any>;
							public static of(param0: androidNative.Array<any>): java.util.List<any>;
							public replaceAll(param0: any /* any*/): void;
							public sort(param0: java.util.Comparator<any>): void;
							public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any): java.util.List<any>;
							public iterator(): java.util.Iterator<any>;
							public containsAll(param0: java.util.Collection<any>): boolean;
							public lastIndexOf(param0: any): number;
							public clear(): void;
							public removeIf(param0: any /* any*/): boolean;
							public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any): java.util.List<any>;
							public toArray(param0: androidNative.Array<any>): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export abstract class zzds extends com.google.android.gms.internal.location.zzdp implements java.util.List<any>, java.util.RandomAccess {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzds>;
							public subList(param0: number, param1: number): java.util.List<any>;
							/** @deprecated */
							public addAll(param0: number, param1: java.util.Collection<any>): boolean;
							public static of(param0: any, param1: any): java.util.List<any>;
							/** @deprecated */
							public clear(): void;
							public stream(): java.util.stream.Stream<any>;
							/** @deprecated */
							public set(param0: number, param1: any): any;
							public addAll(param0: java.util.Collection<any>): boolean;
							/** @deprecated */
							public addAll(param0: java.util.Collection<any>): boolean;
							/** @deprecated */
							public add(param0: any): boolean;
							public removeAll(param0: java.util.Collection<any>): boolean;
							public add(param0: number, param1: any): void;
							public forEach(param0: any /* any*/): void;
							public retainAll(param0: java.util.Collection<any>): boolean;
							public static of(): java.util.List<any>;
							public remove(param0: any): boolean;
							/** @deprecated */
							public remove(param0: any): boolean;
							/** @deprecated */
							public remove(param0: number): any;
							public get(param0: number): any;
							public indexOf(param0: any): number;
							public static of(param0: any, param1: any, param2: any, param3: any, param4: any): java.util.List<any>;
							public static of(param0: any, param1: any, param2: any, param3: any): java.util.List<any>;
							public addAll(param0: number, param1: java.util.Collection<any>): boolean;
							public static of(param0: any, param1: any, param2: any): java.util.List<any>;
							public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any): java.util.List<any>;
							public equals(param0: any): boolean;
							public isEmpty(): boolean;
							/** @deprecated */
							public removeAll(param0: java.util.Collection<any>): boolean;
							public parallelStream(): java.util.stream.Stream<any>;
							public contains(param0: any): boolean;
							public remove(param0: number): any;
							public size(): number;
							public hashCode(): number;
							public spliterator(): java.util.Spliterator<any>;
							public toArray(): androidNative.Array<any>;
							/** @deprecated */
							public add(param0: number, param1: any): void;
							public listIterator(): java.util.ListIterator<any>;
							public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any): java.util.List<any>;
							public static of(param0: any): java.util.List<any>;
							/** @deprecated */
							public retainAll(param0: java.util.Collection<any>): boolean;
							public set(param0: number, param1: any): any;
							public add(param0: any): boolean;
							public listIterator(param0: number): java.util.ListIterator<any>;
							public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any): java.util.List<any>;
							public static copyOf(param0: java.util.Collection<any>): java.util.List<any>;
							public static of(param0: androidNative.Array<any>): java.util.List<any>;
							public replaceAll(param0: any /* any*/): void;
							public sort(param0: java.util.Comparator<any>): void;
							public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any): java.util.List<any>;
							public lastIndexOf(param0: any): number;
							public iterator(): java.util.Iterator<any>;
							public containsAll(param0: java.util.Collection<any>): boolean;
							public clear(): void;
							public removeIf(param0: any /* any*/): boolean;
							public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any): java.util.List<any>;
							public toArray(param0: androidNative.Array<any>): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzdt extends com.google.android.gms.internal.location.zzds {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzdt>;
							public subList(param0: number, param1: number): java.util.List<any>;
							/** @deprecated */
							public addAll(param0: number, param1: java.util.Collection<any>): boolean;
							public static of(param0: any, param1: any): java.util.List<any>;
							/** @deprecated */
							public clear(): void;
							public stream(): java.util.stream.Stream<any>;
							/** @deprecated */
							public set(param0: number, param1: any): any;
							public addAll(param0: java.util.Collection<any>): boolean;
							/** @deprecated */
							public addAll(param0: java.util.Collection<any>): boolean;
							/** @deprecated */
							public add(param0: any): boolean;
							public removeAll(param0: java.util.Collection<any>): boolean;
							public add(param0: number, param1: any): void;
							public retainAll(param0: java.util.Collection<any>): boolean;
							public static of(): java.util.List<any>;
							public remove(param0: any): boolean;
							/** @deprecated */
							public remove(param0: any): boolean;
							public get(param0: number): any;
							/** @deprecated */
							public remove(param0: number): any;
							public indexOf(param0: any): number;
							public static of(param0: any, param1: any, param2: any, param3: any, param4: any): java.util.List<any>;
							public static of(param0: any, param1: any, param2: any, param3: any): java.util.List<any>;
							public addAll(param0: number, param1: java.util.Collection<any>): boolean;
							public static of(param0: any, param1: any, param2: any): java.util.List<any>;
							public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any): java.util.List<any>;
							public isEmpty(): boolean;
							/** @deprecated */
							public removeAll(param0: java.util.Collection<any>): boolean;
							public equals(param0: any): boolean;
							public parallelStream(): java.util.stream.Stream<any>;
							public contains(param0: any): boolean;
							public remove(param0: number): any;
							public size(): number;
							public hashCode(): number;
							public spliterator(): java.util.Spliterator<any>;
							public toArray(): androidNative.Array<any>;
							/** @deprecated */
							public add(param0: number, param1: any): void;
							public listIterator(): java.util.ListIterator<any>;
							public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any): java.util.List<any>;
							public static of(param0: any): java.util.List<any>;
							/** @deprecated */
							public retainAll(param0: java.util.Collection<any>): boolean;
							public set(param0: number, param1: any): any;
							public add(param0: any): boolean;
							public listIterator(param0: number): java.util.ListIterator<any>;
							public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any): java.util.List<any>;
							public static copyOf(param0: java.util.Collection<any>): java.util.List<any>;
							public static of(param0: androidNative.Array<any>): java.util.List<any>;
							public replaceAll(param0: any /* any*/): void;
							public sort(param0: java.util.Comparator<any>): void;
							public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any): java.util.List<any>;
							public iterator(): java.util.Iterator<any>;
							public containsAll(param0: java.util.Collection<any>): boolean;
							public lastIndexOf(param0: any): number;
							public clear(): void;
							public removeIf(param0: any /* any*/): boolean;
							public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any): java.util.List<any>;
							public toArray(param0: androidNative.Array<any>): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export abstract class zzdu extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzdu>;
							public constructor();
							/** @deprecated */
							public remove(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export abstract class zzdv extends com.google.android.gms.internal.location.zzdu implements java.util.ListIterator<any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzdv>;
							public constructor();
							public add(param0: any): void;
							public previous(): any;
							public hasNext(): boolean;
							public remove(): void;
							/** @deprecated */
							public add(param0: any): void;
							public set(param0: any): void;
							public previousIndex(): number;
							/** @deprecated */
							public remove(): void;
							public nextIndex(): number;
							public hasPrevious(): boolean;
							/** @deprecated */
							public set(param0: any): void;
							public next(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzdw extends java.lang.Enum<any> implements java.util.concurrent.Executor {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzdw>;
							public execute(param0: java.lang.Runnable): void;
							public static values(): any /* androidNative.Array<com.google.android.gms.internal.location.zzdw>*/;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzdx extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzdx>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zze extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zze>;
							public constructor();
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
							public newArray(param0: number): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzf extends com.google.android.gms.common.internal.GmsClient<any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzf>;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.ClientSettings, param3: com.google.android.gms.common.api.internal.ConnectionCallbacks, param4: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
							public getStartServiceAction(): string;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailability, param4: number, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.internal.ConnectionCallbacks, param7: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
							public getServiceBrokerBinder(): globalAndroid.os.IBinder;
							public requiresGooglePlayServices(): boolean;
							public getServiceDescriptor(): string;
							public usesClientTelemetry(): boolean;
							public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public getEndpointPackageName(): string;
							public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public getSignInIntent(): globalAndroid.content.Intent;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public getGetServiceRequestExtraArgs(): globalAndroid.os.Bundle;
							public getScopesForConnectionlessNonSignIn(): java.util.Set<com.google.android.gms.common.api.Scope>;
							public requiresAccount(): boolean;
							public disconnect(): void;
							public isConnected(): boolean;
							public providesSignIn(): boolean;
							/** @deprecated */
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public isConnecting(): boolean;
							public getLastDisconnectMessage(): string;
							public disconnect(param0: string): void;
							public getMinApkVersion(): number;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.internal.ConnectionCallbacks, param5: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
							public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
							public getApiFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
							public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
							public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
							public requiresSignIn(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzg {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzg>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.location.zzg>*/;
							public getStatus(): com.google.android.gms.common.api.Status;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: com.google.android.gms.common.api.Status);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzh extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzh>;
							public constructor();
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
							public newArray(param0: number): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzi extends com.google.android.gms.internal.location.zza implements com.google.android.gms.internal.location.zzk {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzi>;
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export abstract class zzj extends com.google.android.gms.internal.location.zzb implements com.google.android.gms.internal.location.zzk {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzj>;
							public constructor();
							public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
							public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public static getSuggestedMaxIpcSizeBytes(): number;
							public pingBinder(): boolean;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public constructor(param0: string);
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzk extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzk>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.location.zzk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzd(param0: any /* com.google.android.gms.internal.location.zzg*/): void;
								zze(): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export abstract class zzl extends com.google.android.gms.internal.location.zzb implements com.google.android.gms.internal.location.zzm {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzl>;
							public constructor();
							public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
							public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public static getSuggestedMaxIpcSizeBytes(): number;
							public pingBinder(): boolean;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public constructor(param0: string);
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzm extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzm>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.location.zzm interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(param0: number, param1: androidNative.Array<string>): void;
								zzc(param0: number, param1: globalAndroid.app.PendingIntent): void;
								zzd(param0: number, param1: androidNative.Array<string>): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzn extends com.google.android.gms.internal.location.zza implements com.google.android.gms.internal.location.zzo {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzn>;
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzo extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzo>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.location.zzo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzd(): globalAndroid.location.Location;
								zze(param0: com.google.android.gms.location.CurrentLocationRequest, param1: any /* com.google.android.gms.internal.location.zzq*/): com.google.android.gms.common.internal.ICancelToken;
								zzf(param0: string): com.google.android.gms.location.LocationAvailability;
								zzg(param0: com.google.android.gms.location.GeofencingRequest, param1: globalAndroid.app.PendingIntent, param2: any /* com.google.android.gms.internal.location.zzm*/): void;
								zzh(param0: com.google.android.gms.location.LocationSettingsRequest, param1: any /* com.google.android.gms.internal.location.zzs*/, param2: string): void;
								zzi(param0: any /* com.google.android.gms.internal.location.zzk*/): void;
								zzj(param0: com.google.android.gms.location.LastLocationRequest, param1: any /* com.google.android.gms.internal.location.zzq*/): void;
								zzk(param0: any /* com.google.android.gms.internal.location.zzdb*/, param1: com.google.android.gms.location.LocationRequest, param2: com.google.android.gms.common.api.internal.IStatusCallback): void;
								zzl(param0: globalAndroid.app.PendingIntent, param1: com.google.android.gms.common.api.internal.IStatusCallback): void;
								zzm(param0: globalAndroid.app.PendingIntent): void;
								zzn(param0: globalAndroid.app.PendingIntent, param1: any /* com.google.android.gms.internal.location.zzm*/, param2: string): void;
								zzo(param0: androidNative.Array<string>, param1: any /* com.google.android.gms.internal.location.zzm*/, param2: string): void;
								zzp(param0: globalAndroid.app.PendingIntent, param1: com.google.android.gms.common.api.internal.IStatusCallback): void;
								zzq(param0: com.google.android.gms.location.ActivityTransitionRequest, param1: globalAndroid.app.PendingIntent, param2: com.google.android.gms.common.api.internal.IStatusCallback): void;
								zzr(param0: number, param1: boolean, param2: globalAndroid.app.PendingIntent): void;
								zzs(param0: any /* com.google.android.gms.location.zzb*/, param1: globalAndroid.app.PendingIntent, param2: com.google.android.gms.common.api.internal.IStatusCallback): void;
								zzt(param0: globalAndroid.app.PendingIntent, param1: com.google.android.gms.location.SleepSegmentRequest, param2: com.google.android.gms.common.api.internal.IStatusCallback): void;
								zzu(param0: globalAndroid.location.Location): void;
								zzv(param0: globalAndroid.location.Location, param1: com.google.android.gms.common.api.internal.IStatusCallback): void;
								zzw(param0: boolean): void;
								zzx(param0: boolean, param1: com.google.android.gms.common.api.internal.IStatusCallback): void;
								zzy(param0: any /* com.google.android.gms.internal.location.zzdb*/, param1: com.google.android.gms.common.api.internal.IStatusCallback): void;
								zzz(param0: any /* com.google.android.gms.internal.location.zzdf*/): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export abstract class zzp extends com.google.android.gms.internal.location.zzb implements com.google.android.gms.internal.location.zzq {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzp>;
							public constructor();
							public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
							public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public static getSuggestedMaxIpcSizeBytes(): number;
							public pingBinder(): boolean;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public constructor(param0: string);
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzq extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzq>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.location.zzq interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(param0: com.google.android.gms.common.api.Status, param1: globalAndroid.location.Location): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export abstract class zzr extends com.google.android.gms.internal.location.zzb implements com.google.android.gms.internal.location.zzs {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzr>;
							public constructor();
							public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
							public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public static getSuggestedMaxIpcSizeBytes(): number;
							public pingBinder(): boolean;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public constructor(param0: string);
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzs extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzs>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.location.zzs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(param0: com.google.android.gms.location.LocationSettingsResult): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzt extends com.google.android.gms.internal.location.zzv {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzt>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzu extends com.google.android.gms.internal.location.zzv {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzu>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export abstract class zzv extends com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzv>;
							public constructor();
							public setResult(param0: any): void;
							public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
							/** @deprecated */
							public constructor(param0: globalAndroid.os.Looper);
							/** @deprecated */
							public constructor(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
							public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
							public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzw extends java.lang.Object implements com.google.android.gms.location.ActivityRecognitionApi {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzw>;
							public constructor();
							public removeActivityUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public requestActivityUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: number, param2: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzx extends java.lang.Object implements com.google.android.gms.common.api.internal.RemoteCall<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzx>;
							public accept(param0: any, param1: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzy extends java.lang.Object implements com.google.android.gms.common.api.internal.RemoteCall<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzy>;
							public accept(param0: any, param1: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzz extends java.lang.Object implements com.google.android.gms.common.api.internal.RemoteCall<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzz>;
							public accept(param0: any, param1: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class ActivityRecognition extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.location.ActivityRecognition>;
						public static API: com.google.android.gms.common.api.Api<com.google.android.gms.common.api.Api.ApiOptions.NoOptions>;
						public static ActivityRecognitionApi: com.google.android.gms.location.ActivityRecognitionApi;
						public static getClient(param0: globalAndroid.content.Context): com.google.android.gms.location.ActivityRecognitionClient;
						public static getClient(param0: globalAndroid.app.Activity): com.google.android.gms.location.ActivityRecognitionClient;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class ActivityRecognitionApi extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.location.ActivityRecognitionApi>;
						/**
						 * Constructs a new instance of the com.google.android.gms.location.ActivityRecognitionApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							removeActivityUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							requestActivityUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: number, param2: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						});
						public constructor();
						public removeActivityUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public requestActivityUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: number, param2: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class ActivityRecognitionClient extends com.google.android.gms.common.api.HasApiKey<com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
						public static class: java.lang.Class<com.google.android.gms.location.ActivityRecognitionClient>;
						/**
						 * Constructs a new instance of the com.google.android.gms.location.ActivityRecognitionClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							removeActivityTransitionUpdates(param0: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
							removeActivityUpdates(param0: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
							removeSleepSegmentUpdates(param0: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
							requestActivityTransitionUpdates(param0: com.google.android.gms.location.ActivityTransitionRequest, param1: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
							requestActivityUpdates(param0: number, param1: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
							requestSleepSegmentUpdates(param0: globalAndroid.app.PendingIntent, param1: com.google.android.gms.location.SleepSegmentRequest): com.google.android.gms.tasks.Task<java.lang.Void>;
							getApiKey(): com.google.android.gms.common.api.internal.ApiKey<any>;
						});
						public constructor();
						public requestActivityTransitionUpdates(param0: com.google.android.gms.location.ActivityTransitionRequest, param1: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
						public removeSleepSegmentUpdates(param0: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
						public requestActivityUpdates(param0: number, param1: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
						public requestSleepSegmentUpdates(param0: globalAndroid.app.PendingIntent, param1: com.google.android.gms.location.SleepSegmentRequest): com.google.android.gms.tasks.Task<java.lang.Void>;
						public getApiKey(): com.google.android.gms.common.api.internal.ApiKey<any>;
						public removeActivityTransitionUpdates(param0: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
						public removeActivityUpdates(param0: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class ActivityRecognitionResult {
						public static class: java.lang.Class<com.google.android.gms.location.ActivityRecognitionResult>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.ActivityRecognitionResult>;
						public constructor(param0: com.google.android.gms.location.DetectedActivity, param1: number, param2: number);
						public getElapsedRealtimeMillis(): number;
						public static extractResult(param0: globalAndroid.content.Intent): com.google.android.gms.location.ActivityRecognitionResult;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: java.util.List<any>, param1: number, param2: number, param3: number, param4: globalAndroid.os.Bundle);
						public getTime(): number;
						public toString(): string;
						public getActivityConfidence(param0: number): number;
						public constructor(param0: java.util.List<com.google.android.gms.location.DetectedActivity>, param1: number, param2: number);
						public static hasResult(param0: globalAndroid.content.Intent): boolean;
						public getMostProbableActivity(): com.google.android.gms.location.DetectedActivity;
						public getProbableActivities(): java.util.List<com.google.android.gms.location.DetectedActivity>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class ActivityTransition {
						public static class: java.lang.Class<com.google.android.gms.location.ActivityTransition>;
						public static ACTIVITY_TRANSITION_ENTER: number;
						public static ACTIVITY_TRANSITION_EXIT: number;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.ActivityTransition>;
						public getTransitionType(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getActivityType(): number;
						public toString(): string;
					}
					export module ActivityTransition {
						export class Builder extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.location.ActivityTransition.Builder>;
							public constructor();
							public build(): com.google.android.gms.location.ActivityTransition;
							public setActivityType(param0: number): com.google.android.gms.location.ActivityTransition.Builder;
							public setActivityTransition(param0: number): com.google.android.gms.location.ActivityTransition.Builder;
						}
						export class SupportedActivityTransition extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.google.android.gms.location.ActivityTransition.SupportedActivityTransition>;
							/**
							 * Constructs a new instance of the com.google.android.gms.location.ActivityTransition$SupportedActivityTransition interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								equals(param0: any): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class<any>;
							});
							public constructor();
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class ActivityTransitionEvent {
						public static class: java.lang.Class<com.google.android.gms.location.ActivityTransitionEvent>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.ActivityTransitionEvent>;
						public getTransitionType(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getElapsedRealTimeNanos(): number;
						public constructor(param0: number, param1: number, param2: number);
						public getActivityType(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class ActivityTransitionRequest {
						public static class: java.lang.Class<com.google.android.gms.location.ActivityTransitionRequest>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.ActivityTransitionRequest>;
						public static IS_SAME_TRANSITION: java.util.Comparator<com.google.android.gms.location.ActivityTransition>;
						public serializeToIntentExtra(param0: globalAndroid.content.Intent): void;
						public constructor(param0: java.util.List<com.google.android.gms.location.ActivityTransition>);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: java.util.List<any>, param1: string, param2: java.util.List<any>, param3: string);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class ActivityTransitionResult {
						public static class: java.lang.Class<com.google.android.gms.location.ActivityTransitionResult>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.ActivityTransitionResult>;
						public static extractResult(param0: globalAndroid.content.Intent): com.google.android.gms.location.ActivityTransitionResult;
						public constructor(param0: java.util.List<com.google.android.gms.location.ActivityTransitionEvent>);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public static hasResult(param0: globalAndroid.content.Intent): boolean;
						public getTransitionEvents(): java.util.List<com.google.android.gms.location.ActivityTransitionEvent>;
						public constructor(param0: java.util.List<any>, param1: globalAndroid.os.Bundle);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class CurrentLocationRequest {
						public static class: java.lang.Class<com.google.android.gms.location.CurrentLocationRequest>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.CurrentLocationRequest>;
						public getGranularity(): number;
						public getDurationMillis(): number;
						public getMaxUpdateAgeMillis(): number;
						public getPriority(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
					export module CurrentLocationRequest {
						export class Builder extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.location.CurrentLocationRequest.Builder>;
							public constructor();
							public setGranularity(param0: number): com.google.android.gms.location.CurrentLocationRequest.Builder;
							public setPriority(param0: number): com.google.android.gms.location.CurrentLocationRequest.Builder;
							public build(): com.google.android.gms.location.CurrentLocationRequest;
							public constructor(param0: com.google.android.gms.location.CurrentLocationRequest);
							public setDurationMillis(param0: number): com.google.android.gms.location.CurrentLocationRequest.Builder;
							public setMaxUpdateAgeMillis(param0: number): com.google.android.gms.location.CurrentLocationRequest.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class DetectedActivity {
						public static class: java.lang.Class<com.google.android.gms.location.DetectedActivity>;
						public static IN_VEHICLE: number;
						public static ON_BICYCLE: number;
						public static ON_FOOT: number;
						public static STILL: number;
						public static UNKNOWN: number;
						public static TILTING: number;
						public static WALKING: number;
						public static RUNNING: number;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.DetectedActivity>;
						public getConfidence(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getType(): number;
						public constructor(param0: number, param1: number);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class FusedLocationProviderApi extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.location.FusedLocationProviderApi>;
						/**
						 * Constructs a new instance of the com.google.android.gms.location.FusedLocationProviderApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getLastLocation(param0: com.google.android.gms.common.api.GoogleApiClient): globalAndroid.location.Location;
							flushLocations(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							removeLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							removeLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationCallback): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							removeLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationListener): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							requestLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationRequest, param2: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							requestLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationRequest, param2: com.google.android.gms.location.LocationListener): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							requestLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationRequest, param2: com.google.android.gms.location.LocationCallback, param3: globalAndroid.os.Looper): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							requestLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationRequest, param2: com.google.android.gms.location.LocationListener, param3: globalAndroid.os.Looper): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							setMockLocation(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.location.Location): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							setMockMode(param0: com.google.android.gms.common.api.GoogleApiClient, param1: boolean): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							getLocationAvailability(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.location.LocationAvailability;
						});
						public constructor();
						public static KEY_MOCK_LOCATION: string;
						public static KEY_LOCATION_CHANGED: string;
						public setMockLocation(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.location.Location): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public getLastLocation(param0: com.google.android.gms.common.api.GoogleApiClient): globalAndroid.location.Location;
						public flushLocations(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public removeLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationListener): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public requestLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationRequest, param2: com.google.android.gms.location.LocationCallback, param3: globalAndroid.os.Looper): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public requestLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationRequest, param2: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public requestLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationRequest, param2: com.google.android.gms.location.LocationListener, param3: globalAndroid.os.Looper): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public removeLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public getLocationAvailability(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.location.LocationAvailability;
						public removeLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationCallback): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public requestLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationRequest, param2: com.google.android.gms.location.LocationListener): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public setMockMode(param0: com.google.android.gms.common.api.GoogleApiClient, param1: boolean): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class FusedLocationProviderClient extends com.google.android.gms.common.api.HasApiKey<com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
						public static class: java.lang.Class<com.google.android.gms.location.FusedLocationProviderClient>;
						/**
						 * Constructs a new instance of the com.google.android.gms.location.FusedLocationProviderClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							flushLocations(): com.google.android.gms.tasks.Task<java.lang.Void>;
							getCurrentLocation(param0: number, param1: com.google.android.gms.tasks.CancellationToken): com.google.android.gms.tasks.Task<globalAndroid.location.Location>;
							getCurrentLocation(param0: com.google.android.gms.location.CurrentLocationRequest, param1: com.google.android.gms.tasks.CancellationToken): com.google.android.gms.tasks.Task<globalAndroid.location.Location>;
							getLastLocation(): com.google.android.gms.tasks.Task<globalAndroid.location.Location>;
							getLastLocation(param0: com.google.android.gms.location.LastLocationRequest): com.google.android.gms.tasks.Task<globalAndroid.location.Location>;
							getLocationAvailability(): com.google.android.gms.tasks.Task<com.google.android.gms.location.LocationAvailability>;
							removeLocationUpdates(param0: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
							removeLocationUpdates(param0: com.google.android.gms.location.LocationCallback): com.google.android.gms.tasks.Task<java.lang.Void>;
							removeLocationUpdates(param0: com.google.android.gms.location.LocationListener): com.google.android.gms.tasks.Task<java.lang.Void>;
							requestLocationUpdates(param0: com.google.android.gms.location.LocationRequest, param1: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
							requestLocationUpdates(param0: com.google.android.gms.location.LocationRequest, param1: com.google.android.gms.location.LocationCallback, param2: globalAndroid.os.Looper): com.google.android.gms.tasks.Task<java.lang.Void>;
							requestLocationUpdates(param0: com.google.android.gms.location.LocationRequest, param1: com.google.android.gms.location.LocationListener, param2: globalAndroid.os.Looper): com.google.android.gms.tasks.Task<java.lang.Void>;
							requestLocationUpdates(param0: com.google.android.gms.location.LocationRequest, param1: java.util.concurrent.Executor, param2: com.google.android.gms.location.LocationCallback): com.google.android.gms.tasks.Task<java.lang.Void>;
							requestLocationUpdates(param0: com.google.android.gms.location.LocationRequest, param1: java.util.concurrent.Executor, param2: com.google.android.gms.location.LocationListener): com.google.android.gms.tasks.Task<java.lang.Void>;
							setMockLocation(param0: globalAndroid.location.Location): com.google.android.gms.tasks.Task<java.lang.Void>;
							setMockMode(param0: boolean): com.google.android.gms.tasks.Task<java.lang.Void>;
							getApiKey(): com.google.android.gms.common.api.internal.ApiKey<any>;
						});
						public constructor();
						public static KEY_VERTICAL_ACCURACY: string;
						public static KEY_MOCK_LOCATION: string;
						public getCurrentLocation(param0: number, param1: com.google.android.gms.tasks.CancellationToken): com.google.android.gms.tasks.Task<globalAndroid.location.Location>;
						public flushLocations(): com.google.android.gms.tasks.Task<java.lang.Void>;
						public getLocationAvailability(): com.google.android.gms.tasks.Task<com.google.android.gms.location.LocationAvailability>;
						public removeLocationUpdates(param0: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
						public requestLocationUpdates(param0: com.google.android.gms.location.LocationRequest, param1: com.google.android.gms.location.LocationCallback, param2: globalAndroid.os.Looper): com.google.android.gms.tasks.Task<java.lang.Void>;
						public removeLocationUpdates(param0: com.google.android.gms.location.LocationListener): com.google.android.gms.tasks.Task<java.lang.Void>;
						public requestLocationUpdates(param0: com.google.android.gms.location.LocationRequest, param1: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
						public requestLocationUpdates(param0: com.google.android.gms.location.LocationRequest, param1: com.google.android.gms.location.LocationListener, param2: globalAndroid.os.Looper): com.google.android.gms.tasks.Task<java.lang.Void>;
						public requestLocationUpdates(param0: com.google.android.gms.location.LocationRequest, param1: java.util.concurrent.Executor, param2: com.google.android.gms.location.LocationListener): com.google.android.gms.tasks.Task<java.lang.Void>;
						public getLastLocation(): com.google.android.gms.tasks.Task<globalAndroid.location.Location>;
						public removeLocationUpdates(param0: com.google.android.gms.location.LocationCallback): com.google.android.gms.tasks.Task<java.lang.Void>;
						public requestLocationUpdates(param0: com.google.android.gms.location.LocationRequest, param1: java.util.concurrent.Executor, param2: com.google.android.gms.location.LocationCallback): com.google.android.gms.tasks.Task<java.lang.Void>;
						public setMockLocation(param0: globalAndroid.location.Location): com.google.android.gms.tasks.Task<java.lang.Void>;
						public getApiKey(): com.google.android.gms.common.api.internal.ApiKey<any>;
						public getLastLocation(param0: com.google.android.gms.location.LastLocationRequest): com.google.android.gms.tasks.Task<globalAndroid.location.Location>;
						public getCurrentLocation(param0: com.google.android.gms.location.CurrentLocationRequest, param1: com.google.android.gms.tasks.CancellationToken): com.google.android.gms.tasks.Task<globalAndroid.location.Location>;
						public setMockMode(param0: boolean): com.google.android.gms.tasks.Task<java.lang.Void>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class Geofence extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.location.Geofence>;
						/**
						 * Constructs a new instance of the com.google.android.gms.location.Geofence interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getLatitude(): number;
							getLongitude(): number;
							getRadius(): number;
							getLoiteringDelay(): number;
							getNotificationResponsiveness(): number;
							getTransitionTypes(): number;
							getExpirationTime(): number;
							getRequestId(): string;
						});
						public constructor();
						public static NEVER_EXPIRE: number;
						public static GEOFENCE_TRANSITION_EXIT: number;
						public static GEOFENCE_TRANSITION_ENTER: number;
						public static GEOFENCE_TRANSITION_DWELL: number;
						public getLatitude(): number;
						public getLongitude(): number;
						public getNotificationResponsiveness(): number;
						public getLoiteringDelay(): number;
						public getTransitionTypes(): number;
						public getRequestId(): string;
						public getRadius(): number;
						public getExpirationTime(): number;
					}
					export module Geofence {
						export class Builder extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.location.Geofence.Builder>;
							public setLoiteringDelay(param0: number): com.google.android.gms.location.Geofence.Builder;
							public constructor();
							public setExpirationDuration(param0: number): com.google.android.gms.location.Geofence.Builder;
							public setNotificationResponsiveness(param0: number): com.google.android.gms.location.Geofence.Builder;
							public setRequestId(param0: string): com.google.android.gms.location.Geofence.Builder;
							public setCircularRegion(param0: number, param1: number, param2: number): com.google.android.gms.location.Geofence.Builder;
							public setTransitionTypes(param0: number): com.google.android.gms.location.Geofence.Builder;
							public build(): com.google.android.gms.location.Geofence;
						}
						export class GeofenceTransition extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.google.android.gms.location.Geofence.GeofenceTransition>;
							/**
							 * Constructs a new instance of the com.google.android.gms.location.Geofence$GeofenceTransition interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								equals(param0: any): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class<any>;
							});
							public constructor();
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export class TransitionTypes extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.google.android.gms.location.Geofence.TransitionTypes>;
							/**
							 * Constructs a new instance of the com.google.android.gms.location.Geofence$TransitionTypes interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								equals(param0: any): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class<any>;
							});
							public constructor();
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class GeofenceStatusCodes {
						public static class: java.lang.Class<com.google.android.gms.location.GeofenceStatusCodes>;
						public static GEOFENCE_NOT_AVAILABLE: number;
						public static GEOFENCE_TOO_MANY_GEOFENCES: number;
						public static GEOFENCE_TOO_MANY_PENDING_INTENTS: number;
						public static GEOFENCE_INSUFFICIENT_LOCATION_PERMISSION: number;
						public static GEOFENCE_REQUEST_TOO_FREQUENT: number;
						public static getStatusCodeString(param0: number): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class GeofencingApi extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.location.GeofencingApi>;
						/**
						 * Constructs a new instance of the com.google.android.gms.location.GeofencingApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							addGeofences(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.GeofencingRequest, param2: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							addGeofences(param0: com.google.android.gms.common.api.GoogleApiClient, param1: java.util.List<com.google.android.gms.location.Geofence>, param2: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							removeGeofences(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							removeGeofences(param0: com.google.android.gms.common.api.GoogleApiClient, param1: java.util.List<string>): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						});
						public constructor();
						public removeGeofences(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public removeGeofences(param0: com.google.android.gms.common.api.GoogleApiClient, param1: java.util.List<string>): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public addGeofences(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.GeofencingRequest, param2: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						/** @deprecated */
						public addGeofences(param0: com.google.android.gms.common.api.GoogleApiClient, param1: java.util.List<com.google.android.gms.location.Geofence>, param2: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class GeofencingClient extends com.google.android.gms.common.api.HasApiKey<com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
						public static class: java.lang.Class<com.google.android.gms.location.GeofencingClient>;
						/**
						 * Constructs a new instance of the com.google.android.gms.location.GeofencingClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							addGeofences(param0: com.google.android.gms.location.GeofencingRequest, param1: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
							removeGeofences(param0: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
							removeGeofences(param0: java.util.List<string>): com.google.android.gms.tasks.Task<java.lang.Void>;
							getApiKey(): com.google.android.gms.common.api.internal.ApiKey<any>;
						});
						public constructor();
						public removeGeofences(param0: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
						public addGeofences(param0: com.google.android.gms.location.GeofencingRequest, param1: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
						public getApiKey(): com.google.android.gms.common.api.internal.ApiKey<any>;
						public removeGeofences(param0: java.util.List<string>): com.google.android.gms.tasks.Task<java.lang.Void>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class GeofencingEvent extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.location.GeofencingEvent>;
						public static fromIntent(param0: globalAndroid.content.Intent): com.google.android.gms.location.GeofencingEvent;
						public getErrorCode(): number;
						public getTriggeringLocation(): globalAndroid.location.Location;
						public getTriggeringGeofences(): java.util.List<com.google.android.gms.location.Geofence>;
						public getGeofenceTransition(): number;
						public hasError(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class GeofencingRequest {
						public static class: java.lang.Class<com.google.android.gms.location.GeofencingRequest>;
						public static INITIAL_TRIGGER_ENTER: number;
						public static INITIAL_TRIGGER_EXIT: number;
						public static INITIAL_TRIGGER_DWELL: number;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.GeofencingRequest>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getGeofences(): java.util.List<com.google.android.gms.location.Geofence>;
						public getInitialTrigger(): number;
						public toString(): string;
					}
					export module GeofencingRequest {
						export class Builder extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.location.GeofencingRequest.Builder>;
							public constructor();
							public build(): com.google.android.gms.location.GeofencingRequest;
							public addGeofences(param0: java.util.List<com.google.android.gms.location.Geofence>): com.google.android.gms.location.GeofencingRequest.Builder;
							public addGeofence(param0: com.google.android.gms.location.Geofence): com.google.android.gms.location.GeofencingRequest.Builder;
							public setInitialTrigger(param0: number): com.google.android.gms.location.GeofencingRequest.Builder;
						}
						export class InitialTrigger extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.google.android.gms.location.GeofencingRequest.InitialTrigger>;
							/**
							 * Constructs a new instance of the com.google.android.gms.location.GeofencingRequest$InitialTrigger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								equals(param0: any): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class<any>;
							});
							public constructor();
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class Granularity extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.google.android.gms.location.Granularity>;
						/**
						 * Constructs a new instance of the com.google.android.gms.location.Granularity interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public static GRANULARITY_FINE: number;
						public static GRANULARITY_COARSE: number;
						public static GRANULARITY_PERMISSION_LEVEL: number;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class LastLocationRequest {
						public static class: java.lang.Class<com.google.android.gms.location.LastLocationRequest>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.LastLocationRequest>;
						public getGranularity(): number;
						public getMaxUpdateAgeMillis(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
					export module LastLocationRequest {
						export class Builder extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.location.LastLocationRequest.Builder>;
							public constructor();
							public setGranularity(param0: number): com.google.android.gms.location.LastLocationRequest.Builder;
							public build(): com.google.android.gms.location.LastLocationRequest;
							public setMaxUpdateAgeMillis(param0: number): com.google.android.gms.location.LastLocationRequest.Builder;
							public constructor(param0: com.google.android.gms.location.LastLocationRequest);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class LocationAvailability {
						public static class: java.lang.Class<com.google.android.gms.location.LocationAvailability>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.LocationAvailability>;
						public isLocationAvailable(): boolean;
						public static extractLocationAvailability(param0: globalAndroid.content.Intent): com.google.android.gms.location.LocationAvailability;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public static hasLocationAvailability(param0: globalAndroid.content.Intent): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export abstract class LocationCallback extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.location.LocationCallback>;
						public onLocationResult(param0: com.google.android.gms.location.LocationResult): void;
						public constructor();
						public onLocationAvailability(param0: com.google.android.gms.location.LocationAvailability): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class LocationListener extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.location.LocationListener>;
						/**
						 * Constructs a new instance of the com.google.android.gms.location.LocationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onLocationChanged(param0: globalAndroid.location.Location): void;
						});
						public constructor();
						public onLocationChanged(param0: globalAndroid.location.Location): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class LocationRequest {
						public static class: java.lang.Class<com.google.android.gms.location.LocationRequest>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.LocationRequest>;
						public static PRIORITY_HIGH_ACCURACY: number;
						public static PRIORITY_BALANCED_POWER_ACCURACY: number;
						public static PRIORITY_LOW_POWER: number;
						public static PRIORITY_NO_POWER: number;
						public getMaxUpdates(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						/** @deprecated */
						public getFastestInterval(): number;
						public getIntervalMillis(): number;
						/** @deprecated */
						public constructor();
						/** @deprecated */
						public getExpirationTime(): number;
						/** @deprecated */
						public setNumUpdates(param0: number): com.google.android.gms.location.LocationRequest;
						/** @deprecated */
						public setSmallestDisplacement(param0: number): com.google.android.gms.location.LocationRequest;
						/** @deprecated */
						public getInterval(): number;
						/** @deprecated */
						public setPriority(param0: number): com.google.android.gms.location.LocationRequest;
						/** @deprecated */
						public setWaitForAccurateLocation(param0: boolean): com.google.android.gms.location.LocationRequest;
						/** @deprecated */
						public setFastestInterval(param0: number): com.google.android.gms.location.LocationRequest;
						/** @deprecated */
						public setInterval(param0: number): com.google.android.gms.location.LocationRequest;
						/** @deprecated */
						public isFastestIntervalExplicitlySet(): boolean;
						/** @deprecated */
						public getNumUpdates(): number;
						/** @deprecated */
						public getMaxWaitTime(): number;
						public getMaxUpdateDelayMillis(): number;
						public isWaitForAccurateLocation(): boolean;
						public getMaxUpdateAgeMillis(): number;
						/** @deprecated */
						public setExpirationDuration(param0: number): com.google.android.gms.location.LocationRequest;
						/** @deprecated */
						public getSmallestDisplacement(): number;
						public isPassive(): boolean;
						/** @deprecated */
						public setExpirationTime(param0: number): com.google.android.gms.location.LocationRequest;
						public toString(): string;
						public getGranularity(): number;
						public getDurationMillis(): number;
						public getPriority(): number;
						public getMinUpdateDistanceMeters(): number;
						/** @deprecated */
						public setMaxWaitTime(param0: number): com.google.android.gms.location.LocationRequest;
						public getMinUpdateIntervalMillis(): number;
						public isBatched(): boolean;
						/** @deprecated */
						public static create(): com.google.android.gms.location.LocationRequest;
					}
					export module LocationRequest {
						export class Builder extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.location.LocationRequest.Builder>;
							public static IMPLICIT_MIN_UPDATE_INTERVAL: number;
							public static IMPLICIT_MAX_UPDATE_AGE: number;
							public setDurationMillis(param0: number): com.google.android.gms.location.LocationRequest.Builder;
							public setMinUpdateIntervalMillis(param0: number): com.google.android.gms.location.LocationRequest.Builder;
							public constructor(param0: com.google.android.gms.location.LocationRequest);
							public setPriority(param0: number): com.google.android.gms.location.LocationRequest.Builder;
							public setMaxUpdateDelayMillis(param0: number): com.google.android.gms.location.LocationRequest.Builder;
							public constructor(param0: number, param1: number);
							public setMaxUpdateAgeMillis(param0: number): com.google.android.gms.location.LocationRequest.Builder;
							public setMinUpdateDistanceMeters(param0: number): com.google.android.gms.location.LocationRequest.Builder;
							public setIntervalMillis(param0: number): com.google.android.gms.location.LocationRequest.Builder;
							public constructor(param0: number);
							public build(): com.google.android.gms.location.LocationRequest;
							public setWaitForAccurateLocation(param0: boolean): com.google.android.gms.location.LocationRequest.Builder;
							public setGranularity(param0: number): com.google.android.gms.location.LocationRequest.Builder;
							public setMaxUpdates(param0: number): com.google.android.gms.location.LocationRequest.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class LocationResult {
						public static class: java.lang.Class<com.google.android.gms.location.LocationResult>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.LocationResult>;
						public static extractResult(param0: globalAndroid.content.Intent): com.google.android.gms.location.LocationResult;
						public static create(param0: java.util.List<globalAndroid.location.Location>): com.google.android.gms.location.LocationResult;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public static hasResult(param0: globalAndroid.content.Intent): boolean;
						public getLocations(): java.util.List<globalAndroid.location.Location>;
						public getLastLocation(): globalAndroid.location.Location;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class LocationServices extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.location.LocationServices>;
						public static API: com.google.android.gms.common.api.Api<com.google.android.gms.common.api.Api.ApiOptions.NoOptions>;
						public static FusedLocationApi: com.google.android.gms.location.FusedLocationProviderApi;
						public static GeofencingApi: com.google.android.gms.location.GeofencingApi;
						public static SettingsApi: com.google.android.gms.location.SettingsApi;
						public static getFusedLocationProviderClient(param0: globalAndroid.content.Context): com.google.android.gms.location.FusedLocationProviderClient;
						public static getFusedLocationProviderClient(param0: globalAndroid.app.Activity): com.google.android.gms.location.FusedLocationProviderClient;
						public static getGeofencingClient(param0: globalAndroid.content.Context): com.google.android.gms.location.GeofencingClient;
						public static getGeofencingClient(param0: globalAndroid.app.Activity): com.google.android.gms.location.GeofencingClient;
						public static getSettingsClient(param0: globalAndroid.content.Context): com.google.android.gms.location.SettingsClient;
						public static getSettingsClient(param0: globalAndroid.app.Activity): com.google.android.gms.location.SettingsClient;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class LocationSettingsRequest {
						public static class: java.lang.Class<com.google.android.gms.location.LocationSettingsRequest>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.LocationSettingsRequest>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					}
					export module LocationSettingsRequest {
						export class Builder extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.location.LocationSettingsRequest.Builder>;
							public constructor();
							public setAlwaysShow(param0: boolean): com.google.android.gms.location.LocationSettingsRequest.Builder;
							public addAllLocationRequests(param0: java.util.Collection<com.google.android.gms.location.LocationRequest>): com.google.android.gms.location.LocationSettingsRequest.Builder;
							public build(): com.google.android.gms.location.LocationSettingsRequest;
							public setNeedBle(param0: boolean): com.google.android.gms.location.LocationSettingsRequest.Builder;
							public addLocationRequest(param0: com.google.android.gms.location.LocationRequest): com.google.android.gms.location.LocationSettingsRequest.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class LocationSettingsResponse extends com.google.android.gms.common.api.Response<com.google.android.gms.location.LocationSettingsResult> {
						public static class: java.lang.Class<com.google.android.gms.location.LocationSettingsResponse>;
						public constructor(param0: com.google.android.gms.location.LocationSettingsResult);
						public getLocationSettingsStates(): com.google.android.gms.location.LocationSettingsStates;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class LocationSettingsResult {
						public static class: java.lang.Class<com.google.android.gms.location.LocationSettingsResult>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.LocationSettingsResult>;
						public getLocationSettingsStates(): com.google.android.gms.location.LocationSettingsStates;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public constructor(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.location.LocationSettingsStates);
						public getStatus(): com.google.android.gms.common.api.Status;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class LocationSettingsStates {
						public static class: java.lang.Class<com.google.android.gms.location.LocationSettingsStates>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.LocationSettingsStates>;
						public isLocationUsable(): boolean;
						public isBlePresent(): boolean;
						public isLocationPresent(): boolean;
						public isGpsUsable(): boolean;
						public isBleUsable(): boolean;
						public constructor(param0: boolean, param1: boolean, param2: boolean, param3: boolean, param4: boolean, param5: boolean);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public isNetworkLocationUsable(): boolean;
						public static fromIntent(param0: globalAndroid.content.Intent): com.google.android.gms.location.LocationSettingsStates;
						public isNetworkLocationPresent(): boolean;
						public isGpsPresent(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class LocationSettingsStatusCodes {
						public static class: java.lang.Class<com.google.android.gms.location.LocationSettingsStatusCodes>;
						public static SETTINGS_CHANGE_UNAVAILABLE: number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class LocationStatusCodes extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.location.LocationStatusCodes>;
						public static SUCCESS: number;
						public static ERROR: number;
						public static GEOFENCE_NOT_AVAILABLE: number;
						public static GEOFENCE_TOO_MANY_GEOFENCES: number;
						public static GEOFENCE_TOO_MANY_PENDING_INTENTS: number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class Priority extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.google.android.gms.location.Priority>;
						/**
						 * Constructs a new instance of the com.google.android.gms.location.Priority interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public static PRIORITY_BALANCED_POWER_ACCURACY: number;
						public static PRIORITY_HIGH_ACCURACY: number;
						public static PRIORITY_LOW_POWER: number;
						public static PRIORITY_PASSIVE: number;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class R extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.location.R>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class SettingsApi extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.location.SettingsApi>;
						/**
						 * Constructs a new instance of the com.google.android.gms.location.SettingsApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							checkLocationSettings(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationSettingsRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.location.LocationSettingsResult>;
						});
						public constructor();
						public checkLocationSettings(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationSettingsRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.location.LocationSettingsResult>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class SettingsClient extends com.google.android.gms.common.api.HasApiKey<com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
						public static class: java.lang.Class<com.google.android.gms.location.SettingsClient>;
						/**
						 * Constructs a new instance of the com.google.android.gms.location.SettingsClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							checkLocationSettings(param0: com.google.android.gms.location.LocationSettingsRequest): com.google.android.gms.tasks.Task<com.google.android.gms.location.LocationSettingsResponse>;
							getApiKey(): com.google.android.gms.common.api.internal.ApiKey<any>;
						});
						public constructor();
						public checkLocationSettings(param0: com.google.android.gms.location.LocationSettingsRequest): com.google.android.gms.tasks.Task<com.google.android.gms.location.LocationSettingsResponse>;
						public getApiKey(): com.google.android.gms.common.api.internal.ApiKey<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class SleepClassifyEvent {
						public static class: java.lang.Class<com.google.android.gms.location.SleepClassifyEvent>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.SleepClassifyEvent>;
						public getConfidence(): number;
						public getMotion(): number;
						public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: boolean, param8: number);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getLight(): number;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public static hasEvents(param0: globalAndroid.content.Intent): boolean;
						public getTimestampMillis(): number;
						public toString(): string;
						public static extractEvents(param0: globalAndroid.content.Intent): java.util.List<com.google.android.gms.location.SleepClassifyEvent>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class SleepSegmentEvent {
						public static class: java.lang.Class<com.google.android.gms.location.SleepSegmentEvent>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.SleepSegmentEvent>;
						public static STATUS_SUCCESSFUL: number;
						public static STATUS_MISSING_DATA: number;
						public static STATUS_NOT_DETECTED: number;
						public getStartTimeMillis(): number;
						public static extractEvents(param0: globalAndroid.content.Intent): java.util.List<com.google.android.gms.location.SleepSegmentEvent>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public static hasEvents(param0: globalAndroid.content.Intent): boolean;
						public getSegmentDurationMillis(): number;
						public constructor(param0: number, param1: number, param2: number, param3: number, param4: number);
						public toString(): string;
						public getStatus(): number;
						public getEndTimeMillis(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class SleepSegmentRequest {
						public static class: java.lang.Class<com.google.android.gms.location.SleepSegmentRequest>;
						public static SEGMENT_AND_CLASSIFY_EVENTS: number;
						public static SEGMENT_EVENTS_ONLY: number;
						public static CLASSIFY_EVENTS_ONLY: number;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.SleepSegmentRequest>;
						public constructor(param0: number);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getRequestedDataType(): number;
						public static getDefaultSleepSegmentRequest(): com.google.android.gms.location.SleepSegmentRequest;
						public constructor(param0: java.util.List<any>, param1: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zza extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.location.zza>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzaa extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
						public static class: java.lang.Class<com.google.android.gms.location.zzaa>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): androidNative.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzab extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
						public static class: java.lang.Class<com.google.android.gms.location.zzab>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): androidNative.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzac {
						public static class: java.lang.Class<com.google.android.gms.location.zzac>;
						public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.zzac>*/;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzad extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
						public static class: java.lang.Class<com.google.android.gms.location.zzad>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): androidNative.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzae extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.location.zzae>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzaf extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
						public static class: java.lang.Class<com.google.android.gms.location.zzaf>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): androidNative.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzag extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
						public static class: java.lang.Class<com.google.android.gms.location.zzag>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): androidNative.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzah extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
						public static class: java.lang.Class<com.google.android.gms.location.zzah>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): androidNative.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzai extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.location.zzai>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzaj {
						public static class: java.lang.Class<com.google.android.gms.location.zzaj>;
						public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.zzaj>*/;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
						public constructor(param0: number, param1: number, param2: number, param3: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzak extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
						public static class: java.lang.Class<com.google.android.gms.location.zzak>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): androidNative.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzb {
						public static class: java.lang.Class<com.google.android.gms.location.zzb>;
						public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.zzb>*/;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzc extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
						public static class: java.lang.Class<com.google.android.gms.location.zzc>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): androidNative.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzd extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
						public static class: java.lang.Class<com.google.android.gms.location.zzd>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): androidNative.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zze extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
						public static class: java.lang.Class<com.google.android.gms.location.zze>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): androidNative.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzf extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
						public static class: java.lang.Class<com.google.android.gms.location.zzf>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): androidNative.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzg extends java.lang.Object implements java.util.Comparator<any> {
						public static class: java.lang.Class<com.google.android.gms.location.zzg>;
						public thenComparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
						public static comparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
						public thenComparingLong(param0: any /* any*/): java.util.Comparator<any>;
						public equals(param0: any): boolean;
						public static comparingInt(param0: any /* any*/): java.util.Comparator<any>;
						public static comparingDouble(param0: any /* any*/): java.util.Comparator<any>;
						public static reverseOrder(): java.util.Comparator<any>;
						public static comparing(param0: any /* any*/): java.util.Comparator<any>;
						public thenComparingInt(param0: any /* any*/): java.util.Comparator<any>;
						public reversed(): java.util.Comparator<any>;
						public static nullsFirst(param0: java.util.Comparator<any>): java.util.Comparator<any>;
						public thenComparingDouble(param0: any /* any*/): java.util.Comparator<any>;
						public static nullsLast(param0: java.util.Comparator<any>): java.util.Comparator<any>;
						public thenComparing(param0: any /* any*/): java.util.Comparator<any>;
						public static naturalOrder(): java.util.Comparator<any>;
						public compare(param0: any, param1: any): number;
						public thenComparing(param0: java.util.Comparator<any>): java.util.Comparator<any>;
						public static comparingLong(param0: any /* any*/): java.util.Comparator<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzh extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
						public static class: java.lang.Class<com.google.android.gms.location.zzh>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): androidNative.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzi extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
						public static class: java.lang.Class<com.google.android.gms.location.zzi>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): androidNative.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzj extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
						public static class: java.lang.Class<com.google.android.gms.location.zzj>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): androidNative.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzk extends java.lang.Object implements java.util.Comparator<any> {
						public static class: java.lang.Class<com.google.android.gms.location.zzk>;
						public thenComparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
						public static comparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
						public thenComparingLong(param0: any /* any*/): java.util.Comparator<any>;
						public equals(param0: any): boolean;
						public static comparingInt(param0: any /* any*/): java.util.Comparator<any>;
						public static comparingDouble(param0: any /* any*/): java.util.Comparator<any>;
						public static reverseOrder(): java.util.Comparator<any>;
						public static comparing(param0: any /* any*/): java.util.Comparator<any>;
						public thenComparingInt(param0: any /* any*/): java.util.Comparator<any>;
						public reversed(): java.util.Comparator<any>;
						public static nullsFirst(param0: java.util.Comparator<any>): java.util.Comparator<any>;
						public thenComparingDouble(param0: any /* any*/): java.util.Comparator<any>;
						public static nullsLast(param0: java.util.Comparator<any>): java.util.Comparator<any>;
						public thenComparing(param0: any /* any*/): java.util.Comparator<any>;
						public static naturalOrder(): java.util.Comparator<any>;
						public compare(param0: any, param1: any): number;
						public thenComparing(param0: java.util.Comparator<any>): java.util.Comparator<any>;
						public static comparingLong(param0: any /* any*/): java.util.Comparator<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzl extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
						public static class: java.lang.Class<com.google.android.gms.location.zzl>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): androidNative.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzm extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.location.zzm>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzn extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
						public static class: java.lang.Class<com.google.android.gms.location.zzn>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): androidNative.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzo extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.location.zzo>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzp extends com.google.android.gms.internal.location.zza implements com.google.android.gms.location.zzr {
						public static class: java.lang.Class<com.google.android.gms.location.zzp>;
						public asBinder(): globalAndroid.os.IBinder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export abstract class zzq extends com.google.android.gms.internal.location.zzb implements com.google.android.gms.location.zzr {
						public static class: java.lang.Class<com.google.android.gms.location.zzq>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public constructor();
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public static getSuggestedMaxIpcSizeBytes(): number;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzr extends java.lang.Object implements globalAndroid.os.IInterface {
						public static class: java.lang.Class<com.google.android.gms.location.zzr>;
						/**
						 * Constructs a new instance of the com.google.android.gms.location.zzr interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zzd(param0: com.google.android.gms.location.LocationAvailability): void;
							zze(param0: com.google.android.gms.location.LocationResult): void;
							zzf(): void;
							asBinder(): globalAndroid.os.IBinder;
						});
						public constructor();
						public asBinder(): globalAndroid.os.IBinder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzs extends com.google.android.gms.internal.location.zza implements com.google.android.gms.location.zzu {
						public static class: java.lang.Class<com.google.android.gms.location.zzs>;
						public asBinder(): globalAndroid.os.IBinder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export abstract class zzt extends com.google.android.gms.internal.location.zzb implements com.google.android.gms.location.zzu {
						public static class: java.lang.Class<com.google.android.gms.location.zzt>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public constructor();
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public static getSuggestedMaxIpcSizeBytes(): number;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzu extends java.lang.Object implements globalAndroid.os.IInterface {
						public static class: java.lang.Class<com.google.android.gms.location.zzu>;
						/**
						 * Constructs a new instance of the com.google.android.gms.location.zzu interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zzd(param0: globalAndroid.location.Location): void;
							zze(): void;
							asBinder(): globalAndroid.os.IBinder;
						});
						public constructor();
						public asBinder(): globalAndroid.os.IBinder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzv extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
						public static class: java.lang.Class<com.google.android.gms.location.zzv>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): androidNative.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzw extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
						public static class: java.lang.Class<com.google.android.gms.location.zzw>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): androidNative.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzx extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
						public static class: java.lang.Class<com.google.android.gms.location.zzx>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): androidNative.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzy extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
						public static class: java.lang.Class<com.google.android.gms.location.zzy>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): androidNative.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzz extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
						public static class: java.lang.Class<com.google.android.gms.location.zzz>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): androidNative.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export class SignInOptions extends java.lang.Object implements com.google.android.gms.common.api.Api.ApiOptions.Optional {
						public static class: java.lang.Class<com.google.android.gms.signin.SignInOptions>;
						public static zaa: com.google.android.gms.signin.SignInOptions;
						public hashCode(): number;
						public equals(param0: any): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export module internal {
						export class SignInClientImpl extends com.google.android.gms.common.internal.GmsClient<com.google.android.gms.signin.internal.zaf> implements com.google.android.gms.signin.zae  {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.SignInClientImpl>;
							public getStartServiceAction(): string;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailability, param4: number, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.internal.ConnectionCallbacks, param7: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
							public getServiceBrokerBinder(): globalAndroid.os.IBinder;
							public requiresGooglePlayServices(): boolean;
							public zab(): void;
							public getServiceDescriptor(): string;
							public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public getEndpointPackageName(): string;
							public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public getSignInIntent(): globalAndroid.content.Intent;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public zad(param0: com.google.android.gms.signin.internal.zae): void;
							public zac(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: boolean): void;
							public static createBundleFromClientSettings(param0: com.google.android.gms.common.internal.ClientSettings): globalAndroid.os.Bundle;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: boolean, param3: com.google.android.gms.common.internal.ClientSettings, param4: globalAndroid.os.Bundle, param5: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param6: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public getGetServiceRequestExtraArgs(): globalAndroid.os.Bundle;
							public getScopesForConnectionlessNonSignIn(): java.util.Set<com.google.android.gms.common.api.Scope>;
							public requiresAccount(): boolean;
							public disconnect(): void;
							public zaa(): void;
							public isConnected(): boolean;
							public providesSignIn(): boolean;
							/** @deprecated */
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public isConnecting(): boolean;
							public getLastDisconnectMessage(): string;
							public disconnect(param0: string): void;
							public getMinApkVersion(): number;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.internal.ConnectionCallbacks, param5: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
							public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
							public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
							public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
							public requiresSignIn(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export module internal {
						export class zaa {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zaa>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.signin.internal.zaa>;
							public constructor();
							public getStatus(): com.google.android.gms.common.api.Status;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export module internal {
						export class zab extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zab>;
							public constructor();
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
							public newArray(param0: number): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export module internal {
						export class zac extends com.google.android.gms.signin.internal.zad {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zac>;
							public constructor();
							public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
							public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public static getSuggestedMaxIpcSizeBytes(): number;
							public pingBinder(): boolean;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public constructor(param0: string);
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public zab(param0: com.google.android.gms.signin.internal.zak): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export module internal {
						export abstract class zad extends com.google.android.gms.internal.base.zab implements com.google.android.gms.signin.internal.zae {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zad>;
							public constructor();
							public zaa(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dump(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
							public dumpAsync(param0: java.io.FileDescriptor, param1: androidNative.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public static getSuggestedMaxIpcSizeBytes(): number;
							public pingBinder(): boolean;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public constructor(param0: string);
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public zab(param0: com.google.android.gms.signin.internal.zak): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export module internal {
						export class zae extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zae>;
							/**
							 * Constructs a new instance of the com.google.android.gms.signin.internal.zae interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zab(param0: com.google.android.gms.signin.internal.zak): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
							public zab(param0: com.google.android.gms.signin.internal.zak): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export module internal {
						export class zaf extends com.google.android.gms.internal.base.zaa implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zaf>;
							public zaf(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: number, param2: boolean): void;
							public zag(param0: com.google.android.gms.signin.internal.zai, param1: com.google.android.gms.signin.internal.zae): void;
							public asBinder(): globalAndroid.os.IBinder;
							public zae(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export module internal {
						export class zag {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zag>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.signin.internal.zag>;
							public constructor(param0: java.util.List<any>, param1: string);
							public getStatus(): com.google.android.gms.common.api.Status;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export module internal {
						export class zah extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zah>;
							public constructor();
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
							public newArray(param0: number): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export module internal {
						export class zai {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zai>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.signin.internal.zai>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export module internal {
						export class zaj extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zaj>;
							public constructor();
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
							public newArray(param0: number): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export module internal {
						export class zak {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zak>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.signin.internal.zak>;
							public zaa(): com.google.android.gms.common.ConnectionResult;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public zab(): com.google.android.gms.common.internal.zav;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export module internal {
						export class zal extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zal>;
							public constructor();
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
							public newArray(param0: number): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export class zaa extends com.google.android.gms.common.api.Api.AbstractClientBuilder<any,any> {
						public static class: java.lang.Class<com.google.android.gms.signin.zaa>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export class zab extends com.google.android.gms.common.api.Api.AbstractClientBuilder<any,any> {
						public static class: java.lang.Class<com.google.android.gms.signin.zab>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export class zac extends java.lang.Object implements com.google.android.gms.common.api.Api.ApiOptions.HasOptions {
						public static class: java.lang.Class<com.google.android.gms.signin.zac>;
						public hashCode(): number;
						public equals(param0: any): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export class zad extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.signin.zad>;
						public static zaa: com.google.android.gms.common.api.Api.ClientKey<any>;
						public static zab: com.google.android.gms.common.api.Api.ClientKey<any>;
						public static zac: com.google.android.gms.common.api.Api.AbstractClientBuilder<any,any>;
						public static zae: com.google.android.gms.common.api.Scope;
						public static zaf: com.google.android.gms.common.api.Scope;
						public static zag: com.google.android.gms.common.api.Api<any>;
						public static zah: com.google.android.gms.common.api.Api<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export class zae extends java.lang.Object implements com.google.android.gms.common.api.Api.Client {
						public static class: java.lang.Class<com.google.android.gms.signin.zae>;
						/**
						 * Constructs a new instance of the com.google.android.gms.signin.zae interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zaa(): void;
							zab(): void;
							zac(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: boolean): void;
							zad(param0: com.google.android.gms.signin.internal.zae): void;
							getMinApkVersion(): number;
							getSignInIntent(): globalAndroid.content.Intent;
							getServiceBrokerBinder(): globalAndroid.os.IBinder;
							getEndpointPackageName(): string;
							getLastDisconnectMessage(): string;
							getScopesForConnectionlessNonSignIn(): java.util.Set<com.google.android.gms.common.api.Scope>;
							connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
							disconnect(): void;
							disconnect(param0: string): void;
							dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
							getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
							onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
							isConnected(): boolean;
							isConnecting(): boolean;
							providesSignIn(): boolean;
							requiresAccount(): boolean;
							requiresGooglePlayServices(): boolean;
							requiresSignIn(): boolean;
							getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
						});
						public constructor();
						public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
						public requiresGooglePlayServices(): boolean;
						public requiresAccount(): boolean;
						public getServiceBrokerBinder(): globalAndroid.os.IBinder;
						public providesSignIn(): boolean;
						public zab(): void;
						public getEndpointPackageName(): string;
						public isConnected(): boolean;
						public zac(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: boolean): void;
						public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
						public getMinApkVersion(): number;
						public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
						public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
						public isConnecting(): boolean;
						public zaa(): void;
						public disconnect(): void;
						public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
						public zad(param0: com.google.android.gms.signin.internal.zae): void;
						public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
						public getSignInIntent(): globalAndroid.content.Intent;
						public requiresSignIn(): boolean;
						public getLastDisconnectMessage(): string;
						public getScopesForConnectionlessNonSignIn(): java.util.Set<com.google.android.gms.common.api.Scope>;
						public disconnect(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export class zaf extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.signin.zaf>;
					}
				}
			}
		}
	}
}

//Generics information:
//com.google.android.gms.common.api.Api:1
//com.google.android.gms.common.api.Api.AbstractClientBuilder:2
//com.google.android.gms.common.api.Api.AnyClientKey:1
//com.google.android.gms.common.api.Api.BaseClientBuilder:2
//com.google.android.gms.common.api.Api.ClientKey:1
//com.google.android.gms.common.api.BatchResultToken:1
//com.google.android.gms.common.api.DataBufferResponse:2
//com.google.android.gms.common.api.GoogleApi:1
//com.google.android.gms.common.api.HasApiKey:1
//com.google.android.gms.common.api.OptionalPendingResult:1
//com.google.android.gms.common.api.PendingResult:1
//com.google.android.gms.common.api.ResultTransform:2
//com.google.android.gms.common.api.TransformedResult:1
//com.google.android.gms.common.api.internal.ApiKey:1
//com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl:2
//com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder:1
//com.google.android.gms.common.api.internal.BasePendingResult:1
//com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler:1
//com.google.android.gms.common.api.internal.DataHolderNotifier:1
//com.google.android.gms.common.api.internal.ListenerHolder:1
//com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey:1
//com.google.android.gms.common.api.internal.ListenerHolder.Notifier:1
//com.google.android.gms.common.api.internal.OptionalPendingResultImpl:1
//com.google.android.gms.common.api.internal.PendingResultFacade:2
//com.google.android.gms.common.api.internal.RegisterListenerMethod:2
//com.google.android.gms.common.api.internal.RegistrationMethods:2
//com.google.android.gms.common.api.internal.RegistrationMethods.Builder:2
//com.google.android.gms.common.api.internal.RemoteCall:2
//com.google.android.gms.common.api.internal.TaskApiCall:2
//com.google.android.gms.common.api.internal.TaskApiCall.Builder:2
//com.google.android.gms.common.api.internal.UnregisterListenerMethod:2
//com.google.android.gms.common.api.internal.zacp:1
//com.google.android.gms.common.api.internal.zada:1
//com.google.android.gms.common.api.zaf:1
//com.google.android.gms.common.api.zag:1
//com.google.android.gms.common.api.zah:1
//com.google.android.gms.common.data.AbstractDataBuffer:1
//com.google.android.gms.common.data.DataBuffer:1
//com.google.android.gms.common.data.DataBufferIterator:1
//com.google.android.gms.common.data.DataBufferSafeParcelable:1
//com.google.android.gms.common.data.EntityBuffer:1
//com.google.android.gms.common.data.Freezable:1
//com.google.android.gms.common.data.SingleRefDataBufferIterator:1
//com.google.android.gms.common.internal.GmsClient:1
//com.google.android.gms.common.internal.PendingResultUtil.ResultConverter:2
//com.google.android.gms.common.server.response.FastJsonResponse.Field:2
//com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter:2
//com.google.android.gms.common.server.response.FastParser:1
//com.google.android.gms.dynamic.DeferredLifecycleHelper:1

