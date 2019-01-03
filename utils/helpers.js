import { AsyncStorage } from 'react-native'

import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = 'flash-cards:notifications'

export function createNotification() {
    return {
        title: 'Finish one more quiz..',
        body: '... and bring accomplishment and meaning to your life.',
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            vibrate: true,
            sticky: false
        }
    }
}
export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) { // If no notifications are set, ask for permission
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') { // If user allows, set a reminder for 7 am.. Always great to wake up for a quiz.
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(7)
              tomorrow.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}
export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}