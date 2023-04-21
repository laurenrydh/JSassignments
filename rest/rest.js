const getAllPostsBtn = document.getElementById("get-all-posts")
const getPost10Btn = document.getElementById("get-post-with-id-10")
const createPostBtn = document.getElementById("create-new-post")
const replacePost12Btn = document.getElementById("replace-post-with-id-12")
const updatePost12Btn = document.getElementById("update-title-of-post-with-id-12")
const deletePost12Btn = document.getElementById("delete-post-with-id-12")
const output = document.getElementById('output')



function hideOutput() {
  const output = document.getElementById('output')
  output.innerHTML = ''
}

function renderOutput(data) {
  const output = document.getElementById('output')
  const pre = document.createElement('pre')
  pre.innerText = JSON.stringify(data, null, 2)
  output.appendChild(pre)
}

function GetAllPosts() {
  hideOutput()
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => renderOutput(json))
}

function GetPostWithId10() {
  hideOutput()
  fetch('https://jsonplaceholder.typicode.com/posts/10')
    .then(response => response.json())
    .then(json => renderOutput(json))
}

function CreateNewPost() {
  hideOutput()
  const newPost = {
    title: 'New Post',
    body: 'This is a new post.',
    userId: 13
  }
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
  .then(response => response.json())
  .then(json => renderOutput(json))
}

function ReplacePostWithId12() {
  hideOutput()
  const updatedPost = {
    title: 'Updated Post',
    body: 'This post has been updated.',
    userId: 1,
    id: 12
  }
  fetch('https://jsonplaceholder.typicode.com/posts/12', {
    method: 'PUT',
    body: JSON.stringify(updatedPost),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
  .then(response => response.json())
  .then(json => renderOutput(json))
}

function UpdateTitleOfPostWithId12() {
  hideOutput()
  const updatedTitle = {
    title: 'Updated Title'
  }
  fetch('https://jsonplaceholder.typicode.com/posts/12', {
    method: 'PATCH',
    body: JSON.stringify(updatedTitle),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
  .then(response => response.json())
  .then(json => renderOutput(json))
}

function DeletePostWithId12() {
  hideOutput()
  fetch('https://jsonplaceholder.typicode.com/posts/12', {
    method: 'DELETE'
  })
  .then(response => {
    if (response.ok) {
      renderOutput('Post with the ID of 12 has been deleted.')
    } else {
      renderOutput('Error deleting post.')
    }
  })
}

getAllPostsBtn.addEventListener("click", GetAllPosts)
getPost10Btn.addEventListener("click", GetPostWithId10)
createPostBtn.addEventListener("click", CreateNewPost)
replacePost12Btn.addEventListener("click", ReplacePostWithId12)
updatePost12Btn.addEventListener("click", UpdateTitleOfPostWithId12)
deletePost12Btn.addEventListener("click", DeletePostWithId12)

      