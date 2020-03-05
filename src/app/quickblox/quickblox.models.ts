import {Any, JsonObject, JsonProperty} from 'json2typescript';
import {ModelsConverters} from '@core/models.converters';
import {Moment} from 'moment';


export namespace QuickbloxObjects {
    import DateTimeConverter = ModelsConverters.DateTimeConverter;
    import TimestampConverter = ModelsConverters.TimestampConverter;
    import IntToStringConverter = ModelsConverters.IntToStringConverter;

    @JsonObject()
    export class Attachment {
        @JsonProperty('id', Number, true)
        id: number = undefined;
        @JsonProperty('type', String)
        type: string = undefined;
        @JsonProperty('uid', String, true)
        uid: string = undefined;

    }

    @JsonObject()
    export class QuickbloxSession {
        @JsonProperty('application_id', Number, true)
        application_id: number = undefined;
        @JsonProperty('created_at', String, true)
        created_at: string = undefined;
        @JsonProperty('id', Number, true)
        id: number = undefined;
        @JsonProperty('nonce', Number, true)
        nonce: number = undefined;
        @JsonProperty('token', String, true)
        token: string = undefined;
        @JsonProperty('updated_at', DateTimeConverter, true)
        updated_at: Moment = undefined;
        @JsonProperty('user_id', Number, true)
        user_id: number = undefined;
    }

    @JsonObject()
    export class QuickbloxMessage {
        @JsonProperty('_id', String)
        id: string = undefined;
        @JsonProperty('created_at', DateTimeConverter)
        created_at: Moment = undefined;
        @JsonProperty('updated_at', DateTimeConverter)
        updated_at: Moment = undefined;
        // attachments: Attachment[];
        @JsonProperty('read_ids', [Number])
        read_ids: number[] = undefined;
        @JsonProperty('delivered_ids', [Number])
        delivered_ids: number[] = undefined;
        @JsonProperty('chat_dialog_id', String)
        chat_dialog_id: string = undefined;
        @JsonProperty('date_sent', TimestampConverter)
        date_sent: Moment = undefined;
        @JsonProperty('message', String)
        message: string = undefined;
        @JsonProperty('recipient_id', Number)
        recipient_id: number = undefined;
        @JsonProperty('sender_id', IntToStringConverter)
        sender_id: string = undefined;
        @JsonProperty('read', Number, true)
        read: number = undefined;
        @JsonProperty('attachments', [Attachment], true)
        attachments: Attachment[] = undefined;

    }

    @JsonObject()
    export class NotificationChannel {
        @JsonProperty('name', String, true)
        name: string = undefined;
    }

    @JsonObject()
    export class Platform {
        @JsonProperty('name', String, true)
        name: string = undefined;
    }

    @JsonObject()
    export class Device {
        @JsonProperty('udid', String, true)
        udid: string = undefined;
        @JsonProperty('platform', Platform, true)
        platform: Platform = undefined;
        @JsonProperty('client_identification_sequence', String, true)
        client_identification_sequence: string = undefined;
        @JsonProperty('bundle_identifier', String, true)
        bundle_identifier: string = undefined;
    }

    @JsonObject()
    export class Subscription {
        @JsonProperty('id', Number, true)
        id: number = undefined;
        @JsonProperty('notification_channel', NotificationChannel, true)
        notification_channel: NotificationChannel = undefined;
        @JsonProperty('device', Device, true)
        device: Device = undefined;
    }

}


export namespace QuickbloxRequests {

    export namespace CreateQuickbloxSession {

        import QuickbloxSession = QuickbloxObjects.QuickbloxSession;

        @JsonObject()
        export class Request {
            @JsonProperty('email', String)
            email: string = undefined;
            @JsonProperty('password', String, true)
            password: string = undefined;
        }

        @JsonObject()
        export class Response extends QuickbloxSession {
        }
    }

    export namespace CreateQuickbloxSubscription {

        import Subscription = QuickbloxObjects.Subscription;

        @JsonObject()
        export class Request {
            @JsonProperty('notification_channel', String)
            notification_channel: string = undefined;
            @JsonProperty('client_identification_sequence', String)
            client_identification_sequence: string = undefined;
            @JsonProperty('platform', String)
            platform: string = undefined;
            @JsonProperty('udid', String)
            udid: string = undefined;
        }

        @JsonObject()
        export class Response {
            @JsonProperty('subscription', Subscription)
            subscription: Subscription = undefined;
        }
    }

    export namespace ConnectToQuickbloxChat {

        @JsonObject()
        export class Request {
            @JsonProperty('userId', Number)
            userId: number = undefined;
            @JsonProperty('password', String)
            password: string = undefined;
        }

        // Respose is empty json
    }

    export namespace CreateAndUploadFile {

        @JsonObject()
        export class Request {
            @JsonProperty('name', String)
            name: string = undefined;
            @JsonProperty('type', String)
            type: string = undefined;
            @JsonProperty('size', Number)
            size: number = undefined;
            @JsonProperty('public', Boolean, true)
            isPublic: boolean = undefined;
            @JsonProperty('file', Any)
            file: any = false;

        }

        @JsonObject()
        export class Response {

        }
    }


    export namespace CreateQuickbloxDialog {

        import DateTimeConverter = ModelsConverters.DateTimeConverter;

        @JsonObject()
        export class Request {
            @JsonProperty('type', Number, true)
            privacy_type: number = undefined;
            @JsonProperty('occupants_ids', [String], true)
            occupant_ids: string[] = undefined;
            @JsonProperty('name', String, true)
            name: string = undefined;
        }

        @JsonObject()
        export class Response {
            @JsonProperty('_id', String)
            id: string = undefined;
            @JsonProperty('created_at', DateTimeConverter)
            created_at: Moment = undefined;
            @JsonProperty('updated_at', String)
            updated_at: string = undefined;
            @JsonProperty('updated_at', String)
            last_message: string = undefined;
            @JsonProperty('last_message_date_sent', DateTimeConverter)
            last_message_date_sent: Moment = undefined;
            @JsonProperty('last_message_user_id', String)
            last_message_user_id: string = undefined;
            @JsonProperty('name', String)
            name: string = undefined;
            @JsonProperty('occupants_ids', [String])
            occupant_ids: string[] = undefined;
            @JsonProperty('updated_at', Number)
            type: number = undefined;
            @JsonProperty('xmpp_room_jid', String)
            xmpp_room_jid: string = undefined;
            @JsonProperty('unread_messages_count', Number)
            unread_messages_count: number = undefined;

        }
    }

    export namespace CreateQuickbloxMessage {


        import QuickbloxMessage = QuickbloxObjects.QuickbloxMessage;
        import Attachment = QuickbloxObjects.Attachment;

        @JsonObject()
        export class Request {
            @JsonProperty('chat_dialog_id', String)
            chat_dialog_id: string = undefined;
            @JsonProperty('message', String)
            message: string = undefined;
            @JsonProperty('send_to_chat', Number)
            send_to_chat: number = undefined; // default 1
            @JsonProperty('markable', Number)
            markable: number = undefined; // default 1
            @JsonProperty('save_to_history', Number)
            save_to_history: number = undefined; // default 1
            @JsonProperty('attachments', [Attachment], true)
            attachments: Attachment[] = undefined;

        }

        @JsonObject()
        export class Response extends QuickbloxMessage {
        }
    }

    export namespace CreateQuickbloxMessageXml {

        import Attachment = QuickbloxObjects.Attachment;

        @JsonObject()
        export class CreateQuickbloxMessageExtension {
            @JsonProperty('save_to_history', Number)
            save_to_history = 1;
            @JsonProperty('attachments', [Attachment], true)
            attachments: Attachment[] = undefined;

        }

        @JsonObject()
        export class Request {
            dialog_id: string = undefined;
            @JsonProperty('type', String)
            type: string = undefined;
            @JsonProperty('body', String)
            body: string = undefined;
            @JsonProperty('extension', CreateQuickbloxMessageExtension)
            extension: CreateQuickbloxMessageExtension = undefined;
            @JsonProperty('markable', Number)
            markable = 1;
            @JsonProperty('send_to_chat', Number)
            send_to_chat = 1;
        }

        @JsonObject()
        export class Response {
        }
    }


    export namespace ListDialogs {

        import DateTimeConverter = ModelsConverters.DateTimeConverter;

        @JsonObject()
        export class Request {
            @JsonProperty('_id', String, true)
            id: string = undefined;
            @JsonProperty('type', Number, true)
            privacy_type: number = undefined;
            @JsonProperty('name', String, true)
            name: string = undefined;
        }

        @JsonObject()
        export class DialogItem {
            @JsonProperty('_id', String)
            id: string = undefined;
            @JsonProperty('name', String)
            name: string = undefined;
            @JsonProperty('occupants_ids', [Number])
            occupant_ids: number[] = undefined;
            @JsonProperty('type', Number)
            privacy_type: number = undefined;
            @JsonProperty('created_at', DateTimeConverter)
            created_at: string = undefined;
            @JsonProperty('updated_at', DateTimeConverter)
            updated_at: string = undefined;
            @JsonProperty('unread_messages_count', Number)
            unread_message_count: number = undefined;
            @JsonProperty('last_message', String)
            last_message: string = undefined;
            @JsonProperty('user_id', Number)
            user_id: number = undefined;
        }

        @JsonObject()
        export class Response {
            @JsonProperty('total_entries', Number)
            total_entries: number = undefined;
            @JsonProperty('skip', Number)
            skip: number = undefined;
            @JsonProperty('limit', Number)
            limit: number = undefined;
            @JsonProperty('items', [DialogItem])
            items: DialogItem[] = undefined;
        }
    }

    export namespace GetOnlineUsers {

        @JsonObject()
        export class Request {
            dailog_id: string = undefined;

        }
    }


    export namespace ListMessages {

        import DateTimeConverter = ModelsConverters.DateTimeConverter;
        import TimestampConverter = ModelsConverters.TimestampConverter;
        import QuickbloxMessage = QuickbloxObjects.QuickbloxMessage;

        @JsonObject()
        export class QuickbloxMessageList {
            @JsonProperty('skip', Number, true)
            skip: number = undefined;
            @JsonProperty('limit', Number, true)
            limit: number = undefined;
            @JsonProperty('items', [QuickbloxMessage], true)
            items: QuickbloxMessage[] = undefined;
        }

        @JsonObject()
        export class Request {
            @JsonProperty('_id', String, true)
            id: string = undefined;
            @JsonProperty('chat_dialog_id', String, true)
            chat_dialog_id: string = undefined;
            /* Either one of the sorting has to be set. Not both. */
            @JsonProperty('sort_desc', String, true)
            sort_desc: string = undefined; // only one value 'date_sent'
            @JsonProperty('sort_asc', String, true)
            sort_asc: string = undefined; // only one value 'date_sent'
            @JsonProperty('date_sent', TimestampConverter, true)
            date_sent: number = undefined;
            @JsonProperty('updated_at', DateTimeConverter, true)
            updated_at: Moment = undefined;
            @JsonProperty('sender_id', Number, true)
            sender_id: number = undefined;
            @JsonProperty('recipient_id', Number, true)
            recipient_id: number = undefined;
            @JsonProperty('limit', Number, true)
            limit: number = undefined;
            @JsonProperty('skip', Number, true)
            skip: number = undefined;
        }

        @JsonObject()
        export class Response extends QuickbloxMessageList {
        }
    }

    export namespace DeleteQuickbloxMessage {

        @JsonObject()
        export class DeleteQuickbloxMessageParam {
            @JsonProperty('force', Number, true)
            force: number = undefined; // only one value '1'
        }

        @JsonObject()
        export class DeleteQuickbloxMessageResponseItems {
            @JsonProperty('ids', [String], true)
            ids: string[] = undefined;
        }

        @JsonObject()
        export class Request {
            messageId: string = undefined;
            @JsonProperty('params', DeleteQuickbloxMessageParam)
            params: DeleteQuickbloxMessageParam = undefined;
        }

        @JsonObject()
        export class Response {
            @JsonProperty('SuccessfullyDeleted', DeleteQuickbloxMessageResponseItems)
            successfully_deleted: DeleteQuickbloxMessageResponseItems = undefined;
            @JsonProperty('WrongPermissions', DeleteQuickbloxMessageResponseItems)
            wrong_permissions: DeleteQuickbloxMessageResponseItems = undefined;
            @JsonProperty('NotFound', DeleteQuickbloxMessageResponseItems)
            not_found: DeleteQuickbloxMessageResponseItems = undefined;
        }
    }

    export namespace GetUsers {

        import DateTimeConverter = ModelsConverters.DateTimeConverter;

        @JsonObject()
        export class Request {
            @JsonProperty('id', String, true)
            id: string = undefined;
            @JsonProperty('email', String)
            email: string = undefined;
        }

        @JsonObject()
        export class Response {
            @JsonProperty('id', Number)
            id: number = undefined;
            @JsonProperty('full_name', String)
            full_name: string = undefined;
            @JsonProperty('email', String)
            email: string = undefined;
            @JsonProperty('login', String)
            login: string = undefined;
            @JsonProperty('created_at', DateTimeConverter)
            created_at: Moment = undefined;
            @JsonProperty('updated_at', DateTimeConverter)
            updated_at: Moment = undefined;
        }
    }

    export namespace QuickbloxTypingListener {

        @JsonObject()
        export class Request {
        }

        @JsonObject()
        export class Response {
            @JsonProperty('isTyping', Boolean)
            isTyping: boolean = undefined;
            @JsonProperty('userId', Number)
            userId: number = undefined;
            @JsonProperty('dialogId', String)
            dislogId: string = undefined;
        }
    }

    export namespace QuickbloxMessageListener {

        import TimestampConverter = ModelsConverters.TimestampConverter;

        @JsonObject()
        export class QuickbloxMessageListenerExtension {
            @JsonProperty('save_to_history', String)
            save_to_history: string = undefined;
            @JsonProperty('message_id', String)
            message_id: string = undefined;
            @JsonProperty('dialog_id', String)
            dialog_id: string = undefined;
            @JsonProperty('date_sent', TimestampConverter)
            date_sent: Moment = undefined;
        }

        @JsonObject()
        export class QuickbloxMessageListenerDelay {
        }

        @JsonObject()
        export class Response {
            @JsonProperty('user_id', Number, true)
            user_id: number = undefined;
            @JsonProperty('id', String)
            id: string = undefined;
            @JsonProperty('dialog_id', String)
            dialog_id: string = undefined;
            @JsonProperty('recipient_id', Number, true)
            recipient_id: number = undefined;
            @JsonProperty('type', String)
            type: string = undefined;
            @JsonProperty('body', String)
            body: string = undefined;
            @JsonProperty('extension', QuickbloxMessageListenerExtension)
            extension: QuickbloxMessageListenerExtension = undefined;
            @JsonProperty('delay', QuickbloxMessageListenerDelay, true)
            delay: QuickbloxMessageListenerDelay = undefined;
            @JsonProperty('markable', Number)
            markable: number = undefined;
        }
    }

}
