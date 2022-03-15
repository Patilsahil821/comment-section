import react, { useState } from "react"
import "./App.css"
import CommentBox from "./components/CommentBox"
import SendReply from "./components/SendReply"
import data from "./data.js"

function App() {
  const [scroll, setScroll] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  window.addEventListener("scroll", () => {
    setScroll(window.scrollY)
  })
  return (
    <div className="main" id="one">
      <div className="comments">
        {data.comments.map((element, key) => {
          return (
            <CommentBox
              data={element}
              currentUser={data.currentUser}
              key={key}
              setOpenModal={setOpenModal}
              openModal={openModal}
            />
          )
        })}
        <SendReply
          isStyle="no"
          currentUser={data.currentUser}
          data={data.comments}
          send={true}
        />
      </div>
      {openModal === true && (
        <div className="modal" style={{ top: scroll + "px" }}>
          <div
            className="card"
            style={{
              animationName: "example",
              animationDuration: "300ms",
              animationFillMode: "forwards"
            }}
          >
            <div className="delete-heading">Delete Comment</div>
            <p className="delete-content">
              Are you sure you want to delete this comment? This will remove the
              comment and can't be undone.
            </p>
            <button
              className="cancel"
              onClick={() => {
                setOpenModal(false)
              }}
            >
              NO, CANCEL
            </button>
            <button
              className="delete-yes"
              onClick={() => {
                setOpenModal(false)
              }}
            >
              YES, DELETE
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
