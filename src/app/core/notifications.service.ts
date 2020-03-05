import {Injectable} from '@angular/core';
import {NOTIFICATION_THEMES, TOAST_CONFIGURATION} from '@core/core.constants';
import {Toast} from '@ionic-native/toast/ngx';


@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(protected toast: Toast) {
  }

  show(message: string, color?: string, duration?: number, position?: string) {
    const toast_plugin = window['plugins'] ? window['plugins'].toast : undefined;
    if (toast_plugin) {
      toast_plugin.showWithOptions({
        message: message,
        duration: duration || TOAST_CONFIGURATION.DURATION,
        position: position || TOAST_CONFIGURATION.POSITION,
        styling: {
          backgroundColor: color
        }
      });
    } else {
      console.log(message);
    }
  }

  success(message: string, duration?: number, postion?: string) {
    this.show(message, NOTIFICATION_THEMES.SUCCESS, duration, 'bottom');
  }

  error(message: string, duration?: number, postion?: string) {
    this.show(message, NOTIFICATION_THEMES.ERROR, duration, 'bottom');
  }

  warning(message: string, duration?: number, postion?: string) {
    this.show(message, NOTIFICATION_THEMES.WARNING, duration, 'bottom');
  }
}
