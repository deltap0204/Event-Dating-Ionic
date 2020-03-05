import {JsonObject, JsonProperty} from 'json2typescript';
import {Chats, Users} from '@core/core.models';
import UserChat = Chats.UserChat;
import UserProfile = Users.UserProfile;

export namespace ChatRequests {
    export namespace CreateUserChat {

        import UserChat = Chats.UserChat;

        @JsonObject()
        export class Request {
            @JsonProperty('otherAccount', String)
            otherAccount: string = undefined;
        }

        @JsonObject()
        export class Response extends UserChat {

        }
    }

    export namespace GetUserChats {
        import UserChat = Chats.UserChat;

        @JsonObject()
        export class Request {

        }

        @JsonObject()
        export class Response extends UserChat {

        }
    }

    export namespace GetUserChat {
        import UserChat = Chats.UserChat;

        @JsonObject()
        export class Request {
            chatId: string = undefined;

        }

        @JsonObject()
        export class Response extends UserChat {

        }
    }

    export namespace GetUserChatsByDialogId {
        import UserChat = Chats.UserChat;

        @JsonObject()
        export class Request {
            @JsonProperty('dialogId', String)
            dialogId: string = undefined;

        }

        @JsonObject()
        export class Response extends UserChat {

        }
    }

}

export class UserChatAndOtherProfile {
    userChat: UserChat;
    otherProfile: UserProfile;
}
