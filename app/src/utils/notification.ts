// TODO: create a notification service

interface NotificationData {
  title: string;
  body: string;
  token: string;
  data: {};
}
export const notificationService = async ({
  title,
  body,
  token,
  data
}: NotificationData) => {
  const resp = await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      to: token,
      title,
      body,
      data
    })
  });
  const status = resp.status;
  const res: unknown = await resp.json();
  return {
    res,
    status
  };
};
