import { useState, useCallback } from "react";
import "./styles.css";

export const SendMail = (props) => {
  const {
    recipient,
    inputPlaceholder = "Email",
    textareaPlaceholder = "Write your message...",
    headline = "Contact us",
    buttonText = "Send",
    className = "",
    styles = {},
    inputStyles = {},
    textareaStyles = {},
    buttonStyles = {},
    successText = "Thanks for contacting us",
    generalErrorText = "Something went wrong",
    noEmailEntered = "Please enter your email",
    wrongEmailFormat = "Wrong format of email",
    noMessageEnteredMessage = "Message cannot be empty.",
  } = props;

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const validateEmail = useCallback((email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }, []);

  const sendMail = async () => {
    setError("");
    setSuccess(false);
    if (!email) {
      setError(noEmailEntered);
      return;
    } else if (!validateEmail(email)) {
      setError(wrongEmailFormat);
      return;
    } else if (!message) {
      setError(noMessageEnteredMessage);
      return;
    }
    try {
      const response = await fetch("https://api.algobook.info/v1/mail/send", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: `Message from ${email}`,
          text: message,
          recipient: recipient,
        }),
      });
      const jsonResponse = await response.json();
      if (jsonResponse.error) {
        setError(jsonResponse.error)
      } else if (jsonResponse.status === "SUCCESS") {
        setEmail("");
        setMessage("");
        setSuccess(true);
      }
    } catch (err) {
      setError(generalErrorText);
    }
  };

  return (
    <div className={`algobook_mail  ${className}`} style={styles}>
      <h2 className="algobook_mail_headline">{headline}</h2>
      <div className={"algobook_mail_wrapper"}>
        <div className={"algobook_mail_areaContainer"}>
          <input
            style={inputStyles}
            value={email}
            type="email"
            className={"algobook_mail_input"}
            onChange={(ev) => setEmail(ev.target.value)}
            placeholder={inputPlaceholder}
          />
          <textarea
            style={textareaStyles}
            value={message}
            className={"algobook_mail_textarea"}
            onChange={(ev) => setMessage(ev.target.value)}
            placeholder={textareaPlaceholder}
          />
        </div>
        <button
          className="algobook_mail_button"
          style={buttonStyles}
          onClick={sendMail}
        >
          {buttonText}
        </button>
      </div>
      {success ? (
        <span className={"algobook_mail_success"}>{successText}</span>
      ) : error ? (
        <span className={"algobook_mail_error"}>{error}</span>
      ) : null}
    </div>
  );
};
