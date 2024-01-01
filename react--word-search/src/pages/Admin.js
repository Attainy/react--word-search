import React from 'react'

function Admin() {

  return (
    <div className='admin'>
      <form id="admin-form" action="">
        <div className="formbox">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" required/>
        </div>

        <div className="formbox">
          <label htmlFor="des">Description</label>
          <textarea id="des" rows="2" cols="33"></textarea>
        </div>

        <ul className="word-list-form">
          <label htmlFor="word1">Word List</label>
          <p>Between 10 and 30 words. Puzzles are randomly generated using a selection of your words at play time.</p>
          <div className="word-list-grid">
            {
              [...Array(parseInt(30))].map((val, idx) => {
                const id_value = `word${idx}`;
                return (
                <li id={id_value}>
                  <input type="text" />
                </li>            
              )})
            }
          </div>
        </ul>

        <div className="formbox">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" required/>
        </div>

        <button type="submit" class="submit-btn">Submit</button>

      </form>
    </div>
  )
}

export default Admin