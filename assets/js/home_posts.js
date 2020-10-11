{

    // method to submit the form data for a new post using Ajax
    let createPost = function(){
        let newPostForm = $('#new-post-form');
        newPostForm.submit(function(e){
            e.preventDefault();

            $.ajax({
                type: 'post',
                url: '/posts/create',
                data: newPostForm.serialize(),
                success: function(data){
                    console.log(data);
                    let newPost = newPostDom(data.data.post);
                    $('#post-list-container>ul').prepend(newPost);
                    deletePost($(' .delete-post-button', newPost))

                    // call the create comment class
                    console.log(data.data.post._id);
                    new PostComments(data.data.post._id);

                    //  enable the functionality of the toggle like button on the new post
                    new ToggleLike($(' .toggle-like-button', newPost));

                    new Noty({
                      theme: 'relax',
                      text: "Post published!",
                      type: 'success',
                      layout: 'topRight',
                      timeout: 1500
                      
                  }).show();

                }, error: function(error){
                    console.log(error.responseText);
                }
            });
        });
    };

    // method to create post in DOM
    let newPostDom = function(post){
        return $(`<li id="post-${ post._id }">
        <p>
            <small>
              <a class="delete-post-button" href='/posts/destroy/${post._id}'>X</a>
            </small>
            ${post.content}
          <br>
          <small>
          ${post.user.name}
          </small>
          <br>
          <small>                            
            <a class="toggle-like-button" data-likes="0" href="/likes/toggle/?id=${post._id}&type=Post">
              0 Likes
            </a>
          </small>
        </p>
        <div class="post-comments">
            <form id="post-${post._id}-comments-form" action="/comments/create" method="post">
              <input type="text" name="content" placeholder="Type Here to add comment..." required>
              <input type="hidden" name="post" value="${ post._id }">
              <input type="submit" value="Add Comment">
            </form>
          <div id='post-comment-list'>
            <ul id='post-comment-${post._id}'>
            </ul>
          </div>
        </div>
      </li>`)
    }

    // method to delete a post from DOM
    let deletePost = function(deleteLink){
      $(deleteLink).click(function(e){
        e.preventDefault();

        $.ajax({
          type: 'get',
          url: $(deleteLink).prop('href'),
          success: function(data){
            console.log(data);
            $(`#post-${data.data.post_id}`).remove();
            new Noty({
              theme: 'relax',
              text: "Post Deleted",
              type: 'success',
              layout: 'topRight',
              timeout: 1500
            }).show();
          }, errror: function(error){
            console.log(error.responseText);
          }
        })
      })    
    }

    // loop over all the existing posts on the page (when the window loads for the first time) and call the delete post method on delete link of each, also add AJAX (using the class we've created) to the delete button of each

    let convertPostsToAjax = function(){
      $('#post-list-container>ul>li').each(function(){
        let self = $(this);
        let deleteButton = $(' .delete-post-button', self);
        deletePost(deleteButton);

        // get the post's id by splitting the id attribute
        let postId = self.prop('id').split('-')[1]
        new PostComments(postId);
      });
    }


    createPost();
    convertPostsToAjax();
}