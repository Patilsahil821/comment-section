import React, { useState } from "react"
import SendReply from "./SendReply"

function Replies({ data, reply, currentUser, openModal, setOpenModal }) {
  const [score, setScore] = useState(reply.score)
  const [click, setClick] = useState(false)
  const [edit, setEdit] = useState(false)
  const [value, setValue] = useState(
    "@" + reply.replyingTo + ", " + reply.content
  )
  const [replyingTo, setReplyingTo] = useState(reply.replyingTo)
  function handleChange(e) {
    const { value } = e.target
    setValue(value)
  }
  function handleClick(e) {
    e.preventDefault()
    setEdit(!edit)
  }
  return (
    <>
      <div className="reply-comment-box">
        <div className="button">
          <img
            onClick={() => {
              setScore(score + 1)
            }}
            src={`./images/icon-plus.svg`}
            className="plus"
            alt="plus"
          ></img>
          <p>{score}</p>
          <img
            onClick={() => {
              setScore(score - 1)
            }}
            src={`./images/icon-minus.svg`}
            className="minus"
            alt="minus"
          ></img>
        </div>
        <div className="content">
          <div className="first-line">
            <img
              className="avatar"
              src={`${reply.user.image.png}`}
              alt="amyrobson"
            ></img>
            <div className="name">{reply.user.username}</div>
            {currentUser.username === reply.user.username && (
              <div className="you">you</div>
            )}
            <div className="created-at">{reply.createdAt}</div>
          </div>
          {/* comment para */}
          {edit === false && (
            <div className="comment-para">
              <span className="replying-to">@{reply.replyingTo} </span>
              {value}
            </div>
          )}
          {edit === true && (
            <textarea
              className="edit-area"
              name="edit-reply"
              value={value}
              onChange={handleChange}
              style={{
                animationName: "example",
                animationDuration: "300ms",
                animationFillMode: "forwards",
                animationTimingFunction: "ease-out"
              }}
            ></textarea>
          )}
          {/* update button */}
          {edit === true && (
            <button className="update-button" onClick={handleClick}>
              Update
            </button>
          )}
        </div>
        {currentUser.username !== reply.user.username && (
          <div
            className="reply-box"
            onClick={() => {
              setClick(!click)
              setReplyingTo(reply.user.username)
            }}
          >
            <img
              className="reply-icon"
              src={`./images/icon-reply.svg`}
              alt="reply-icon"
            ></img>
            <p className="reply-text">Reply</p>
          </div>
        )}
        {currentUser.username === reply.user.username && (
          <div
            className="delete-box"
            onClick={() => {
              setOpenModal(!openModal)
            }}
          >
            <img
              className="reply-icon"
              src={`./images/icon-delete.svg`}
              alt="delete-icon"
            ></img>
            <p className="delete-text">Delete</p>
          </div>
        )}
        {/* edit box */}
        {currentUser.username === reply.user.username && (
          <div
            className="edit-box"
            onClick={() => {
              setEdit(!edit)
            }}
          >
            <img
              className="edit-icon"
              src={`./images/icon-edit.svg`}
              alt="edit-icon"
            ></img>
            <p className="edit-text">Edit</p>
          </div>
        )}
      </div>
      {click === true && (
        <SendReply
          isStyle="yes"
          replyingTo={replyingTo}
          currentUser={currentUser}
          data={data}
        />
      )}
    </>
  )
}

export default Replies
