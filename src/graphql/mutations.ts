/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./api"
type GeneratedMutation<InputType, OutputType> = string & {
	__generatedMutationInput: InputType
	__generatedMutationOutput: OutputType
}

export const createBlog = /* GraphQL */ `mutation CreateBlog(
  $input: CreateBlogInput!
  $condition: ModelBlogConditionInput
) {
  createBlog(input: $input, condition: $condition) {
    id
    name
    posts {
      items {
        id
        title
        createdAt
        updatedAt
        blogPostsId
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
	APITypes.CreateBlogMutationVariables,
	APITypes.CreateBlogMutation
>
export const updateBlog = /* GraphQL */ `mutation UpdateBlog(
  $input: UpdateBlogInput!
  $condition: ModelBlogConditionInput
) {
  updateBlog(input: $input, condition: $condition) {
    id
    name
    posts {
      items {
        id
        title
        createdAt
        updatedAt
        blogPostsId
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
	APITypes.UpdateBlogMutationVariables,
	APITypes.UpdateBlogMutation
>
export const deleteBlog = /* GraphQL */ `mutation DeleteBlog(
  $input: DeleteBlogInput!
  $condition: ModelBlogConditionInput
) {
  deleteBlog(input: $input, condition: $condition) {
    id
    name
    posts {
      items {
        id
        title
        createdAt
        updatedAt
        blogPostsId
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
	APITypes.DeleteBlogMutationVariables,
	APITypes.DeleteBlogMutation
>
export const createPost = /* GraphQL */ `mutation CreatePost(
  $input: CreatePostInput!
  $condition: ModelPostConditionInput
) {
  createPost(input: $input, condition: $condition) {
    id
    title
    blog {
      id
      name
      posts {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    comments {
      items {
        id
        content
        createdAt
        updatedAt
        postCommentsId
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    blogPostsId
    __typename
  }
}
` as GeneratedMutation<
	APITypes.CreatePostMutationVariables,
	APITypes.CreatePostMutation
>
export const updatePost = /* GraphQL */ `mutation UpdatePost(
  $input: UpdatePostInput!
  $condition: ModelPostConditionInput
) {
  updatePost(input: $input, condition: $condition) {
    id
    title
    blog {
      id
      name
      posts {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    comments {
      items {
        id
        content
        createdAt
        updatedAt
        postCommentsId
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    blogPostsId
    __typename
  }
}
` as GeneratedMutation<
	APITypes.UpdatePostMutationVariables,
	APITypes.UpdatePostMutation
>
export const deletePost = /* GraphQL */ `mutation DeletePost(
  $input: DeletePostInput!
  $condition: ModelPostConditionInput
) {
  deletePost(input: $input, condition: $condition) {
    id
    title
    blog {
      id
      name
      posts {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    comments {
      items {
        id
        content
        createdAt
        updatedAt
        postCommentsId
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    blogPostsId
    __typename
  }
}
` as GeneratedMutation<
	APITypes.DeletePostMutationVariables,
	APITypes.DeletePostMutation
>
export const createComment = /* GraphQL */ `mutation CreateComment(
  $input: CreateCommentInput!
  $condition: ModelCommentConditionInput
) {
  createComment(input: $input, condition: $condition) {
    id
    post {
      id
      title
      blog {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      blogPostsId
      __typename
    }
    content
    createdAt
    updatedAt
    postCommentsId
    __typename
  }
}
` as GeneratedMutation<
	APITypes.CreateCommentMutationVariables,
	APITypes.CreateCommentMutation
>
export const updateComment = /* GraphQL */ `mutation UpdateComment(
  $input: UpdateCommentInput!
  $condition: ModelCommentConditionInput
) {
  updateComment(input: $input, condition: $condition) {
    id
    post {
      id
      title
      blog {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      blogPostsId
      __typename
    }
    content
    createdAt
    updatedAt
    postCommentsId
    __typename
  }
}
` as GeneratedMutation<
	APITypes.UpdateCommentMutationVariables,
	APITypes.UpdateCommentMutation
>
export const deleteComment = /* GraphQL */ `mutation DeleteComment(
  $input: DeleteCommentInput!
  $condition: ModelCommentConditionInput
) {
  deleteComment(input: $input, condition: $condition) {
    id
    post {
      id
      title
      blog {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      blogPostsId
      __typename
    }
    content
    createdAt
    updatedAt
    postCommentsId
    __typename
  }
}
` as GeneratedMutation<
	APITypes.DeleteCommentMutationVariables,
	APITypes.DeleteCommentMutation
>
