declare module "react-email-widget" {
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
  const SendMail: (props: ISendMailProps) => JSX.Element;
}
