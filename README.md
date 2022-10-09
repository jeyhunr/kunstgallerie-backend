# kunstgallerie API

> This is the backend of kunstgallerie APP :)

## List of API endpoints

### **Post**

| Route                               | HTTP Request |             Body             | Description               |
| :---------------------------------- | :----------: | :--------------------------: | :------------------------ |
| `/api/v1/posts/insertpost`          |    `POST`    | `{title, url, thumbnailUrl}` | Insert new post           |
| `/api/v1/posts/getposts`            |    `GET`     |             `-`              | Get all posts             |
| `/api/v1/posts/getpost/:limit`      |    `GET`     |             `-`              | Get posts (limit)         |
| `/api/v1/posts/deletepost/:post_id` |   `DELETE`   |             `-`              | Remove post               |

<hr>
