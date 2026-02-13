import UserCard from "./UserCard"
import './BlogPost.css'

function BlogPost({ title, author , content , date }) {
    return(
        <div className="blog-post">
            <h1 className="blog-post-title">{title}</h1>
            <UserCard
                name={author.name}
                email={author.email}
                role={author.role}
            />
            <p className="blog-post-content">{content}</p>
            <p className="blog-post-date">Published on: {date}</p>
        </div>
    )
}

export default BlogPost