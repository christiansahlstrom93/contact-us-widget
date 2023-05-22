# React email widget

Our widget is indended to solve issues with having a e.g **Contact Us** or perhaps a **Subscribe to newsletter** feature for applications without any integrated mail functionality or backend.

We are using our own free **API** that you can integrate towards for free if you wish to create your own form. Find the API [here](https://algobook.info/docs/email-api).

## Prerequisites

In order to use the API and this widget, you need to contact us with your **Email** that we will forward all messages to, so that we can add you to our list of trusted emails - this is to prevent abuse of our API. We generally give you access in an hour or so - at lease within a day. Contact us [here](https://algobook.info/contact).

## Using the widget

The widget is fully customizable in terms of styling and copy. Each element has their own styling object and the widget also have support for a className prop. The **only** mandatory prop is your **Email** that should be trusted by the API.

## Example of the widget with default design

Example image of default design of the widget

![widget](https://storage.googleapis.com/algobook/email-widget/Screenshot%202023-05-22%20at%2012.43.42.png)

In code, it would look like this:

```jsx
import { SendMail } = from "react-email-widget";

<SendMail recipient="your@email.com" />
```

All props available:

```ts
interface ISendMailProps {
  recipient: string;
  className?: string;
  inputPlaceholder?: string;
  textareaPlaceholder?: string;
  headline?: string;
  buttonText?: string;
  styles?: any;
  inputStyles?: any;
  textareaStyles?: any;
  buttonStyles?: any;
  successText?: string;
  generalErrorText?: string;
  noEmailEntered?: string;
  wrongEmailFormat?: string;
  noMessageEnteredMessage?: string;
}
```

## Summary

Please check out our documentation page for more information and implementations. And also don't forget to contact us with your email so you can start using the widget.

### Other free projects and APIs

For more cool and free open source projects and APIs, check out our [website](https://algobook.info/opensource)
