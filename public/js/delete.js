async function deleteFormHandler(event) {
    event.preventDefault();
  
    const post_id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1
    ];
  
    const userInput = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
      body: JSON.stringify({
        post_id: post_id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (userInput.ok) {
      document.location.replace("/dashboard");
    } else {
      alert('Failed to delete post');
    }
  }
  
  document
    .querySelector("#delete-post")
    .addEventListener("submit", deleteFormHandler);