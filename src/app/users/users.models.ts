import {JsonConverter, JsonCustomConvert, JsonObject, JsonProperty} from 'json2typescript';
import {Users} from '@core/core.models';
import LocationValue = Users.LocationValue;

export namespace CognitoRequests {


    @JsonObject()
    export class CognitoSignupUserAttribute {
        @JsonProperty('email', String)
        email: string = undefined;
        @JsonProperty('phone_number', String, true)
        phone_number: string = undefined;
    }

    export namespace SignUp {


        @JsonObject()
        export class Request {
            @JsonProperty('username', String)
            user_name: string = undefined;
            @JsonProperty('password', String)
            password: string = undefined;
            @JsonProperty('attributes', CognitoSignupUserAttribute, true)
            attributes: CognitoSignupUserAttribute = undefined;
        }

        @JsonObject()
        export class Response extends CognitoSignupUserAttribute {
        }
    }

    export namespace ConfirmSignUp {

        @JsonObject()
        export class Request {
            @JsonProperty('email', String, true)
            email: string = undefined;
            @JsonProperty('phone_number', String, true)
            phone_number: string = undefined;
            @JsonProperty('token', String)
            token: string = undefined;
        }

    }

    export namespace SignIn {

        @JsonObject()
        export class Request {
            @JsonProperty('username', String)
            user_name: string = undefined;
            @JsonProperty('password', String)
            password: string = undefined;
        }

    }

    export namespace ForgotPassword {

        @JsonObject()
        export class Request {
            @JsonProperty('user_name', String)
            user_name: string = undefined;
        }

    }

    export namespace ChangePassword {

        @JsonObject()
        export class Request {
            @JsonProperty('old_password', String)
            old_password: string = undefined;
            @JsonProperty('new_password', String)
            new_password: string = undefined;
        }

    }

    export namespace ForgotPasswordSubmit {

        @JsonObject()
        export class Request {
            @JsonProperty('email', String)
            email: string = undefined;
            @JsonProperty('token', String)
            token: string = undefined;
            @JsonProperty('password', String)
            password: string = undefined;
        }

    }

    export namespace VerifyCurrentUserAttributeSubmit {

        @JsonObject()
        export class Request {
            @JsonProperty('type', String)
            type: string = undefined;
            @JsonProperty('token', String)
            token: string = undefined;
        }

    }

    export namespace ResendSignUp {

        @JsonObject()
        export class Request {
            @JsonProperty('email', String, true)
            email: string = undefined;
            @JsonProperty('phonenumber', String, true)
            phone_number: string = undefined;
        }

    }

    export namespace UpdateUserAttributes {

        @JsonObject()
        export class Request {
            @JsonProperty('phone_number', String, true)
            phone_number: string = undefined;
            @JsonProperty('email', String, true)
            email: string = undefined;
        }

    }

}


export namespace UserRequests {


    export namespace CreateUserProfile {
        import UserProfileValue = Users.UserProfileValue;
        import UserProfile = Users.UserProfile;

        @JsonObject()
        export class Request {
            @JsonProperty('profile', [UserProfileValue], true)
            profile: UserProfileValue[] = undefined;
            @JsonProperty('location', LocationValue, true)
            location: LocationValue = undefined;
        }

        @JsonObject()
        export class Response extends UserProfile {
        }
    }


    export namespace UpdateUserProfile {


        @JsonObject()
        export class Request extends CreateUserProfile.Request {
        }

        @JsonObject()
        export class Response extends CreateUserProfile.Response {
        }
    }

    export namespace GetUserProfile {

        import UserProfile = Users.UserProfile;

        @JsonObject()
        export class Response extends UserProfile {
        }
    }

    export namespace FilterUserProfiles {

        import UserProfile = Users.UserProfile;

        @JsonObject()
        export class Request {
            @JsonProperty('longitude', Number, true)
            longitude: number = undefined;
            @JsonProperty('latitude', Number, true)
            latitude: number = undefined;
            @JsonProperty('minAge', Number, true)
            minAge: number = undefined;
            @JsonProperty('maxAge', Number, true)
            maxAge: number = undefined;
            @JsonProperty('gender', String, true)
            gender: string = undefined;
            @JsonProperty('distance', Number, true)
            distance: number = undefined;
        }

        @JsonObject()
        export class Response extends UserProfile {
        }
    }

    export namespace GetUserProfileByUser {
        import UserProfile = Users.UserProfile;

        @JsonObject()
        export class Request {
            @JsonProperty('user', String)
            user: string = undefined;
        }

        @JsonObject()
        export class Response extends UserProfile {
        }
    }

    export namespace GetAllUserProfiles {
        import UserProfile = Users.UserProfile;

        @JsonObject()
        export class Request {
        }

        @JsonObject()
        export class Response extends UserProfile {
        }
    }

}
