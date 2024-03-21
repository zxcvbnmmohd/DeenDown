/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./api"
type GeneratedQuery<InputType, OutputType> = string & {
	__generatedQueryInput: InputType
	__generatedQueryOutput: OutputType
}

export const getAnnouncement = /* GraphQL */ `query GetAnnouncement($id: ID!) {
  getAnnouncement(id: $id) {
    id
    title
    body
    images
    bookmarks {
      items {
        id
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    likes {
      items {
        id
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    comments {
      items {
        id
        text
        parentCommentId
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    creatorId
    creator {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      followers {
        nextToken
        __typename
      }
      announcements {
        nextToken
        __typename
      }
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
	APITypes.GetAnnouncementQueryVariables,
	APITypes.GetAnnouncementQuery
>
export const listAnnouncements = /* GraphQL */ `query ListAnnouncements(
  $filter: ModelAnnouncementFilterInput
  $limit: Int
  $nextToken: String
) {
  listAnnouncements(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      body
      images
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.ListAnnouncementsQueryVariables,
	APITypes.ListAnnouncementsQuery
>
export const announcementsByCreatorId =
	/* GraphQL */ `query AnnouncementsByCreatorId(
  $creatorId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAnnouncementFilterInput
  $limit: Int
  $nextToken: String
) {
  announcementsByCreatorId(
    creatorId: $creatorId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      body
      images
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
		APITypes.AnnouncementsByCreatorIdQueryVariables,
		APITypes.AnnouncementsByCreatorIdQuery
	>
export const announcementsByMosqueId =
	/* GraphQL */ `query AnnouncementsByMosqueId(
  $mosqueId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAnnouncementFilterInput
  $limit: Int
  $nextToken: String
) {
  announcementsByMosqueId(
    mosqueId: $mosqueId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      body
      images
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
		APITypes.AnnouncementsByMosqueIdQueryVariables,
		APITypes.AnnouncementsByMosqueIdQuery
	>
export const getBookmark = /* GraphQL */ `query GetBookmark($id: ID!) {
  getBookmark(id: $id) {
    id
    announcementId
    announcement {
      id
      title
      body
      images
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    creatorId
    creator {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      followers {
        nextToken
        __typename
      }
      announcements {
        nextToken
        __typename
      }
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
	APITypes.GetBookmarkQueryVariables,
	APITypes.GetBookmarkQuery
>
export const listBookmarks = /* GraphQL */ `query ListBookmarks(
  $filter: ModelBookmarkFilterInput
  $limit: Int
  $nextToken: String
) {
  listBookmarks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      announcementId
      announcement {
        id
        title
        body
        images
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.ListBookmarksQueryVariables,
	APITypes.ListBookmarksQuery
>
export const bookmarksByAnnouncementId =
	/* GraphQL */ `query BookmarksByAnnouncementId(
  $announcementId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBookmarkFilterInput
  $limit: Int
  $nextToken: String
) {
  bookmarksByAnnouncementId(
    announcementId: $announcementId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      announcementId
      announcement {
        id
        title
        body
        images
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
		APITypes.BookmarksByAnnouncementIdQueryVariables,
		APITypes.BookmarksByAnnouncementIdQuery
	>
export const bookmarksByCreatorId = /* GraphQL */ `query BookmarksByCreatorId(
  $creatorId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBookmarkFilterInput
  $limit: Int
  $nextToken: String
) {
  bookmarksByCreatorId(
    creatorId: $creatorId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      announcementId
      announcement {
        id
        title
        body
        images
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.BookmarksByCreatorIdQueryVariables,
	APITypes.BookmarksByCreatorIdQuery
>
export const bookmarksByMosqueId = /* GraphQL */ `query BookmarksByMosqueId(
  $mosqueId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBookmarkFilterInput
  $limit: Int
  $nextToken: String
) {
  bookmarksByMosqueId(
    mosqueId: $mosqueId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      announcementId
      announcement {
        id
        title
        body
        images
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.BookmarksByMosqueIdQueryVariables,
	APITypes.BookmarksByMosqueIdQuery
>
export const getClass = /* GraphQL */ `query GetClass($id: ID!) {
  getClass(id: $id) {
    id
    title
    description
    startDateTime
    endDateTime
    recurring
    daysOfWeek
    creatorId
    creator {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    instructorId
    instructor {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      followers {
        nextToken
        __typename
      }
      announcements {
        nextToken
        __typename
      }
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetClassQueryVariables, APITypes.GetClassQuery>
export const listClasses = /* GraphQL */ `query ListClasses(
  $filter: ModelClassFilterInput
  $limit: Int
  $nextToken: String
) {
  listClasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      startDateTime
      endDateTime
      recurring
      daysOfWeek
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      instructorId
      instructor {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.ListClassesQueryVariables,
	APITypes.ListClassesQuery
>
export const classesByCreatorId = /* GraphQL */ `query ClassesByCreatorId(
  $creatorId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelClassFilterInput
  $limit: Int
  $nextToken: String
) {
  classesByCreatorId(
    creatorId: $creatorId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      description
      startDateTime
      endDateTime
      recurring
      daysOfWeek
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      instructorId
      instructor {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.ClassesByCreatorIdQueryVariables,
	APITypes.ClassesByCreatorIdQuery
>
export const classesByInstructorId = /* GraphQL */ `query ClassesByInstructorId(
  $instructorId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelClassFilterInput
  $limit: Int
  $nextToken: String
) {
  classesByInstructorId(
    instructorId: $instructorId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      description
      startDateTime
      endDateTime
      recurring
      daysOfWeek
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      instructorId
      instructor {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.ClassesByInstructorIdQueryVariables,
	APITypes.ClassesByInstructorIdQuery
>
export const classesByMosqueId = /* GraphQL */ `query ClassesByMosqueId(
  $mosqueId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelClassFilterInput
  $limit: Int
  $nextToken: String
) {
  classesByMosqueId(
    mosqueId: $mosqueId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      description
      startDateTime
      endDateTime
      recurring
      daysOfWeek
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      instructorId
      instructor {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.ClassesByMosqueIdQueryVariables,
	APITypes.ClassesByMosqueIdQuery
>
export const getComment = /* GraphQL */ `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    text
    parentCommentId
    parentComment {
      id
      text
      parentCommentId
      parentComment {
        id
        text
        parentCommentId
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      subComments {
        nextToken
        __typename
      }
      announcementId
      announcement {
        id
        title
        body
        images
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    subComments {
      items {
        id
        text
        parentCommentId
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    announcementId
    announcement {
      id
      title
      body
      images
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    creatorId
    creator {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      followers {
        nextToken
        __typename
      }
      announcements {
        nextToken
        __typename
      }
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetCommentQueryVariables, APITypes.GetCommentQuery>
export const listComments = /* GraphQL */ `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      text
      parentCommentId
      parentComment {
        id
        text
        parentCommentId
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      subComments {
        nextToken
        __typename
      }
      announcementId
      announcement {
        id
        title
        body
        images
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.ListCommentsQueryVariables,
	APITypes.ListCommentsQuery
>
export const commentsByParentCommentId =
	/* GraphQL */ `query CommentsByParentCommentId(
  $parentCommentId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  commentsByParentCommentId(
    parentCommentId: $parentCommentId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      text
      parentCommentId
      parentComment {
        id
        text
        parentCommentId
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      subComments {
        nextToken
        __typename
      }
      announcementId
      announcement {
        id
        title
        body
        images
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
		APITypes.CommentsByParentCommentIdQueryVariables,
		APITypes.CommentsByParentCommentIdQuery
	>
export const commentsByAnnouncementId =
	/* GraphQL */ `query CommentsByAnnouncementId(
  $announcementId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  commentsByAnnouncementId(
    announcementId: $announcementId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      text
      parentCommentId
      parentComment {
        id
        text
        parentCommentId
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      subComments {
        nextToken
        __typename
      }
      announcementId
      announcement {
        id
        title
        body
        images
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
		APITypes.CommentsByAnnouncementIdQueryVariables,
		APITypes.CommentsByAnnouncementIdQuery
	>
export const commentsByCreatorId = /* GraphQL */ `query CommentsByCreatorId(
  $creatorId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  commentsByCreatorId(
    creatorId: $creatorId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      text
      parentCommentId
      parentComment {
        id
        text
        parentCommentId
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      subComments {
        nextToken
        __typename
      }
      announcementId
      announcement {
        id
        title
        body
        images
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.CommentsByCreatorIdQueryVariables,
	APITypes.CommentsByCreatorIdQuery
>
export const commentsByMosqueId = /* GraphQL */ `query CommentsByMosqueId(
  $mosqueId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  commentsByMosqueId(
    mosqueId: $mosqueId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      text
      parentCommentId
      parentComment {
        id
        text
        parentCommentId
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      subComments {
        nextToken
        __typename
      }
      announcementId
      announcement {
        id
        title
        body
        images
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.CommentsByMosqueIdQueryVariables,
	APITypes.CommentsByMosqueIdQuery
>
export const getCommittee = /* GraphQL */ `query GetCommittee($id: ID!) {
  getCommittee(id: $id) {
    id
    title
    description
    creatorId
    creator {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      followers {
        nextToken
        __typename
      }
      announcements {
        nextToken
        __typename
      }
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    members {
      items {
        id
        committeeId
        userId
        createdAt
        updatedAt
        creatorId
        owner
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
` as GeneratedQuery<
	APITypes.GetCommitteeQueryVariables,
	APITypes.GetCommitteeQuery
>
export const listCommittees = /* GraphQL */ `query ListCommittees(
  $filter: ModelCommitteeFilterInput
  $limit: Int
  $nextToken: String
) {
  listCommittees(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      members {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.ListCommitteesQueryVariables,
	APITypes.ListCommitteesQuery
>
export const committeesByCreatorId = /* GraphQL */ `query CommitteesByCreatorId(
  $creatorId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCommitteeFilterInput
  $limit: Int
  $nextToken: String
) {
  committeesByCreatorId(
    creatorId: $creatorId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      description
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      members {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.CommitteesByCreatorIdQueryVariables,
	APITypes.CommitteesByCreatorIdQuery
>
export const committeesByMosqueId = /* GraphQL */ `query CommitteesByMosqueId(
  $mosqueId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCommitteeFilterInput
  $limit: Int
  $nextToken: String
) {
  committeesByMosqueId(
    mosqueId: $mosqueId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      description
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      members {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.CommitteesByMosqueIdQueryVariables,
	APITypes.CommitteesByMosqueIdQuery
>
export const getGathering = /* GraphQL */ `query GetGathering($id: ID!) {
  getGathering(id: $id) {
    id
    title
    description
    type
    startDate
    endDate
    address {
      addressLine1
      addressLine2
      addressLine3
      city
      province
      postalCode
      country
      latitude
      longitude
      __typename
    }
    creatorId
    creator {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      followers {
        nextToken
        __typename
      }
      announcements {
        nextToken
        __typename
      }
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    attendees {
      items {
        id
        gatheringId
        userId
        createdAt
        updatedAt
        creatorId
        owner
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
` as GeneratedQuery<
	APITypes.GetGatheringQueryVariables,
	APITypes.GetGatheringQuery
>
export const listGatherings = /* GraphQL */ `query ListGatherings(
  $filter: ModelGatheringFilterInput
  $limit: Int
  $nextToken: String
) {
  listGatherings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      type
      startDate
      endDate
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      attendees {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.ListGatheringsQueryVariables,
	APITypes.ListGatheringsQuery
>
export const gatheringsByCreatorId = /* GraphQL */ `query GatheringsByCreatorId(
  $creatorId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelGatheringFilterInput
  $limit: Int
  $nextToken: String
) {
  gatheringsByCreatorId(
    creatorId: $creatorId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      description
      type
      startDate
      endDate
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      attendees {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.GatheringsByCreatorIdQueryVariables,
	APITypes.GatheringsByCreatorIdQuery
>
export const gatheringsByMosqueId = /* GraphQL */ `query GatheringsByMosqueId(
  $mosqueId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelGatheringFilterInput
  $limit: Int
  $nextToken: String
) {
  gatheringsByMosqueId(
    mosqueId: $mosqueId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      description
      type
      startDate
      endDate
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      attendees {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.GatheringsByMosqueIdQueryVariables,
	APITypes.GatheringsByMosqueIdQuery
>
export const getDonation = /* GraphQL */ `query GetDonation($id: ID!) {
  getDonation(id: $id) {
    id
    amount
    currency
    isAnonymous
    donorId
    donor {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    fundraisingCampaignId
    fundraisingCampaign {
      id
      title
      description
      featureImage
      type
      currentAmount
      goal
      goalDate
      currency
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      donations {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
	APITypes.GetDonationQueryVariables,
	APITypes.GetDonationQuery
>
export const listDonations = /* GraphQL */ `query ListDonations(
  $filter: ModelDonationFilterInput
  $limit: Int
  $nextToken: String
) {
  listDonations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      amount
      currency
      isAnonymous
      donorId
      donor {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      fundraisingCampaignId
      fundraisingCampaign {
        id
        title
        description
        featureImage
        type
        currentAmount
        goal
        goalDate
        currency
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.ListDonationsQueryVariables,
	APITypes.ListDonationsQuery
>
export const donationsByDonorId = /* GraphQL */ `query DonationsByDonorId(
  $donorId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelDonationFilterInput
  $limit: Int
  $nextToken: String
) {
  donationsByDonorId(
    donorId: $donorId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      amount
      currency
      isAnonymous
      donorId
      donor {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      fundraisingCampaignId
      fundraisingCampaign {
        id
        title
        description
        featureImage
        type
        currentAmount
        goal
        goalDate
        currency
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.DonationsByDonorIdQueryVariables,
	APITypes.DonationsByDonorIdQuery
>
export const donationsByFundraisingCampaignId =
	/* GraphQL */ `query DonationsByFundraisingCampaignId(
  $fundraisingCampaignId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelDonationFilterInput
  $limit: Int
  $nextToken: String
) {
  donationsByFundraisingCampaignId(
    fundraisingCampaignId: $fundraisingCampaignId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      amount
      currency
      isAnonymous
      donorId
      donor {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      fundraisingCampaignId
      fundraisingCampaign {
        id
        title
        description
        featureImage
        type
        currentAmount
        goal
        goalDate
        currency
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
		APITypes.DonationsByFundraisingCampaignIdQueryVariables,
		APITypes.DonationsByFundraisingCampaignIdQuery
	>
export const getFundraisingCampaign =
	/* GraphQL */ `query GetFundraisingCampaign($id: ID!) {
  getFundraisingCampaign(id: $id) {
    id
    title
    description
    featureImage
    type
    currentAmount
    goal
    goalDate
    currency
    creatorId
    creator {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      followers {
        nextToken
        __typename
      }
      announcements {
        nextToken
        __typename
      }
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    donations {
      items {
        id
        amount
        currency
        isAnonymous
        donorId
        fundraisingCampaignId
        createdAt
        updatedAt
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
` as GeneratedQuery<
		APITypes.GetFundraisingCampaignQueryVariables,
		APITypes.GetFundraisingCampaignQuery
	>
export const listFundraisingCampaigns =
	/* GraphQL */ `query ListFundraisingCampaigns(
  $filter: ModelFundraisingCampaignFilterInput
  $limit: Int
  $nextToken: String
) {
  listFundraisingCampaigns(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      description
      featureImage
      type
      currentAmount
      goal
      goalDate
      currency
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      donations {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
		APITypes.ListFundraisingCampaignsQueryVariables,
		APITypes.ListFundraisingCampaignsQuery
	>
export const fundraisingCampaignsByCreatorId =
	/* GraphQL */ `query FundraisingCampaignsByCreatorId(
  $creatorId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelFundraisingCampaignFilterInput
  $limit: Int
  $nextToken: String
) {
  fundraisingCampaignsByCreatorId(
    creatorId: $creatorId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      description
      featureImage
      type
      currentAmount
      goal
      goalDate
      currency
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      donations {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
		APITypes.FundraisingCampaignsByCreatorIdQueryVariables,
		APITypes.FundraisingCampaignsByCreatorIdQuery
	>
export const fundraisingCampaignsByMosqueId =
	/* GraphQL */ `query FundraisingCampaignsByMosqueId(
  $mosqueId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelFundraisingCampaignFilterInput
  $limit: Int
  $nextToken: String
) {
  fundraisingCampaignsByMosqueId(
    mosqueId: $mosqueId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      description
      featureImage
      type
      currentAmount
      goal
      goalDate
      currency
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      donations {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
		APITypes.FundraisingCampaignsByMosqueIdQueryVariables,
		APITypes.FundraisingCampaignsByMosqueIdQuery
	>
export const getLike = /* GraphQL */ `query GetLike($id: ID!) {
  getLike(id: $id) {
    id
    announcementId
    announcement {
      id
      title
      body
      images
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    creatorId
    creator {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      followers {
        nextToken
        __typename
      }
      announcements {
        nextToken
        __typename
      }
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetLikeQueryVariables, APITypes.GetLikeQuery>
export const listLikes = /* GraphQL */ `query ListLikes(
  $filter: ModelLikeFilterInput
  $limit: Int
  $nextToken: String
) {
  listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      announcementId
      announcement {
        id
        title
        body
        images
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListLikesQueryVariables, APITypes.ListLikesQuery>
export const likesByAnnouncementId = /* GraphQL */ `query LikesByAnnouncementId(
  $announcementId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelLikeFilterInput
  $limit: Int
  $nextToken: String
) {
  likesByAnnouncementId(
    announcementId: $announcementId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      announcementId
      announcement {
        id
        title
        body
        images
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.LikesByAnnouncementIdQueryVariables,
	APITypes.LikesByAnnouncementIdQuery
>
export const likesByCreatorId = /* GraphQL */ `query LikesByCreatorId(
  $creatorId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelLikeFilterInput
  $limit: Int
  $nextToken: String
) {
  likesByCreatorId(
    creatorId: $creatorId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      announcementId
      announcement {
        id
        title
        body
        images
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.LikesByCreatorIdQueryVariables,
	APITypes.LikesByCreatorIdQuery
>
export const likesByMosqueId = /* GraphQL */ `query LikesByMosqueId(
  $mosqueId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelLikeFilterInput
  $limit: Int
  $nextToken: String
) {
  likesByMosqueId(
    mosqueId: $mosqueId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      announcementId
      announcement {
        id
        title
        body
        images
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.LikesByMosqueIdQueryVariables,
	APITypes.LikesByMosqueIdQuery
>
export const getMonthlyPrayerSchedule =
	/* GraphQL */ `query GetMonthlyPrayerSchedule($id: ID!) {
  getMonthlyPrayerSchedule(id: $id) {
    id
    year
    month
    prayerTimes {
      type
      athan
      iqamah
      __typename
    }
    creatorId
    creator {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      followers {
        nextToken
        __typename
      }
      announcements {
        nextToken
        __typename
      }
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
		APITypes.GetMonthlyPrayerScheduleQueryVariables,
		APITypes.GetMonthlyPrayerScheduleQuery
	>
export const listMonthlyPrayerSchedules =
	/* GraphQL */ `query ListMonthlyPrayerSchedules(
  $filter: ModelMonthlyPrayerScheduleFilterInput
  $limit: Int
  $nextToken: String
) {
  listMonthlyPrayerSchedules(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      year
      month
      prayerTimes {
        type
        athan
        iqamah
        __typename
      }
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
		APITypes.ListMonthlyPrayerSchedulesQueryVariables,
		APITypes.ListMonthlyPrayerSchedulesQuery
	>
export const monthlyPrayerSchedulesByCreatorId =
	/* GraphQL */ `query MonthlyPrayerSchedulesByCreatorId(
  $creatorId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMonthlyPrayerScheduleFilterInput
  $limit: Int
  $nextToken: String
) {
  monthlyPrayerSchedulesByCreatorId(
    creatorId: $creatorId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      year
      month
      prayerTimes {
        type
        athan
        iqamah
        __typename
      }
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
		APITypes.MonthlyPrayerSchedulesByCreatorIdQueryVariables,
		APITypes.MonthlyPrayerSchedulesByCreatorIdQuery
	>
export const monthlyPrayerSchedulesByMosqueId =
	/* GraphQL */ `query MonthlyPrayerSchedulesByMosqueId(
  $mosqueId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMonthlyPrayerScheduleFilterInput
  $limit: Int
  $nextToken: String
) {
  monthlyPrayerSchedulesByMosqueId(
    mosqueId: $mosqueId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      year
      month
      prayerTimes {
        type
        athan
        iqamah
        __typename
      }
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
		APITypes.MonthlyPrayerSchedulesByMosqueIdQueryVariables,
		APITypes.MonthlyPrayerSchedulesByMosqueIdQuery
	>
export const getMosque = /* GraphQL */ `query GetMosque($id: ID!) {
  getMosque(id: $id) {
    id
    name
    description
    images
    address {
      addressLine1
      addressLine2
      addressLine3
      city
      province
      postalCode
      country
      latitude
      longitude
      __typename
    }
    hours {
      monday {
        type
        __typename
      }
      tuesday {
        type
        __typename
      }
      wednesday {
        type
        __typename
      }
      thursday {
        type
        __typename
      }
      friday {
        type
        __typename
      }
      saturday {
        type
        __typename
      }
      sunday {
        type
        __typename
      }
      __typename
    }
    contactInfo {
      phone
      email
      website
      socialMedia {
        facebook
        instagram
        twitter
        youtube
        __typename
      }
      __typename
    }
    liveVideoUrl
    creatorId
    creator {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    followers {
      items {
        id
        mosqueId
        userId
        createdAt
        updatedAt
        creatorId
        owner
        __typename
      }
      nextToken
      __typename
    }
    announcements {
      items {
        id
        title
        body
        images
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    classes {
      items {
        id
        title
        description
        startDateTime
        endDateTime
        recurring
        daysOfWeek
        creatorId
        instructorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    committees {
      items {
        id
        title
        description
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    gatherings {
      items {
        id
        title
        description
        type
        startDate
        endDate
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    fundraisingCampaigns {
      items {
        id
        title
        description
        featureImage
        type
        currentAmount
        goal
        goalDate
        currency
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    monthlyPrayerSchedules {
      items {
        id
        year
        month
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    resources {
      items {
        id
        title
        description
        type
        url
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    services {
      items {
        id
        type
        description
        documents
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    subscriptions {
      items {
        id
        status
        startDate
        endDate
        stripeSubscriptionId
        purchaserId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    volunteerTasks {
      items {
        id
        name
        description
        startDate
        endDate
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    bookmarks {
      items {
        id
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    likes {
      items {
        id
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    comments {
      items {
        id
        text
        parentCommentId
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
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
` as GeneratedQuery<APITypes.GetMosqueQueryVariables, APITypes.GetMosqueQuery>
export const listMosques = /* GraphQL */ `query ListMosques(
  $filter: ModelMosqueFilterInput
  $limit: Int
  $nextToken: String
) {
  listMosques(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      followers {
        nextToken
        __typename
      }
      announcements {
        nextToken
        __typename
      }
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.ListMosquesQueryVariables,
	APITypes.ListMosquesQuery
>
export const mosquesByCreatorId = /* GraphQL */ `query MosquesByCreatorId(
  $creatorId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMosqueFilterInput
  $limit: Int
  $nextToken: String
) {
  mosquesByCreatorId(
    creatorId: $creatorId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      followers {
        nextToken
        __typename
      }
      announcements {
        nextToken
        __typename
      }
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.MosquesByCreatorIdQueryVariables,
	APITypes.MosquesByCreatorIdQuery
>
export const getMosqueSubscription =
	/* GraphQL */ `query GetMosqueSubscription($id: ID!) {
  getMosqueSubscription(id: $id) {
    id
    status
    startDate
    endDate
    stripeSubscriptionId
    purchaserId
    purchaser {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      followers {
        nextToken
        __typename
      }
      announcements {
        nextToken
        __typename
      }
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
		APITypes.GetMosqueSubscriptionQueryVariables,
		APITypes.GetMosqueSubscriptionQuery
	>
export const listMosqueSubscriptions =
	/* GraphQL */ `query ListMosqueSubscriptions(
  $filter: ModelMosqueSubscriptionFilterInput
  $limit: Int
  $nextToken: String
) {
  listMosqueSubscriptions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      status
      startDate
      endDate
      stripeSubscriptionId
      purchaserId
      purchaser {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
		APITypes.ListMosqueSubscriptionsQueryVariables,
		APITypes.ListMosqueSubscriptionsQuery
	>
export const mosqueSubscriptionsByPurchaserId =
	/* GraphQL */ `query MosqueSubscriptionsByPurchaserId(
  $purchaserId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMosqueSubscriptionFilterInput
  $limit: Int
  $nextToken: String
) {
  mosqueSubscriptionsByPurchaserId(
    purchaserId: $purchaserId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      status
      startDate
      endDate
      stripeSubscriptionId
      purchaserId
      purchaser {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
		APITypes.MosqueSubscriptionsByPurchaserIdQueryVariables,
		APITypes.MosqueSubscriptionsByPurchaserIdQuery
	>
export const mosqueSubscriptionsByMosqueId =
	/* GraphQL */ `query MosqueSubscriptionsByMosqueId(
  $mosqueId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMosqueSubscriptionFilterInput
  $limit: Int
  $nextToken: String
) {
  mosqueSubscriptionsByMosqueId(
    mosqueId: $mosqueId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      status
      startDate
      endDate
      stripeSubscriptionId
      purchaserId
      purchaser {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
		APITypes.MosqueSubscriptionsByMosqueIdQueryVariables,
		APITypes.MosqueSubscriptionsByMosqueIdQuery
	>
export const getResource = /* GraphQL */ `query GetResource($id: ID!) {
  getResource(id: $id) {
    id
    title
    description
    type
    url
    creatorId
    creator {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      followers {
        nextToken
        __typename
      }
      announcements {
        nextToken
        __typename
      }
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
	APITypes.GetResourceQueryVariables,
	APITypes.GetResourceQuery
>
export const listResources = /* GraphQL */ `query ListResources(
  $filter: ModelResourceFilterInput
  $limit: Int
  $nextToken: String
) {
  listResources(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      type
      url
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.ListResourcesQueryVariables,
	APITypes.ListResourcesQuery
>
export const resourcesByCreatorId = /* GraphQL */ `query ResourcesByCreatorId(
  $creatorId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelResourceFilterInput
  $limit: Int
  $nextToken: String
) {
  resourcesByCreatorId(
    creatorId: $creatorId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      description
      type
      url
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.ResourcesByCreatorIdQueryVariables,
	APITypes.ResourcesByCreatorIdQuery
>
export const resourcesByMosqueId = /* GraphQL */ `query ResourcesByMosqueId(
  $mosqueId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelResourceFilterInput
  $limit: Int
  $nextToken: String
) {
  resourcesByMosqueId(
    mosqueId: $mosqueId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      description
      type
      url
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.ResourcesByMosqueIdQueryVariables,
	APITypes.ResourcesByMosqueIdQuery
>
export const getService = /* GraphQL */ `query GetService($id: ID!) {
  getService(id: $id) {
    id
    type
    description
    documents
    creatorId
    creator {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      followers {
        nextToken
        __typename
      }
      announcements {
        nextToken
        __typename
      }
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetServiceQueryVariables, APITypes.GetServiceQuery>
export const listServices = /* GraphQL */ `query ListServices(
  $filter: ModelServiceFilterInput
  $limit: Int
  $nextToken: String
) {
  listServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      type
      description
      documents
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.ListServicesQueryVariables,
	APITypes.ListServicesQuery
>
export const servicesByCreatorId = /* GraphQL */ `query ServicesByCreatorId(
  $creatorId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelServiceFilterInput
  $limit: Int
  $nextToken: String
) {
  servicesByCreatorId(
    creatorId: $creatorId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      type
      description
      documents
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.ServicesByCreatorIdQueryVariables,
	APITypes.ServicesByCreatorIdQuery
>
export const servicesByMosqueId = /* GraphQL */ `query ServicesByMosqueId(
  $mosqueId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelServiceFilterInput
  $limit: Int
  $nextToken: String
) {
  servicesByMosqueId(
    mosqueId: $mosqueId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      type
      description
      documents
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.ServicesByMosqueIdQueryVariables,
	APITypes.ServicesByMosqueIdQuery
>
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    selfie
    firstName
    lastName
    email
    phone
    type
    status
    stripeCustomerId
    createdAnnouncements {
      items {
        id
        title
        body
        images
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdClasses {
      items {
        id
        title
        description
        startDateTime
        endDateTime
        recurring
        daysOfWeek
        creatorId
        instructorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdCommittees {
      items {
        id
        title
        description
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdGatherings {
      items {
        id
        title
        description
        type
        startDate
        endDate
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdFundraisingCampaigns {
      items {
        id
        title
        description
        featureImage
        type
        currentAmount
        goal
        goalDate
        currency
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdMonthlyPrayerSchedules {
      items {
        id
        year
        month
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdMosques {
      items {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdResources {
      items {
        id
        title
        description
        type
        url
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdServices {
      items {
        id
        type
        description
        documents
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdVolunteerTasks {
      items {
        id
        name
        description
        startDate
        endDate
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    donations {
      items {
        id
        amount
        currency
        isAnonymous
        donorId
        fundraisingCampaignId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    committees {
      items {
        id
        committeeId
        userId
        createdAt
        updatedAt
        creatorId
        owner
        __typename
      }
      nextToken
      __typename
    }
    gatherings {
      items {
        id
        gatheringId
        userId
        createdAt
        updatedAt
        creatorId
        owner
        __typename
      }
      nextToken
      __typename
    }
    instructingClasses {
      items {
        id
        title
        description
        startDateTime
        endDateTime
        recurring
        daysOfWeek
        creatorId
        instructorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    mosques {
      items {
        id
        mosqueId
        userId
        createdAt
        updatedAt
        creatorId
        owner
        __typename
      }
      nextToken
      __typename
    }
    purchasedSubscriptions {
      items {
        id
        status
        startDate
        endDate
        stripeSubscriptionId
        purchaserId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    volunteerTasks {
      items {
        id
        userId
        volunteerTaskId
        createdAt
        updatedAt
        owner
        creatorId
        __typename
      }
      nextToken
      __typename
    }
    bookmarks {
      items {
        id
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    likes {
      items {
        id
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    comments {
      items {
        id
        text
        parentCommentId
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>
export const getVolunteerTask =
	/* GraphQL */ `query GetVolunteerTask($id: ID!) {
  getVolunteerTask(id: $id) {
    id
    name
    description
    startDate
    endDate
    creatorId
    creator {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      followers {
        nextToken
        __typename
      }
      announcements {
        nextToken
        __typename
      }
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    volunteers {
      items {
        id
        userId
        volunteerTaskId
        createdAt
        updatedAt
        owner
        creatorId
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
` as GeneratedQuery<
		APITypes.GetVolunteerTaskQueryVariables,
		APITypes.GetVolunteerTaskQuery
	>
export const listVolunteerTasks = /* GraphQL */ `query ListVolunteerTasks(
  $filter: ModelVolunteerTaskFilterInput
  $limit: Int
  $nextToken: String
) {
  listVolunteerTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      startDate
      endDate
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      volunteers {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.ListVolunteerTasksQueryVariables,
	APITypes.ListVolunteerTasksQuery
>
export const volunteerTasksByCreatorId =
	/* GraphQL */ `query VolunteerTasksByCreatorId(
  $creatorId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelVolunteerTaskFilterInput
  $limit: Int
  $nextToken: String
) {
  volunteerTasksByCreatorId(
    creatorId: $creatorId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      startDate
      endDate
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      volunteers {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
		APITypes.VolunteerTasksByCreatorIdQueryVariables,
		APITypes.VolunteerTasksByCreatorIdQuery
	>
export const volunteerTasksByMosqueId =
	/* GraphQL */ `query VolunteerTasksByMosqueId(
  $mosqueId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelVolunteerTaskFilterInput
  $limit: Int
  $nextToken: String
) {
  volunteerTasksByMosqueId(
    mosqueId: $mosqueId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      startDate
      endDate
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      volunteers {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
		APITypes.VolunteerTasksByMosqueIdQueryVariables,
		APITypes.VolunteerTasksByMosqueIdQuery
	>
export const getCommitteeMembers =
	/* GraphQL */ `query GetCommitteeMembers($id: ID!) {
  getCommitteeMembers(id: $id) {
    id
    committeeId
    userId
    committee {
      id
      title
      description
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      members {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    user {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    creatorId
    owner
    __typename
  }
}
` as GeneratedQuery<
		APITypes.GetCommitteeMembersQueryVariables,
		APITypes.GetCommitteeMembersQuery
	>
export const listCommitteeMembers = /* GraphQL */ `query ListCommitteeMembers(
  $filter: ModelCommitteeMembersFilterInput
  $limit: Int
  $nextToken: String
) {
  listCommitteeMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      committeeId
      userId
      committee {
        id
        title
        description
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      user {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      creatorId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.ListCommitteeMembersQueryVariables,
	APITypes.ListCommitteeMembersQuery
>
export const committeeMembersByCommitteeId =
	/* GraphQL */ `query CommitteeMembersByCommitteeId(
  $committeeId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCommitteeMembersFilterInput
  $limit: Int
  $nextToken: String
) {
  committeeMembersByCommitteeId(
    committeeId: $committeeId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      committeeId
      userId
      committee {
        id
        title
        description
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      user {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      creatorId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
		APITypes.CommitteeMembersByCommitteeIdQueryVariables,
		APITypes.CommitteeMembersByCommitteeIdQuery
	>
export const committeeMembersByUserId =
	/* GraphQL */ `query CommitteeMembersByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCommitteeMembersFilterInput
  $limit: Int
  $nextToken: String
) {
  committeeMembersByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      committeeId
      userId
      committee {
        id
        title
        description
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      user {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      creatorId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
		APITypes.CommitteeMembersByUserIdQueryVariables,
		APITypes.CommitteeMembersByUserIdQuery
	>
export const getGatheringAttendees =
	/* GraphQL */ `query GetGatheringAttendees($id: ID!) {
  getGatheringAttendees(id: $id) {
    id
    gatheringId
    userId
    gathering {
      id
      title
      description
      type
      startDate
      endDate
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      attendees {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    user {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    creatorId
    owner
    __typename
  }
}
` as GeneratedQuery<
		APITypes.GetGatheringAttendeesQueryVariables,
		APITypes.GetGatheringAttendeesQuery
	>
export const listGatheringAttendees =
	/* GraphQL */ `query ListGatheringAttendees(
  $filter: ModelGatheringAttendeesFilterInput
  $limit: Int
  $nextToken: String
) {
  listGatheringAttendees(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      gatheringId
      userId
      gathering {
        id
        title
        description
        type
        startDate
        endDate
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      user {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      creatorId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
		APITypes.ListGatheringAttendeesQueryVariables,
		APITypes.ListGatheringAttendeesQuery
	>
export const gatheringAttendeesByGatheringId =
	/* GraphQL */ `query GatheringAttendeesByGatheringId(
  $gatheringId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelGatheringAttendeesFilterInput
  $limit: Int
  $nextToken: String
) {
  gatheringAttendeesByGatheringId(
    gatheringId: $gatheringId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      gatheringId
      userId
      gathering {
        id
        title
        description
        type
        startDate
        endDate
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      user {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      creatorId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
		APITypes.GatheringAttendeesByGatheringIdQueryVariables,
		APITypes.GatheringAttendeesByGatheringIdQuery
	>
export const gatheringAttendeesByUserId =
	/* GraphQL */ `query GatheringAttendeesByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelGatheringAttendeesFilterInput
  $limit: Int
  $nextToken: String
) {
  gatheringAttendeesByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      gatheringId
      userId
      gathering {
        id
        title
        description
        type
        startDate
        endDate
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      user {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      creatorId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
		APITypes.GatheringAttendeesByUserIdQueryVariables,
		APITypes.GatheringAttendeesByUserIdQuery
	>
export const getMosqueFollowers =
	/* GraphQL */ `query GetMosqueFollowers($id: ID!) {
  getMosqueFollowers(id: $id) {
    id
    mosqueId
    userId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      followers {
        nextToken
        __typename
      }
      announcements {
        nextToken
        __typename
      }
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    user {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    creatorId
    owner
    __typename
  }
}
` as GeneratedQuery<
		APITypes.GetMosqueFollowersQueryVariables,
		APITypes.GetMosqueFollowersQuery
	>
export const listMosqueFollowers = /* GraphQL */ `query ListMosqueFollowers(
  $filter: ModelMosqueFollowersFilterInput
  $limit: Int
  $nextToken: String
) {
  listMosqueFollowers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      mosqueId
      userId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      user {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      creatorId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.ListMosqueFollowersQueryVariables,
	APITypes.ListMosqueFollowersQuery
>
export const mosqueFollowersByMosqueId =
	/* GraphQL */ `query MosqueFollowersByMosqueId(
  $mosqueId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMosqueFollowersFilterInput
  $limit: Int
  $nextToken: String
) {
  mosqueFollowersByMosqueId(
    mosqueId: $mosqueId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      mosqueId
      userId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      user {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      creatorId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
		APITypes.MosqueFollowersByMosqueIdQueryVariables,
		APITypes.MosqueFollowersByMosqueIdQuery
	>
export const mosqueFollowersByUserId =
	/* GraphQL */ `query MosqueFollowersByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMosqueFollowersFilterInput
  $limit: Int
  $nextToken: String
) {
  mosqueFollowersByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      mosqueId
      userId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      user {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      creatorId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
		APITypes.MosqueFollowersByUserIdQueryVariables,
		APITypes.MosqueFollowersByUserIdQuery
	>
export const getVolunteerTaskUser =
	/* GraphQL */ `query GetVolunteerTaskUser($id: ID!) {
  getVolunteerTaskUser(id: $id) {
    id
    userId
    volunteerTaskId
    user {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    volunteerTask {
      id
      name
      description
      startDate
      endDate
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      volunteers {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    owner
    creatorId
    __typename
  }
}
` as GeneratedQuery<
		APITypes.GetVolunteerTaskUserQueryVariables,
		APITypes.GetVolunteerTaskUserQuery
	>
export const listVolunteerTaskUsers =
	/* GraphQL */ `query ListVolunteerTaskUsers(
  $filter: ModelVolunteerTaskUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listVolunteerTaskUsers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      volunteerTaskId
      user {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      volunteerTask {
        id
        name
        description
        startDate
        endDate
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      owner
      creatorId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
		APITypes.ListVolunteerTaskUsersQueryVariables,
		APITypes.ListVolunteerTaskUsersQuery
	>
export const volunteerTaskUsersByUserId =
	/* GraphQL */ `query VolunteerTaskUsersByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelVolunteerTaskUserFilterInput
  $limit: Int
  $nextToken: String
) {
  volunteerTaskUsersByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      volunteerTaskId
      user {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      volunteerTask {
        id
        name
        description
        startDate
        endDate
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      owner
      creatorId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
		APITypes.VolunteerTaskUsersByUserIdQueryVariables,
		APITypes.VolunteerTaskUsersByUserIdQuery
	>
export const volunteerTaskUsersByVolunteerTaskId =
	/* GraphQL */ `query VolunteerTaskUsersByVolunteerTaskId(
  $volunteerTaskId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelVolunteerTaskUserFilterInput
  $limit: Int
  $nextToken: String
) {
  volunteerTaskUsersByVolunteerTaskId(
    volunteerTaskId: $volunteerTaskId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      volunteerTaskId
      user {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        createdAt
        updatedAt
        owner
        __typename
      }
      volunteerTask {
        id
        name
        description
        startDate
        endDate
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      owner
      creatorId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
		APITypes.VolunteerTaskUsersByVolunteerTaskIdQueryVariables,
		APITypes.VolunteerTaskUsersByVolunteerTaskIdQuery
	>
