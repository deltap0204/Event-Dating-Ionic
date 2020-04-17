import {JsonObject, JsonProperty} from 'json2typescript';
import {UserInterests} from '@core/core.models';

export namespace UserInterestsRequests {

    export namespace CreateUserInterest {
        import UserInterest = UserInterests.UserInterest;

        @JsonObject()
        export class Request {
            @JsonProperty('interaction', String)
            interaction: string = undefined;
            @JsonProperty('type', String)
            type: string = undefined;
            @JsonProperty('entity', String)
            entity: string = undefined;

        }

        @JsonObject()
        export class Response extends UserInterest {
        }
    }

    export namespace GetUserInterest {
        import UserInterest = UserInterests.UserInterest;

        @JsonObject()
        export class Request {
            userInterestId: string;
        }

        @JsonObject()
        export class Response extends UserInterest {
        }
    }

    export namespace DeleteUserInterest {
        import UserInterest = UserInterests.UserInterest;

        @JsonObject()
        export class Request {
            userInterestId: string;
        }

    }

    export namespace GetUserInterestsByEntity {
        import UserInterest = UserInterests.UserInterest;

        @JsonObject()
        export class Request {
            @JsonProperty('type', String)
            type: string = undefined;
            @JsonProperty('entity', String)
            entity: string = undefined;
        }

        @JsonObject()
        export class Response extends UserInterest {
        }
    }

    export namespace GetUserInterestsByEntityCount {


        @JsonObject()
        export class Request {
            @JsonProperty('type', String)
            type: string = undefined;
            @JsonProperty('entity', String)
            entity: string = undefined;
        }
    }

    export namespace GetUserInterestsByEntityMultiple {
        import UserInterest = UserInterests.UserInterest;

        @JsonObject()
        export class Request {
            @JsonProperty('interaction', String)
            interaction: string = undefined;
            @JsonProperty('type', String)
            type: string = undefined;
            @JsonProperty('entity', String, true)
            entity: string = undefined;
            @JsonProperty('user', [String], true)
            userIds: string[] = undefined;
        }

        @JsonObject()
        export class Response extends UserInterest {
        }
    }


    export namespace GetUserSimilarInterests {
        import UserInterest = UserInterests.UserInterest;

        @JsonObject()
        export class Request {
            @JsonProperty('type', String,true)
            type: string = undefined;
            @JsonProperty('entity', String, true)
            entity: string = undefined;
            @JsonProperty('minAge', Number, true)
            minAge: number = undefined;
            @JsonProperty('maxAge', Number, true)
            maxAge: number = undefined;
            @JsonProperty('gender', String, true)
            gender: string = undefined;
        }

        @JsonObject()
        export class Response extends UserInterest {
        }
    }

}
