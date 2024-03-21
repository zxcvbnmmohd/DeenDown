/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./api"
type GeneratedMutation<InputType, OutputType> = string & {
	__generatedMutationInput: InputType
	__generatedMutationOutput: OutputType
}

export const createAnnouncement = /* GraphQL */ `mutation CreateAnnouncement(
  $input: CreateAnnouncementInput!
  $condition: ModelAnnouncementConditionInput
) {
  createAnnouncement(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.CreateAnnouncementMutationVariables,
	APITypes.CreateAnnouncementMutation
>
export const updateAnnouncement = /* GraphQL */ `mutation UpdateAnnouncement(
  $input: UpdateAnnouncementInput!
  $condition: ModelAnnouncementConditionInput
) {
  updateAnnouncement(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.UpdateAnnouncementMutationVariables,
	APITypes.UpdateAnnouncementMutation
>
export const deleteAnnouncement = /* GraphQL */ `mutation DeleteAnnouncement(
  $input: DeleteAnnouncementInput!
  $condition: ModelAnnouncementConditionInput
) {
  deleteAnnouncement(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.DeleteAnnouncementMutationVariables,
	APITypes.DeleteAnnouncementMutation
>
export const createBookmark = /* GraphQL */ `mutation CreateBookmark(
  $input: CreateBookmarkInput!
  $condition: ModelBookmarkConditionInput
) {
  createBookmark(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.CreateBookmarkMutationVariables,
	APITypes.CreateBookmarkMutation
>
export const updateBookmark = /* GraphQL */ `mutation UpdateBookmark(
  $input: UpdateBookmarkInput!
  $condition: ModelBookmarkConditionInput
) {
  updateBookmark(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.UpdateBookmarkMutationVariables,
	APITypes.UpdateBookmarkMutation
>
export const deleteBookmark = /* GraphQL */ `mutation DeleteBookmark(
  $input: DeleteBookmarkInput!
  $condition: ModelBookmarkConditionInput
) {
  deleteBookmark(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.DeleteBookmarkMutationVariables,
	APITypes.DeleteBookmarkMutation
>
export const createClass = /* GraphQL */ `mutation CreateClass(
  $input: CreateClassInput!
  $condition: ModelClassConditionInput
) {
  createClass(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.CreateClassMutationVariables,
	APITypes.CreateClassMutation
>
export const updateClass = /* GraphQL */ `mutation UpdateClass(
  $input: UpdateClassInput!
  $condition: ModelClassConditionInput
) {
  updateClass(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.UpdateClassMutationVariables,
	APITypes.UpdateClassMutation
>
export const deleteClass = /* GraphQL */ `mutation DeleteClass(
  $input: DeleteClassInput!
  $condition: ModelClassConditionInput
) {
  deleteClass(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.DeleteClassMutationVariables,
	APITypes.DeleteClassMutation
>
export const createComment = /* GraphQL */ `mutation CreateComment(
  $input: CreateCommentInput!
  $condition: ModelCommentConditionInput
) {
  createComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.DeleteCommentMutationVariables,
	APITypes.DeleteCommentMutation
>
export const createCommittee = /* GraphQL */ `mutation CreateCommittee(
  $input: CreateCommitteeInput!
  $condition: ModelCommitteeConditionInput
) {
  createCommittee(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.CreateCommitteeMutationVariables,
	APITypes.CreateCommitteeMutation
>
export const updateCommittee = /* GraphQL */ `mutation UpdateCommittee(
  $input: UpdateCommitteeInput!
  $condition: ModelCommitteeConditionInput
) {
  updateCommittee(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.UpdateCommitteeMutationVariables,
	APITypes.UpdateCommitteeMutation
>
export const deleteCommittee = /* GraphQL */ `mutation DeleteCommittee(
  $input: DeleteCommitteeInput!
  $condition: ModelCommitteeConditionInput
) {
  deleteCommittee(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.DeleteCommitteeMutationVariables,
	APITypes.DeleteCommitteeMutation
>
export const createGathering = /* GraphQL */ `mutation CreateGathering(
  $input: CreateGatheringInput!
  $condition: ModelGatheringConditionInput
) {
  createGathering(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.CreateGatheringMutationVariables,
	APITypes.CreateGatheringMutation
>
export const updateGathering = /* GraphQL */ `mutation UpdateGathering(
  $input: UpdateGatheringInput!
  $condition: ModelGatheringConditionInput
) {
  updateGathering(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.UpdateGatheringMutationVariables,
	APITypes.UpdateGatheringMutation
>
export const deleteGathering = /* GraphQL */ `mutation DeleteGathering(
  $input: DeleteGatheringInput!
  $condition: ModelGatheringConditionInput
) {
  deleteGathering(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.DeleteGatheringMutationVariables,
	APITypes.DeleteGatheringMutation
>
export const createDonation = /* GraphQL */ `mutation CreateDonation(
  $input: CreateDonationInput!
  $condition: ModelDonationConditionInput
) {
  createDonation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.CreateDonationMutationVariables,
	APITypes.CreateDonationMutation
>
export const updateDonation = /* GraphQL */ `mutation UpdateDonation(
  $input: UpdateDonationInput!
  $condition: ModelDonationConditionInput
) {
  updateDonation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.UpdateDonationMutationVariables,
	APITypes.UpdateDonationMutation
>
export const deleteDonation = /* GraphQL */ `mutation DeleteDonation(
  $input: DeleteDonationInput!
  $condition: ModelDonationConditionInput
) {
  deleteDonation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.DeleteDonationMutationVariables,
	APITypes.DeleteDonationMutation
>
export const createFundraisingCampaign =
	/* GraphQL */ `mutation CreateFundraisingCampaign(
  $input: CreateFundraisingCampaignInput!
  $condition: ModelFundraisingCampaignConditionInput
) {
  createFundraisingCampaign(input: $input, condition: $condition) {
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
` as GeneratedMutation<
		APITypes.CreateFundraisingCampaignMutationVariables,
		APITypes.CreateFundraisingCampaignMutation
	>
export const updateFundraisingCampaign =
	/* GraphQL */ `mutation UpdateFundraisingCampaign(
  $input: UpdateFundraisingCampaignInput!
  $condition: ModelFundraisingCampaignConditionInput
) {
  updateFundraisingCampaign(input: $input, condition: $condition) {
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
` as GeneratedMutation<
		APITypes.UpdateFundraisingCampaignMutationVariables,
		APITypes.UpdateFundraisingCampaignMutation
	>
export const deleteFundraisingCampaign =
	/* GraphQL */ `mutation DeleteFundraisingCampaign(
  $input: DeleteFundraisingCampaignInput!
  $condition: ModelFundraisingCampaignConditionInput
) {
  deleteFundraisingCampaign(input: $input, condition: $condition) {
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
` as GeneratedMutation<
		APITypes.DeleteFundraisingCampaignMutationVariables,
		APITypes.DeleteFundraisingCampaignMutation
	>
export const createLike = /* GraphQL */ `mutation CreateLike(
  $input: CreateLikeInput!
  $condition: ModelLikeConditionInput
) {
  createLike(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.CreateLikeMutationVariables,
	APITypes.CreateLikeMutation
>
export const updateLike = /* GraphQL */ `mutation UpdateLike(
  $input: UpdateLikeInput!
  $condition: ModelLikeConditionInput
) {
  updateLike(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.UpdateLikeMutationVariables,
	APITypes.UpdateLikeMutation
>
export const deleteLike = /* GraphQL */ `mutation DeleteLike(
  $input: DeleteLikeInput!
  $condition: ModelLikeConditionInput
) {
  deleteLike(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.DeleteLikeMutationVariables,
	APITypes.DeleteLikeMutation
>
export const createMonthlyPrayerSchedule =
	/* GraphQL */ `mutation CreateMonthlyPrayerSchedule(
  $input: CreateMonthlyPrayerScheduleInput!
  $condition: ModelMonthlyPrayerScheduleConditionInput
) {
  createMonthlyPrayerSchedule(input: $input, condition: $condition) {
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
` as GeneratedMutation<
		APITypes.CreateMonthlyPrayerScheduleMutationVariables,
		APITypes.CreateMonthlyPrayerScheduleMutation
	>
export const updateMonthlyPrayerSchedule =
	/* GraphQL */ `mutation UpdateMonthlyPrayerSchedule(
  $input: UpdateMonthlyPrayerScheduleInput!
  $condition: ModelMonthlyPrayerScheduleConditionInput
) {
  updateMonthlyPrayerSchedule(input: $input, condition: $condition) {
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
` as GeneratedMutation<
		APITypes.UpdateMonthlyPrayerScheduleMutationVariables,
		APITypes.UpdateMonthlyPrayerScheduleMutation
	>
export const deleteMonthlyPrayerSchedule =
	/* GraphQL */ `mutation DeleteMonthlyPrayerSchedule(
  $input: DeleteMonthlyPrayerScheduleInput!
  $condition: ModelMonthlyPrayerScheduleConditionInput
) {
  deleteMonthlyPrayerSchedule(input: $input, condition: $condition) {
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
` as GeneratedMutation<
		APITypes.DeleteMonthlyPrayerScheduleMutationVariables,
		APITypes.DeleteMonthlyPrayerScheduleMutation
	>
export const createMosque = /* GraphQL */ `mutation CreateMosque(
  $input: CreateMosqueInput!
  $condition: ModelMosqueConditionInput
) {
  createMosque(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.CreateMosqueMutationVariables,
	APITypes.CreateMosqueMutation
>
export const updateMosque = /* GraphQL */ `mutation UpdateMosque(
  $input: UpdateMosqueInput!
  $condition: ModelMosqueConditionInput
) {
  updateMosque(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.UpdateMosqueMutationVariables,
	APITypes.UpdateMosqueMutation
>
export const deleteMosque = /* GraphQL */ `mutation DeleteMosque(
  $input: DeleteMosqueInput!
  $condition: ModelMosqueConditionInput
) {
  deleteMosque(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.DeleteMosqueMutationVariables,
	APITypes.DeleteMosqueMutation
>
export const createMosqueSubscription =
	/* GraphQL */ `mutation CreateMosqueSubscription(
  $input: CreateMosqueSubscriptionInput!
  $condition: ModelMosqueSubscriptionConditionInput
) {
  createMosqueSubscription(input: $input, condition: $condition) {
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
` as GeneratedMutation<
		APITypes.CreateMosqueSubscriptionMutationVariables,
		APITypes.CreateMosqueSubscriptionMutation
	>
export const updateMosqueSubscription =
	/* GraphQL */ `mutation UpdateMosqueSubscription(
  $input: UpdateMosqueSubscriptionInput!
  $condition: ModelMosqueSubscriptionConditionInput
) {
  updateMosqueSubscription(input: $input, condition: $condition) {
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
` as GeneratedMutation<
		APITypes.UpdateMosqueSubscriptionMutationVariables,
		APITypes.UpdateMosqueSubscriptionMutation
	>
export const deleteMosqueSubscription =
	/* GraphQL */ `mutation DeleteMosqueSubscription(
  $input: DeleteMosqueSubscriptionInput!
  $condition: ModelMosqueSubscriptionConditionInput
) {
  deleteMosqueSubscription(input: $input, condition: $condition) {
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
` as GeneratedMutation<
		APITypes.DeleteMosqueSubscriptionMutationVariables,
		APITypes.DeleteMosqueSubscriptionMutation
	>
export const createResource = /* GraphQL */ `mutation CreateResource(
  $input: CreateResourceInput!
  $condition: ModelResourceConditionInput
) {
  createResource(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.CreateResourceMutationVariables,
	APITypes.CreateResourceMutation
>
export const updateResource = /* GraphQL */ `mutation UpdateResource(
  $input: UpdateResourceInput!
  $condition: ModelResourceConditionInput
) {
  updateResource(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.UpdateResourceMutationVariables,
	APITypes.UpdateResourceMutation
>
export const deleteResource = /* GraphQL */ `mutation DeleteResource(
  $input: DeleteResourceInput!
  $condition: ModelResourceConditionInput
) {
  deleteResource(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.DeleteResourceMutationVariables,
	APITypes.DeleteResourceMutation
>
export const createService = /* GraphQL */ `mutation CreateService(
  $input: CreateServiceInput!
  $condition: ModelServiceConditionInput
) {
  createService(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.CreateServiceMutationVariables,
	APITypes.CreateServiceMutation
>
export const updateService = /* GraphQL */ `mutation UpdateService(
  $input: UpdateServiceInput!
  $condition: ModelServiceConditionInput
) {
  updateService(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.UpdateServiceMutationVariables,
	APITypes.UpdateServiceMutation
>
export const deleteService = /* GraphQL */ `mutation DeleteService(
  $input: DeleteServiceInput!
  $condition: ModelServiceConditionInput
) {
  deleteService(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.DeleteServiceMutationVariables,
	APITypes.DeleteServiceMutation
>
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.CreateUserMutationVariables,
	APITypes.CreateUserMutation
>
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.UpdateUserMutationVariables,
	APITypes.UpdateUserMutation
>
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.DeleteUserMutationVariables,
	APITypes.DeleteUserMutation
>
export const createVolunteerTask = /* GraphQL */ `mutation CreateVolunteerTask(
  $input: CreateVolunteerTaskInput!
  $condition: ModelVolunteerTaskConditionInput
) {
  createVolunteerTask(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.CreateVolunteerTaskMutationVariables,
	APITypes.CreateVolunteerTaskMutation
>
export const updateVolunteerTask = /* GraphQL */ `mutation UpdateVolunteerTask(
  $input: UpdateVolunteerTaskInput!
  $condition: ModelVolunteerTaskConditionInput
) {
  updateVolunteerTask(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.UpdateVolunteerTaskMutationVariables,
	APITypes.UpdateVolunteerTaskMutation
>
export const deleteVolunteerTask = /* GraphQL */ `mutation DeleteVolunteerTask(
  $input: DeleteVolunteerTaskInput!
  $condition: ModelVolunteerTaskConditionInput
) {
  deleteVolunteerTask(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.DeleteVolunteerTaskMutationVariables,
	APITypes.DeleteVolunteerTaskMutation
>
export const createCommitteeMembers =
	/* GraphQL */ `mutation CreateCommitteeMembers(
  $input: CreateCommitteeMembersInput!
  $condition: ModelCommitteeMembersConditionInput
) {
  createCommitteeMembers(input: $input, condition: $condition) {
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
` as GeneratedMutation<
		APITypes.CreateCommitteeMembersMutationVariables,
		APITypes.CreateCommitteeMembersMutation
	>
export const updateCommitteeMembers =
	/* GraphQL */ `mutation UpdateCommitteeMembers(
  $input: UpdateCommitteeMembersInput!
  $condition: ModelCommitteeMembersConditionInput
) {
  updateCommitteeMembers(input: $input, condition: $condition) {
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
` as GeneratedMutation<
		APITypes.UpdateCommitteeMembersMutationVariables,
		APITypes.UpdateCommitteeMembersMutation
	>
export const deleteCommitteeMembers =
	/* GraphQL */ `mutation DeleteCommitteeMembers(
  $input: DeleteCommitteeMembersInput!
  $condition: ModelCommitteeMembersConditionInput
) {
  deleteCommitteeMembers(input: $input, condition: $condition) {
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
` as GeneratedMutation<
		APITypes.DeleteCommitteeMembersMutationVariables,
		APITypes.DeleteCommitteeMembersMutation
	>
export const createGatheringAttendees =
	/* GraphQL */ `mutation CreateGatheringAttendees(
  $input: CreateGatheringAttendeesInput!
  $condition: ModelGatheringAttendeesConditionInput
) {
  createGatheringAttendees(input: $input, condition: $condition) {
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
` as GeneratedMutation<
		APITypes.CreateGatheringAttendeesMutationVariables,
		APITypes.CreateGatheringAttendeesMutation
	>
export const updateGatheringAttendees =
	/* GraphQL */ `mutation UpdateGatheringAttendees(
  $input: UpdateGatheringAttendeesInput!
  $condition: ModelGatheringAttendeesConditionInput
) {
  updateGatheringAttendees(input: $input, condition: $condition) {
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
` as GeneratedMutation<
		APITypes.UpdateGatheringAttendeesMutationVariables,
		APITypes.UpdateGatheringAttendeesMutation
	>
export const deleteGatheringAttendees =
	/* GraphQL */ `mutation DeleteGatheringAttendees(
  $input: DeleteGatheringAttendeesInput!
  $condition: ModelGatheringAttendeesConditionInput
) {
  deleteGatheringAttendees(input: $input, condition: $condition) {
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
` as GeneratedMutation<
		APITypes.DeleteGatheringAttendeesMutationVariables,
		APITypes.DeleteGatheringAttendeesMutation
	>
export const createMosqueFollowers =
	/* GraphQL */ `mutation CreateMosqueFollowers(
  $input: CreateMosqueFollowersInput!
  $condition: ModelMosqueFollowersConditionInput
) {
  createMosqueFollowers(input: $input, condition: $condition) {
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
` as GeneratedMutation<
		APITypes.CreateMosqueFollowersMutationVariables,
		APITypes.CreateMosqueFollowersMutation
	>
export const updateMosqueFollowers =
	/* GraphQL */ `mutation UpdateMosqueFollowers(
  $input: UpdateMosqueFollowersInput!
  $condition: ModelMosqueFollowersConditionInput
) {
  updateMosqueFollowers(input: $input, condition: $condition) {
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
` as GeneratedMutation<
		APITypes.UpdateMosqueFollowersMutationVariables,
		APITypes.UpdateMosqueFollowersMutation
	>
export const deleteMosqueFollowers =
	/* GraphQL */ `mutation DeleteMosqueFollowers(
  $input: DeleteMosqueFollowersInput!
  $condition: ModelMosqueFollowersConditionInput
) {
  deleteMosqueFollowers(input: $input, condition: $condition) {
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
` as GeneratedMutation<
		APITypes.DeleteMosqueFollowersMutationVariables,
		APITypes.DeleteMosqueFollowersMutation
	>
export const createVolunteerTaskUser =
	/* GraphQL */ `mutation CreateVolunteerTaskUser(
  $input: CreateVolunteerTaskUserInput!
  $condition: ModelVolunteerTaskUserConditionInput
) {
  createVolunteerTaskUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
		APITypes.CreateVolunteerTaskUserMutationVariables,
		APITypes.CreateVolunteerTaskUserMutation
	>
export const updateVolunteerTaskUser =
	/* GraphQL */ `mutation UpdateVolunteerTaskUser(
  $input: UpdateVolunteerTaskUserInput!
  $condition: ModelVolunteerTaskUserConditionInput
) {
  updateVolunteerTaskUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
		APITypes.UpdateVolunteerTaskUserMutationVariables,
		APITypes.UpdateVolunteerTaskUserMutation
	>
export const deleteVolunteerTaskUser =
	/* GraphQL */ `mutation DeleteVolunteerTaskUser(
  $input: DeleteVolunteerTaskUserInput!
  $condition: ModelVolunteerTaskUserConditionInput
) {
  deleteVolunteerTaskUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
		APITypes.DeleteVolunteerTaskUserMutationVariables,
		APITypes.DeleteVolunteerTaskUserMutation
	>
