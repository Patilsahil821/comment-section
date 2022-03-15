import React, { useState } from "react"

function SendReply({ isStyle, currentUser, data, replyingTo, send }) {
  const [value, setValue] = useState(
    replyingTo !== undefined ? "@" + replyingTo + " , " : ""
  )

  function hanldleChange(e) {
    const { name, value } = e.target
    setValue(value)
  }
  return (
    <div
      className={isStyle === "no" ? "send-reply-box" : "reply-send-box"}
      style={{
        animationName: "example",
        animationDuration: "300ms",
        animationFillMode: "forwards",
        animationTimingFunction: "ease-out"
      }}
    >
      <img
        className="avatar"
        src={`${currentUser.image.png}`}
        alt="profile"
      ></img>
      <textarea
        className="input-area"
        placeholder="Add a comment..."
        name="reply"
        value={value}
        onChange={hanldleChange}
        autoFocus
      ></textarea>
      <button className="send-button">{send ? "Send" : "Reply"}</button>
    </div>
  )
}

export default SendReply
