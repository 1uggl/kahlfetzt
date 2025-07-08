import {v4 as uuidv4} from 'uuid';
import Navbar from './Navbar.jsx'
import blog from './blog/blog.js'
import './css/Blog.css'

function Blog() {
  return (
  <>
      <Navbar />
      <div className="Blog-container">
      <div className="list-container">
        {blog.map(item => {
          return (
          <div className="list-item" key={uuidv4()}>
          {item.image ? <img src={item.image} alt={item.headline} /> : null}
                <div>
          <h3>{item.headline}</h3>
          <h4>{item.date}</h4>
          <p>{item.text}</p>
          </div>
          </div>
          )
        })}
      </div>
      </div>
  </>
  )
}

export default Blog
