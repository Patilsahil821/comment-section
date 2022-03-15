import React, { useState } from "react"
import Replies from "./Replies"
import SendReply from "./SendReply"

function CommentBox({ data, currentUser, openModal, setOpenModal }) {
  const [score, setScore] = useState(data.score)
  const [click, setClick] = useState(false)

  return (
    <>
      <div className="comment-box">
        <div className="button">
          <img
            src={`./images/icon-plus.svg`}
            className="plus"
            alt="plus"
            onClick={() => {
              setScore(score + 1)
            }}
          ></img>
          <p>{score}</p>
          <img
            src={`./images/icon-minus.svg`}
            className="minus"
            alt="minus"
            onClick={() => {
              setScore(score - 1)
            }}
          ></img>
        </div>
        <div className="content">
          <div className="first-line">
            <img
              className="avatar"
              src={`${data.user.image.png}`}
              alt={data.user.username}
            ></img>
            <div className="name">{data.user.username}</div>
            <div className="created-at">{data.createdAt}</div>
          </div>
          <div className="comment-para">{data.content}</div>
        </div>
        <div
          className="reply-box"
          onClick={() => {
            setClick(!click)
          }}
        >
          <img
            className="reply-icon"
            src={`./images/icon-reply.svg`}
            alt="reply-icon"
          ></img>
          <p className="reply-text">Reply</p>
        </div>
      </div>
      {click === true && (
        <SendReply
          replyingTo={data.user.username}
          isStyle="no"
          currentUser={currentUser}
          data={data}
        />
      )}
      {/* replies */}
      <div className="replies-container">
        {data.replies.map((element, index) => {
          return (
            <Replies
              data={data}
              reply={element}
              currentUser={currentUser}
              key={index}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          )
        })}
      </div>
    </>
  )
}

export default CommentBox
