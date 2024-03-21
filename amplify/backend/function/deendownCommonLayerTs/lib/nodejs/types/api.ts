/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAnnouncementInput = {
	id?: string | null
	title: string
	body: string
	images?: Array<string | null> | null
	creatorId: string
	mosqueId: string
	createdAt?: string | null
	updatedAt?: string | null
}

export type ModelAnnouncementConditionInput = {
	title?: ModelStringInput | null
	body?: ModelStringInput | null
	images?: ModelStringInput | null
	creatorId?: ModelIDInput | null
	mosqueId?: ModelIDInput | null
	createdAt?: ModelStringInput | null
	updatedAt?: ModelStringInput | null
	and?: Array<ModelAnnouncementConditionInput | null> | null
	or?: Array<ModelAnnouncementConditionInput | null> | null
	not?: ModelAnnouncementConditionInput | null
}

export type ModelStringInput = {
	ne?: string | null
	eq?: string | null
	le?: string | null
	lt?: string | null
	ge?: string | null
	gt?: string | null
	contains?: string | null
	notContains?: string | null
	between?: Array<string | null> | null
	beginsWith?: string | null
	attributeExists?: boolean | null
	attributeType?: ModelAttributeTypes | null
	size?: ModelSizeInput | null
}

export enum ModelAttributeTypes {
	binary = "binary",
	binarySet = "binarySet",
	bool = "bool",
	list = "list",
	map = "map",
	number = "number",
	numberSet = "numberSet",
	string = "string",
	stringSet = "stringSet",
	_null = "_null",
}

export type ModelSizeInput = {
	ne?: number | null
	eq?: number | null
	le?: number | null
	lt?: number | null
	ge?: number | null
	gt?: number | null
	between?: Array<number | null> | null
}

export type ModelIDInput = {
	ne?: string | null
	eq?: string | null
	le?: string | null
	lt?: string | null
	ge?: string | null
	gt?: string | null
	contains?: string | null
	notContains?: string | null
	between?: Array<string | null> | null
	beginsWith?: string | null
	attributeExists?: boolean | null
	attributeType?: ModelAttributeTypes | null
	size?: ModelSizeInput | null
}

export type Announcement = {
	__typename: "Announcement"
	id: string
	title: string
	body: string
	images?: Array<string | null> | null
	bookmarks?: ModelBookmarkConnection | null
	likes?: ModelLikeConnection | null
	comments?: ModelCommentConnection | null
	creatorId: string
	creator: User
	mosqueId: string
	mosque: Mosque
	createdAt?: string | null
	updatedAt?: string | null
}

export type ModelBookmarkConnection = {
	__typename: "ModelBookmarkConnection"
	items: Array<Bookmark | null>
	nextToken?: string | null
}

export type Bookmark = {
	__typename: "Bookmark"
	id: string
	announcementId: string
	announcement: Announcement
	creatorId: string
	creator: User
	mosqueId: string
	mosque: Mosque
	createdAt: string
	updatedAt: string
}

export type User = {
	__typename: "User"
	id: string
	selfie?: string | null
	firstName: string
	lastName: string
	email: string
	phone?: string | null
	type: UserType
	status: UserStatus
	stripeCustomerId?: string | null
	createdAnnouncements?: ModelAnnouncementConnection | null
	createdClasses?: ModelClassConnection | null
	createdCommittees?: ModelCommitteeConnection | null
	createdGatherings?: ModelGatheringConnection | null
	createdFundraisingCampaigns?: ModelFundraisingCampaignConnection | null
	createdMonthlyPrayerSchedules?: ModelMonthlyPrayerScheduleConnection | null
	createdMosques?: ModelMosqueConnection | null
	createdResources?: ModelResourceConnection | null
	createdServices?: ModelServiceConnection | null
	createdVolunteerTasks?: ModelVolunteerTaskConnection | null
	donations?: ModelDonationConnection | null
	committees?: ModelCommitteeMembersConnection | null
	gatherings?: ModelGatheringAttendeesConnection | null
	instructingClasses?: ModelClassConnection | null
	mosques?: ModelMosqueFollowersConnection | null
	purchasedSubscriptions?: ModelMosqueSubscriptionConnection | null
	volunteerTasks?: ModelVolunteerTaskUserConnection | null
	bookmarks?: ModelBookmarkConnection | null
	likes?: ModelLikeConnection | null
	comments?: ModelCommentConnection | null
	createdAt?: string | null
	updatedAt?: string | null
	owner?: string | null
}

export enum UserType {
	ADMIN = "ADMIN",
	SUPER_ADMIN = "SUPER_ADMIN",
	USER = "USER",
	USER_READ_ONLY = "USER_READ_ONLY",
}

export enum UserStatus {
	ACTIVE = "ACTIVE",
	BLOCKED = "BLOCKED",
	DEACTIVATED = "DEACTIVATED",
}

export type ModelAnnouncementConnection = {
	__typename: "ModelAnnouncementConnection"
	items: Array<Announcement | null>
	nextToken?: string | null
}

export type ModelClassConnection = {
	__typename: "ModelClassConnection"
	items: Array<Class | null>
	nextToken?: string | null
}

export type Class = {
	__typename: "Class"
	id: string
	title: string
	description?: string | null
	startDateTime: string
	endDateTime?: string | null
	recurring: boolean
	daysOfWeek?: Array<DayType> | null
	creatorId: string
	creator: User
	instructorId: string
	instructor: User
	mosqueId: string
	mosque: Mosque
	createdAt?: string | null
	updatedAt?: string | null
}

export enum DayType {
	MONDAY = "MONDAY",
	TUESDAY = "TUESDAY",
	WEDNESDAY = "WEDNESDAY",
	THURSDAY = "THURSDAY",
	FRIDAY = "FRIDAY",
	SATURDAY = "SATURDAY",
	SUNDAY = "SUNDAY",
}

export type Mosque = {
	__typename: "Mosque"
	id: string
	name: string
	description: string
	images: Array<string | null>
	address: Address
	hours?: Hours | null
	contactInfo: ContactInfo
	liveVideoUrl?: string | null
	creatorId: string
	creator: User
	followers?: ModelMosqueFollowersConnection | null
	announcements?: ModelAnnouncementConnection | null
	classes?: ModelClassConnection | null
	committees?: ModelCommitteeConnection | null
	gatherings?: ModelGatheringConnection | null
	fundraisingCampaigns?: ModelFundraisingCampaignConnection | null
	monthlyPrayerSchedules?: ModelMonthlyPrayerScheduleConnection | null
	resources?: ModelResourceConnection | null
	services?: ModelServiceConnection | null
	subscriptions?: ModelMosqueSubscriptionConnection | null
	volunteerTasks?: ModelVolunteerTaskConnection | null
	bookmarks?: ModelBookmarkConnection | null
	likes?: ModelLikeConnection | null
	comments?: ModelCommentConnection | null
	createdAt?: string | null
	updatedAt?: string | null
}

export type Address = {
	__typename: "Address"
	addressLine1: string
	addressLine2?: string | null
	addressLine3?: string | null
	city: string
	province: string
	postalCode: string
	country: string
	latitude: number
	longitude: number
}

export type Hours = {
	__typename: "Hours"
	monday?: Day | null
	tuesday?: Day | null
	wednesday?: Day | null
	thursday?: Day | null
	friday?: Day | null
	saturday?: Day | null
	sunday?: Day | null
}

export type Day = {
	__typename: "Day"
	type: DayType
	operatingHours?: Array<OperatingHours> | null
}

export type OperatingHours = {
	__typename: "OperatingHours"
	open: string
	close: string
}

export type ContactInfo = {
	__typename: "ContactInfo"
	phone?: string | null
	email?: string | null
	website?: string | null
	socialMedia?: SocialMedia | null
}

export type SocialMedia = {
	__typename: "SocialMedia"
	facebook?: string | null
	instagram?: string | null
	twitter?: string | null
	youtube?: string | null
}

export type ModelMosqueFollowersConnection = {
	__typename: "ModelMosqueFollowersConnection"
	items: Array<MosqueFollowers | null>
	nextToken?: string | null
}

export type MosqueFollowers = {
	__typename: "MosqueFollowers"
	id: string
	mosqueId: string
	userId: string
	mosque: Mosque
	user: User
	createdAt: string
	updatedAt: string
	creatorId?: string | null
	owner?: string | null
}

export type ModelCommitteeConnection = {
	__typename: "ModelCommitteeConnection"
	items: Array<Committee | null>
	nextToken?: string | null
}

export type Committee = {
	__typename: "Committee"
	id: string
	title: string
	description?: string | null
	creatorId: string
	creator: User
	mosqueId: string
	mosque: Mosque
	members?: ModelCommitteeMembersConnection | null
	createdAt?: string | null
	updatedAt?: string | null
}

export type ModelCommitteeMembersConnection = {
	__typename: "ModelCommitteeMembersConnection"
	items: Array<CommitteeMembers | null>
	nextToken?: string | null
}

export type CommitteeMembers = {
	__typename: "CommitteeMembers"
	id: string
	committeeId: string
	userId: string
	committee: Committee
	user: User
	createdAt: string
	updatedAt: string
	creatorId?: string | null
	owner?: string | null
}

export type ModelGatheringConnection = {
	__typename: "ModelGatheringConnection"
	items: Array<Gathering | null>
	nextToken?: string | null
}

export type Gathering = {
	__typename: "Gathering"
	id: string
	title: string
	description?: string | null
	type: GatheringType
	startDate: string
	endDate?: string | null
	address: Address
	creatorId: string
	creator: User
	mosqueId: string
	mosque: Mosque
	attendees?: ModelGatheringAttendeesConnection | null
	createdAt?: string | null
	updatedAt?: string | null
}

export enum GatheringType {
	LECTURE = "LECTURE",
	GATHERING = "GATHERING",
	COMMUNITY_ACTIVITY = "COMMUNITY_ACTIVITY",
	OTHER = "OTHER",
}

export type ModelGatheringAttendeesConnection = {
	__typename: "ModelGatheringAttendeesConnection"
	items: Array<GatheringAttendees | null>
	nextToken?: string | null
}

export type GatheringAttendees = {
	__typename: "GatheringAttendees"
	id: string
	gatheringId: string
	userId: string
	gathering: Gathering
	user: User
	createdAt: string
	updatedAt: string
	creatorId?: string | null
	owner?: string | null
}

export type ModelFundraisingCampaignConnection = {
	__typename: "ModelFundraisingCampaignConnection"
	items: Array<FundraisingCampaign | null>
	nextToken?: string | null
}

export type FundraisingCampaign = {
	__typename: "FundraisingCampaign"
	id: string
	title: string
	description?: string | null
	featureImage?: string | null
	type: FundraisingCampaignType
	currentAmount: number
	goal: number
	goalDate: string
	currency: string
	creatorId: string
	creator: User
	mosqueId: string
	mosque: Mosque
	donations?: ModelDonationConnection | null
	createdAt?: string | null
	updatedAt?: string | null
}

export enum FundraisingCampaignType {
	BILL = "BILL",
	COMMUNITY = "COMMUNITY",
	EDUCATION = "EDUCATION",
	EMERGENCY_RELIEF = "EMERGENCY_RELIEF",
	ENVIRONMENT = "ENVIRONMENT",
	FUNERAL = "FUNERAL",
	HEALTH = "HEALTH",
	MOSQUE = "MOSQUE",
	ORPHANS = "ORPHANS",
	OTHER = "OTHER",
	REFUGEES = "REFUGEES",
}

export type ModelDonationConnection = {
	__typename: "ModelDonationConnection"
	items: Array<Donation | null>
	nextToken?: string | null
}

export type Donation = {
	__typename: "Donation"
	id: string
	amount: number
	currency: string
	isAnonymous: boolean
	donorId: string
	donor: User
	fundraisingCampaignId: string
	fundraisingCampaign?: FundraisingCampaign | null
	createdAt?: string | null
	updatedAt?: string | null
}

export type ModelMonthlyPrayerScheduleConnection = {
	__typename: "ModelMonthlyPrayerScheduleConnection"
	items: Array<MonthlyPrayerSchedule | null>
	nextToken?: string | null
}

export type MonthlyPrayerSchedule = {
	__typename: "MonthlyPrayerSchedule"
	id: string
	year: number
	month: number
	prayerTimes: Array<PrayerTime>
	creatorId: string
	creator: User
	mosqueId: string
	mosque: Mosque
	createdAt?: string | null
	updatedAt?: string | null
}

export type PrayerTime = {
	__typename: "PrayerTime"
	type: PrayerType
	athan: string
	iqamah: string
}

export enum PrayerType {
	FAJR = "FAJR",
	THUHR = "THUHR",
	ASR = "ASR",
	MAGHRIB = "MAGHRIB",
	ISHA = "ISHA",
	JUMUAH = "JUMUAH",
	EID_AL_FITR = "EID_AL_FITR",
	EID_AL_ADHA = "EID_AL_ADHA",
}

export type ModelResourceConnection = {
	__typename: "ModelResourceConnection"
	items: Array<Resource | null>
	nextToken?: string | null
}

export type Resource = {
	__typename: "Resource"
	id: string
	title: string
	description?: string | null
	type: ResourceType
	url: string
	creatorId: string
	creator: User
	mosqueId: string
	mosque: Mosque
	createdAt?: string | null
	updatedAt?: string | null
}

export enum ResourceType {
	ARTICLE = "ARTICLE",
	VIDEO = "VIDEO",
	BOOK = "BOOK",
	OTHER = "OTHER",
}

export type ModelServiceConnection = {
	__typename: "ModelServiceConnection"
	items: Array<Service | null>
	nextToken?: string | null
}

export type Service = {
	__typename: "Service"
	id: string
	type: ServiceType
	description?: string | null
	documents?: Array<string | null> | null
	creatorId: string
	creator: User
	mosqueId: string
	mosque: Mosque
	createdAt?: string | null
	updatedAt?: string | null
}

export enum ServiceType {
	MARRIAGE = "MARRIAGE",
	FUNERAL = "FUNERAL",
	COUNSELING = "COUNSELING",
	OTHER = "OTHER",
}

export type ModelMosqueSubscriptionConnection = {
	__typename: "ModelMosqueSubscriptionConnection"
	items: Array<MosqueSubscription | null>
	nextToken?: string | null
}

export type MosqueSubscription = {
	__typename: "MosqueSubscription"
	id: string
	status: MosqueSubscriptionStatus
	startDate: string
	endDate?: string | null
	stripeSubscriptionId: string
	purchaserId: string
	purchaser: User
	mosqueId: string
	mosque: Mosque
	createdAt?: string | null
	updatedAt?: string | null
}

export enum MosqueSubscriptionStatus {
	LIFETIME = "LIFETIME",
	TRIAL = "TRIAL",
	ACTIVE = "ACTIVE",
	INACTIVE = "INACTIVE",
}

export type ModelVolunteerTaskConnection = {
	__typename: "ModelVolunteerTaskConnection"
	items: Array<VolunteerTask | null>
	nextToken?: string | null
}

export type VolunteerTask = {
	__typename: "VolunteerTask"
	id: string
	name: string
	description?: string | null
	startDate: string
	endDate?: string | null
	creatorId: string
	creator: User
	mosqueId: string
	mosque: Mosque
	volunteers?: ModelVolunteerTaskUserConnection | null
	createdAt?: string | null
	updatedAt?: string | null
}

export type ModelVolunteerTaskUserConnection = {
	__typename: "ModelVolunteerTaskUserConnection"
	items: Array<VolunteerTaskUser | null>
	nextToken?: string | null
}

export type VolunteerTaskUser = {
	__typename: "VolunteerTaskUser"
	id: string
	userId: string
	volunteerTaskId: string
	user: User
	volunteerTask: VolunteerTask
	createdAt: string
	updatedAt: string
	owner?: string | null
	creatorId?: string | null
}

export type ModelLikeConnection = {
	__typename: "ModelLikeConnection"
	items: Array<Like | null>
	nextToken?: string | null
}

export type Like = {
	__typename: "Like"
	id: string
	announcementId: string
	announcement: Announcement
	creatorId: string
	creator: User
	mosqueId: string
	mosque: Mosque
	createdAt: string
	updatedAt: string
}

export type ModelCommentConnection = {
	__typename: "ModelCommentConnection"
	items: Array<Comment | null>
	nextToken?: string | null
}

export type Comment = {
	__typename: "Comment"
	id: string
	text: string
	parentCommentId?: string | null
	parentComment?: Comment | null
	subComments?: ModelCommentConnection | null
	announcementId: string
	announcement: Announcement
	creatorId: string
	creator: User
	mosqueId: string
	mosque: Mosque
	createdAt: string
	updatedAt: string
}

export type ModelMosqueConnection = {
	__typename: "ModelMosqueConnection"
	items: Array<Mosque | null>
	nextToken?: string | null
}

export type UpdateAnnouncementInput = {
	id: string
	title?: string | null
	body?: string | null
	images?: Array<string | null> | null
	creatorId?: string | null
	mosqueId?: string | null
	createdAt?: string | null
	updatedAt?: string | null
}

export type DeleteAnnouncementInput = {
	id: string
}

export type CreateBookmarkInput = {
	id?: string | null
	announcementId: string
	creatorId: string
	mosqueId: string
}

export type ModelBookmarkConditionInput = {
	announcementId?: ModelIDInput | null
	creatorId?: ModelIDInput | null
	mosqueId?: ModelIDInput | null
	and?: Array<ModelBookmarkConditionInput | null> | null
	or?: Array<ModelBookmarkConditionInput | null> | null
	not?: ModelBookmarkConditionInput | null
}

export type UpdateBookmarkInput = {
	id: string
	announcementId?: string | null
	creatorId?: string | null
	mosqueId?: string | null
}

export type DeleteBookmarkInput = {
	id: string
}

export type CreateClassInput = {
	id?: string | null
	title: string
	description?: string | null
	startDateTime: string
	endDateTime?: string | null
	recurring: boolean
	daysOfWeek?: Array<DayType> | null
	creatorId: string
	instructorId: string
	mosqueId: string
	createdAt?: string | null
	updatedAt?: string | null
}

export type ModelClassConditionInput = {
	title?: ModelStringInput | null
	description?: ModelStringInput | null
	startDateTime?: ModelStringInput | null
	endDateTime?: ModelStringInput | null
	recurring?: ModelBooleanInput | null
	daysOfWeek?: ModelDayTypeListInput | null
	creatorId?: ModelIDInput | null
	instructorId?: ModelIDInput | null
	mosqueId?: ModelIDInput | null
	createdAt?: ModelStringInput | null
	updatedAt?: ModelStringInput | null
	and?: Array<ModelClassConditionInput | null> | null
	or?: Array<ModelClassConditionInput | null> | null
	not?: ModelClassConditionInput | null
}

export type ModelBooleanInput = {
	ne?: boolean | null
	eq?: boolean | null
	attributeExists?: boolean | null
	attributeType?: ModelAttributeTypes | null
}

export type ModelDayTypeListInput = {
	eq?: Array<DayType | null> | null
	ne?: Array<DayType | null> | null
	contains?: DayType | null
	notContains?: DayType | null
}

export type UpdateClassInput = {
	id: string
	title?: string | null
	description?: string | null
	startDateTime?: string | null
	endDateTime?: string | null
	recurring?: boolean | null
	daysOfWeek?: Array<DayType> | null
	creatorId?: string | null
	instructorId?: string | null
	mosqueId?: string | null
	createdAt?: string | null
	updatedAt?: string | null
}

export type DeleteClassInput = {
	id: string
}

export type CreateCommentInput = {
	id?: string | null
	text: string
	parentCommentId?: string | null
	announcementId: string
	creatorId: string
	mosqueId: string
}

export type ModelCommentConditionInput = {
	text?: ModelStringInput | null
	parentCommentId?: ModelIDInput | null
	announcementId?: ModelIDInput | null
	creatorId?: ModelIDInput | null
	mosqueId?: ModelIDInput | null
	and?: Array<ModelCommentConditionInput | null> | null
	or?: Array<ModelCommentConditionInput | null> | null
	not?: ModelCommentConditionInput | null
}

export type UpdateCommentInput = {
	id: string
	text?: string | null
	parentCommentId?: string | null
	announcementId?: string | null
	creatorId?: string | null
	mosqueId?: string | null
}

export type DeleteCommentInput = {
	id: string
}

export type CreateCommitteeInput = {
	id?: string | null
	title: string
	description?: string | null
	creatorId: string
	mosqueId: string
	createdAt?: string | null
	updatedAt?: string | null
}

export type ModelCommitteeConditionInput = {
	title?: ModelStringInput | null
	description?: ModelStringInput | null
	creatorId?: ModelIDInput | null
	mosqueId?: ModelIDInput | null
	createdAt?: ModelStringInput | null
	updatedAt?: ModelStringInput | null
	and?: Array<ModelCommitteeConditionInput | null> | null
	or?: Array<ModelCommitteeConditionInput | null> | null
	not?: ModelCommitteeConditionInput | null
}

export type UpdateCommitteeInput = {
	id: string
	title?: string | null
	description?: string | null
	creatorId?: string | null
	mosqueId?: string | null
	createdAt?: string | null
	updatedAt?: string | null
}

export type DeleteCommitteeInput = {
	id: string
}

export type CreateGatheringInput = {
	id?: string | null
	title: string
	description?: string | null
	type: GatheringType
	startDate: string
	endDate?: string | null
	address: AddressInput
	creatorId: string
	mosqueId: string
	createdAt?: string | null
	updatedAt?: string | null
}

export type AddressInput = {
	addressLine1: string
	addressLine2?: string | null
	addressLine3?: string | null
	city: string
	province: string
	postalCode: string
	country: string
	latitude: number
	longitude: number
}

export type ModelGatheringConditionInput = {
	title?: ModelStringInput | null
	description?: ModelStringInput | null
	type?: ModelGatheringTypeInput | null
	startDate?: ModelStringInput | null
	endDate?: ModelStringInput | null
	creatorId?: ModelIDInput | null
	mosqueId?: ModelIDInput | null
	createdAt?: ModelStringInput | null
	updatedAt?: ModelStringInput | null
	and?: Array<ModelGatheringConditionInput | null> | null
	or?: Array<ModelGatheringConditionInput | null> | null
	not?: ModelGatheringConditionInput | null
}

export type ModelGatheringTypeInput = {
	eq?: GatheringType | null
	ne?: GatheringType | null
}

export type UpdateGatheringInput = {
	id: string
	title?: string | null
	description?: string | null
	type?: GatheringType | null
	startDate?: string | null
	endDate?: string | null
	address?: AddressInput | null
	creatorId?: string | null
	mosqueId?: string | null
	createdAt?: string | null
	updatedAt?: string | null
}

export type DeleteGatheringInput = {
	id: string
}

export type CreateDonationInput = {
	id?: string | null
	amount: number
	currency: string
	isAnonymous: boolean
	donorId: string
	fundraisingCampaignId: string
	createdAt?: string | null
	updatedAt?: string | null
}

export type ModelDonationConditionInput = {
	amount?: ModelFloatInput | null
	currency?: ModelStringInput | null
	isAnonymous?: ModelBooleanInput | null
	donorId?: ModelIDInput | null
	fundraisingCampaignId?: ModelIDInput | null
	createdAt?: ModelStringInput | null
	updatedAt?: ModelStringInput | null
	and?: Array<ModelDonationConditionInput | null> | null
	or?: Array<ModelDonationConditionInput | null> | null
	not?: ModelDonationConditionInput | null
}

export type ModelFloatInput = {
	ne?: number | null
	eq?: number | null
	le?: number | null
	lt?: number | null
	ge?: number | null
	gt?: number | null
	between?: Array<number | null> | null
	attributeExists?: boolean | null
	attributeType?: ModelAttributeTypes | null
}

export type UpdateDonationInput = {
	id: string
	amount?: number | null
	currency?: string | null
	isAnonymous?: boolean | null
	donorId?: string | null
	fundraisingCampaignId?: string | null
	createdAt?: string | null
	updatedAt?: string | null
}

export type DeleteDonationInput = {
	id: string
}

export type CreateFundraisingCampaignInput = {
	id?: string | null
	title: string
	description?: string | null
	featureImage?: string | null
	type: FundraisingCampaignType
	currentAmount: number
	goal: number
	goalDate: string
	currency: string
	creatorId: string
	mosqueId: string
	createdAt?: string | null
	updatedAt?: string | null
}

export type ModelFundraisingCampaignConditionInput = {
	title?: ModelStringInput | null
	description?: ModelStringInput | null
	featureImage?: ModelStringInput | null
	type?: ModelFundraisingCampaignTypeInput | null
	currentAmount?: ModelFloatInput | null
	goal?: ModelFloatInput | null
	goalDate?: ModelStringInput | null
	currency?: ModelStringInput | null
	creatorId?: ModelIDInput | null
	mosqueId?: ModelIDInput | null
	createdAt?: ModelStringInput | null
	updatedAt?: ModelStringInput | null
	and?: Array<ModelFundraisingCampaignConditionInput | null> | null
	or?: Array<ModelFundraisingCampaignConditionInput | null> | null
	not?: ModelFundraisingCampaignConditionInput | null
}

export type ModelFundraisingCampaignTypeInput = {
	eq?: FundraisingCampaignType | null
	ne?: FundraisingCampaignType | null
}

export type UpdateFundraisingCampaignInput = {
	id: string
	title?: string | null
	description?: string | null
	featureImage?: string | null
	type?: FundraisingCampaignType | null
	currentAmount?: number | null
	goal?: number | null
	goalDate?: string | null
	currency?: string | null
	creatorId?: string | null
	mosqueId?: string | null
	createdAt?: string | null
	updatedAt?: string | null
}

export type DeleteFundraisingCampaignInput = {
	id: string
}

export type CreateLikeInput = {
	id?: string | null
	announcementId: string
	creatorId: string
	mosqueId: string
}

export type ModelLikeConditionInput = {
	announcementId?: ModelIDInput | null
	creatorId?: ModelIDInput | null
	mosqueId?: ModelIDInput | null
	and?: Array<ModelLikeConditionInput | null> | null
	or?: Array<ModelLikeConditionInput | null> | null
	not?: ModelLikeConditionInput | null
}

export type UpdateLikeInput = {
	id: string
	announcementId?: string | null
	creatorId?: string | null
	mosqueId?: string | null
}

export type DeleteLikeInput = {
	id: string
}

export type CreateMonthlyPrayerScheduleInput = {
	id?: string | null
	year: number
	month: number
	prayerTimes: Array<PrayerTimeInput>
	creatorId: string
	mosqueId: string
	createdAt?: string | null
	updatedAt?: string | null
}

export type PrayerTimeInput = {
	type: PrayerType
	athan: string
	iqamah: string
}

export type ModelMonthlyPrayerScheduleConditionInput = {
	year?: ModelIntInput | null
	month?: ModelIntInput | null
	creatorId?: ModelIDInput | null
	mosqueId?: ModelIDInput | null
	createdAt?: ModelStringInput | null
	updatedAt?: ModelStringInput | null
	and?: Array<ModelMonthlyPrayerScheduleConditionInput | null> | null
	or?: Array<ModelMonthlyPrayerScheduleConditionInput | null> | null
	not?: ModelMonthlyPrayerScheduleConditionInput | null
}

export type ModelIntInput = {
	ne?: number | null
	eq?: number | null
	le?: number | null
	lt?: number | null
	ge?: number | null
	gt?: number | null
	between?: Array<number | null> | null
	attributeExists?: boolean | null
	attributeType?: ModelAttributeTypes | null
}

export type UpdateMonthlyPrayerScheduleInput = {
	id: string
	year?: number | null
	month?: number | null
	prayerTimes?: Array<PrayerTimeInput> | null
	creatorId?: string | null
	mosqueId?: string | null
	createdAt?: string | null
	updatedAt?: string | null
}

export type DeleteMonthlyPrayerScheduleInput = {
	id: string
}

export type CreateMosqueInput = {
	id?: string | null
	name: string
	description: string
	images: Array<string | null>
	address: AddressInput
	hours?: HoursInput | null
	contactInfo: ContactInfoInput
	liveVideoUrl?: string | null
	creatorId: string
	createdAt?: string | null
	updatedAt?: string | null
}

export type HoursInput = {
	monday?: DayInput | null
	tuesday?: DayInput | null
	wednesday?: DayInput | null
	thursday?: DayInput | null
	friday?: DayInput | null
	saturday?: DayInput | null
	sunday?: DayInput | null
}

export type DayInput = {
	type: DayType
	operatingHours?: Array<OperatingHoursInput> | null
}

export type OperatingHoursInput = {
	open: string
	close: string
}

export type ContactInfoInput = {
	phone?: string | null
	email?: string | null
	website?: string | null
	socialMedia?: SocialMediaInput | null
}

export type SocialMediaInput = {
	facebook?: string | null
	instagram?: string | null
	twitter?: string | null
	youtube?: string | null
}

export type ModelMosqueConditionInput = {
	name?: ModelStringInput | null
	description?: ModelStringInput | null
	images?: ModelStringInput | null
	liveVideoUrl?: ModelStringInput | null
	creatorId?: ModelIDInput | null
	createdAt?: ModelStringInput | null
	updatedAt?: ModelStringInput | null
	and?: Array<ModelMosqueConditionInput | null> | null
	or?: Array<ModelMosqueConditionInput | null> | null
	not?: ModelMosqueConditionInput | null
}

export type UpdateMosqueInput = {
	id: string
	name?: string | null
	description?: string | null
	images?: Array<string | null> | null
	address?: AddressInput | null
	hours?: HoursInput | null
	contactInfo?: ContactInfoInput | null
	liveVideoUrl?: string | null
	creatorId?: string | null
	createdAt?: string | null
	updatedAt?: string | null
}

export type DeleteMosqueInput = {
	id: string
}

export type CreateMosqueSubscriptionInput = {
	id?: string | null
	status: MosqueSubscriptionStatus
	startDate: string
	endDate?: string | null
	stripeSubscriptionId: string
	purchaserId: string
	mosqueId: string
	createdAt?: string | null
	updatedAt?: string | null
}

export type ModelMosqueSubscriptionConditionInput = {
	status?: ModelMosqueSubscriptionStatusInput | null
	startDate?: ModelStringInput | null
	endDate?: ModelStringInput | null
	stripeSubscriptionId?: ModelStringInput | null
	purchaserId?: ModelIDInput | null
	mosqueId?: ModelIDInput | null
	createdAt?: ModelStringInput | null
	updatedAt?: ModelStringInput | null
	and?: Array<ModelMosqueSubscriptionConditionInput | null> | null
	or?: Array<ModelMosqueSubscriptionConditionInput | null> | null
	not?: ModelMosqueSubscriptionConditionInput | null
}

export type ModelMosqueSubscriptionStatusInput = {
	eq?: MosqueSubscriptionStatus | null
	ne?: MosqueSubscriptionStatus | null
}

export type UpdateMosqueSubscriptionInput = {
	id: string
	status?: MosqueSubscriptionStatus | null
	startDate?: string | null
	endDate?: string | null
	stripeSubscriptionId?: string | null
	purchaserId?: string | null
	mosqueId?: string | null
	createdAt?: string | null
	updatedAt?: string | null
}

export type DeleteMosqueSubscriptionInput = {
	id: string
}

export type CreateResourceInput = {
	id?: string | null
	title: string
	description?: string | null
	type: ResourceType
	url: string
	creatorId: string
	mosqueId: string
	createdAt?: string | null
	updatedAt?: string | null
}

export type ModelResourceConditionInput = {
	title?: ModelStringInput | null
	description?: ModelStringInput | null
	type?: ModelResourceTypeInput | null
	url?: ModelStringInput | null
	creatorId?: ModelIDInput | null
	mosqueId?: ModelIDInput | null
	createdAt?: ModelStringInput | null
	updatedAt?: ModelStringInput | null
	and?: Array<ModelResourceConditionInput | null> | null
	or?: Array<ModelResourceConditionInput | null> | null
	not?: ModelResourceConditionInput | null
}

export type ModelResourceTypeInput = {
	eq?: ResourceType | null
	ne?: ResourceType | null
}

export type UpdateResourceInput = {
	id: string
	title?: string | null
	description?: string | null
	type?: ResourceType | null
	url?: string | null
	creatorId?: string | null
	mosqueId?: string | null
	createdAt?: string | null
	updatedAt?: string | null
}

export type DeleteResourceInput = {
	id: string
}

export type CreateServiceInput = {
	id?: string | null
	type: ServiceType
	description?: string | null
	documents?: Array<string | null> | null
	creatorId: string
	mosqueId: string
	createdAt?: string | null
	updatedAt?: string | null
}

export type ModelServiceConditionInput = {
	type?: ModelServiceTypeInput | null
	description?: ModelStringInput | null
	documents?: ModelStringInput | null
	creatorId?: ModelIDInput | null
	mosqueId?: ModelIDInput | null
	createdAt?: ModelStringInput | null
	updatedAt?: ModelStringInput | null
	and?: Array<ModelServiceConditionInput | null> | null
	or?: Array<ModelServiceConditionInput | null> | null
	not?: ModelServiceConditionInput | null
}

export type ModelServiceTypeInput = {
	eq?: ServiceType | null
	ne?: ServiceType | null
}

export type UpdateServiceInput = {
	id: string
	type?: ServiceType | null
	description?: string | null
	documents?: Array<string | null> | null
	creatorId?: string | null
	mosqueId?: string | null
	createdAt?: string | null
	updatedAt?: string | null
}

export type DeleteServiceInput = {
	id: string
}

export type CreateUserInput = {
	id?: string | null
	selfie?: string | null
	firstName: string
	lastName: string
	email: string
	phone?: string | null
	type: UserType
	status: UserStatus
	stripeCustomerId?: string | null
	createdAt?: string | null
	updatedAt?: string | null
}

export type ModelUserConditionInput = {
	selfie?: ModelStringInput | null
	firstName?: ModelStringInput | null
	lastName?: ModelStringInput | null
	email?: ModelStringInput | null
	phone?: ModelStringInput | null
	type?: ModelUserTypeInput | null
	status?: ModelUserStatusInput | null
	stripeCustomerId?: ModelStringInput | null
	createdAt?: ModelStringInput | null
	updatedAt?: ModelStringInput | null
	and?: Array<ModelUserConditionInput | null> | null
	or?: Array<ModelUserConditionInput | null> | null
	not?: ModelUserConditionInput | null
}

export type ModelUserTypeInput = {
	eq?: UserType | null
	ne?: UserType | null
}

export type ModelUserStatusInput = {
	eq?: UserStatus | null
	ne?: UserStatus | null
}

export type UpdateUserInput = {
	id: string
	selfie?: string | null
	firstName?: string | null
	lastName?: string | null
	email?: string | null
	phone?: string | null
	type?: UserType | null
	status?: UserStatus | null
	stripeCustomerId?: string | null
	createdAt?: string | null
	updatedAt?: string | null
}

export type DeleteUserInput = {
	id: string
}

export type CreateVolunteerTaskInput = {
	id?: string | null
	name: string
	description?: string | null
	startDate: string
	endDate?: string | null
	creatorId: string
	mosqueId: string
	createdAt?: string | null
	updatedAt?: string | null
}

export type ModelVolunteerTaskConditionInput = {
	name?: ModelStringInput | null
	description?: ModelStringInput | null
	startDate?: ModelStringInput | null
	endDate?: ModelStringInput | null
	creatorId?: ModelIDInput | null
	mosqueId?: ModelIDInput | null
	createdAt?: ModelStringInput | null
	updatedAt?: ModelStringInput | null
	and?: Array<ModelVolunteerTaskConditionInput | null> | null
	or?: Array<ModelVolunteerTaskConditionInput | null> | null
	not?: ModelVolunteerTaskConditionInput | null
}

export type UpdateVolunteerTaskInput = {
	id: string
	name?: string | null
	description?: string | null
	startDate?: string | null
	endDate?: string | null
	creatorId?: string | null
	mosqueId?: string | null
	createdAt?: string | null
	updatedAt?: string | null
}

export type DeleteVolunteerTaskInput = {
	id: string
}

export type CreateCommitteeMembersInput = {
	id?: string | null
	committeeId: string
	userId: string
}

export type ModelCommitteeMembersConditionInput = {
	committeeId?: ModelIDInput | null
	userId?: ModelIDInput | null
	and?: Array<ModelCommitteeMembersConditionInput | null> | null
	or?: Array<ModelCommitteeMembersConditionInput | null> | null
	not?: ModelCommitteeMembersConditionInput | null
}

export type UpdateCommitteeMembersInput = {
	id: string
	committeeId?: string | null
	userId?: string | null
}

export type DeleteCommitteeMembersInput = {
	id: string
}

export type CreateGatheringAttendeesInput = {
	id?: string | null
	gatheringId: string
	userId: string
}

export type ModelGatheringAttendeesConditionInput = {
	gatheringId?: ModelIDInput | null
	userId?: ModelIDInput | null
	and?: Array<ModelGatheringAttendeesConditionInput | null> | null
	or?: Array<ModelGatheringAttendeesConditionInput | null> | null
	not?: ModelGatheringAttendeesConditionInput | null
}

export type UpdateGatheringAttendeesInput = {
	id: string
	gatheringId?: string | null
	userId?: string | null
}

export type DeleteGatheringAttendeesInput = {
	id: string
}

export type CreateMosqueFollowersInput = {
	id?: string | null
	mosqueId: string
	userId: string
}

export type ModelMosqueFollowersConditionInput = {
	mosqueId?: ModelIDInput | null
	userId?: ModelIDInput | null
	and?: Array<ModelMosqueFollowersConditionInput | null> | null
	or?: Array<ModelMosqueFollowersConditionInput | null> | null
	not?: ModelMosqueFollowersConditionInput | null
}

export type UpdateMosqueFollowersInput = {
	id: string
	mosqueId?: string | null
	userId?: string | null
}

export type DeleteMosqueFollowersInput = {
	id: string
}

export type CreateVolunteerTaskUserInput = {
	id?: string | null
	userId: string
	volunteerTaskId: string
}

export type ModelVolunteerTaskUserConditionInput = {
	userId?: ModelIDInput | null
	volunteerTaskId?: ModelIDInput | null
	and?: Array<ModelVolunteerTaskUserConditionInput | null> | null
	or?: Array<ModelVolunteerTaskUserConditionInput | null> | null
	not?: ModelVolunteerTaskUserConditionInput | null
}

export type UpdateVolunteerTaskUserInput = {
	id: string
	userId?: string | null
	volunteerTaskId?: string | null
}

export type DeleteVolunteerTaskUserInput = {
	id: string
}

export type ModelAnnouncementFilterInput = {
	id?: ModelIDInput | null
	title?: ModelStringInput | null
	body?: ModelStringInput | null
	images?: ModelStringInput | null
	creatorId?: ModelIDInput | null
	mosqueId?: ModelIDInput | null
	createdAt?: ModelStringInput | null
	updatedAt?: ModelStringInput | null
	and?: Array<ModelAnnouncementFilterInput | null> | null
	or?: Array<ModelAnnouncementFilterInput | null> | null
	not?: ModelAnnouncementFilterInput | null
}

export enum ModelSortDirection {
	ASC = "ASC",
	DESC = "DESC",
}

export type ModelBookmarkFilterInput = {
	id?: ModelIDInput | null
	announcementId?: ModelIDInput | null
	creatorId?: ModelIDInput | null
	mosqueId?: ModelIDInput | null
	and?: Array<ModelBookmarkFilterInput | null> | null
	or?: Array<ModelBookmarkFilterInput | null> | null
	not?: ModelBookmarkFilterInput | null
}

export type ModelClassFilterInput = {
	id?: ModelIDInput | null
	title?: ModelStringInput | null
	description?: ModelStringInput | null
	startDateTime?: ModelStringInput | null
	endDateTime?: ModelStringInput | null
	recurring?: ModelBooleanInput | null
	daysOfWeek?: ModelDayTypeListInput | null
	creatorId?: ModelIDInput | null
	instructorId?: ModelIDInput | null
	mosqueId?: ModelIDInput | null
	createdAt?: ModelStringInput | null
	updatedAt?: ModelStringInput | null
	and?: Array<ModelClassFilterInput | null> | null
	or?: Array<ModelClassFilterInput | null> | null
	not?: ModelClassFilterInput | null
}

export type ModelCommentFilterInput = {
	id?: ModelIDInput | null
	text?: ModelStringInput | null
	parentCommentId?: ModelIDInput | null
	announcementId?: ModelIDInput | null
	creatorId?: ModelIDInput | null
	mosqueId?: ModelIDInput | null
	and?: Array<ModelCommentFilterInput | null> | null
	or?: Array<ModelCommentFilterInput | null> | null
	not?: ModelCommentFilterInput | null
}

export type ModelCommitteeFilterInput = {
	id?: ModelIDInput | null
	title?: ModelStringInput | null
	description?: ModelStringInput | null
	creatorId?: ModelIDInput | null
	mosqueId?: ModelIDInput | null
	createdAt?: ModelStringInput | null
	updatedAt?: ModelStringInput | null
	and?: Array<ModelCommitteeFilterInput | null> | null
	or?: Array<ModelCommitteeFilterInput | null> | null
	not?: ModelCommitteeFilterInput | null
}

export type ModelGatheringFilterInput = {
	id?: ModelIDInput | null
	title?: ModelStringInput | null
	description?: ModelStringInput | null
	type?: ModelGatheringTypeInput | null
	startDate?: ModelStringInput | null
	endDate?: ModelStringInput | null
	creatorId?: ModelIDInput | null
	mosqueId?: ModelIDInput | null
	createdAt?: ModelStringInput | null
	updatedAt?: ModelStringInput | null
	and?: Array<ModelGatheringFilterInput | null> | null
	or?: Array<ModelGatheringFilterInput | null> | null
	not?: ModelGatheringFilterInput | null
}

export type ModelDonationFilterInput = {
	id?: ModelIDInput | null
	amount?: ModelFloatInput | null
	currency?: ModelStringInput | null
	isAnonymous?: ModelBooleanInput | null
	donorId?: ModelIDInput | null
	fundraisingCampaignId?: ModelIDInput | null
	createdAt?: ModelStringInput | null
	updatedAt?: ModelStringInput | null
	and?: Array<ModelDonationFilterInput | null> | null
	or?: Array<ModelDonationFilterInput | null> | null
	not?: ModelDonationFilterInput | null
}

export type ModelFundraisingCampaignFilterInput = {
	id?: ModelIDInput | null
	title?: ModelStringInput | null
	description?: ModelStringInput | null
	featureImage?: ModelStringInput | null
	type?: ModelFundraisingCampaignTypeInput | null
	currentAmount?: ModelFloatInput | null
	goal?: ModelFloatInput | null
	goalDate?: ModelStringInput | null
	currency?: ModelStringInput | null
	creatorId?: ModelIDInput | null
	mosqueId?: ModelIDInput | null
	createdAt?: ModelStringInput | null
	updatedAt?: ModelStringInput | null
	and?: Array<ModelFundraisingCampaignFilterInput | null> | null
	or?: Array<ModelFundraisingCampaignFilterInput | null> | null
	not?: ModelFundraisingCampaignFilterInput | null
}

export type ModelLikeFilterInput = {
	id?: ModelIDInput | null
	announcementId?: ModelIDInput | null
	creatorId?: ModelIDInput | null
	mosqueId?: ModelIDInput | null
	and?: Array<ModelLikeFilterInput | null> | null
	or?: Array<ModelLikeFilterInput | null> | null
	not?: ModelLikeFilterInput | null
}

export type ModelMonthlyPrayerScheduleFilterInput = {
	id?: ModelIDInput | null
	year?: ModelIntInput | null
	month?: ModelIntInput | null
	creatorId?: ModelIDInput | null
	mosqueId?: ModelIDInput | null
	createdAt?: ModelStringInput | null
	updatedAt?: ModelStringInput | null
	and?: Array<ModelMonthlyPrayerScheduleFilterInput | null> | null
	or?: Array<ModelMonthlyPrayerScheduleFilterInput | null> | null
	not?: ModelMonthlyPrayerScheduleFilterInput | null
}

export type ModelMosqueFilterInput = {
	id?: ModelIDInput | null
	name?: ModelStringInput | null
	description?: ModelStringInput | null
	images?: ModelStringInput | null
	liveVideoUrl?: ModelStringInput | null
	creatorId?: ModelIDInput | null
	createdAt?: ModelStringInput | null
	updatedAt?: ModelStringInput | null
	and?: Array<ModelMosqueFilterInput | null> | null
	or?: Array<ModelMosqueFilterInput | null> | null
	not?: ModelMosqueFilterInput | null
}

export type ModelMosqueSubscriptionFilterInput = {
	id?: ModelIDInput | null
	status?: ModelMosqueSubscriptionStatusInput | null
	startDate?: ModelStringInput | null
	endDate?: ModelStringInput | null
	stripeSubscriptionId?: ModelStringInput | null
	purchaserId?: ModelIDInput | null
	mosqueId?: ModelIDInput | null
	createdAt?: ModelStringInput | null
	updatedAt?: ModelStringInput | null
	and?: Array<ModelMosqueSubscriptionFilterInput | null> | null
	or?: Array<ModelMosqueSubscriptionFilterInput | null> | null
	not?: ModelMosqueSubscriptionFilterInput | null
}

export type ModelResourceFilterInput = {
	id?: ModelIDInput | null
	title?: ModelStringInput | null
	description?: ModelStringInput | null
	type?: ModelResourceTypeInput | null
	url?: ModelStringInput | null
	creatorId?: ModelIDInput | null
	mosqueId?: ModelIDInput | null
	createdAt?: ModelStringInput | null
	updatedAt?: ModelStringInput | null
	and?: Array<ModelResourceFilterInput | null> | null
	or?: Array<ModelResourceFilterInput | null> | null
	not?: ModelResourceFilterInput | null
}

export type ModelServiceFilterInput = {
	id?: ModelIDInput | null
	type?: ModelServiceTypeInput | null
	description?: ModelStringInput | null
	documents?: ModelStringInput | null
	creatorId?: ModelIDInput | null
	mosqueId?: ModelIDInput | null
	createdAt?: ModelStringInput | null
	updatedAt?: ModelStringInput | null
	and?: Array<ModelServiceFilterInput | null> | null
	or?: Array<ModelServiceFilterInput | null> | null
	not?: ModelServiceFilterInput | null
}

export type ModelUserFilterInput = {
	id?: ModelIDInput | null
	selfie?: ModelStringInput | null
	firstName?: ModelStringInput | null
	lastName?: ModelStringInput | null
	email?: ModelStringInput | null
	phone?: ModelStringInput | null
	type?: ModelUserTypeInput | null
	status?: ModelUserStatusInput | null
	stripeCustomerId?: ModelStringInput | null
	createdAt?: ModelStringInput | null
	updatedAt?: ModelStringInput | null
	and?: Array<ModelUserFilterInput | null> | null
	or?: Array<ModelUserFilterInput | null> | null
	not?: ModelUserFilterInput | null
}

export type ModelUserConnection = {
	__typename: "ModelUserConnection"
	items: Array<User | null>
	nextToken?: string | null
}

export type ModelVolunteerTaskFilterInput = {
	id?: ModelIDInput | null
	name?: ModelStringInput | null
	description?: ModelStringInput | null
	startDate?: ModelStringInput | null
	endDate?: ModelStringInput | null
	creatorId?: ModelIDInput | null
	mosqueId?: ModelIDInput | null
	createdAt?: ModelStringInput | null
	updatedAt?: ModelStringInput | null
	and?: Array<ModelVolunteerTaskFilterInput | null> | null
	or?: Array<ModelVolunteerTaskFilterInput | null> | null
	not?: ModelVolunteerTaskFilterInput | null
}

export type ModelCommitteeMembersFilterInput = {
	id?: ModelIDInput | null
	committeeId?: ModelIDInput | null
	userId?: ModelIDInput | null
	and?: Array<ModelCommitteeMembersFilterInput | null> | null
	or?: Array<ModelCommitteeMembersFilterInput | null> | null
	not?: ModelCommitteeMembersFilterInput | null
}

export type ModelGatheringAttendeesFilterInput = {
	id?: ModelIDInput | null
	gatheringId?: ModelIDInput | null
	userId?: ModelIDInput | null
	and?: Array<ModelGatheringAttendeesFilterInput | null> | null
	or?: Array<ModelGatheringAttendeesFilterInput | null> | null
	not?: ModelGatheringAttendeesFilterInput | null
}

export type ModelMosqueFollowersFilterInput = {
	id?: ModelIDInput | null
	mosqueId?: ModelIDInput | null
	userId?: ModelIDInput | null
	and?: Array<ModelMosqueFollowersFilterInput | null> | null
	or?: Array<ModelMosqueFollowersFilterInput | null> | null
	not?: ModelMosqueFollowersFilterInput | null
}

export type ModelVolunteerTaskUserFilterInput = {
	id?: ModelIDInput | null
	userId?: ModelIDInput | null
	volunteerTaskId?: ModelIDInput | null
	and?: Array<ModelVolunteerTaskUserFilterInput | null> | null
	or?: Array<ModelVolunteerTaskUserFilterInput | null> | null
	not?: ModelVolunteerTaskUserFilterInput | null
}

export type ModelSubscriptionAnnouncementFilterInput = {
	id?: ModelSubscriptionIDInput | null
	title?: ModelSubscriptionStringInput | null
	body?: ModelSubscriptionStringInput | null
	images?: ModelSubscriptionStringInput | null
	mosqueId?: ModelSubscriptionIDInput | null
	createdAt?: ModelSubscriptionStringInput | null
	updatedAt?: ModelSubscriptionStringInput | null
	and?: Array<ModelSubscriptionAnnouncementFilterInput | null> | null
	or?: Array<ModelSubscriptionAnnouncementFilterInput | null> | null
}

export type ModelSubscriptionIDInput = {
	ne?: string | null
	eq?: string | null
	le?: string | null
	lt?: string | null
	ge?: string | null
	gt?: string | null
	contains?: string | null
	notContains?: string | null
	between?: Array<string | null> | null
	beginsWith?: string | null
	in?: Array<string | null> | null
	notIn?: Array<string | null> | null
}

export type ModelSubscriptionStringInput = {
	ne?: string | null
	eq?: string | null
	le?: string | null
	lt?: string | null
	ge?: string | null
	gt?: string | null
	contains?: string | null
	notContains?: string | null
	between?: Array<string | null> | null
	beginsWith?: string | null
	in?: Array<string | null> | null
	notIn?: Array<string | null> | null
}

export type ModelSubscriptionBookmarkFilterInput = {
	id?: ModelSubscriptionIDInput | null
	announcementId?: ModelSubscriptionIDInput | null
	mosqueId?: ModelSubscriptionIDInput | null
	and?: Array<ModelSubscriptionBookmarkFilterInput | null> | null
	or?: Array<ModelSubscriptionBookmarkFilterInput | null> | null
}

export type ModelSubscriptionClassFilterInput = {
	id?: ModelSubscriptionIDInput | null
	title?: ModelSubscriptionStringInput | null
	description?: ModelSubscriptionStringInput | null
	startDateTime?: ModelSubscriptionStringInput | null
	endDateTime?: ModelSubscriptionStringInput | null
	recurring?: ModelSubscriptionBooleanInput | null
	daysOfWeek?: ModelSubscriptionStringInput | null
	instructorId?: ModelSubscriptionIDInput | null
	mosqueId?: ModelSubscriptionIDInput | null
	createdAt?: ModelSubscriptionStringInput | null
	updatedAt?: ModelSubscriptionStringInput | null
	and?: Array<ModelSubscriptionClassFilterInput | null> | null
	or?: Array<ModelSubscriptionClassFilterInput | null> | null
}

export type ModelSubscriptionBooleanInput = {
	ne?: boolean | null
	eq?: boolean | null
}

export type ModelSubscriptionCommentFilterInput = {
	id?: ModelSubscriptionIDInput | null
	text?: ModelSubscriptionStringInput | null
	parentCommentId?: ModelSubscriptionIDInput | null
	announcementId?: ModelSubscriptionIDInput | null
	mosqueId?: ModelSubscriptionIDInput | null
	and?: Array<ModelSubscriptionCommentFilterInput | null> | null
	or?: Array<ModelSubscriptionCommentFilterInput | null> | null
}

export type ModelSubscriptionCommitteeFilterInput = {
	id?: ModelSubscriptionIDInput | null
	title?: ModelSubscriptionStringInput | null
	description?: ModelSubscriptionStringInput | null
	mosqueId?: ModelSubscriptionIDInput | null
	createdAt?: ModelSubscriptionStringInput | null
	updatedAt?: ModelSubscriptionStringInput | null
	and?: Array<ModelSubscriptionCommitteeFilterInput | null> | null
	or?: Array<ModelSubscriptionCommitteeFilterInput | null> | null
}

export type ModelSubscriptionGatheringFilterInput = {
	id?: ModelSubscriptionIDInput | null
	title?: ModelSubscriptionStringInput | null
	description?: ModelSubscriptionStringInput | null
	type?: ModelSubscriptionStringInput | null
	startDate?: ModelSubscriptionStringInput | null
	endDate?: ModelSubscriptionStringInput | null
	mosqueId?: ModelSubscriptionIDInput | null
	createdAt?: ModelSubscriptionStringInput | null
	updatedAt?: ModelSubscriptionStringInput | null
	and?: Array<ModelSubscriptionGatheringFilterInput | null> | null
	or?: Array<ModelSubscriptionGatheringFilterInput | null> | null
}

export type ModelSubscriptionDonationFilterInput = {
	id?: ModelSubscriptionIDInput | null
	amount?: ModelSubscriptionFloatInput | null
	currency?: ModelSubscriptionStringInput | null
	isAnonymous?: ModelSubscriptionBooleanInput | null
	fundraisingCampaignId?: ModelSubscriptionIDInput | null
	createdAt?: ModelSubscriptionStringInput | null
	updatedAt?: ModelSubscriptionStringInput | null
	and?: Array<ModelSubscriptionDonationFilterInput | null> | null
	or?: Array<ModelSubscriptionDonationFilterInput | null> | null
}

export type ModelSubscriptionFloatInput = {
	ne?: number | null
	eq?: number | null
	le?: number | null
	lt?: number | null
	ge?: number | null
	gt?: number | null
	between?: Array<number | null> | null
	in?: Array<number | null> | null
	notIn?: Array<number | null> | null
}

export type ModelSubscriptionFundraisingCampaignFilterInput = {
	id?: ModelSubscriptionIDInput | null
	title?: ModelSubscriptionStringInput | null
	description?: ModelSubscriptionStringInput | null
	featureImage?: ModelSubscriptionStringInput | null
	type?: ModelSubscriptionStringInput | null
	currentAmount?: ModelSubscriptionFloatInput | null
	goal?: ModelSubscriptionFloatInput | null
	goalDate?: ModelSubscriptionStringInput | null
	currency?: ModelSubscriptionStringInput | null
	mosqueId?: ModelSubscriptionIDInput | null
	createdAt?: ModelSubscriptionStringInput | null
	updatedAt?: ModelSubscriptionStringInput | null
	and?: Array<ModelSubscriptionFundraisingCampaignFilterInput | null> | null
	or?: Array<ModelSubscriptionFundraisingCampaignFilterInput | null> | null
}

export type ModelSubscriptionLikeFilterInput = {
	id?: ModelSubscriptionIDInput | null
	announcementId?: ModelSubscriptionIDInput | null
	mosqueId?: ModelSubscriptionIDInput | null
	and?: Array<ModelSubscriptionLikeFilterInput | null> | null
	or?: Array<ModelSubscriptionLikeFilterInput | null> | null
}

export type ModelSubscriptionMonthlyPrayerScheduleFilterInput = {
	id?: ModelSubscriptionIDInput | null
	year?: ModelSubscriptionIntInput | null
	month?: ModelSubscriptionIntInput | null
	mosqueId?: ModelSubscriptionIDInput | null
	createdAt?: ModelSubscriptionStringInput | null
	updatedAt?: ModelSubscriptionStringInput | null
	and?: Array<ModelSubscriptionMonthlyPrayerScheduleFilterInput | null> | null
	or?: Array<ModelSubscriptionMonthlyPrayerScheduleFilterInput | null> | null
}

export type ModelSubscriptionIntInput = {
	ne?: number | null
	eq?: number | null
	le?: number | null
	lt?: number | null
	ge?: number | null
	gt?: number | null
	between?: Array<number | null> | null
	in?: Array<number | null> | null
	notIn?: Array<number | null> | null
}

export type ModelSubscriptionMosqueFilterInput = {
	id?: ModelSubscriptionIDInput | null
	name?: ModelSubscriptionStringInput | null
	description?: ModelSubscriptionStringInput | null
	images?: ModelSubscriptionStringInput | null
	liveVideoUrl?: ModelSubscriptionStringInput | null
	createdAt?: ModelSubscriptionStringInput | null
	updatedAt?: ModelSubscriptionStringInput | null
	and?: Array<ModelSubscriptionMosqueFilterInput | null> | null
	or?: Array<ModelSubscriptionMosqueFilterInput | null> | null
}

export type ModelSubscriptionMosqueSubscriptionFilterInput = {
	id?: ModelSubscriptionIDInput | null
	status?: ModelSubscriptionStringInput | null
	startDate?: ModelSubscriptionStringInput | null
	endDate?: ModelSubscriptionStringInput | null
	stripeSubscriptionId?: ModelSubscriptionStringInput | null
	mosqueId?: ModelSubscriptionIDInput | null
	createdAt?: ModelSubscriptionStringInput | null
	updatedAt?: ModelSubscriptionStringInput | null
	and?: Array<ModelSubscriptionMosqueSubscriptionFilterInput | null> | null
	or?: Array<ModelSubscriptionMosqueSubscriptionFilterInput | null> | null
}

export type ModelSubscriptionResourceFilterInput = {
	id?: ModelSubscriptionIDInput | null
	title?: ModelSubscriptionStringInput | null
	description?: ModelSubscriptionStringInput | null
	type?: ModelSubscriptionStringInput | null
	url?: ModelSubscriptionStringInput | null
	mosqueId?: ModelSubscriptionIDInput | null
	createdAt?: ModelSubscriptionStringInput | null
	updatedAt?: ModelSubscriptionStringInput | null
	and?: Array<ModelSubscriptionResourceFilterInput | null> | null
	or?: Array<ModelSubscriptionResourceFilterInput | null> | null
}

export type ModelSubscriptionServiceFilterInput = {
	id?: ModelSubscriptionIDInput | null
	type?: ModelSubscriptionStringInput | null
	description?: ModelSubscriptionStringInput | null
	documents?: ModelSubscriptionStringInput | null
	mosqueId?: ModelSubscriptionIDInput | null
	createdAt?: ModelSubscriptionStringInput | null
	updatedAt?: ModelSubscriptionStringInput | null
	and?: Array<ModelSubscriptionServiceFilterInput | null> | null
	or?: Array<ModelSubscriptionServiceFilterInput | null> | null
}

export type ModelSubscriptionUserFilterInput = {
	id?: ModelSubscriptionIDInput | null
	selfie?: ModelSubscriptionStringInput | null
	firstName?: ModelSubscriptionStringInput | null
	lastName?: ModelSubscriptionStringInput | null
	email?: ModelSubscriptionStringInput | null
	phone?: ModelSubscriptionStringInput | null
	type?: ModelSubscriptionStringInput | null
	status?: ModelSubscriptionStringInput | null
	stripeCustomerId?: ModelSubscriptionStringInput | null
	createdAt?: ModelSubscriptionStringInput | null
	updatedAt?: ModelSubscriptionStringInput | null
	and?: Array<ModelSubscriptionUserFilterInput | null> | null
	or?: Array<ModelSubscriptionUserFilterInput | null> | null
}

export type ModelSubscriptionVolunteerTaskFilterInput = {
	id?: ModelSubscriptionIDInput | null
	name?: ModelSubscriptionStringInput | null
	description?: ModelSubscriptionStringInput | null
	startDate?: ModelSubscriptionStringInput | null
	endDate?: ModelSubscriptionStringInput | null
	mosqueId?: ModelSubscriptionIDInput | null
	createdAt?: ModelSubscriptionStringInput | null
	updatedAt?: ModelSubscriptionStringInput | null
	and?: Array<ModelSubscriptionVolunteerTaskFilterInput | null> | null
	or?: Array<ModelSubscriptionVolunteerTaskFilterInput | null> | null
}

export type ModelSubscriptionCommitteeMembersFilterInput = {
	id?: ModelSubscriptionIDInput | null
	committeeId?: ModelSubscriptionIDInput | null
	userId?: ModelSubscriptionIDInput | null
	and?: Array<ModelSubscriptionCommitteeMembersFilterInput | null> | null
	or?: Array<ModelSubscriptionCommitteeMembersFilterInput | null> | null
}

export type ModelSubscriptionGatheringAttendeesFilterInput = {
	id?: ModelSubscriptionIDInput | null
	gatheringId?: ModelSubscriptionIDInput | null
	userId?: ModelSubscriptionIDInput | null
	and?: Array<ModelSubscriptionGatheringAttendeesFilterInput | null> | null
	or?: Array<ModelSubscriptionGatheringAttendeesFilterInput | null> | null
}

export type ModelSubscriptionMosqueFollowersFilterInput = {
	id?: ModelSubscriptionIDInput | null
	mosqueId?: ModelSubscriptionIDInput | null
	userId?: ModelSubscriptionIDInput | null
	and?: Array<ModelSubscriptionMosqueFollowersFilterInput | null> | null
	or?: Array<ModelSubscriptionMosqueFollowersFilterInput | null> | null
}

export type ModelSubscriptionVolunteerTaskUserFilterInput = {
	id?: ModelSubscriptionIDInput | null
	userId?: ModelSubscriptionIDInput | null
	volunteerTaskId?: ModelSubscriptionIDInput | null
	and?: Array<ModelSubscriptionVolunteerTaskUserFilterInput | null> | null
	or?: Array<ModelSubscriptionVolunteerTaskUserFilterInput | null> | null
}

export type CreateAnnouncementMutationVariables = {
	input: CreateAnnouncementInput
	condition?: ModelAnnouncementConditionInput | null
}

export type CreateAnnouncementMutation = {
	createAnnouncement?: {
		__typename: "Announcement"
		id: string
		title: string
		body: string
		images?: Array<string | null> | null
		bookmarks?: {
			__typename: "ModelBookmarkConnection"
			items: Array<{
				__typename: "Bookmark"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		likes?: {
			__typename: "ModelLikeConnection"
			items: Array<{
				__typename: "Like"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		comments?: {
			__typename: "ModelCommentConnection"
			items: Array<{
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type UpdateAnnouncementMutationVariables = {
	input: UpdateAnnouncementInput
	condition?: ModelAnnouncementConditionInput | null
}

export type UpdateAnnouncementMutation = {
	updateAnnouncement?: {
		__typename: "Announcement"
		id: string
		title: string
		body: string
		images?: Array<string | null> | null
		bookmarks?: {
			__typename: "ModelBookmarkConnection"
			items: Array<{
				__typename: "Bookmark"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		likes?: {
			__typename: "ModelLikeConnection"
			items: Array<{
				__typename: "Like"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		comments?: {
			__typename: "ModelCommentConnection"
			items: Array<{
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type DeleteAnnouncementMutationVariables = {
	input: DeleteAnnouncementInput
	condition?: ModelAnnouncementConditionInput | null
}

export type DeleteAnnouncementMutation = {
	deleteAnnouncement?: {
		__typename: "Announcement"
		id: string
		title: string
		body: string
		images?: Array<string | null> | null
		bookmarks?: {
			__typename: "ModelBookmarkConnection"
			items: Array<{
				__typename: "Bookmark"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		likes?: {
			__typename: "ModelLikeConnection"
			items: Array<{
				__typename: "Like"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		comments?: {
			__typename: "ModelCommentConnection"
			items: Array<{
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type CreateBookmarkMutationVariables = {
	input: CreateBookmarkInput
	condition?: ModelBookmarkConditionInput | null
}

export type CreateBookmarkMutation = {
	createBookmark?: {
		__typename: "Bookmark"
		id: string
		announcementId: string
		announcement: {
			__typename: "Announcement"
			id: string
			title: string
			body: string
			images?: Array<string | null> | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		}
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt: string
		updatedAt: string
	} | null
}

export type UpdateBookmarkMutationVariables = {
	input: UpdateBookmarkInput
	condition?: ModelBookmarkConditionInput | null
}

export type UpdateBookmarkMutation = {
	updateBookmark?: {
		__typename: "Bookmark"
		id: string
		announcementId: string
		announcement: {
			__typename: "Announcement"
			id: string
			title: string
			body: string
			images?: Array<string | null> | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		}
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt: string
		updatedAt: string
	} | null
}

export type DeleteBookmarkMutationVariables = {
	input: DeleteBookmarkInput
	condition?: ModelBookmarkConditionInput | null
}

export type DeleteBookmarkMutation = {
	deleteBookmark?: {
		__typename: "Bookmark"
		id: string
		announcementId: string
		announcement: {
			__typename: "Announcement"
			id: string
			title: string
			body: string
			images?: Array<string | null> | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		}
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt: string
		updatedAt: string
	} | null
}

export type CreateClassMutationVariables = {
	input: CreateClassInput
	condition?: ModelClassConditionInput | null
}

export type CreateClassMutation = {
	createClass?: {
		__typename: "Class"
		id: string
		title: string
		description?: string | null
		startDateTime: string
		endDateTime?: string | null
		recurring: boolean
		daysOfWeek?: Array<DayType> | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		instructorId: string
		instructor: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type UpdateClassMutationVariables = {
	input: UpdateClassInput
	condition?: ModelClassConditionInput | null
}

export type UpdateClassMutation = {
	updateClass?: {
		__typename: "Class"
		id: string
		title: string
		description?: string | null
		startDateTime: string
		endDateTime?: string | null
		recurring: boolean
		daysOfWeek?: Array<DayType> | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		instructorId: string
		instructor: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type DeleteClassMutationVariables = {
	input: DeleteClassInput
	condition?: ModelClassConditionInput | null
}

export type DeleteClassMutation = {
	deleteClass?: {
		__typename: "Class"
		id: string
		title: string
		description?: string | null
		startDateTime: string
		endDateTime?: string | null
		recurring: boolean
		daysOfWeek?: Array<DayType> | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		instructorId: string
		instructor: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type CreateCommentMutationVariables = {
	input: CreateCommentInput
	condition?: ModelCommentConditionInput | null
}

export type CreateCommentMutation = {
	createComment?: {
		__typename: "Comment"
		id: string
		text: string
		parentCommentId?: string | null
		parentComment?: {
			__typename: "Comment"
			id: string
			text: string
			parentCommentId?: string | null
			parentComment?: {
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null
			subComments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			announcementId: string
			announcement: {
				__typename: "Announcement"
				id: string
				title: string
				body: string
				images?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt: string
			updatedAt: string
		} | null
		subComments?: {
			__typename: "ModelCommentConnection"
			items: Array<{
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		announcementId: string
		announcement: {
			__typename: "Announcement"
			id: string
			title: string
			body: string
			images?: Array<string | null> | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		}
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt: string
		updatedAt: string
	} | null
}

export type UpdateCommentMutationVariables = {
	input: UpdateCommentInput
	condition?: ModelCommentConditionInput | null
}

export type UpdateCommentMutation = {
	updateComment?: {
		__typename: "Comment"
		id: string
		text: string
		parentCommentId?: string | null
		parentComment?: {
			__typename: "Comment"
			id: string
			text: string
			parentCommentId?: string | null
			parentComment?: {
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null
			subComments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			announcementId: string
			announcement: {
				__typename: "Announcement"
				id: string
				title: string
				body: string
				images?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt: string
			updatedAt: string
		} | null
		subComments?: {
			__typename: "ModelCommentConnection"
			items: Array<{
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		announcementId: string
		announcement: {
			__typename: "Announcement"
			id: string
			title: string
			body: string
			images?: Array<string | null> | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		}
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt: string
		updatedAt: string
	} | null
}

export type DeleteCommentMutationVariables = {
	input: DeleteCommentInput
	condition?: ModelCommentConditionInput | null
}

export type DeleteCommentMutation = {
	deleteComment?: {
		__typename: "Comment"
		id: string
		text: string
		parentCommentId?: string | null
		parentComment?: {
			__typename: "Comment"
			id: string
			text: string
			parentCommentId?: string | null
			parentComment?: {
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null
			subComments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			announcementId: string
			announcement: {
				__typename: "Announcement"
				id: string
				title: string
				body: string
				images?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt: string
			updatedAt: string
		} | null
		subComments?: {
			__typename: "ModelCommentConnection"
			items: Array<{
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		announcementId: string
		announcement: {
			__typename: "Announcement"
			id: string
			title: string
			body: string
			images?: Array<string | null> | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		}
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt: string
		updatedAt: string
	} | null
}

export type CreateCommitteeMutationVariables = {
	input: CreateCommitteeInput
	condition?: ModelCommitteeConditionInput | null
}

export type CreateCommitteeMutation = {
	createCommittee?: {
		__typename: "Committee"
		id: string
		title: string
		description?: string | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		members?: {
			__typename: "ModelCommitteeMembersConnection"
			items: Array<{
				__typename: "CommitteeMembers"
				id: string
				committeeId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type UpdateCommitteeMutationVariables = {
	input: UpdateCommitteeInput
	condition?: ModelCommitteeConditionInput | null
}

export type UpdateCommitteeMutation = {
	updateCommittee?: {
		__typename: "Committee"
		id: string
		title: string
		description?: string | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		members?: {
			__typename: "ModelCommitteeMembersConnection"
			items: Array<{
				__typename: "CommitteeMembers"
				id: string
				committeeId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type DeleteCommitteeMutationVariables = {
	input: DeleteCommitteeInput
	condition?: ModelCommitteeConditionInput | null
}

export type DeleteCommitteeMutation = {
	deleteCommittee?: {
		__typename: "Committee"
		id: string
		title: string
		description?: string | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		members?: {
			__typename: "ModelCommitteeMembersConnection"
			items: Array<{
				__typename: "CommitteeMembers"
				id: string
				committeeId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type CreateGatheringMutationVariables = {
	input: CreateGatheringInput
	condition?: ModelGatheringConditionInput | null
}

export type CreateGatheringMutation = {
	createGathering?: {
		__typename: "Gathering"
		id: string
		title: string
		description?: string | null
		type: GatheringType
		startDate: string
		endDate?: string | null
		address: {
			__typename: "Address"
			addressLine1: string
			addressLine2?: string | null
			addressLine3?: string | null
			city: string
			province: string
			postalCode: string
			country: string
			latitude: number
			longitude: number
		}
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		attendees?: {
			__typename: "ModelGatheringAttendeesConnection"
			items: Array<{
				__typename: "GatheringAttendees"
				id: string
				gatheringId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type UpdateGatheringMutationVariables = {
	input: UpdateGatheringInput
	condition?: ModelGatheringConditionInput | null
}

export type UpdateGatheringMutation = {
	updateGathering?: {
		__typename: "Gathering"
		id: string
		title: string
		description?: string | null
		type: GatheringType
		startDate: string
		endDate?: string | null
		address: {
			__typename: "Address"
			addressLine1: string
			addressLine2?: string | null
			addressLine3?: string | null
			city: string
			province: string
			postalCode: string
			country: string
			latitude: number
			longitude: number
		}
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		attendees?: {
			__typename: "ModelGatheringAttendeesConnection"
			items: Array<{
				__typename: "GatheringAttendees"
				id: string
				gatheringId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type DeleteGatheringMutationVariables = {
	input: DeleteGatheringInput
	condition?: ModelGatheringConditionInput | null
}

export type DeleteGatheringMutation = {
	deleteGathering?: {
		__typename: "Gathering"
		id: string
		title: string
		description?: string | null
		type: GatheringType
		startDate: string
		endDate?: string | null
		address: {
			__typename: "Address"
			addressLine1: string
			addressLine2?: string | null
			addressLine3?: string | null
			city: string
			province: string
			postalCode: string
			country: string
			latitude: number
			longitude: number
		}
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		attendees?: {
			__typename: "ModelGatheringAttendeesConnection"
			items: Array<{
				__typename: "GatheringAttendees"
				id: string
				gatheringId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type CreateDonationMutationVariables = {
	input: CreateDonationInput
	condition?: ModelDonationConditionInput | null
}

export type CreateDonationMutation = {
	createDonation?: {
		__typename: "Donation"
		id: string
		amount: number
		currency: string
		isAnonymous: boolean
		donorId: string
		donor: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		fundraisingCampaignId: string
		fundraisingCampaign?: {
			__typename: "FundraisingCampaign"
			id: string
			title: string
			description?: string | null
			featureImage?: string | null
			type: FundraisingCampaignType
			currentAmount: number
			goal: number
			goalDate: string
			currency: string
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type UpdateDonationMutationVariables = {
	input: UpdateDonationInput
	condition?: ModelDonationConditionInput | null
}

export type UpdateDonationMutation = {
	updateDonation?: {
		__typename: "Donation"
		id: string
		amount: number
		currency: string
		isAnonymous: boolean
		donorId: string
		donor: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		fundraisingCampaignId: string
		fundraisingCampaign?: {
			__typename: "FundraisingCampaign"
			id: string
			title: string
			description?: string | null
			featureImage?: string | null
			type: FundraisingCampaignType
			currentAmount: number
			goal: number
			goalDate: string
			currency: string
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type DeleteDonationMutationVariables = {
	input: DeleteDonationInput
	condition?: ModelDonationConditionInput | null
}

export type DeleteDonationMutation = {
	deleteDonation?: {
		__typename: "Donation"
		id: string
		amount: number
		currency: string
		isAnonymous: boolean
		donorId: string
		donor: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		fundraisingCampaignId: string
		fundraisingCampaign?: {
			__typename: "FundraisingCampaign"
			id: string
			title: string
			description?: string | null
			featureImage?: string | null
			type: FundraisingCampaignType
			currentAmount: number
			goal: number
			goalDate: string
			currency: string
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type CreateFundraisingCampaignMutationVariables = {
	input: CreateFundraisingCampaignInput
	condition?: ModelFundraisingCampaignConditionInput | null
}

export type CreateFundraisingCampaignMutation = {
	createFundraisingCampaign?: {
		__typename: "FundraisingCampaign"
		id: string
		title: string
		description?: string | null
		featureImage?: string | null
		type: FundraisingCampaignType
		currentAmount: number
		goal: number
		goalDate: string
		currency: string
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		donations?: {
			__typename: "ModelDonationConnection"
			items: Array<{
				__typename: "Donation"
				id: string
				amount: number
				currency: string
				isAnonymous: boolean
				donorId: string
				fundraisingCampaignId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type UpdateFundraisingCampaignMutationVariables = {
	input: UpdateFundraisingCampaignInput
	condition?: ModelFundraisingCampaignConditionInput | null
}

export type UpdateFundraisingCampaignMutation = {
	updateFundraisingCampaign?: {
		__typename: "FundraisingCampaign"
		id: string
		title: string
		description?: string | null
		featureImage?: string | null
		type: FundraisingCampaignType
		currentAmount: number
		goal: number
		goalDate: string
		currency: string
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		donations?: {
			__typename: "ModelDonationConnection"
			items: Array<{
				__typename: "Donation"
				id: string
				amount: number
				currency: string
				isAnonymous: boolean
				donorId: string
				fundraisingCampaignId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type DeleteFundraisingCampaignMutationVariables = {
	input: DeleteFundraisingCampaignInput
	condition?: ModelFundraisingCampaignConditionInput | null
}

export type DeleteFundraisingCampaignMutation = {
	deleteFundraisingCampaign?: {
		__typename: "FundraisingCampaign"
		id: string
		title: string
		description?: string | null
		featureImage?: string | null
		type: FundraisingCampaignType
		currentAmount: number
		goal: number
		goalDate: string
		currency: string
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		donations?: {
			__typename: "ModelDonationConnection"
			items: Array<{
				__typename: "Donation"
				id: string
				amount: number
				currency: string
				isAnonymous: boolean
				donorId: string
				fundraisingCampaignId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type CreateLikeMutationVariables = {
	input: CreateLikeInput
	condition?: ModelLikeConditionInput | null
}

export type CreateLikeMutation = {
	createLike?: {
		__typename: "Like"
		id: string
		announcementId: string
		announcement: {
			__typename: "Announcement"
			id: string
			title: string
			body: string
			images?: Array<string | null> | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		}
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt: string
		updatedAt: string
	} | null
}

export type UpdateLikeMutationVariables = {
	input: UpdateLikeInput
	condition?: ModelLikeConditionInput | null
}

export type UpdateLikeMutation = {
	updateLike?: {
		__typename: "Like"
		id: string
		announcementId: string
		announcement: {
			__typename: "Announcement"
			id: string
			title: string
			body: string
			images?: Array<string | null> | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		}
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt: string
		updatedAt: string
	} | null
}

export type DeleteLikeMutationVariables = {
	input: DeleteLikeInput
	condition?: ModelLikeConditionInput | null
}

export type DeleteLikeMutation = {
	deleteLike?: {
		__typename: "Like"
		id: string
		announcementId: string
		announcement: {
			__typename: "Announcement"
			id: string
			title: string
			body: string
			images?: Array<string | null> | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		}
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt: string
		updatedAt: string
	} | null
}

export type CreateMonthlyPrayerScheduleMutationVariables = {
	input: CreateMonthlyPrayerScheduleInput
	condition?: ModelMonthlyPrayerScheduleConditionInput | null
}

export type CreateMonthlyPrayerScheduleMutation = {
	createMonthlyPrayerSchedule?: {
		__typename: "MonthlyPrayerSchedule"
		id: string
		year: number
		month: number
		prayerTimes: Array<{
			__typename: "PrayerTime"
			type: PrayerType
			athan: string
			iqamah: string
		}>
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type UpdateMonthlyPrayerScheduleMutationVariables = {
	input: UpdateMonthlyPrayerScheduleInput
	condition?: ModelMonthlyPrayerScheduleConditionInput | null
}

export type UpdateMonthlyPrayerScheduleMutation = {
	updateMonthlyPrayerSchedule?: {
		__typename: "MonthlyPrayerSchedule"
		id: string
		year: number
		month: number
		prayerTimes: Array<{
			__typename: "PrayerTime"
			type: PrayerType
			athan: string
			iqamah: string
		}>
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type DeleteMonthlyPrayerScheduleMutationVariables = {
	input: DeleteMonthlyPrayerScheduleInput
	condition?: ModelMonthlyPrayerScheduleConditionInput | null
}

export type DeleteMonthlyPrayerScheduleMutation = {
	deleteMonthlyPrayerSchedule?: {
		__typename: "MonthlyPrayerSchedule"
		id: string
		year: number
		month: number
		prayerTimes: Array<{
			__typename: "PrayerTime"
			type: PrayerType
			athan: string
			iqamah: string
		}>
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type CreateMosqueMutationVariables = {
	input: CreateMosqueInput
	condition?: ModelMosqueConditionInput | null
}

export type CreateMosqueMutation = {
	createMosque?: {
		__typename: "Mosque"
		id: string
		name: string
		description: string
		images: Array<string | null>
		address: {
			__typename: "Address"
			addressLine1: string
			addressLine2?: string | null
			addressLine3?: string | null
			city: string
			province: string
			postalCode: string
			country: string
			latitude: number
			longitude: number
		}
		hours?: {
			__typename: "Hours"
			monday?: {
				__typename: "Day"
				type: DayType
			} | null
			tuesday?: {
				__typename: "Day"
				type: DayType
			} | null
			wednesday?: {
				__typename: "Day"
				type: DayType
			} | null
			thursday?: {
				__typename: "Day"
				type: DayType
			} | null
			friday?: {
				__typename: "Day"
				type: DayType
			} | null
			saturday?: {
				__typename: "Day"
				type: DayType
			} | null
			sunday?: {
				__typename: "Day"
				type: DayType
			} | null
		} | null
		contactInfo: {
			__typename: "ContactInfo"
			phone?: string | null
			email?: string | null
			website?: string | null
			socialMedia?: {
				__typename: "SocialMedia"
				facebook?: string | null
				instagram?: string | null
				twitter?: string | null
				youtube?: string | null
			} | null
		}
		liveVideoUrl?: string | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		followers?: {
			__typename: "ModelMosqueFollowersConnection"
			items: Array<{
				__typename: "MosqueFollowers"
				id: string
				mosqueId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		announcements?: {
			__typename: "ModelAnnouncementConnection"
			items: Array<{
				__typename: "Announcement"
				id: string
				title: string
				body: string
				images?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		classes?: {
			__typename: "ModelClassConnection"
			items: Array<{
				__typename: "Class"
				id: string
				title: string
				description?: string | null
				startDateTime: string
				endDateTime?: string | null
				recurring: boolean
				daysOfWeek?: Array<DayType> | null
				creatorId: string
				instructorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		committees?: {
			__typename: "ModelCommitteeConnection"
			items: Array<{
				__typename: "Committee"
				id: string
				title: string
				description?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		gatherings?: {
			__typename: "ModelGatheringConnection"
			items: Array<{
				__typename: "Gathering"
				id: string
				title: string
				description?: string | null
				type: GatheringType
				startDate: string
				endDate?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		fundraisingCampaigns?: {
			__typename: "ModelFundraisingCampaignConnection"
			items: Array<{
				__typename: "FundraisingCampaign"
				id: string
				title: string
				description?: string | null
				featureImage?: string | null
				type: FundraisingCampaignType
				currentAmount: number
				goal: number
				goalDate: string
				currency: string
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		monthlyPrayerSchedules?: {
			__typename: "ModelMonthlyPrayerScheduleConnection"
			items: Array<{
				__typename: "MonthlyPrayerSchedule"
				id: string
				year: number
				month: number
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		resources?: {
			__typename: "ModelResourceConnection"
			items: Array<{
				__typename: "Resource"
				id: string
				title: string
				description?: string | null
				type: ResourceType
				url: string
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		services?: {
			__typename: "ModelServiceConnection"
			items: Array<{
				__typename: "Service"
				id: string
				type: ServiceType
				description?: string | null
				documents?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		subscriptions?: {
			__typename: "ModelMosqueSubscriptionConnection"
			items: Array<{
				__typename: "MosqueSubscription"
				id: string
				status: MosqueSubscriptionStatus
				startDate: string
				endDate?: string | null
				stripeSubscriptionId: string
				purchaserId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		volunteerTasks?: {
			__typename: "ModelVolunteerTaskConnection"
			items: Array<{
				__typename: "VolunteerTask"
				id: string
				name: string
				description?: string | null
				startDate: string
				endDate?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		bookmarks?: {
			__typename: "ModelBookmarkConnection"
			items: Array<{
				__typename: "Bookmark"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		likes?: {
			__typename: "ModelLikeConnection"
			items: Array<{
				__typename: "Like"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		comments?: {
			__typename: "ModelCommentConnection"
			items: Array<{
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type UpdateMosqueMutationVariables = {
	input: UpdateMosqueInput
	condition?: ModelMosqueConditionInput | null
}

export type UpdateMosqueMutation = {
	updateMosque?: {
		__typename: "Mosque"
		id: string
		name: string
		description: string
		images: Array<string | null>
		address: {
			__typename: "Address"
			addressLine1: string
			addressLine2?: string | null
			addressLine3?: string | null
			city: string
			province: string
			postalCode: string
			country: string
			latitude: number
			longitude: number
		}
		hours?: {
			__typename: "Hours"
			monday?: {
				__typename: "Day"
				type: DayType
			} | null
			tuesday?: {
				__typename: "Day"
				type: DayType
			} | null
			wednesday?: {
				__typename: "Day"
				type: DayType
			} | null
			thursday?: {
				__typename: "Day"
				type: DayType
			} | null
			friday?: {
				__typename: "Day"
				type: DayType
			} | null
			saturday?: {
				__typename: "Day"
				type: DayType
			} | null
			sunday?: {
				__typename: "Day"
				type: DayType
			} | null
		} | null
		contactInfo: {
			__typename: "ContactInfo"
			phone?: string | null
			email?: string | null
			website?: string | null
			socialMedia?: {
				__typename: "SocialMedia"
				facebook?: string | null
				instagram?: string | null
				twitter?: string | null
				youtube?: string | null
			} | null
		}
		liveVideoUrl?: string | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		followers?: {
			__typename: "ModelMosqueFollowersConnection"
			items: Array<{
				__typename: "MosqueFollowers"
				id: string
				mosqueId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		announcements?: {
			__typename: "ModelAnnouncementConnection"
			items: Array<{
				__typename: "Announcement"
				id: string
				title: string
				body: string
				images?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		classes?: {
			__typename: "ModelClassConnection"
			items: Array<{
				__typename: "Class"
				id: string
				title: string
				description?: string | null
				startDateTime: string
				endDateTime?: string | null
				recurring: boolean
				daysOfWeek?: Array<DayType> | null
				creatorId: string
				instructorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		committees?: {
			__typename: "ModelCommitteeConnection"
			items: Array<{
				__typename: "Committee"
				id: string
				title: string
				description?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		gatherings?: {
			__typename: "ModelGatheringConnection"
			items: Array<{
				__typename: "Gathering"
				id: string
				title: string
				description?: string | null
				type: GatheringType
				startDate: string
				endDate?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		fundraisingCampaigns?: {
			__typename: "ModelFundraisingCampaignConnection"
			items: Array<{
				__typename: "FundraisingCampaign"
				id: string
				title: string
				description?: string | null
				featureImage?: string | null
				type: FundraisingCampaignType
				currentAmount: number
				goal: number
				goalDate: string
				currency: string
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		monthlyPrayerSchedules?: {
			__typename: "ModelMonthlyPrayerScheduleConnection"
			items: Array<{
				__typename: "MonthlyPrayerSchedule"
				id: string
				year: number
				month: number
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		resources?: {
			__typename: "ModelResourceConnection"
			items: Array<{
				__typename: "Resource"
				id: string
				title: string
				description?: string | null
				type: ResourceType
				url: string
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		services?: {
			__typename: "ModelServiceConnection"
			items: Array<{
				__typename: "Service"
				id: string
				type: ServiceType
				description?: string | null
				documents?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		subscriptions?: {
			__typename: "ModelMosqueSubscriptionConnection"
			items: Array<{
				__typename: "MosqueSubscription"
				id: string
				status: MosqueSubscriptionStatus
				startDate: string
				endDate?: string | null
				stripeSubscriptionId: string
				purchaserId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		volunteerTasks?: {
			__typename: "ModelVolunteerTaskConnection"
			items: Array<{
				__typename: "VolunteerTask"
				id: string
				name: string
				description?: string | null
				startDate: string
				endDate?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		bookmarks?: {
			__typename: "ModelBookmarkConnection"
			items: Array<{
				__typename: "Bookmark"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		likes?: {
			__typename: "ModelLikeConnection"
			items: Array<{
				__typename: "Like"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		comments?: {
			__typename: "ModelCommentConnection"
			items: Array<{
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type DeleteMosqueMutationVariables = {
	input: DeleteMosqueInput
	condition?: ModelMosqueConditionInput | null
}

export type DeleteMosqueMutation = {
	deleteMosque?: {
		__typename: "Mosque"
		id: string
		name: string
		description: string
		images: Array<string | null>
		address: {
			__typename: "Address"
			addressLine1: string
			addressLine2?: string | null
			addressLine3?: string | null
			city: string
			province: string
			postalCode: string
			country: string
			latitude: number
			longitude: number
		}
		hours?: {
			__typename: "Hours"
			monday?: {
				__typename: "Day"
				type: DayType
			} | null
			tuesday?: {
				__typename: "Day"
				type: DayType
			} | null
			wednesday?: {
				__typename: "Day"
				type: DayType
			} | null
			thursday?: {
				__typename: "Day"
				type: DayType
			} | null
			friday?: {
				__typename: "Day"
				type: DayType
			} | null
			saturday?: {
				__typename: "Day"
				type: DayType
			} | null
			sunday?: {
				__typename: "Day"
				type: DayType
			} | null
		} | null
		contactInfo: {
			__typename: "ContactInfo"
			phone?: string | null
			email?: string | null
			website?: string | null
			socialMedia?: {
				__typename: "SocialMedia"
				facebook?: string | null
				instagram?: string | null
				twitter?: string | null
				youtube?: string | null
			} | null
		}
		liveVideoUrl?: string | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		followers?: {
			__typename: "ModelMosqueFollowersConnection"
			items: Array<{
				__typename: "MosqueFollowers"
				id: string
				mosqueId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		announcements?: {
			__typename: "ModelAnnouncementConnection"
			items: Array<{
				__typename: "Announcement"
				id: string
				title: string
				body: string
				images?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		classes?: {
			__typename: "ModelClassConnection"
			items: Array<{
				__typename: "Class"
				id: string
				title: string
				description?: string | null
				startDateTime: string
				endDateTime?: string | null
				recurring: boolean
				daysOfWeek?: Array<DayType> | null
				creatorId: string
				instructorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		committees?: {
			__typename: "ModelCommitteeConnection"
			items: Array<{
				__typename: "Committee"
				id: string
				title: string
				description?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		gatherings?: {
			__typename: "ModelGatheringConnection"
			items: Array<{
				__typename: "Gathering"
				id: string
				title: string
				description?: string | null
				type: GatheringType
				startDate: string
				endDate?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		fundraisingCampaigns?: {
			__typename: "ModelFundraisingCampaignConnection"
			items: Array<{
				__typename: "FundraisingCampaign"
				id: string
				title: string
				description?: string | null
				featureImage?: string | null
				type: FundraisingCampaignType
				currentAmount: number
				goal: number
				goalDate: string
				currency: string
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		monthlyPrayerSchedules?: {
			__typename: "ModelMonthlyPrayerScheduleConnection"
			items: Array<{
				__typename: "MonthlyPrayerSchedule"
				id: string
				year: number
				month: number
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		resources?: {
			__typename: "ModelResourceConnection"
			items: Array<{
				__typename: "Resource"
				id: string
				title: string
				description?: string | null
				type: ResourceType
				url: string
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		services?: {
			__typename: "ModelServiceConnection"
			items: Array<{
				__typename: "Service"
				id: string
				type: ServiceType
				description?: string | null
				documents?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		subscriptions?: {
			__typename: "ModelMosqueSubscriptionConnection"
			items: Array<{
				__typename: "MosqueSubscription"
				id: string
				status: MosqueSubscriptionStatus
				startDate: string
				endDate?: string | null
				stripeSubscriptionId: string
				purchaserId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		volunteerTasks?: {
			__typename: "ModelVolunteerTaskConnection"
			items: Array<{
				__typename: "VolunteerTask"
				id: string
				name: string
				description?: string | null
				startDate: string
				endDate?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		bookmarks?: {
			__typename: "ModelBookmarkConnection"
			items: Array<{
				__typename: "Bookmark"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		likes?: {
			__typename: "ModelLikeConnection"
			items: Array<{
				__typename: "Like"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		comments?: {
			__typename: "ModelCommentConnection"
			items: Array<{
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type CreateMosqueSubscriptionMutationVariables = {
	input: CreateMosqueSubscriptionInput
	condition?: ModelMosqueSubscriptionConditionInput | null
}

export type CreateMosqueSubscriptionMutation = {
	createMosqueSubscription?: {
		__typename: "MosqueSubscription"
		id: string
		status: MosqueSubscriptionStatus
		startDate: string
		endDate?: string | null
		stripeSubscriptionId: string
		purchaserId: string
		purchaser: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type UpdateMosqueSubscriptionMutationVariables = {
	input: UpdateMosqueSubscriptionInput
	condition?: ModelMosqueSubscriptionConditionInput | null
}

export type UpdateMosqueSubscriptionMutation = {
	updateMosqueSubscription?: {
		__typename: "MosqueSubscription"
		id: string
		status: MosqueSubscriptionStatus
		startDate: string
		endDate?: string | null
		stripeSubscriptionId: string
		purchaserId: string
		purchaser: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type DeleteMosqueSubscriptionMutationVariables = {
	input: DeleteMosqueSubscriptionInput
	condition?: ModelMosqueSubscriptionConditionInput | null
}

export type DeleteMosqueSubscriptionMutation = {
	deleteMosqueSubscription?: {
		__typename: "MosqueSubscription"
		id: string
		status: MosqueSubscriptionStatus
		startDate: string
		endDate?: string | null
		stripeSubscriptionId: string
		purchaserId: string
		purchaser: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type CreateResourceMutationVariables = {
	input: CreateResourceInput
	condition?: ModelResourceConditionInput | null
}

export type CreateResourceMutation = {
	createResource?: {
		__typename: "Resource"
		id: string
		title: string
		description?: string | null
		type: ResourceType
		url: string
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type UpdateResourceMutationVariables = {
	input: UpdateResourceInput
	condition?: ModelResourceConditionInput | null
}

export type UpdateResourceMutation = {
	updateResource?: {
		__typename: "Resource"
		id: string
		title: string
		description?: string | null
		type: ResourceType
		url: string
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type DeleteResourceMutationVariables = {
	input: DeleteResourceInput
	condition?: ModelResourceConditionInput | null
}

export type DeleteResourceMutation = {
	deleteResource?: {
		__typename: "Resource"
		id: string
		title: string
		description?: string | null
		type: ResourceType
		url: string
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type CreateServiceMutationVariables = {
	input: CreateServiceInput
	condition?: ModelServiceConditionInput | null
}

export type CreateServiceMutation = {
	createService?: {
		__typename: "Service"
		id: string
		type: ServiceType
		description?: string | null
		documents?: Array<string | null> | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type UpdateServiceMutationVariables = {
	input: UpdateServiceInput
	condition?: ModelServiceConditionInput | null
}

export type UpdateServiceMutation = {
	updateService?: {
		__typename: "Service"
		id: string
		type: ServiceType
		description?: string | null
		documents?: Array<string | null> | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type DeleteServiceMutationVariables = {
	input: DeleteServiceInput
	condition?: ModelServiceConditionInput | null
}

export type DeleteServiceMutation = {
	deleteService?: {
		__typename: "Service"
		id: string
		type: ServiceType
		description?: string | null
		documents?: Array<string | null> | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type CreateUserMutationVariables = {
	input: CreateUserInput
	condition?: ModelUserConditionInput | null
}

export type CreateUserMutation = {
	createUser?: {
		__typename: "User"
		id: string
		selfie?: string | null
		firstName: string
		lastName: string
		email: string
		phone?: string | null
		type: UserType
		status: UserStatus
		stripeCustomerId?: string | null
		createdAnnouncements?: {
			__typename: "ModelAnnouncementConnection"
			items: Array<{
				__typename: "Announcement"
				id: string
				title: string
				body: string
				images?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdClasses?: {
			__typename: "ModelClassConnection"
			items: Array<{
				__typename: "Class"
				id: string
				title: string
				description?: string | null
				startDateTime: string
				endDateTime?: string | null
				recurring: boolean
				daysOfWeek?: Array<DayType> | null
				creatorId: string
				instructorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdCommittees?: {
			__typename: "ModelCommitteeConnection"
			items: Array<{
				__typename: "Committee"
				id: string
				title: string
				description?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdGatherings?: {
			__typename: "ModelGatheringConnection"
			items: Array<{
				__typename: "Gathering"
				id: string
				title: string
				description?: string | null
				type: GatheringType
				startDate: string
				endDate?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdFundraisingCampaigns?: {
			__typename: "ModelFundraisingCampaignConnection"
			items: Array<{
				__typename: "FundraisingCampaign"
				id: string
				title: string
				description?: string | null
				featureImage?: string | null
				type: FundraisingCampaignType
				currentAmount: number
				goal: number
				goalDate: string
				currency: string
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdMonthlyPrayerSchedules?: {
			__typename: "ModelMonthlyPrayerScheduleConnection"
			items: Array<{
				__typename: "MonthlyPrayerSchedule"
				id: string
				year: number
				month: number
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdMosques?: {
			__typename: "ModelMosqueConnection"
			items: Array<{
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdResources?: {
			__typename: "ModelResourceConnection"
			items: Array<{
				__typename: "Resource"
				id: string
				title: string
				description?: string | null
				type: ResourceType
				url: string
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdServices?: {
			__typename: "ModelServiceConnection"
			items: Array<{
				__typename: "Service"
				id: string
				type: ServiceType
				description?: string | null
				documents?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdVolunteerTasks?: {
			__typename: "ModelVolunteerTaskConnection"
			items: Array<{
				__typename: "VolunteerTask"
				id: string
				name: string
				description?: string | null
				startDate: string
				endDate?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		donations?: {
			__typename: "ModelDonationConnection"
			items: Array<{
				__typename: "Donation"
				id: string
				amount: number
				currency: string
				isAnonymous: boolean
				donorId: string
				fundraisingCampaignId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		committees?: {
			__typename: "ModelCommitteeMembersConnection"
			items: Array<{
				__typename: "CommitteeMembers"
				id: string
				committeeId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		gatherings?: {
			__typename: "ModelGatheringAttendeesConnection"
			items: Array<{
				__typename: "GatheringAttendees"
				id: string
				gatheringId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		instructingClasses?: {
			__typename: "ModelClassConnection"
			items: Array<{
				__typename: "Class"
				id: string
				title: string
				description?: string | null
				startDateTime: string
				endDateTime?: string | null
				recurring: boolean
				daysOfWeek?: Array<DayType> | null
				creatorId: string
				instructorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		mosques?: {
			__typename: "ModelMosqueFollowersConnection"
			items: Array<{
				__typename: "MosqueFollowers"
				id: string
				mosqueId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		purchasedSubscriptions?: {
			__typename: "ModelMosqueSubscriptionConnection"
			items: Array<{
				__typename: "MosqueSubscription"
				id: string
				status: MosqueSubscriptionStatus
				startDate: string
				endDate?: string | null
				stripeSubscriptionId: string
				purchaserId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		volunteerTasks?: {
			__typename: "ModelVolunteerTaskUserConnection"
			items: Array<{
				__typename: "VolunteerTaskUser"
				id: string
				userId: string
				volunteerTaskId: string
				createdAt: string
				updatedAt: string
				owner?: string | null
				creatorId?: string | null
			} | null>
			nextToken?: string | null
		} | null
		bookmarks?: {
			__typename: "ModelBookmarkConnection"
			items: Array<{
				__typename: "Bookmark"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		likes?: {
			__typename: "ModelLikeConnection"
			items: Array<{
				__typename: "Like"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		comments?: {
			__typename: "ModelCommentConnection"
			items: Array<{
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
		owner?: string | null
	} | null
}

export type UpdateUserMutationVariables = {
	input: UpdateUserInput
	condition?: ModelUserConditionInput | null
}

export type UpdateUserMutation = {
	updateUser?: {
		__typename: "User"
		id: string
		selfie?: string | null
		firstName: string
		lastName: string
		email: string
		phone?: string | null
		type: UserType
		status: UserStatus
		stripeCustomerId?: string | null
		createdAnnouncements?: {
			__typename: "ModelAnnouncementConnection"
			items: Array<{
				__typename: "Announcement"
				id: string
				title: string
				body: string
				images?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdClasses?: {
			__typename: "ModelClassConnection"
			items: Array<{
				__typename: "Class"
				id: string
				title: string
				description?: string | null
				startDateTime: string
				endDateTime?: string | null
				recurring: boolean
				daysOfWeek?: Array<DayType> | null
				creatorId: string
				instructorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdCommittees?: {
			__typename: "ModelCommitteeConnection"
			items: Array<{
				__typename: "Committee"
				id: string
				title: string
				description?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdGatherings?: {
			__typename: "ModelGatheringConnection"
			items: Array<{
				__typename: "Gathering"
				id: string
				title: string
				description?: string | null
				type: GatheringType
				startDate: string
				endDate?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdFundraisingCampaigns?: {
			__typename: "ModelFundraisingCampaignConnection"
			items: Array<{
				__typename: "FundraisingCampaign"
				id: string
				title: string
				description?: string | null
				featureImage?: string | null
				type: FundraisingCampaignType
				currentAmount: number
				goal: number
				goalDate: string
				currency: string
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdMonthlyPrayerSchedules?: {
			__typename: "ModelMonthlyPrayerScheduleConnection"
			items: Array<{
				__typename: "MonthlyPrayerSchedule"
				id: string
				year: number
				month: number
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdMosques?: {
			__typename: "ModelMosqueConnection"
			items: Array<{
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdResources?: {
			__typename: "ModelResourceConnection"
			items: Array<{
				__typename: "Resource"
				id: string
				title: string
				description?: string | null
				type: ResourceType
				url: string
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdServices?: {
			__typename: "ModelServiceConnection"
			items: Array<{
				__typename: "Service"
				id: string
				type: ServiceType
				description?: string | null
				documents?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdVolunteerTasks?: {
			__typename: "ModelVolunteerTaskConnection"
			items: Array<{
				__typename: "VolunteerTask"
				id: string
				name: string
				description?: string | null
				startDate: string
				endDate?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		donations?: {
			__typename: "ModelDonationConnection"
			items: Array<{
				__typename: "Donation"
				id: string
				amount: number
				currency: string
				isAnonymous: boolean
				donorId: string
				fundraisingCampaignId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		committees?: {
			__typename: "ModelCommitteeMembersConnection"
			items: Array<{
				__typename: "CommitteeMembers"
				id: string
				committeeId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		gatherings?: {
			__typename: "ModelGatheringAttendeesConnection"
			items: Array<{
				__typename: "GatheringAttendees"
				id: string
				gatheringId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		instructingClasses?: {
			__typename: "ModelClassConnection"
			items: Array<{
				__typename: "Class"
				id: string
				title: string
				description?: string | null
				startDateTime: string
				endDateTime?: string | null
				recurring: boolean
				daysOfWeek?: Array<DayType> | null
				creatorId: string
				instructorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		mosques?: {
			__typename: "ModelMosqueFollowersConnection"
			items: Array<{
				__typename: "MosqueFollowers"
				id: string
				mosqueId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		purchasedSubscriptions?: {
			__typename: "ModelMosqueSubscriptionConnection"
			items: Array<{
				__typename: "MosqueSubscription"
				id: string
				status: MosqueSubscriptionStatus
				startDate: string
				endDate?: string | null
				stripeSubscriptionId: string
				purchaserId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		volunteerTasks?: {
			__typename: "ModelVolunteerTaskUserConnection"
			items: Array<{
				__typename: "VolunteerTaskUser"
				id: string
				userId: string
				volunteerTaskId: string
				createdAt: string
				updatedAt: string
				owner?: string | null
				creatorId?: string | null
			} | null>
			nextToken?: string | null
		} | null
		bookmarks?: {
			__typename: "ModelBookmarkConnection"
			items: Array<{
				__typename: "Bookmark"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		likes?: {
			__typename: "ModelLikeConnection"
			items: Array<{
				__typename: "Like"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		comments?: {
			__typename: "ModelCommentConnection"
			items: Array<{
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
		owner?: string | null
	} | null
}

export type DeleteUserMutationVariables = {
	input: DeleteUserInput
	condition?: ModelUserConditionInput | null
}

export type DeleteUserMutation = {
	deleteUser?: {
		__typename: "User"
		id: string
		selfie?: string | null
		firstName: string
		lastName: string
		email: string
		phone?: string | null
		type: UserType
		status: UserStatus
		stripeCustomerId?: string | null
		createdAnnouncements?: {
			__typename: "ModelAnnouncementConnection"
			items: Array<{
				__typename: "Announcement"
				id: string
				title: string
				body: string
				images?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdClasses?: {
			__typename: "ModelClassConnection"
			items: Array<{
				__typename: "Class"
				id: string
				title: string
				description?: string | null
				startDateTime: string
				endDateTime?: string | null
				recurring: boolean
				daysOfWeek?: Array<DayType> | null
				creatorId: string
				instructorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdCommittees?: {
			__typename: "ModelCommitteeConnection"
			items: Array<{
				__typename: "Committee"
				id: string
				title: string
				description?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdGatherings?: {
			__typename: "ModelGatheringConnection"
			items: Array<{
				__typename: "Gathering"
				id: string
				title: string
				description?: string | null
				type: GatheringType
				startDate: string
				endDate?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdFundraisingCampaigns?: {
			__typename: "ModelFundraisingCampaignConnection"
			items: Array<{
				__typename: "FundraisingCampaign"
				id: string
				title: string
				description?: string | null
				featureImage?: string | null
				type: FundraisingCampaignType
				currentAmount: number
				goal: number
				goalDate: string
				currency: string
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdMonthlyPrayerSchedules?: {
			__typename: "ModelMonthlyPrayerScheduleConnection"
			items: Array<{
				__typename: "MonthlyPrayerSchedule"
				id: string
				year: number
				month: number
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdMosques?: {
			__typename: "ModelMosqueConnection"
			items: Array<{
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdResources?: {
			__typename: "ModelResourceConnection"
			items: Array<{
				__typename: "Resource"
				id: string
				title: string
				description?: string | null
				type: ResourceType
				url: string
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdServices?: {
			__typename: "ModelServiceConnection"
			items: Array<{
				__typename: "Service"
				id: string
				type: ServiceType
				description?: string | null
				documents?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdVolunteerTasks?: {
			__typename: "ModelVolunteerTaskConnection"
			items: Array<{
				__typename: "VolunteerTask"
				id: string
				name: string
				description?: string | null
				startDate: string
				endDate?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		donations?: {
			__typename: "ModelDonationConnection"
			items: Array<{
				__typename: "Donation"
				id: string
				amount: number
				currency: string
				isAnonymous: boolean
				donorId: string
				fundraisingCampaignId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		committees?: {
			__typename: "ModelCommitteeMembersConnection"
			items: Array<{
				__typename: "CommitteeMembers"
				id: string
				committeeId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		gatherings?: {
			__typename: "ModelGatheringAttendeesConnection"
			items: Array<{
				__typename: "GatheringAttendees"
				id: string
				gatheringId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		instructingClasses?: {
			__typename: "ModelClassConnection"
			items: Array<{
				__typename: "Class"
				id: string
				title: string
				description?: string | null
				startDateTime: string
				endDateTime?: string | null
				recurring: boolean
				daysOfWeek?: Array<DayType> | null
				creatorId: string
				instructorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		mosques?: {
			__typename: "ModelMosqueFollowersConnection"
			items: Array<{
				__typename: "MosqueFollowers"
				id: string
				mosqueId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		purchasedSubscriptions?: {
			__typename: "ModelMosqueSubscriptionConnection"
			items: Array<{
				__typename: "MosqueSubscription"
				id: string
				status: MosqueSubscriptionStatus
				startDate: string
				endDate?: string | null
				stripeSubscriptionId: string
				purchaserId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		volunteerTasks?: {
			__typename: "ModelVolunteerTaskUserConnection"
			items: Array<{
				__typename: "VolunteerTaskUser"
				id: string
				userId: string
				volunteerTaskId: string
				createdAt: string
				updatedAt: string
				owner?: string | null
				creatorId?: string | null
			} | null>
			nextToken?: string | null
		} | null
		bookmarks?: {
			__typename: "ModelBookmarkConnection"
			items: Array<{
				__typename: "Bookmark"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		likes?: {
			__typename: "ModelLikeConnection"
			items: Array<{
				__typename: "Like"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		comments?: {
			__typename: "ModelCommentConnection"
			items: Array<{
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
		owner?: string | null
	} | null
}

export type CreateVolunteerTaskMutationVariables = {
	input: CreateVolunteerTaskInput
	condition?: ModelVolunteerTaskConditionInput | null
}

export type CreateVolunteerTaskMutation = {
	createVolunteerTask?: {
		__typename: "VolunteerTask"
		id: string
		name: string
		description?: string | null
		startDate: string
		endDate?: string | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		volunteers?: {
			__typename: "ModelVolunteerTaskUserConnection"
			items: Array<{
				__typename: "VolunteerTaskUser"
				id: string
				userId: string
				volunteerTaskId: string
				createdAt: string
				updatedAt: string
				owner?: string | null
				creatorId?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type UpdateVolunteerTaskMutationVariables = {
	input: UpdateVolunteerTaskInput
	condition?: ModelVolunteerTaskConditionInput | null
}

export type UpdateVolunteerTaskMutation = {
	updateVolunteerTask?: {
		__typename: "VolunteerTask"
		id: string
		name: string
		description?: string | null
		startDate: string
		endDate?: string | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		volunteers?: {
			__typename: "ModelVolunteerTaskUserConnection"
			items: Array<{
				__typename: "VolunteerTaskUser"
				id: string
				userId: string
				volunteerTaskId: string
				createdAt: string
				updatedAt: string
				owner?: string | null
				creatorId?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type DeleteVolunteerTaskMutationVariables = {
	input: DeleteVolunteerTaskInput
	condition?: ModelVolunteerTaskConditionInput | null
}

export type DeleteVolunteerTaskMutation = {
	deleteVolunteerTask?: {
		__typename: "VolunteerTask"
		id: string
		name: string
		description?: string | null
		startDate: string
		endDate?: string | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		volunteers?: {
			__typename: "ModelVolunteerTaskUserConnection"
			items: Array<{
				__typename: "VolunteerTaskUser"
				id: string
				userId: string
				volunteerTaskId: string
				createdAt: string
				updatedAt: string
				owner?: string | null
				creatorId?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type CreateCommitteeMembersMutationVariables = {
	input: CreateCommitteeMembersInput
	condition?: ModelCommitteeMembersConditionInput | null
}

export type CreateCommitteeMembersMutation = {
	createCommitteeMembers?: {
		__typename: "CommitteeMembers"
		id: string
		committeeId: string
		userId: string
		committee: {
			__typename: "Committee"
			id: string
			title: string
			description?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			members?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		user: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		createdAt: string
		updatedAt: string
		creatorId?: string | null
		owner?: string | null
	} | null
}

export type UpdateCommitteeMembersMutationVariables = {
	input: UpdateCommitteeMembersInput
	condition?: ModelCommitteeMembersConditionInput | null
}

export type UpdateCommitteeMembersMutation = {
	updateCommitteeMembers?: {
		__typename: "CommitteeMembers"
		id: string
		committeeId: string
		userId: string
		committee: {
			__typename: "Committee"
			id: string
			title: string
			description?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			members?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		user: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		createdAt: string
		updatedAt: string
		creatorId?: string | null
		owner?: string | null
	} | null
}

export type DeleteCommitteeMembersMutationVariables = {
	input: DeleteCommitteeMembersInput
	condition?: ModelCommitteeMembersConditionInput | null
}

export type DeleteCommitteeMembersMutation = {
	deleteCommitteeMembers?: {
		__typename: "CommitteeMembers"
		id: string
		committeeId: string
		userId: string
		committee: {
			__typename: "Committee"
			id: string
			title: string
			description?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			members?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		user: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		createdAt: string
		updatedAt: string
		creatorId?: string | null
		owner?: string | null
	} | null
}

export type CreateGatheringAttendeesMutationVariables = {
	input: CreateGatheringAttendeesInput
	condition?: ModelGatheringAttendeesConditionInput | null
}

export type CreateGatheringAttendeesMutation = {
	createGatheringAttendees?: {
		__typename: "GatheringAttendees"
		id: string
		gatheringId: string
		userId: string
		gathering: {
			__typename: "Gathering"
			id: string
			title: string
			description?: string | null
			type: GatheringType
			startDate: string
			endDate?: string | null
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			attendees?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		user: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		createdAt: string
		updatedAt: string
		creatorId?: string | null
		owner?: string | null
	} | null
}

export type UpdateGatheringAttendeesMutationVariables = {
	input: UpdateGatheringAttendeesInput
	condition?: ModelGatheringAttendeesConditionInput | null
}

export type UpdateGatheringAttendeesMutation = {
	updateGatheringAttendees?: {
		__typename: "GatheringAttendees"
		id: string
		gatheringId: string
		userId: string
		gathering: {
			__typename: "Gathering"
			id: string
			title: string
			description?: string | null
			type: GatheringType
			startDate: string
			endDate?: string | null
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			attendees?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		user: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		createdAt: string
		updatedAt: string
		creatorId?: string | null
		owner?: string | null
	} | null
}

export type DeleteGatheringAttendeesMutationVariables = {
	input: DeleteGatheringAttendeesInput
	condition?: ModelGatheringAttendeesConditionInput | null
}

export type DeleteGatheringAttendeesMutation = {
	deleteGatheringAttendees?: {
		__typename: "GatheringAttendees"
		id: string
		gatheringId: string
		userId: string
		gathering: {
			__typename: "Gathering"
			id: string
			title: string
			description?: string | null
			type: GatheringType
			startDate: string
			endDate?: string | null
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			attendees?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		user: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		createdAt: string
		updatedAt: string
		creatorId?: string | null
		owner?: string | null
	} | null
}

export type CreateMosqueFollowersMutationVariables = {
	input: CreateMosqueFollowersInput
	condition?: ModelMosqueFollowersConditionInput | null
}

export type CreateMosqueFollowersMutation = {
	createMosqueFollowers?: {
		__typename: "MosqueFollowers"
		id: string
		mosqueId: string
		userId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		user: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		createdAt: string
		updatedAt: string
		creatorId?: string | null
		owner?: string | null
	} | null
}

export type UpdateMosqueFollowersMutationVariables = {
	input: UpdateMosqueFollowersInput
	condition?: ModelMosqueFollowersConditionInput | null
}

export type UpdateMosqueFollowersMutation = {
	updateMosqueFollowers?: {
		__typename: "MosqueFollowers"
		id: string
		mosqueId: string
		userId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		user: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		createdAt: string
		updatedAt: string
		creatorId?: string | null
		owner?: string | null
	} | null
}

export type DeleteMosqueFollowersMutationVariables = {
	input: DeleteMosqueFollowersInput
	condition?: ModelMosqueFollowersConditionInput | null
}

export type DeleteMosqueFollowersMutation = {
	deleteMosqueFollowers?: {
		__typename: "MosqueFollowers"
		id: string
		mosqueId: string
		userId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		user: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		createdAt: string
		updatedAt: string
		creatorId?: string | null
		owner?: string | null
	} | null
}

export type CreateVolunteerTaskUserMutationVariables = {
	input: CreateVolunteerTaskUserInput
	condition?: ModelVolunteerTaskUserConditionInput | null
}

export type CreateVolunteerTaskUserMutation = {
	createVolunteerTaskUser?: {
		__typename: "VolunteerTaskUser"
		id: string
		userId: string
		volunteerTaskId: string
		user: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		volunteerTask: {
			__typename: "VolunteerTask"
			id: string
			name: string
			description?: string | null
			startDate: string
			endDate?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			volunteers?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt: string
		updatedAt: string
		owner?: string | null
		creatorId?: string | null
	} | null
}

export type UpdateVolunteerTaskUserMutationVariables = {
	input: UpdateVolunteerTaskUserInput
	condition?: ModelVolunteerTaskUserConditionInput | null
}

export type UpdateVolunteerTaskUserMutation = {
	updateVolunteerTaskUser?: {
		__typename: "VolunteerTaskUser"
		id: string
		userId: string
		volunteerTaskId: string
		user: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		volunteerTask: {
			__typename: "VolunteerTask"
			id: string
			name: string
			description?: string | null
			startDate: string
			endDate?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			volunteers?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt: string
		updatedAt: string
		owner?: string | null
		creatorId?: string | null
	} | null
}

export type DeleteVolunteerTaskUserMutationVariables = {
	input: DeleteVolunteerTaskUserInput
	condition?: ModelVolunteerTaskUserConditionInput | null
}

export type DeleteVolunteerTaskUserMutation = {
	deleteVolunteerTaskUser?: {
		__typename: "VolunteerTaskUser"
		id: string
		userId: string
		volunteerTaskId: string
		user: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		volunteerTask: {
			__typename: "VolunteerTask"
			id: string
			name: string
			description?: string | null
			startDate: string
			endDate?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			volunteers?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt: string
		updatedAt: string
		owner?: string | null
		creatorId?: string | null
	} | null
}

export type GetAnnouncementQueryVariables = {
	id: string
}

export type GetAnnouncementQuery = {
	getAnnouncement?: {
		__typename: "Announcement"
		id: string
		title: string
		body: string
		images?: Array<string | null> | null
		bookmarks?: {
			__typename: "ModelBookmarkConnection"
			items: Array<{
				__typename: "Bookmark"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		likes?: {
			__typename: "ModelLikeConnection"
			items: Array<{
				__typename: "Like"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		comments?: {
			__typename: "ModelCommentConnection"
			items: Array<{
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type ListAnnouncementsQueryVariables = {
	filter?: ModelAnnouncementFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ListAnnouncementsQuery = {
	listAnnouncements?: {
		__typename: "ModelAnnouncementConnection"
		items: Array<{
			__typename: "Announcement"
			id: string
			title: string
			body: string
			images?: Array<string | null> | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type AnnouncementsByCreatorIdQueryVariables = {
	creatorId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelAnnouncementFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type AnnouncementsByCreatorIdQuery = {
	announcementsByCreatorId?: {
		__typename: "ModelAnnouncementConnection"
		items: Array<{
			__typename: "Announcement"
			id: string
			title: string
			body: string
			images?: Array<string | null> | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type AnnouncementsByMosqueIdQueryVariables = {
	mosqueId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelAnnouncementFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type AnnouncementsByMosqueIdQuery = {
	announcementsByMosqueId?: {
		__typename: "ModelAnnouncementConnection"
		items: Array<{
			__typename: "Announcement"
			id: string
			title: string
			body: string
			images?: Array<string | null> | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type GetBookmarkQueryVariables = {
	id: string
}

export type GetBookmarkQuery = {
	getBookmark?: {
		__typename: "Bookmark"
		id: string
		announcementId: string
		announcement: {
			__typename: "Announcement"
			id: string
			title: string
			body: string
			images?: Array<string | null> | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		}
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt: string
		updatedAt: string
	} | null
}

export type ListBookmarksQueryVariables = {
	filter?: ModelBookmarkFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ListBookmarksQuery = {
	listBookmarks?: {
		__typename: "ModelBookmarkConnection"
		items: Array<{
			__typename: "Bookmark"
			id: string
			announcementId: string
			announcement: {
				__typename: "Announcement"
				id: string
				title: string
				body: string
				images?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt: string
			updatedAt: string
		} | null>
		nextToken?: string | null
	} | null
}

export type BookmarksByAnnouncementIdQueryVariables = {
	announcementId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelBookmarkFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type BookmarksByAnnouncementIdQuery = {
	bookmarksByAnnouncementId?: {
		__typename: "ModelBookmarkConnection"
		items: Array<{
			__typename: "Bookmark"
			id: string
			announcementId: string
			announcement: {
				__typename: "Announcement"
				id: string
				title: string
				body: string
				images?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt: string
			updatedAt: string
		} | null>
		nextToken?: string | null
	} | null
}

export type BookmarksByCreatorIdQueryVariables = {
	creatorId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelBookmarkFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type BookmarksByCreatorIdQuery = {
	bookmarksByCreatorId?: {
		__typename: "ModelBookmarkConnection"
		items: Array<{
			__typename: "Bookmark"
			id: string
			announcementId: string
			announcement: {
				__typename: "Announcement"
				id: string
				title: string
				body: string
				images?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt: string
			updatedAt: string
		} | null>
		nextToken?: string | null
	} | null
}

export type BookmarksByMosqueIdQueryVariables = {
	mosqueId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelBookmarkFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type BookmarksByMosqueIdQuery = {
	bookmarksByMosqueId?: {
		__typename: "ModelBookmarkConnection"
		items: Array<{
			__typename: "Bookmark"
			id: string
			announcementId: string
			announcement: {
				__typename: "Announcement"
				id: string
				title: string
				body: string
				images?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt: string
			updatedAt: string
		} | null>
		nextToken?: string | null
	} | null
}

export type GetClassQueryVariables = {
	id: string
}

export type GetClassQuery = {
	getClass?: {
		__typename: "Class"
		id: string
		title: string
		description?: string | null
		startDateTime: string
		endDateTime?: string | null
		recurring: boolean
		daysOfWeek?: Array<DayType> | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		instructorId: string
		instructor: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type ListClassesQueryVariables = {
	filter?: ModelClassFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ListClassesQuery = {
	listClasses?: {
		__typename: "ModelClassConnection"
		items: Array<{
			__typename: "Class"
			id: string
			title: string
			description?: string | null
			startDateTime: string
			endDateTime?: string | null
			recurring: boolean
			daysOfWeek?: Array<DayType> | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			instructorId: string
			instructor: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type ClassesByCreatorIdQueryVariables = {
	creatorId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelClassFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ClassesByCreatorIdQuery = {
	classesByCreatorId?: {
		__typename: "ModelClassConnection"
		items: Array<{
			__typename: "Class"
			id: string
			title: string
			description?: string | null
			startDateTime: string
			endDateTime?: string | null
			recurring: boolean
			daysOfWeek?: Array<DayType> | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			instructorId: string
			instructor: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type ClassesByInstructorIdQueryVariables = {
	instructorId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelClassFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ClassesByInstructorIdQuery = {
	classesByInstructorId?: {
		__typename: "ModelClassConnection"
		items: Array<{
			__typename: "Class"
			id: string
			title: string
			description?: string | null
			startDateTime: string
			endDateTime?: string | null
			recurring: boolean
			daysOfWeek?: Array<DayType> | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			instructorId: string
			instructor: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type ClassesByMosqueIdQueryVariables = {
	mosqueId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelClassFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ClassesByMosqueIdQuery = {
	classesByMosqueId?: {
		__typename: "ModelClassConnection"
		items: Array<{
			__typename: "Class"
			id: string
			title: string
			description?: string | null
			startDateTime: string
			endDateTime?: string | null
			recurring: boolean
			daysOfWeek?: Array<DayType> | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			instructorId: string
			instructor: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type GetCommentQueryVariables = {
	id: string
}

export type GetCommentQuery = {
	getComment?: {
		__typename: "Comment"
		id: string
		text: string
		parentCommentId?: string | null
		parentComment?: {
			__typename: "Comment"
			id: string
			text: string
			parentCommentId?: string | null
			parentComment?: {
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null
			subComments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			announcementId: string
			announcement: {
				__typename: "Announcement"
				id: string
				title: string
				body: string
				images?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt: string
			updatedAt: string
		} | null
		subComments?: {
			__typename: "ModelCommentConnection"
			items: Array<{
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		announcementId: string
		announcement: {
			__typename: "Announcement"
			id: string
			title: string
			body: string
			images?: Array<string | null> | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		}
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt: string
		updatedAt: string
	} | null
}

export type ListCommentsQueryVariables = {
	filter?: ModelCommentFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ListCommentsQuery = {
	listComments?: {
		__typename: "ModelCommentConnection"
		items: Array<{
			__typename: "Comment"
			id: string
			text: string
			parentCommentId?: string | null
			parentComment?: {
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null
			subComments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			announcementId: string
			announcement: {
				__typename: "Announcement"
				id: string
				title: string
				body: string
				images?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt: string
			updatedAt: string
		} | null>
		nextToken?: string | null
	} | null
}

export type CommentsByParentCommentIdQueryVariables = {
	parentCommentId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelCommentFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type CommentsByParentCommentIdQuery = {
	commentsByParentCommentId?: {
		__typename: "ModelCommentConnection"
		items: Array<{
			__typename: "Comment"
			id: string
			text: string
			parentCommentId?: string | null
			parentComment?: {
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null
			subComments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			announcementId: string
			announcement: {
				__typename: "Announcement"
				id: string
				title: string
				body: string
				images?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt: string
			updatedAt: string
		} | null>
		nextToken?: string | null
	} | null
}

export type CommentsByAnnouncementIdQueryVariables = {
	announcementId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelCommentFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type CommentsByAnnouncementIdQuery = {
	commentsByAnnouncementId?: {
		__typename: "ModelCommentConnection"
		items: Array<{
			__typename: "Comment"
			id: string
			text: string
			parentCommentId?: string | null
			parentComment?: {
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null
			subComments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			announcementId: string
			announcement: {
				__typename: "Announcement"
				id: string
				title: string
				body: string
				images?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt: string
			updatedAt: string
		} | null>
		nextToken?: string | null
	} | null
}

export type CommentsByCreatorIdQueryVariables = {
	creatorId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelCommentFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type CommentsByCreatorIdQuery = {
	commentsByCreatorId?: {
		__typename: "ModelCommentConnection"
		items: Array<{
			__typename: "Comment"
			id: string
			text: string
			parentCommentId?: string | null
			parentComment?: {
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null
			subComments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			announcementId: string
			announcement: {
				__typename: "Announcement"
				id: string
				title: string
				body: string
				images?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt: string
			updatedAt: string
		} | null>
		nextToken?: string | null
	} | null
}

export type CommentsByMosqueIdQueryVariables = {
	mosqueId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelCommentFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type CommentsByMosqueIdQuery = {
	commentsByMosqueId?: {
		__typename: "ModelCommentConnection"
		items: Array<{
			__typename: "Comment"
			id: string
			text: string
			parentCommentId?: string | null
			parentComment?: {
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null
			subComments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			announcementId: string
			announcement: {
				__typename: "Announcement"
				id: string
				title: string
				body: string
				images?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt: string
			updatedAt: string
		} | null>
		nextToken?: string | null
	} | null
}

export type GetCommitteeQueryVariables = {
	id: string
}

export type GetCommitteeQuery = {
	getCommittee?: {
		__typename: "Committee"
		id: string
		title: string
		description?: string | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		members?: {
			__typename: "ModelCommitteeMembersConnection"
			items: Array<{
				__typename: "CommitteeMembers"
				id: string
				committeeId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type ListCommitteesQueryVariables = {
	filter?: ModelCommitteeFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ListCommitteesQuery = {
	listCommittees?: {
		__typename: "ModelCommitteeConnection"
		items: Array<{
			__typename: "Committee"
			id: string
			title: string
			description?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			members?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type CommitteesByCreatorIdQueryVariables = {
	creatorId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelCommitteeFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type CommitteesByCreatorIdQuery = {
	committeesByCreatorId?: {
		__typename: "ModelCommitteeConnection"
		items: Array<{
			__typename: "Committee"
			id: string
			title: string
			description?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			members?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type CommitteesByMosqueIdQueryVariables = {
	mosqueId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelCommitteeFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type CommitteesByMosqueIdQuery = {
	committeesByMosqueId?: {
		__typename: "ModelCommitteeConnection"
		items: Array<{
			__typename: "Committee"
			id: string
			title: string
			description?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			members?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type GetGatheringQueryVariables = {
	id: string
}

export type GetGatheringQuery = {
	getGathering?: {
		__typename: "Gathering"
		id: string
		title: string
		description?: string | null
		type: GatheringType
		startDate: string
		endDate?: string | null
		address: {
			__typename: "Address"
			addressLine1: string
			addressLine2?: string | null
			addressLine3?: string | null
			city: string
			province: string
			postalCode: string
			country: string
			latitude: number
			longitude: number
		}
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		attendees?: {
			__typename: "ModelGatheringAttendeesConnection"
			items: Array<{
				__typename: "GatheringAttendees"
				id: string
				gatheringId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type ListGatheringsQueryVariables = {
	filter?: ModelGatheringFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ListGatheringsQuery = {
	listGatherings?: {
		__typename: "ModelGatheringConnection"
		items: Array<{
			__typename: "Gathering"
			id: string
			title: string
			description?: string | null
			type: GatheringType
			startDate: string
			endDate?: string | null
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			attendees?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type GatheringsByCreatorIdQueryVariables = {
	creatorId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelGatheringFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type GatheringsByCreatorIdQuery = {
	gatheringsByCreatorId?: {
		__typename: "ModelGatheringConnection"
		items: Array<{
			__typename: "Gathering"
			id: string
			title: string
			description?: string | null
			type: GatheringType
			startDate: string
			endDate?: string | null
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			attendees?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type GatheringsByMosqueIdQueryVariables = {
	mosqueId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelGatheringFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type GatheringsByMosqueIdQuery = {
	gatheringsByMosqueId?: {
		__typename: "ModelGatheringConnection"
		items: Array<{
			__typename: "Gathering"
			id: string
			title: string
			description?: string | null
			type: GatheringType
			startDate: string
			endDate?: string | null
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			attendees?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type GetDonationQueryVariables = {
	id: string
}

export type GetDonationQuery = {
	getDonation?: {
		__typename: "Donation"
		id: string
		amount: number
		currency: string
		isAnonymous: boolean
		donorId: string
		donor: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		fundraisingCampaignId: string
		fundraisingCampaign?: {
			__typename: "FundraisingCampaign"
			id: string
			title: string
			description?: string | null
			featureImage?: string | null
			type: FundraisingCampaignType
			currentAmount: number
			goal: number
			goalDate: string
			currency: string
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type ListDonationsQueryVariables = {
	filter?: ModelDonationFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ListDonationsQuery = {
	listDonations?: {
		__typename: "ModelDonationConnection"
		items: Array<{
			__typename: "Donation"
			id: string
			amount: number
			currency: string
			isAnonymous: boolean
			donorId: string
			donor: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			fundraisingCampaignId: string
			fundraisingCampaign?: {
				__typename: "FundraisingCampaign"
				id: string
				title: string
				description?: string | null
				featureImage?: string | null
				type: FundraisingCampaignType
				currentAmount: number
				goal: number
				goalDate: string
				currency: string
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type DonationsByDonorIdQueryVariables = {
	donorId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelDonationFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type DonationsByDonorIdQuery = {
	donationsByDonorId?: {
		__typename: "ModelDonationConnection"
		items: Array<{
			__typename: "Donation"
			id: string
			amount: number
			currency: string
			isAnonymous: boolean
			donorId: string
			donor: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			fundraisingCampaignId: string
			fundraisingCampaign?: {
				__typename: "FundraisingCampaign"
				id: string
				title: string
				description?: string | null
				featureImage?: string | null
				type: FundraisingCampaignType
				currentAmount: number
				goal: number
				goalDate: string
				currency: string
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type DonationsByFundraisingCampaignIdQueryVariables = {
	fundraisingCampaignId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelDonationFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type DonationsByFundraisingCampaignIdQuery = {
	donationsByFundraisingCampaignId?: {
		__typename: "ModelDonationConnection"
		items: Array<{
			__typename: "Donation"
			id: string
			amount: number
			currency: string
			isAnonymous: boolean
			donorId: string
			donor: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			fundraisingCampaignId: string
			fundraisingCampaign?: {
				__typename: "FundraisingCampaign"
				id: string
				title: string
				description?: string | null
				featureImage?: string | null
				type: FundraisingCampaignType
				currentAmount: number
				goal: number
				goalDate: string
				currency: string
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type GetFundraisingCampaignQueryVariables = {
	id: string
}

export type GetFundraisingCampaignQuery = {
	getFundraisingCampaign?: {
		__typename: "FundraisingCampaign"
		id: string
		title: string
		description?: string | null
		featureImage?: string | null
		type: FundraisingCampaignType
		currentAmount: number
		goal: number
		goalDate: string
		currency: string
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		donations?: {
			__typename: "ModelDonationConnection"
			items: Array<{
				__typename: "Donation"
				id: string
				amount: number
				currency: string
				isAnonymous: boolean
				donorId: string
				fundraisingCampaignId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type ListFundraisingCampaignsQueryVariables = {
	filter?: ModelFundraisingCampaignFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ListFundraisingCampaignsQuery = {
	listFundraisingCampaigns?: {
		__typename: "ModelFundraisingCampaignConnection"
		items: Array<{
			__typename: "FundraisingCampaign"
			id: string
			title: string
			description?: string | null
			featureImage?: string | null
			type: FundraisingCampaignType
			currentAmount: number
			goal: number
			goalDate: string
			currency: string
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type FundraisingCampaignsByCreatorIdQueryVariables = {
	creatorId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelFundraisingCampaignFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type FundraisingCampaignsByCreatorIdQuery = {
	fundraisingCampaignsByCreatorId?: {
		__typename: "ModelFundraisingCampaignConnection"
		items: Array<{
			__typename: "FundraisingCampaign"
			id: string
			title: string
			description?: string | null
			featureImage?: string | null
			type: FundraisingCampaignType
			currentAmount: number
			goal: number
			goalDate: string
			currency: string
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type FundraisingCampaignsByMosqueIdQueryVariables = {
	mosqueId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelFundraisingCampaignFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type FundraisingCampaignsByMosqueIdQuery = {
	fundraisingCampaignsByMosqueId?: {
		__typename: "ModelFundraisingCampaignConnection"
		items: Array<{
			__typename: "FundraisingCampaign"
			id: string
			title: string
			description?: string | null
			featureImage?: string | null
			type: FundraisingCampaignType
			currentAmount: number
			goal: number
			goalDate: string
			currency: string
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type GetLikeQueryVariables = {
	id: string
}

export type GetLikeQuery = {
	getLike?: {
		__typename: "Like"
		id: string
		announcementId: string
		announcement: {
			__typename: "Announcement"
			id: string
			title: string
			body: string
			images?: Array<string | null> | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		}
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt: string
		updatedAt: string
	} | null
}

export type ListLikesQueryVariables = {
	filter?: ModelLikeFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ListLikesQuery = {
	listLikes?: {
		__typename: "ModelLikeConnection"
		items: Array<{
			__typename: "Like"
			id: string
			announcementId: string
			announcement: {
				__typename: "Announcement"
				id: string
				title: string
				body: string
				images?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt: string
			updatedAt: string
		} | null>
		nextToken?: string | null
	} | null
}

export type LikesByAnnouncementIdQueryVariables = {
	announcementId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelLikeFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type LikesByAnnouncementIdQuery = {
	likesByAnnouncementId?: {
		__typename: "ModelLikeConnection"
		items: Array<{
			__typename: "Like"
			id: string
			announcementId: string
			announcement: {
				__typename: "Announcement"
				id: string
				title: string
				body: string
				images?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt: string
			updatedAt: string
		} | null>
		nextToken?: string | null
	} | null
}

export type LikesByCreatorIdQueryVariables = {
	creatorId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelLikeFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type LikesByCreatorIdQuery = {
	likesByCreatorId?: {
		__typename: "ModelLikeConnection"
		items: Array<{
			__typename: "Like"
			id: string
			announcementId: string
			announcement: {
				__typename: "Announcement"
				id: string
				title: string
				body: string
				images?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt: string
			updatedAt: string
		} | null>
		nextToken?: string | null
	} | null
}

export type LikesByMosqueIdQueryVariables = {
	mosqueId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelLikeFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type LikesByMosqueIdQuery = {
	likesByMosqueId?: {
		__typename: "ModelLikeConnection"
		items: Array<{
			__typename: "Like"
			id: string
			announcementId: string
			announcement: {
				__typename: "Announcement"
				id: string
				title: string
				body: string
				images?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt: string
			updatedAt: string
		} | null>
		nextToken?: string | null
	} | null
}

export type GetMonthlyPrayerScheduleQueryVariables = {
	id: string
}

export type GetMonthlyPrayerScheduleQuery = {
	getMonthlyPrayerSchedule?: {
		__typename: "MonthlyPrayerSchedule"
		id: string
		year: number
		month: number
		prayerTimes: Array<{
			__typename: "PrayerTime"
			type: PrayerType
			athan: string
			iqamah: string
		}>
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type ListMonthlyPrayerSchedulesQueryVariables = {
	filter?: ModelMonthlyPrayerScheduleFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ListMonthlyPrayerSchedulesQuery = {
	listMonthlyPrayerSchedules?: {
		__typename: "ModelMonthlyPrayerScheduleConnection"
		items: Array<{
			__typename: "MonthlyPrayerSchedule"
			id: string
			year: number
			month: number
			prayerTimes: Array<{
				__typename: "PrayerTime"
				type: PrayerType
				athan: string
				iqamah: string
			}>
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type MonthlyPrayerSchedulesByCreatorIdQueryVariables = {
	creatorId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelMonthlyPrayerScheduleFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type MonthlyPrayerSchedulesByCreatorIdQuery = {
	monthlyPrayerSchedulesByCreatorId?: {
		__typename: "ModelMonthlyPrayerScheduleConnection"
		items: Array<{
			__typename: "MonthlyPrayerSchedule"
			id: string
			year: number
			month: number
			prayerTimes: Array<{
				__typename: "PrayerTime"
				type: PrayerType
				athan: string
				iqamah: string
			}>
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type MonthlyPrayerSchedulesByMosqueIdQueryVariables = {
	mosqueId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelMonthlyPrayerScheduleFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type MonthlyPrayerSchedulesByMosqueIdQuery = {
	monthlyPrayerSchedulesByMosqueId?: {
		__typename: "ModelMonthlyPrayerScheduleConnection"
		items: Array<{
			__typename: "MonthlyPrayerSchedule"
			id: string
			year: number
			month: number
			prayerTimes: Array<{
				__typename: "PrayerTime"
				type: PrayerType
				athan: string
				iqamah: string
			}>
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type GetMosqueQueryVariables = {
	id: string
}

export type GetMosqueQuery = {
	getMosque?: {
		__typename: "Mosque"
		id: string
		name: string
		description: string
		images: Array<string | null>
		address: {
			__typename: "Address"
			addressLine1: string
			addressLine2?: string | null
			addressLine3?: string | null
			city: string
			province: string
			postalCode: string
			country: string
			latitude: number
			longitude: number
		}
		hours?: {
			__typename: "Hours"
			monday?: {
				__typename: "Day"
				type: DayType
			} | null
			tuesday?: {
				__typename: "Day"
				type: DayType
			} | null
			wednesday?: {
				__typename: "Day"
				type: DayType
			} | null
			thursday?: {
				__typename: "Day"
				type: DayType
			} | null
			friday?: {
				__typename: "Day"
				type: DayType
			} | null
			saturday?: {
				__typename: "Day"
				type: DayType
			} | null
			sunday?: {
				__typename: "Day"
				type: DayType
			} | null
		} | null
		contactInfo: {
			__typename: "ContactInfo"
			phone?: string | null
			email?: string | null
			website?: string | null
			socialMedia?: {
				__typename: "SocialMedia"
				facebook?: string | null
				instagram?: string | null
				twitter?: string | null
				youtube?: string | null
			} | null
		}
		liveVideoUrl?: string | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		followers?: {
			__typename: "ModelMosqueFollowersConnection"
			items: Array<{
				__typename: "MosqueFollowers"
				id: string
				mosqueId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		announcements?: {
			__typename: "ModelAnnouncementConnection"
			items: Array<{
				__typename: "Announcement"
				id: string
				title: string
				body: string
				images?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		classes?: {
			__typename: "ModelClassConnection"
			items: Array<{
				__typename: "Class"
				id: string
				title: string
				description?: string | null
				startDateTime: string
				endDateTime?: string | null
				recurring: boolean
				daysOfWeek?: Array<DayType> | null
				creatorId: string
				instructorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		committees?: {
			__typename: "ModelCommitteeConnection"
			items: Array<{
				__typename: "Committee"
				id: string
				title: string
				description?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		gatherings?: {
			__typename: "ModelGatheringConnection"
			items: Array<{
				__typename: "Gathering"
				id: string
				title: string
				description?: string | null
				type: GatheringType
				startDate: string
				endDate?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		fundraisingCampaigns?: {
			__typename: "ModelFundraisingCampaignConnection"
			items: Array<{
				__typename: "FundraisingCampaign"
				id: string
				title: string
				description?: string | null
				featureImage?: string | null
				type: FundraisingCampaignType
				currentAmount: number
				goal: number
				goalDate: string
				currency: string
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		monthlyPrayerSchedules?: {
			__typename: "ModelMonthlyPrayerScheduleConnection"
			items: Array<{
				__typename: "MonthlyPrayerSchedule"
				id: string
				year: number
				month: number
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		resources?: {
			__typename: "ModelResourceConnection"
			items: Array<{
				__typename: "Resource"
				id: string
				title: string
				description?: string | null
				type: ResourceType
				url: string
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		services?: {
			__typename: "ModelServiceConnection"
			items: Array<{
				__typename: "Service"
				id: string
				type: ServiceType
				description?: string | null
				documents?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		subscriptions?: {
			__typename: "ModelMosqueSubscriptionConnection"
			items: Array<{
				__typename: "MosqueSubscription"
				id: string
				status: MosqueSubscriptionStatus
				startDate: string
				endDate?: string | null
				stripeSubscriptionId: string
				purchaserId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		volunteerTasks?: {
			__typename: "ModelVolunteerTaskConnection"
			items: Array<{
				__typename: "VolunteerTask"
				id: string
				name: string
				description?: string | null
				startDate: string
				endDate?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		bookmarks?: {
			__typename: "ModelBookmarkConnection"
			items: Array<{
				__typename: "Bookmark"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		likes?: {
			__typename: "ModelLikeConnection"
			items: Array<{
				__typename: "Like"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		comments?: {
			__typename: "ModelCommentConnection"
			items: Array<{
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type ListMosquesQueryVariables = {
	filter?: ModelMosqueFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ListMosquesQuery = {
	listMosques?: {
		__typename: "ModelMosqueConnection"
		items: Array<{
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type MosquesByCreatorIdQueryVariables = {
	creatorId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelMosqueFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type MosquesByCreatorIdQuery = {
	mosquesByCreatorId?: {
		__typename: "ModelMosqueConnection"
		items: Array<{
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type GetMosqueSubscriptionQueryVariables = {
	id: string
}

export type GetMosqueSubscriptionQuery = {
	getMosqueSubscription?: {
		__typename: "MosqueSubscription"
		id: string
		status: MosqueSubscriptionStatus
		startDate: string
		endDate?: string | null
		stripeSubscriptionId: string
		purchaserId: string
		purchaser: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type ListMosqueSubscriptionsQueryVariables = {
	filter?: ModelMosqueSubscriptionFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ListMosqueSubscriptionsQuery = {
	listMosqueSubscriptions?: {
		__typename: "ModelMosqueSubscriptionConnection"
		items: Array<{
			__typename: "MosqueSubscription"
			id: string
			status: MosqueSubscriptionStatus
			startDate: string
			endDate?: string | null
			stripeSubscriptionId: string
			purchaserId: string
			purchaser: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type MosqueSubscriptionsByPurchaserIdQueryVariables = {
	purchaserId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelMosqueSubscriptionFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type MosqueSubscriptionsByPurchaserIdQuery = {
	mosqueSubscriptionsByPurchaserId?: {
		__typename: "ModelMosqueSubscriptionConnection"
		items: Array<{
			__typename: "MosqueSubscription"
			id: string
			status: MosqueSubscriptionStatus
			startDate: string
			endDate?: string | null
			stripeSubscriptionId: string
			purchaserId: string
			purchaser: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type MosqueSubscriptionsByMosqueIdQueryVariables = {
	mosqueId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelMosqueSubscriptionFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type MosqueSubscriptionsByMosqueIdQuery = {
	mosqueSubscriptionsByMosqueId?: {
		__typename: "ModelMosqueSubscriptionConnection"
		items: Array<{
			__typename: "MosqueSubscription"
			id: string
			status: MosqueSubscriptionStatus
			startDate: string
			endDate?: string | null
			stripeSubscriptionId: string
			purchaserId: string
			purchaser: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type GetResourceQueryVariables = {
	id: string
}

export type GetResourceQuery = {
	getResource?: {
		__typename: "Resource"
		id: string
		title: string
		description?: string | null
		type: ResourceType
		url: string
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type ListResourcesQueryVariables = {
	filter?: ModelResourceFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ListResourcesQuery = {
	listResources?: {
		__typename: "ModelResourceConnection"
		items: Array<{
			__typename: "Resource"
			id: string
			title: string
			description?: string | null
			type: ResourceType
			url: string
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type ResourcesByCreatorIdQueryVariables = {
	creatorId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelResourceFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ResourcesByCreatorIdQuery = {
	resourcesByCreatorId?: {
		__typename: "ModelResourceConnection"
		items: Array<{
			__typename: "Resource"
			id: string
			title: string
			description?: string | null
			type: ResourceType
			url: string
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type ResourcesByMosqueIdQueryVariables = {
	mosqueId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelResourceFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ResourcesByMosqueIdQuery = {
	resourcesByMosqueId?: {
		__typename: "ModelResourceConnection"
		items: Array<{
			__typename: "Resource"
			id: string
			title: string
			description?: string | null
			type: ResourceType
			url: string
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type GetServiceQueryVariables = {
	id: string
}

export type GetServiceQuery = {
	getService?: {
		__typename: "Service"
		id: string
		type: ServiceType
		description?: string | null
		documents?: Array<string | null> | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type ListServicesQueryVariables = {
	filter?: ModelServiceFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ListServicesQuery = {
	listServices?: {
		__typename: "ModelServiceConnection"
		items: Array<{
			__typename: "Service"
			id: string
			type: ServiceType
			description?: string | null
			documents?: Array<string | null> | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type ServicesByCreatorIdQueryVariables = {
	creatorId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelServiceFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ServicesByCreatorIdQuery = {
	servicesByCreatorId?: {
		__typename: "ModelServiceConnection"
		items: Array<{
			__typename: "Service"
			id: string
			type: ServiceType
			description?: string | null
			documents?: Array<string | null> | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type ServicesByMosqueIdQueryVariables = {
	mosqueId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelServiceFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ServicesByMosqueIdQuery = {
	servicesByMosqueId?: {
		__typename: "ModelServiceConnection"
		items: Array<{
			__typename: "Service"
			id: string
			type: ServiceType
			description?: string | null
			documents?: Array<string | null> | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type GetUserQueryVariables = {
	id: string
}

export type GetUserQuery = {
	getUser?: {
		__typename: "User"
		id: string
		selfie?: string | null
		firstName: string
		lastName: string
		email: string
		phone?: string | null
		type: UserType
		status: UserStatus
		stripeCustomerId?: string | null
		createdAnnouncements?: {
			__typename: "ModelAnnouncementConnection"
			items: Array<{
				__typename: "Announcement"
				id: string
				title: string
				body: string
				images?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdClasses?: {
			__typename: "ModelClassConnection"
			items: Array<{
				__typename: "Class"
				id: string
				title: string
				description?: string | null
				startDateTime: string
				endDateTime?: string | null
				recurring: boolean
				daysOfWeek?: Array<DayType> | null
				creatorId: string
				instructorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdCommittees?: {
			__typename: "ModelCommitteeConnection"
			items: Array<{
				__typename: "Committee"
				id: string
				title: string
				description?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdGatherings?: {
			__typename: "ModelGatheringConnection"
			items: Array<{
				__typename: "Gathering"
				id: string
				title: string
				description?: string | null
				type: GatheringType
				startDate: string
				endDate?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdFundraisingCampaigns?: {
			__typename: "ModelFundraisingCampaignConnection"
			items: Array<{
				__typename: "FundraisingCampaign"
				id: string
				title: string
				description?: string | null
				featureImage?: string | null
				type: FundraisingCampaignType
				currentAmount: number
				goal: number
				goalDate: string
				currency: string
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdMonthlyPrayerSchedules?: {
			__typename: "ModelMonthlyPrayerScheduleConnection"
			items: Array<{
				__typename: "MonthlyPrayerSchedule"
				id: string
				year: number
				month: number
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdMosques?: {
			__typename: "ModelMosqueConnection"
			items: Array<{
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdResources?: {
			__typename: "ModelResourceConnection"
			items: Array<{
				__typename: "Resource"
				id: string
				title: string
				description?: string | null
				type: ResourceType
				url: string
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdServices?: {
			__typename: "ModelServiceConnection"
			items: Array<{
				__typename: "Service"
				id: string
				type: ServiceType
				description?: string | null
				documents?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdVolunteerTasks?: {
			__typename: "ModelVolunteerTaskConnection"
			items: Array<{
				__typename: "VolunteerTask"
				id: string
				name: string
				description?: string | null
				startDate: string
				endDate?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		donations?: {
			__typename: "ModelDonationConnection"
			items: Array<{
				__typename: "Donation"
				id: string
				amount: number
				currency: string
				isAnonymous: boolean
				donorId: string
				fundraisingCampaignId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		committees?: {
			__typename: "ModelCommitteeMembersConnection"
			items: Array<{
				__typename: "CommitteeMembers"
				id: string
				committeeId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		gatherings?: {
			__typename: "ModelGatheringAttendeesConnection"
			items: Array<{
				__typename: "GatheringAttendees"
				id: string
				gatheringId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		instructingClasses?: {
			__typename: "ModelClassConnection"
			items: Array<{
				__typename: "Class"
				id: string
				title: string
				description?: string | null
				startDateTime: string
				endDateTime?: string | null
				recurring: boolean
				daysOfWeek?: Array<DayType> | null
				creatorId: string
				instructorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		mosques?: {
			__typename: "ModelMosqueFollowersConnection"
			items: Array<{
				__typename: "MosqueFollowers"
				id: string
				mosqueId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		purchasedSubscriptions?: {
			__typename: "ModelMosqueSubscriptionConnection"
			items: Array<{
				__typename: "MosqueSubscription"
				id: string
				status: MosqueSubscriptionStatus
				startDate: string
				endDate?: string | null
				stripeSubscriptionId: string
				purchaserId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		volunteerTasks?: {
			__typename: "ModelVolunteerTaskUserConnection"
			items: Array<{
				__typename: "VolunteerTaskUser"
				id: string
				userId: string
				volunteerTaskId: string
				createdAt: string
				updatedAt: string
				owner?: string | null
				creatorId?: string | null
			} | null>
			nextToken?: string | null
		} | null
		bookmarks?: {
			__typename: "ModelBookmarkConnection"
			items: Array<{
				__typename: "Bookmark"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		likes?: {
			__typename: "ModelLikeConnection"
			items: Array<{
				__typename: "Like"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		comments?: {
			__typename: "ModelCommentConnection"
			items: Array<{
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
		owner?: string | null
	} | null
}

export type ListUsersQueryVariables = {
	filter?: ModelUserFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ListUsersQuery = {
	listUsers?: {
		__typename: "ModelUserConnection"
		items: Array<{
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type GetVolunteerTaskQueryVariables = {
	id: string
}

export type GetVolunteerTaskQuery = {
	getVolunteerTask?: {
		__typename: "VolunteerTask"
		id: string
		name: string
		description?: string | null
		startDate: string
		endDate?: string | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		volunteers?: {
			__typename: "ModelVolunteerTaskUserConnection"
			items: Array<{
				__typename: "VolunteerTaskUser"
				id: string
				userId: string
				volunteerTaskId: string
				createdAt: string
				updatedAt: string
				owner?: string | null
				creatorId?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type ListVolunteerTasksQueryVariables = {
	filter?: ModelVolunteerTaskFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ListVolunteerTasksQuery = {
	listVolunteerTasks?: {
		__typename: "ModelVolunteerTaskConnection"
		items: Array<{
			__typename: "VolunteerTask"
			id: string
			name: string
			description?: string | null
			startDate: string
			endDate?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			volunteers?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type VolunteerTasksByCreatorIdQueryVariables = {
	creatorId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelVolunteerTaskFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type VolunteerTasksByCreatorIdQuery = {
	volunteerTasksByCreatorId?: {
		__typename: "ModelVolunteerTaskConnection"
		items: Array<{
			__typename: "VolunteerTask"
			id: string
			name: string
			description?: string | null
			startDate: string
			endDate?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			volunteers?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type VolunteerTasksByMosqueIdQueryVariables = {
	mosqueId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelVolunteerTaskFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type VolunteerTasksByMosqueIdQuery = {
	volunteerTasksByMosqueId?: {
		__typename: "ModelVolunteerTaskConnection"
		items: Array<{
			__typename: "VolunteerTask"
			id: string
			name: string
			description?: string | null
			startDate: string
			endDate?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			volunteers?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type GetCommitteeMembersQueryVariables = {
	id: string
}

export type GetCommitteeMembersQuery = {
	getCommitteeMembers?: {
		__typename: "CommitteeMembers"
		id: string
		committeeId: string
		userId: string
		committee: {
			__typename: "Committee"
			id: string
			title: string
			description?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			members?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		user: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		createdAt: string
		updatedAt: string
		creatorId?: string | null
		owner?: string | null
	} | null
}

export type ListCommitteeMembersQueryVariables = {
	filter?: ModelCommitteeMembersFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ListCommitteeMembersQuery = {
	listCommitteeMembers?: {
		__typename: "ModelCommitteeMembersConnection"
		items: Array<{
			__typename: "CommitteeMembers"
			id: string
			committeeId: string
			userId: string
			committee: {
				__typename: "Committee"
				id: string
				title: string
				description?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			user: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			createdAt: string
			updatedAt: string
			creatorId?: string | null
			owner?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type CommitteeMembersByCommitteeIdQueryVariables = {
	committeeId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelCommitteeMembersFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type CommitteeMembersByCommitteeIdQuery = {
	committeeMembersByCommitteeId?: {
		__typename: "ModelCommitteeMembersConnection"
		items: Array<{
			__typename: "CommitteeMembers"
			id: string
			committeeId: string
			userId: string
			committee: {
				__typename: "Committee"
				id: string
				title: string
				description?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			user: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			createdAt: string
			updatedAt: string
			creatorId?: string | null
			owner?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type CommitteeMembersByUserIdQueryVariables = {
	userId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelCommitteeMembersFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type CommitteeMembersByUserIdQuery = {
	committeeMembersByUserId?: {
		__typename: "ModelCommitteeMembersConnection"
		items: Array<{
			__typename: "CommitteeMembers"
			id: string
			committeeId: string
			userId: string
			committee: {
				__typename: "Committee"
				id: string
				title: string
				description?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			user: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			createdAt: string
			updatedAt: string
			creatorId?: string | null
			owner?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type GetGatheringAttendeesQueryVariables = {
	id: string
}

export type GetGatheringAttendeesQuery = {
	getGatheringAttendees?: {
		__typename: "GatheringAttendees"
		id: string
		gatheringId: string
		userId: string
		gathering: {
			__typename: "Gathering"
			id: string
			title: string
			description?: string | null
			type: GatheringType
			startDate: string
			endDate?: string | null
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			attendees?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		user: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		createdAt: string
		updatedAt: string
		creatorId?: string | null
		owner?: string | null
	} | null
}

export type ListGatheringAttendeesQueryVariables = {
	filter?: ModelGatheringAttendeesFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ListGatheringAttendeesQuery = {
	listGatheringAttendees?: {
		__typename: "ModelGatheringAttendeesConnection"
		items: Array<{
			__typename: "GatheringAttendees"
			id: string
			gatheringId: string
			userId: string
			gathering: {
				__typename: "Gathering"
				id: string
				title: string
				description?: string | null
				type: GatheringType
				startDate: string
				endDate?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			user: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			createdAt: string
			updatedAt: string
			creatorId?: string | null
			owner?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type GatheringAttendeesByGatheringIdQueryVariables = {
	gatheringId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelGatheringAttendeesFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type GatheringAttendeesByGatheringIdQuery = {
	gatheringAttendeesByGatheringId?: {
		__typename: "ModelGatheringAttendeesConnection"
		items: Array<{
			__typename: "GatheringAttendees"
			id: string
			gatheringId: string
			userId: string
			gathering: {
				__typename: "Gathering"
				id: string
				title: string
				description?: string | null
				type: GatheringType
				startDate: string
				endDate?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			user: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			createdAt: string
			updatedAt: string
			creatorId?: string | null
			owner?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type GatheringAttendeesByUserIdQueryVariables = {
	userId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelGatheringAttendeesFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type GatheringAttendeesByUserIdQuery = {
	gatheringAttendeesByUserId?: {
		__typename: "ModelGatheringAttendeesConnection"
		items: Array<{
			__typename: "GatheringAttendees"
			id: string
			gatheringId: string
			userId: string
			gathering: {
				__typename: "Gathering"
				id: string
				title: string
				description?: string | null
				type: GatheringType
				startDate: string
				endDate?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			user: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			createdAt: string
			updatedAt: string
			creatorId?: string | null
			owner?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type GetMosqueFollowersQueryVariables = {
	id: string
}

export type GetMosqueFollowersQuery = {
	getMosqueFollowers?: {
		__typename: "MosqueFollowers"
		id: string
		mosqueId: string
		userId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		user: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		createdAt: string
		updatedAt: string
		creatorId?: string | null
		owner?: string | null
	} | null
}

export type ListMosqueFollowersQueryVariables = {
	filter?: ModelMosqueFollowersFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ListMosqueFollowersQuery = {
	listMosqueFollowers?: {
		__typename: "ModelMosqueFollowersConnection"
		items: Array<{
			__typename: "MosqueFollowers"
			id: string
			mosqueId: string
			userId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			user: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			createdAt: string
			updatedAt: string
			creatorId?: string | null
			owner?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type MosqueFollowersByMosqueIdQueryVariables = {
	mosqueId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelMosqueFollowersFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type MosqueFollowersByMosqueIdQuery = {
	mosqueFollowersByMosqueId?: {
		__typename: "ModelMosqueFollowersConnection"
		items: Array<{
			__typename: "MosqueFollowers"
			id: string
			mosqueId: string
			userId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			user: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			createdAt: string
			updatedAt: string
			creatorId?: string | null
			owner?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type MosqueFollowersByUserIdQueryVariables = {
	userId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelMosqueFollowersFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type MosqueFollowersByUserIdQuery = {
	mosqueFollowersByUserId?: {
		__typename: "ModelMosqueFollowersConnection"
		items: Array<{
			__typename: "MosqueFollowers"
			id: string
			mosqueId: string
			userId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			user: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			createdAt: string
			updatedAt: string
			creatorId?: string | null
			owner?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type GetVolunteerTaskUserQueryVariables = {
	id: string
}

export type GetVolunteerTaskUserQuery = {
	getVolunteerTaskUser?: {
		__typename: "VolunteerTaskUser"
		id: string
		userId: string
		volunteerTaskId: string
		user: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		volunteerTask: {
			__typename: "VolunteerTask"
			id: string
			name: string
			description?: string | null
			startDate: string
			endDate?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			volunteers?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt: string
		updatedAt: string
		owner?: string | null
		creatorId?: string | null
	} | null
}

export type ListVolunteerTaskUsersQueryVariables = {
	filter?: ModelVolunteerTaskUserFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ListVolunteerTaskUsersQuery = {
	listVolunteerTaskUsers?: {
		__typename: "ModelVolunteerTaskUserConnection"
		items: Array<{
			__typename: "VolunteerTaskUser"
			id: string
			userId: string
			volunteerTaskId: string
			user: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			volunteerTask: {
				__typename: "VolunteerTask"
				id: string
				name: string
				description?: string | null
				startDate: string
				endDate?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt: string
			updatedAt: string
			owner?: string | null
			creatorId?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type VolunteerTaskUsersByUserIdQueryVariables = {
	userId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelVolunteerTaskUserFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type VolunteerTaskUsersByUserIdQuery = {
	volunteerTaskUsersByUserId?: {
		__typename: "ModelVolunteerTaskUserConnection"
		items: Array<{
			__typename: "VolunteerTaskUser"
			id: string
			userId: string
			volunteerTaskId: string
			user: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			volunteerTask: {
				__typename: "VolunteerTask"
				id: string
				name: string
				description?: string | null
				startDate: string
				endDate?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt: string
			updatedAt: string
			owner?: string | null
			creatorId?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type VolunteerTaskUsersByVolunteerTaskIdQueryVariables = {
	volunteerTaskId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelVolunteerTaskUserFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type VolunteerTaskUsersByVolunteerTaskIdQuery = {
	volunteerTaskUsersByVolunteerTaskId?: {
		__typename: "ModelVolunteerTaskUserConnection"
		items: Array<{
			__typename: "VolunteerTaskUser"
			id: string
			userId: string
			volunteerTaskId: string
			user: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			volunteerTask: {
				__typename: "VolunteerTask"
				id: string
				name: string
				description?: string | null
				startDate: string
				endDate?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt: string
			updatedAt: string
			owner?: string | null
			creatorId?: string | null
		} | null>
		nextToken?: string | null
	} | null
}

export type OnCreateAnnouncementSubscriptionVariables = {
	filter?: ModelSubscriptionAnnouncementFilterInput | null
	creatorId?: string | null
}

export type OnCreateAnnouncementSubscription = {
	onCreateAnnouncement?: {
		__typename: "Announcement"
		id: string
		title: string
		body: string
		images?: Array<string | null> | null
		bookmarks?: {
			__typename: "ModelBookmarkConnection"
			items: Array<{
				__typename: "Bookmark"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		likes?: {
			__typename: "ModelLikeConnection"
			items: Array<{
				__typename: "Like"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		comments?: {
			__typename: "ModelCommentConnection"
			items: Array<{
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type OnUpdateAnnouncementSubscriptionVariables = {
	filter?: ModelSubscriptionAnnouncementFilterInput | null
	creatorId?: string | null
}

export type OnUpdateAnnouncementSubscription = {
	onUpdateAnnouncement?: {
		__typename: "Announcement"
		id: string
		title: string
		body: string
		images?: Array<string | null> | null
		bookmarks?: {
			__typename: "ModelBookmarkConnection"
			items: Array<{
				__typename: "Bookmark"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		likes?: {
			__typename: "ModelLikeConnection"
			items: Array<{
				__typename: "Like"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		comments?: {
			__typename: "ModelCommentConnection"
			items: Array<{
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type OnDeleteAnnouncementSubscriptionVariables = {
	filter?: ModelSubscriptionAnnouncementFilterInput | null
	creatorId?: string | null
}

export type OnDeleteAnnouncementSubscription = {
	onDeleteAnnouncement?: {
		__typename: "Announcement"
		id: string
		title: string
		body: string
		images?: Array<string | null> | null
		bookmarks?: {
			__typename: "ModelBookmarkConnection"
			items: Array<{
				__typename: "Bookmark"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		likes?: {
			__typename: "ModelLikeConnection"
			items: Array<{
				__typename: "Like"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		comments?: {
			__typename: "ModelCommentConnection"
			items: Array<{
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type OnCreateBookmarkSubscriptionVariables = {
	filter?: ModelSubscriptionBookmarkFilterInput | null
	creatorId?: string | null
}

export type OnCreateBookmarkSubscription = {
	onCreateBookmark?: {
		__typename: "Bookmark"
		id: string
		announcementId: string
		announcement: {
			__typename: "Announcement"
			id: string
			title: string
			body: string
			images?: Array<string | null> | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		}
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt: string
		updatedAt: string
	} | null
}

export type OnUpdateBookmarkSubscriptionVariables = {
	filter?: ModelSubscriptionBookmarkFilterInput | null
	creatorId?: string | null
}

export type OnUpdateBookmarkSubscription = {
	onUpdateBookmark?: {
		__typename: "Bookmark"
		id: string
		announcementId: string
		announcement: {
			__typename: "Announcement"
			id: string
			title: string
			body: string
			images?: Array<string | null> | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		}
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt: string
		updatedAt: string
	} | null
}

export type OnDeleteBookmarkSubscriptionVariables = {
	filter?: ModelSubscriptionBookmarkFilterInput | null
	creatorId?: string | null
}

export type OnDeleteBookmarkSubscription = {
	onDeleteBookmark?: {
		__typename: "Bookmark"
		id: string
		announcementId: string
		announcement: {
			__typename: "Announcement"
			id: string
			title: string
			body: string
			images?: Array<string | null> | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		}
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt: string
		updatedAt: string
	} | null
}

export type OnCreateClassSubscriptionVariables = {
	filter?: ModelSubscriptionClassFilterInput | null
	creatorId?: string | null
}

export type OnCreateClassSubscription = {
	onCreateClass?: {
		__typename: "Class"
		id: string
		title: string
		description?: string | null
		startDateTime: string
		endDateTime?: string | null
		recurring: boolean
		daysOfWeek?: Array<DayType> | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		instructorId: string
		instructor: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type OnUpdateClassSubscriptionVariables = {
	filter?: ModelSubscriptionClassFilterInput | null
	creatorId?: string | null
}

export type OnUpdateClassSubscription = {
	onUpdateClass?: {
		__typename: "Class"
		id: string
		title: string
		description?: string | null
		startDateTime: string
		endDateTime?: string | null
		recurring: boolean
		daysOfWeek?: Array<DayType> | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		instructorId: string
		instructor: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type OnDeleteClassSubscriptionVariables = {
	filter?: ModelSubscriptionClassFilterInput | null
	creatorId?: string | null
}

export type OnDeleteClassSubscription = {
	onDeleteClass?: {
		__typename: "Class"
		id: string
		title: string
		description?: string | null
		startDateTime: string
		endDateTime?: string | null
		recurring: boolean
		daysOfWeek?: Array<DayType> | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		instructorId: string
		instructor: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type OnCreateCommentSubscriptionVariables = {
	filter?: ModelSubscriptionCommentFilterInput | null
	creatorId?: string | null
}

export type OnCreateCommentSubscription = {
	onCreateComment?: {
		__typename: "Comment"
		id: string
		text: string
		parentCommentId?: string | null
		parentComment?: {
			__typename: "Comment"
			id: string
			text: string
			parentCommentId?: string | null
			parentComment?: {
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null
			subComments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			announcementId: string
			announcement: {
				__typename: "Announcement"
				id: string
				title: string
				body: string
				images?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt: string
			updatedAt: string
		} | null
		subComments?: {
			__typename: "ModelCommentConnection"
			items: Array<{
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		announcementId: string
		announcement: {
			__typename: "Announcement"
			id: string
			title: string
			body: string
			images?: Array<string | null> | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		}
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt: string
		updatedAt: string
	} | null
}

export type OnUpdateCommentSubscriptionVariables = {
	filter?: ModelSubscriptionCommentFilterInput | null
	creatorId?: string | null
}

export type OnUpdateCommentSubscription = {
	onUpdateComment?: {
		__typename: "Comment"
		id: string
		text: string
		parentCommentId?: string | null
		parentComment?: {
			__typename: "Comment"
			id: string
			text: string
			parentCommentId?: string | null
			parentComment?: {
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null
			subComments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			announcementId: string
			announcement: {
				__typename: "Announcement"
				id: string
				title: string
				body: string
				images?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt: string
			updatedAt: string
		} | null
		subComments?: {
			__typename: "ModelCommentConnection"
			items: Array<{
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		announcementId: string
		announcement: {
			__typename: "Announcement"
			id: string
			title: string
			body: string
			images?: Array<string | null> | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		}
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt: string
		updatedAt: string
	} | null
}

export type OnDeleteCommentSubscriptionVariables = {
	filter?: ModelSubscriptionCommentFilterInput | null
	creatorId?: string | null
}

export type OnDeleteCommentSubscription = {
	onDeleteComment?: {
		__typename: "Comment"
		id: string
		text: string
		parentCommentId?: string | null
		parentComment?: {
			__typename: "Comment"
			id: string
			text: string
			parentCommentId?: string | null
			parentComment?: {
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null
			subComments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			announcementId: string
			announcement: {
				__typename: "Announcement"
				id: string
				title: string
				body: string
				images?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt: string
			updatedAt: string
		} | null
		subComments?: {
			__typename: "ModelCommentConnection"
			items: Array<{
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		announcementId: string
		announcement: {
			__typename: "Announcement"
			id: string
			title: string
			body: string
			images?: Array<string | null> | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		}
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt: string
		updatedAt: string
	} | null
}

export type OnCreateCommitteeSubscriptionVariables = {
	filter?: ModelSubscriptionCommitteeFilterInput | null
	creatorId?: string | null
}

export type OnCreateCommitteeSubscription = {
	onCreateCommittee?: {
		__typename: "Committee"
		id: string
		title: string
		description?: string | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		members?: {
			__typename: "ModelCommitteeMembersConnection"
			items: Array<{
				__typename: "CommitteeMembers"
				id: string
				committeeId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type OnUpdateCommitteeSubscriptionVariables = {
	filter?: ModelSubscriptionCommitteeFilterInput | null
	creatorId?: string | null
}

export type OnUpdateCommitteeSubscription = {
	onUpdateCommittee?: {
		__typename: "Committee"
		id: string
		title: string
		description?: string | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		members?: {
			__typename: "ModelCommitteeMembersConnection"
			items: Array<{
				__typename: "CommitteeMembers"
				id: string
				committeeId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type OnDeleteCommitteeSubscriptionVariables = {
	filter?: ModelSubscriptionCommitteeFilterInput | null
	creatorId?: string | null
}

export type OnDeleteCommitteeSubscription = {
	onDeleteCommittee?: {
		__typename: "Committee"
		id: string
		title: string
		description?: string | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		members?: {
			__typename: "ModelCommitteeMembersConnection"
			items: Array<{
				__typename: "CommitteeMembers"
				id: string
				committeeId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type OnCreateGatheringSubscriptionVariables = {
	filter?: ModelSubscriptionGatheringFilterInput | null
	creatorId?: string | null
}

export type OnCreateGatheringSubscription = {
	onCreateGathering?: {
		__typename: "Gathering"
		id: string
		title: string
		description?: string | null
		type: GatheringType
		startDate: string
		endDate?: string | null
		address: {
			__typename: "Address"
			addressLine1: string
			addressLine2?: string | null
			addressLine3?: string | null
			city: string
			province: string
			postalCode: string
			country: string
			latitude: number
			longitude: number
		}
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		attendees?: {
			__typename: "ModelGatheringAttendeesConnection"
			items: Array<{
				__typename: "GatheringAttendees"
				id: string
				gatheringId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type OnUpdateGatheringSubscriptionVariables = {
	filter?: ModelSubscriptionGatheringFilterInput | null
	creatorId?: string | null
}

export type OnUpdateGatheringSubscription = {
	onUpdateGathering?: {
		__typename: "Gathering"
		id: string
		title: string
		description?: string | null
		type: GatheringType
		startDate: string
		endDate?: string | null
		address: {
			__typename: "Address"
			addressLine1: string
			addressLine2?: string | null
			addressLine3?: string | null
			city: string
			province: string
			postalCode: string
			country: string
			latitude: number
			longitude: number
		}
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		attendees?: {
			__typename: "ModelGatheringAttendeesConnection"
			items: Array<{
				__typename: "GatheringAttendees"
				id: string
				gatheringId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type OnDeleteGatheringSubscriptionVariables = {
	filter?: ModelSubscriptionGatheringFilterInput | null
	creatorId?: string | null
}

export type OnDeleteGatheringSubscription = {
	onDeleteGathering?: {
		__typename: "Gathering"
		id: string
		title: string
		description?: string | null
		type: GatheringType
		startDate: string
		endDate?: string | null
		address: {
			__typename: "Address"
			addressLine1: string
			addressLine2?: string | null
			addressLine3?: string | null
			city: string
			province: string
			postalCode: string
			country: string
			latitude: number
			longitude: number
		}
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		attendees?: {
			__typename: "ModelGatheringAttendeesConnection"
			items: Array<{
				__typename: "GatheringAttendees"
				id: string
				gatheringId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type OnCreateDonationSubscriptionVariables = {
	filter?: ModelSubscriptionDonationFilterInput | null
	donorId?: string | null
}

export type OnCreateDonationSubscription = {
	onCreateDonation?: {
		__typename: "Donation"
		id: string
		amount: number
		currency: string
		isAnonymous: boolean
		donorId: string
		donor: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		fundraisingCampaignId: string
		fundraisingCampaign?: {
			__typename: "FundraisingCampaign"
			id: string
			title: string
			description?: string | null
			featureImage?: string | null
			type: FundraisingCampaignType
			currentAmount: number
			goal: number
			goalDate: string
			currency: string
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type OnUpdateDonationSubscriptionVariables = {
	filter?: ModelSubscriptionDonationFilterInput | null
	donorId?: string | null
}

export type OnUpdateDonationSubscription = {
	onUpdateDonation?: {
		__typename: "Donation"
		id: string
		amount: number
		currency: string
		isAnonymous: boolean
		donorId: string
		donor: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		fundraisingCampaignId: string
		fundraisingCampaign?: {
			__typename: "FundraisingCampaign"
			id: string
			title: string
			description?: string | null
			featureImage?: string | null
			type: FundraisingCampaignType
			currentAmount: number
			goal: number
			goalDate: string
			currency: string
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type OnDeleteDonationSubscriptionVariables = {
	filter?: ModelSubscriptionDonationFilterInput | null
	donorId?: string | null
}

export type OnDeleteDonationSubscription = {
	onDeleteDonation?: {
		__typename: "Donation"
		id: string
		amount: number
		currency: string
		isAnonymous: boolean
		donorId: string
		donor: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		fundraisingCampaignId: string
		fundraisingCampaign?: {
			__typename: "FundraisingCampaign"
			id: string
			title: string
			description?: string | null
			featureImage?: string | null
			type: FundraisingCampaignType
			currentAmount: number
			goal: number
			goalDate: string
			currency: string
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type OnCreateFundraisingCampaignSubscriptionVariables = {
	filter?: ModelSubscriptionFundraisingCampaignFilterInput | null
	creatorId?: string | null
}

export type OnCreateFundraisingCampaignSubscription = {
	onCreateFundraisingCampaign?: {
		__typename: "FundraisingCampaign"
		id: string
		title: string
		description?: string | null
		featureImage?: string | null
		type: FundraisingCampaignType
		currentAmount: number
		goal: number
		goalDate: string
		currency: string
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		donations?: {
			__typename: "ModelDonationConnection"
			items: Array<{
				__typename: "Donation"
				id: string
				amount: number
				currency: string
				isAnonymous: boolean
				donorId: string
				fundraisingCampaignId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type OnUpdateFundraisingCampaignSubscriptionVariables = {
	filter?: ModelSubscriptionFundraisingCampaignFilterInput | null
	creatorId?: string | null
}

export type OnUpdateFundraisingCampaignSubscription = {
	onUpdateFundraisingCampaign?: {
		__typename: "FundraisingCampaign"
		id: string
		title: string
		description?: string | null
		featureImage?: string | null
		type: FundraisingCampaignType
		currentAmount: number
		goal: number
		goalDate: string
		currency: string
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		donations?: {
			__typename: "ModelDonationConnection"
			items: Array<{
				__typename: "Donation"
				id: string
				amount: number
				currency: string
				isAnonymous: boolean
				donorId: string
				fundraisingCampaignId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type OnDeleteFundraisingCampaignSubscriptionVariables = {
	filter?: ModelSubscriptionFundraisingCampaignFilterInput | null
	creatorId?: string | null
}

export type OnDeleteFundraisingCampaignSubscription = {
	onDeleteFundraisingCampaign?: {
		__typename: "FundraisingCampaign"
		id: string
		title: string
		description?: string | null
		featureImage?: string | null
		type: FundraisingCampaignType
		currentAmount: number
		goal: number
		goalDate: string
		currency: string
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		donations?: {
			__typename: "ModelDonationConnection"
			items: Array<{
				__typename: "Donation"
				id: string
				amount: number
				currency: string
				isAnonymous: boolean
				donorId: string
				fundraisingCampaignId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type OnCreateLikeSubscriptionVariables = {
	filter?: ModelSubscriptionLikeFilterInput | null
	creatorId?: string | null
}

export type OnCreateLikeSubscription = {
	onCreateLike?: {
		__typename: "Like"
		id: string
		announcementId: string
		announcement: {
			__typename: "Announcement"
			id: string
			title: string
			body: string
			images?: Array<string | null> | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		}
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt: string
		updatedAt: string
	} | null
}

export type OnUpdateLikeSubscriptionVariables = {
	filter?: ModelSubscriptionLikeFilterInput | null
	creatorId?: string | null
}

export type OnUpdateLikeSubscription = {
	onUpdateLike?: {
		__typename: "Like"
		id: string
		announcementId: string
		announcement: {
			__typename: "Announcement"
			id: string
			title: string
			body: string
			images?: Array<string | null> | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		}
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt: string
		updatedAt: string
	} | null
}

export type OnDeleteLikeSubscriptionVariables = {
	filter?: ModelSubscriptionLikeFilterInput | null
	creatorId?: string | null
}

export type OnDeleteLikeSubscription = {
	onDeleteLike?: {
		__typename: "Like"
		id: string
		announcementId: string
		announcement: {
			__typename: "Announcement"
			id: string
			title: string
			body: string
			images?: Array<string | null> | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			createdAt?: string | null
			updatedAt?: string | null
		}
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt: string
		updatedAt: string
	} | null
}

export type OnCreateMonthlyPrayerScheduleSubscriptionVariables = {
	filter?: ModelSubscriptionMonthlyPrayerScheduleFilterInput | null
	creatorId?: string | null
}

export type OnCreateMonthlyPrayerScheduleSubscription = {
	onCreateMonthlyPrayerSchedule?: {
		__typename: "MonthlyPrayerSchedule"
		id: string
		year: number
		month: number
		prayerTimes: Array<{
			__typename: "PrayerTime"
			type: PrayerType
			athan: string
			iqamah: string
		}>
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type OnUpdateMonthlyPrayerScheduleSubscriptionVariables = {
	filter?: ModelSubscriptionMonthlyPrayerScheduleFilterInput | null
	creatorId?: string | null
}

export type OnUpdateMonthlyPrayerScheduleSubscription = {
	onUpdateMonthlyPrayerSchedule?: {
		__typename: "MonthlyPrayerSchedule"
		id: string
		year: number
		month: number
		prayerTimes: Array<{
			__typename: "PrayerTime"
			type: PrayerType
			athan: string
			iqamah: string
		}>
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type OnDeleteMonthlyPrayerScheduleSubscriptionVariables = {
	filter?: ModelSubscriptionMonthlyPrayerScheduleFilterInput | null
	creatorId?: string | null
}

export type OnDeleteMonthlyPrayerScheduleSubscription = {
	onDeleteMonthlyPrayerSchedule?: {
		__typename: "MonthlyPrayerSchedule"
		id: string
		year: number
		month: number
		prayerTimes: Array<{
			__typename: "PrayerTime"
			type: PrayerType
			athan: string
			iqamah: string
		}>
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type OnCreateMosqueSubscriptionVariables = {
	filter?: ModelSubscriptionMosqueFilterInput | null
	creatorId?: string | null
}

export type OnCreateMosqueSubscription = {
	onCreateMosque?: {
		__typename: "Mosque"
		id: string
		name: string
		description: string
		images: Array<string | null>
		address: {
			__typename: "Address"
			addressLine1: string
			addressLine2?: string | null
			addressLine3?: string | null
			city: string
			province: string
			postalCode: string
			country: string
			latitude: number
			longitude: number
		}
		hours?: {
			__typename: "Hours"
			monday?: {
				__typename: "Day"
				type: DayType
			} | null
			tuesday?: {
				__typename: "Day"
				type: DayType
			} | null
			wednesday?: {
				__typename: "Day"
				type: DayType
			} | null
			thursday?: {
				__typename: "Day"
				type: DayType
			} | null
			friday?: {
				__typename: "Day"
				type: DayType
			} | null
			saturday?: {
				__typename: "Day"
				type: DayType
			} | null
			sunday?: {
				__typename: "Day"
				type: DayType
			} | null
		} | null
		contactInfo: {
			__typename: "ContactInfo"
			phone?: string | null
			email?: string | null
			website?: string | null
			socialMedia?: {
				__typename: "SocialMedia"
				facebook?: string | null
				instagram?: string | null
				twitter?: string | null
				youtube?: string | null
			} | null
		}
		liveVideoUrl?: string | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		followers?: {
			__typename: "ModelMosqueFollowersConnection"
			items: Array<{
				__typename: "MosqueFollowers"
				id: string
				mosqueId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		announcements?: {
			__typename: "ModelAnnouncementConnection"
			items: Array<{
				__typename: "Announcement"
				id: string
				title: string
				body: string
				images?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		classes?: {
			__typename: "ModelClassConnection"
			items: Array<{
				__typename: "Class"
				id: string
				title: string
				description?: string | null
				startDateTime: string
				endDateTime?: string | null
				recurring: boolean
				daysOfWeek?: Array<DayType> | null
				creatorId: string
				instructorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		committees?: {
			__typename: "ModelCommitteeConnection"
			items: Array<{
				__typename: "Committee"
				id: string
				title: string
				description?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		gatherings?: {
			__typename: "ModelGatheringConnection"
			items: Array<{
				__typename: "Gathering"
				id: string
				title: string
				description?: string | null
				type: GatheringType
				startDate: string
				endDate?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		fundraisingCampaigns?: {
			__typename: "ModelFundraisingCampaignConnection"
			items: Array<{
				__typename: "FundraisingCampaign"
				id: string
				title: string
				description?: string | null
				featureImage?: string | null
				type: FundraisingCampaignType
				currentAmount: number
				goal: number
				goalDate: string
				currency: string
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		monthlyPrayerSchedules?: {
			__typename: "ModelMonthlyPrayerScheduleConnection"
			items: Array<{
				__typename: "MonthlyPrayerSchedule"
				id: string
				year: number
				month: number
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		resources?: {
			__typename: "ModelResourceConnection"
			items: Array<{
				__typename: "Resource"
				id: string
				title: string
				description?: string | null
				type: ResourceType
				url: string
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		services?: {
			__typename: "ModelServiceConnection"
			items: Array<{
				__typename: "Service"
				id: string
				type: ServiceType
				description?: string | null
				documents?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		subscriptions?: {
			__typename: "ModelMosqueSubscriptionConnection"
			items: Array<{
				__typename: "MosqueSubscription"
				id: string
				status: MosqueSubscriptionStatus
				startDate: string
				endDate?: string | null
				stripeSubscriptionId: string
				purchaserId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		volunteerTasks?: {
			__typename: "ModelVolunteerTaskConnection"
			items: Array<{
				__typename: "VolunteerTask"
				id: string
				name: string
				description?: string | null
				startDate: string
				endDate?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		bookmarks?: {
			__typename: "ModelBookmarkConnection"
			items: Array<{
				__typename: "Bookmark"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		likes?: {
			__typename: "ModelLikeConnection"
			items: Array<{
				__typename: "Like"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		comments?: {
			__typename: "ModelCommentConnection"
			items: Array<{
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type OnUpdateMosqueSubscriptionVariables = {
	filter?: ModelSubscriptionMosqueFilterInput | null
	creatorId?: string | null
}

export type OnUpdateMosqueSubscription = {
	onUpdateMosque?: {
		__typename: "Mosque"
		id: string
		name: string
		description: string
		images: Array<string | null>
		address: {
			__typename: "Address"
			addressLine1: string
			addressLine2?: string | null
			addressLine3?: string | null
			city: string
			province: string
			postalCode: string
			country: string
			latitude: number
			longitude: number
		}
		hours?: {
			__typename: "Hours"
			monday?: {
				__typename: "Day"
				type: DayType
			} | null
			tuesday?: {
				__typename: "Day"
				type: DayType
			} | null
			wednesday?: {
				__typename: "Day"
				type: DayType
			} | null
			thursday?: {
				__typename: "Day"
				type: DayType
			} | null
			friday?: {
				__typename: "Day"
				type: DayType
			} | null
			saturday?: {
				__typename: "Day"
				type: DayType
			} | null
			sunday?: {
				__typename: "Day"
				type: DayType
			} | null
		} | null
		contactInfo: {
			__typename: "ContactInfo"
			phone?: string | null
			email?: string | null
			website?: string | null
			socialMedia?: {
				__typename: "SocialMedia"
				facebook?: string | null
				instagram?: string | null
				twitter?: string | null
				youtube?: string | null
			} | null
		}
		liveVideoUrl?: string | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		followers?: {
			__typename: "ModelMosqueFollowersConnection"
			items: Array<{
				__typename: "MosqueFollowers"
				id: string
				mosqueId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		announcements?: {
			__typename: "ModelAnnouncementConnection"
			items: Array<{
				__typename: "Announcement"
				id: string
				title: string
				body: string
				images?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		classes?: {
			__typename: "ModelClassConnection"
			items: Array<{
				__typename: "Class"
				id: string
				title: string
				description?: string | null
				startDateTime: string
				endDateTime?: string | null
				recurring: boolean
				daysOfWeek?: Array<DayType> | null
				creatorId: string
				instructorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		committees?: {
			__typename: "ModelCommitteeConnection"
			items: Array<{
				__typename: "Committee"
				id: string
				title: string
				description?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		gatherings?: {
			__typename: "ModelGatheringConnection"
			items: Array<{
				__typename: "Gathering"
				id: string
				title: string
				description?: string | null
				type: GatheringType
				startDate: string
				endDate?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		fundraisingCampaigns?: {
			__typename: "ModelFundraisingCampaignConnection"
			items: Array<{
				__typename: "FundraisingCampaign"
				id: string
				title: string
				description?: string | null
				featureImage?: string | null
				type: FundraisingCampaignType
				currentAmount: number
				goal: number
				goalDate: string
				currency: string
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		monthlyPrayerSchedules?: {
			__typename: "ModelMonthlyPrayerScheduleConnection"
			items: Array<{
				__typename: "MonthlyPrayerSchedule"
				id: string
				year: number
				month: number
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		resources?: {
			__typename: "ModelResourceConnection"
			items: Array<{
				__typename: "Resource"
				id: string
				title: string
				description?: string | null
				type: ResourceType
				url: string
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		services?: {
			__typename: "ModelServiceConnection"
			items: Array<{
				__typename: "Service"
				id: string
				type: ServiceType
				description?: string | null
				documents?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		subscriptions?: {
			__typename: "ModelMosqueSubscriptionConnection"
			items: Array<{
				__typename: "MosqueSubscription"
				id: string
				status: MosqueSubscriptionStatus
				startDate: string
				endDate?: string | null
				stripeSubscriptionId: string
				purchaserId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		volunteerTasks?: {
			__typename: "ModelVolunteerTaskConnection"
			items: Array<{
				__typename: "VolunteerTask"
				id: string
				name: string
				description?: string | null
				startDate: string
				endDate?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		bookmarks?: {
			__typename: "ModelBookmarkConnection"
			items: Array<{
				__typename: "Bookmark"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		likes?: {
			__typename: "ModelLikeConnection"
			items: Array<{
				__typename: "Like"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		comments?: {
			__typename: "ModelCommentConnection"
			items: Array<{
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type OnDeleteMosqueSubscriptionVariables = {
	filter?: ModelSubscriptionMosqueFilterInput | null
	creatorId?: string | null
}

export type OnDeleteMosqueSubscription = {
	onDeleteMosque?: {
		__typename: "Mosque"
		id: string
		name: string
		description: string
		images: Array<string | null>
		address: {
			__typename: "Address"
			addressLine1: string
			addressLine2?: string | null
			addressLine3?: string | null
			city: string
			province: string
			postalCode: string
			country: string
			latitude: number
			longitude: number
		}
		hours?: {
			__typename: "Hours"
			monday?: {
				__typename: "Day"
				type: DayType
			} | null
			tuesday?: {
				__typename: "Day"
				type: DayType
			} | null
			wednesday?: {
				__typename: "Day"
				type: DayType
			} | null
			thursday?: {
				__typename: "Day"
				type: DayType
			} | null
			friday?: {
				__typename: "Day"
				type: DayType
			} | null
			saturday?: {
				__typename: "Day"
				type: DayType
			} | null
			sunday?: {
				__typename: "Day"
				type: DayType
			} | null
		} | null
		contactInfo: {
			__typename: "ContactInfo"
			phone?: string | null
			email?: string | null
			website?: string | null
			socialMedia?: {
				__typename: "SocialMedia"
				facebook?: string | null
				instagram?: string | null
				twitter?: string | null
				youtube?: string | null
			} | null
		}
		liveVideoUrl?: string | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		followers?: {
			__typename: "ModelMosqueFollowersConnection"
			items: Array<{
				__typename: "MosqueFollowers"
				id: string
				mosqueId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		announcements?: {
			__typename: "ModelAnnouncementConnection"
			items: Array<{
				__typename: "Announcement"
				id: string
				title: string
				body: string
				images?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		classes?: {
			__typename: "ModelClassConnection"
			items: Array<{
				__typename: "Class"
				id: string
				title: string
				description?: string | null
				startDateTime: string
				endDateTime?: string | null
				recurring: boolean
				daysOfWeek?: Array<DayType> | null
				creatorId: string
				instructorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		committees?: {
			__typename: "ModelCommitteeConnection"
			items: Array<{
				__typename: "Committee"
				id: string
				title: string
				description?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		gatherings?: {
			__typename: "ModelGatheringConnection"
			items: Array<{
				__typename: "Gathering"
				id: string
				title: string
				description?: string | null
				type: GatheringType
				startDate: string
				endDate?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		fundraisingCampaigns?: {
			__typename: "ModelFundraisingCampaignConnection"
			items: Array<{
				__typename: "FundraisingCampaign"
				id: string
				title: string
				description?: string | null
				featureImage?: string | null
				type: FundraisingCampaignType
				currentAmount: number
				goal: number
				goalDate: string
				currency: string
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		monthlyPrayerSchedules?: {
			__typename: "ModelMonthlyPrayerScheduleConnection"
			items: Array<{
				__typename: "MonthlyPrayerSchedule"
				id: string
				year: number
				month: number
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		resources?: {
			__typename: "ModelResourceConnection"
			items: Array<{
				__typename: "Resource"
				id: string
				title: string
				description?: string | null
				type: ResourceType
				url: string
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		services?: {
			__typename: "ModelServiceConnection"
			items: Array<{
				__typename: "Service"
				id: string
				type: ServiceType
				description?: string | null
				documents?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		subscriptions?: {
			__typename: "ModelMosqueSubscriptionConnection"
			items: Array<{
				__typename: "MosqueSubscription"
				id: string
				status: MosqueSubscriptionStatus
				startDate: string
				endDate?: string | null
				stripeSubscriptionId: string
				purchaserId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		volunteerTasks?: {
			__typename: "ModelVolunteerTaskConnection"
			items: Array<{
				__typename: "VolunteerTask"
				id: string
				name: string
				description?: string | null
				startDate: string
				endDate?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		bookmarks?: {
			__typename: "ModelBookmarkConnection"
			items: Array<{
				__typename: "Bookmark"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		likes?: {
			__typename: "ModelLikeConnection"
			items: Array<{
				__typename: "Like"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		comments?: {
			__typename: "ModelCommentConnection"
			items: Array<{
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type OnCreateMosqueSubscriptionSubscriptionVariables = {
	filter?: ModelSubscriptionMosqueSubscriptionFilterInput | null
	purchaserId?: string | null
}

export type OnCreateMosqueSubscriptionSubscription = {
	onCreateMosqueSubscription?: {
		__typename: "MosqueSubscription"
		id: string
		status: MosqueSubscriptionStatus
		startDate: string
		endDate?: string | null
		stripeSubscriptionId: string
		purchaserId: string
		purchaser: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type OnUpdateMosqueSubscriptionSubscriptionVariables = {
	filter?: ModelSubscriptionMosqueSubscriptionFilterInput | null
	purchaserId?: string | null
}

export type OnUpdateMosqueSubscriptionSubscription = {
	onUpdateMosqueSubscription?: {
		__typename: "MosqueSubscription"
		id: string
		status: MosqueSubscriptionStatus
		startDate: string
		endDate?: string | null
		stripeSubscriptionId: string
		purchaserId: string
		purchaser: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type OnDeleteMosqueSubscriptionSubscriptionVariables = {
	filter?: ModelSubscriptionMosqueSubscriptionFilterInput | null
	purchaserId?: string | null
}

export type OnDeleteMosqueSubscriptionSubscription = {
	onDeleteMosqueSubscription?: {
		__typename: "MosqueSubscription"
		id: string
		status: MosqueSubscriptionStatus
		startDate: string
		endDate?: string | null
		stripeSubscriptionId: string
		purchaserId: string
		purchaser: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type OnCreateResourceSubscriptionVariables = {
	filter?: ModelSubscriptionResourceFilterInput | null
	creatorId?: string | null
}

export type OnCreateResourceSubscription = {
	onCreateResource?: {
		__typename: "Resource"
		id: string
		title: string
		description?: string | null
		type: ResourceType
		url: string
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type OnUpdateResourceSubscriptionVariables = {
	filter?: ModelSubscriptionResourceFilterInput | null
	creatorId?: string | null
}

export type OnUpdateResourceSubscription = {
	onUpdateResource?: {
		__typename: "Resource"
		id: string
		title: string
		description?: string | null
		type: ResourceType
		url: string
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type OnDeleteResourceSubscriptionVariables = {
	filter?: ModelSubscriptionResourceFilterInput | null
	creatorId?: string | null
}

export type OnDeleteResourceSubscription = {
	onDeleteResource?: {
		__typename: "Resource"
		id: string
		title: string
		description?: string | null
		type: ResourceType
		url: string
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type OnCreateServiceSubscriptionVariables = {
	filter?: ModelSubscriptionServiceFilterInput | null
	creatorId?: string | null
}

export type OnCreateServiceSubscription = {
	onCreateService?: {
		__typename: "Service"
		id: string
		type: ServiceType
		description?: string | null
		documents?: Array<string | null> | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type OnUpdateServiceSubscriptionVariables = {
	filter?: ModelSubscriptionServiceFilterInput | null
	creatorId?: string | null
}

export type OnUpdateServiceSubscription = {
	onUpdateService?: {
		__typename: "Service"
		id: string
		type: ServiceType
		description?: string | null
		documents?: Array<string | null> | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type OnDeleteServiceSubscriptionVariables = {
	filter?: ModelSubscriptionServiceFilterInput | null
	creatorId?: string | null
}

export type OnDeleteServiceSubscription = {
	onDeleteService?: {
		__typename: "Service"
		id: string
		type: ServiceType
		description?: string | null
		documents?: Array<string | null> | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type OnCreateUserSubscriptionVariables = {
	filter?: ModelSubscriptionUserFilterInput | null
	owner?: string | null
}

export type OnCreateUserSubscription = {
	onCreateUser?: {
		__typename: "User"
		id: string
		selfie?: string | null
		firstName: string
		lastName: string
		email: string
		phone?: string | null
		type: UserType
		status: UserStatus
		stripeCustomerId?: string | null
		createdAnnouncements?: {
			__typename: "ModelAnnouncementConnection"
			items: Array<{
				__typename: "Announcement"
				id: string
				title: string
				body: string
				images?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdClasses?: {
			__typename: "ModelClassConnection"
			items: Array<{
				__typename: "Class"
				id: string
				title: string
				description?: string | null
				startDateTime: string
				endDateTime?: string | null
				recurring: boolean
				daysOfWeek?: Array<DayType> | null
				creatorId: string
				instructorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdCommittees?: {
			__typename: "ModelCommitteeConnection"
			items: Array<{
				__typename: "Committee"
				id: string
				title: string
				description?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdGatherings?: {
			__typename: "ModelGatheringConnection"
			items: Array<{
				__typename: "Gathering"
				id: string
				title: string
				description?: string | null
				type: GatheringType
				startDate: string
				endDate?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdFundraisingCampaigns?: {
			__typename: "ModelFundraisingCampaignConnection"
			items: Array<{
				__typename: "FundraisingCampaign"
				id: string
				title: string
				description?: string | null
				featureImage?: string | null
				type: FundraisingCampaignType
				currentAmount: number
				goal: number
				goalDate: string
				currency: string
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdMonthlyPrayerSchedules?: {
			__typename: "ModelMonthlyPrayerScheduleConnection"
			items: Array<{
				__typename: "MonthlyPrayerSchedule"
				id: string
				year: number
				month: number
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdMosques?: {
			__typename: "ModelMosqueConnection"
			items: Array<{
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdResources?: {
			__typename: "ModelResourceConnection"
			items: Array<{
				__typename: "Resource"
				id: string
				title: string
				description?: string | null
				type: ResourceType
				url: string
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdServices?: {
			__typename: "ModelServiceConnection"
			items: Array<{
				__typename: "Service"
				id: string
				type: ServiceType
				description?: string | null
				documents?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdVolunteerTasks?: {
			__typename: "ModelVolunteerTaskConnection"
			items: Array<{
				__typename: "VolunteerTask"
				id: string
				name: string
				description?: string | null
				startDate: string
				endDate?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		donations?: {
			__typename: "ModelDonationConnection"
			items: Array<{
				__typename: "Donation"
				id: string
				amount: number
				currency: string
				isAnonymous: boolean
				donorId: string
				fundraisingCampaignId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		committees?: {
			__typename: "ModelCommitteeMembersConnection"
			items: Array<{
				__typename: "CommitteeMembers"
				id: string
				committeeId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		gatherings?: {
			__typename: "ModelGatheringAttendeesConnection"
			items: Array<{
				__typename: "GatheringAttendees"
				id: string
				gatheringId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		instructingClasses?: {
			__typename: "ModelClassConnection"
			items: Array<{
				__typename: "Class"
				id: string
				title: string
				description?: string | null
				startDateTime: string
				endDateTime?: string | null
				recurring: boolean
				daysOfWeek?: Array<DayType> | null
				creatorId: string
				instructorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		mosques?: {
			__typename: "ModelMosqueFollowersConnection"
			items: Array<{
				__typename: "MosqueFollowers"
				id: string
				mosqueId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		purchasedSubscriptions?: {
			__typename: "ModelMosqueSubscriptionConnection"
			items: Array<{
				__typename: "MosqueSubscription"
				id: string
				status: MosqueSubscriptionStatus
				startDate: string
				endDate?: string | null
				stripeSubscriptionId: string
				purchaserId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		volunteerTasks?: {
			__typename: "ModelVolunteerTaskUserConnection"
			items: Array<{
				__typename: "VolunteerTaskUser"
				id: string
				userId: string
				volunteerTaskId: string
				createdAt: string
				updatedAt: string
				owner?: string | null
				creatorId?: string | null
			} | null>
			nextToken?: string | null
		} | null
		bookmarks?: {
			__typename: "ModelBookmarkConnection"
			items: Array<{
				__typename: "Bookmark"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		likes?: {
			__typename: "ModelLikeConnection"
			items: Array<{
				__typename: "Like"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		comments?: {
			__typename: "ModelCommentConnection"
			items: Array<{
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
		owner?: string | null
	} | null
}

export type OnUpdateUserSubscriptionVariables = {
	filter?: ModelSubscriptionUserFilterInput | null
	owner?: string | null
}

export type OnUpdateUserSubscription = {
	onUpdateUser?: {
		__typename: "User"
		id: string
		selfie?: string | null
		firstName: string
		lastName: string
		email: string
		phone?: string | null
		type: UserType
		status: UserStatus
		stripeCustomerId?: string | null
		createdAnnouncements?: {
			__typename: "ModelAnnouncementConnection"
			items: Array<{
				__typename: "Announcement"
				id: string
				title: string
				body: string
				images?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdClasses?: {
			__typename: "ModelClassConnection"
			items: Array<{
				__typename: "Class"
				id: string
				title: string
				description?: string | null
				startDateTime: string
				endDateTime?: string | null
				recurring: boolean
				daysOfWeek?: Array<DayType> | null
				creatorId: string
				instructorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdCommittees?: {
			__typename: "ModelCommitteeConnection"
			items: Array<{
				__typename: "Committee"
				id: string
				title: string
				description?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdGatherings?: {
			__typename: "ModelGatheringConnection"
			items: Array<{
				__typename: "Gathering"
				id: string
				title: string
				description?: string | null
				type: GatheringType
				startDate: string
				endDate?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdFundraisingCampaigns?: {
			__typename: "ModelFundraisingCampaignConnection"
			items: Array<{
				__typename: "FundraisingCampaign"
				id: string
				title: string
				description?: string | null
				featureImage?: string | null
				type: FundraisingCampaignType
				currentAmount: number
				goal: number
				goalDate: string
				currency: string
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdMonthlyPrayerSchedules?: {
			__typename: "ModelMonthlyPrayerScheduleConnection"
			items: Array<{
				__typename: "MonthlyPrayerSchedule"
				id: string
				year: number
				month: number
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdMosques?: {
			__typename: "ModelMosqueConnection"
			items: Array<{
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdResources?: {
			__typename: "ModelResourceConnection"
			items: Array<{
				__typename: "Resource"
				id: string
				title: string
				description?: string | null
				type: ResourceType
				url: string
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdServices?: {
			__typename: "ModelServiceConnection"
			items: Array<{
				__typename: "Service"
				id: string
				type: ServiceType
				description?: string | null
				documents?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdVolunteerTasks?: {
			__typename: "ModelVolunteerTaskConnection"
			items: Array<{
				__typename: "VolunteerTask"
				id: string
				name: string
				description?: string | null
				startDate: string
				endDate?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		donations?: {
			__typename: "ModelDonationConnection"
			items: Array<{
				__typename: "Donation"
				id: string
				amount: number
				currency: string
				isAnonymous: boolean
				donorId: string
				fundraisingCampaignId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		committees?: {
			__typename: "ModelCommitteeMembersConnection"
			items: Array<{
				__typename: "CommitteeMembers"
				id: string
				committeeId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		gatherings?: {
			__typename: "ModelGatheringAttendeesConnection"
			items: Array<{
				__typename: "GatheringAttendees"
				id: string
				gatheringId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		instructingClasses?: {
			__typename: "ModelClassConnection"
			items: Array<{
				__typename: "Class"
				id: string
				title: string
				description?: string | null
				startDateTime: string
				endDateTime?: string | null
				recurring: boolean
				daysOfWeek?: Array<DayType> | null
				creatorId: string
				instructorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		mosques?: {
			__typename: "ModelMosqueFollowersConnection"
			items: Array<{
				__typename: "MosqueFollowers"
				id: string
				mosqueId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		purchasedSubscriptions?: {
			__typename: "ModelMosqueSubscriptionConnection"
			items: Array<{
				__typename: "MosqueSubscription"
				id: string
				status: MosqueSubscriptionStatus
				startDate: string
				endDate?: string | null
				stripeSubscriptionId: string
				purchaserId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		volunteerTasks?: {
			__typename: "ModelVolunteerTaskUserConnection"
			items: Array<{
				__typename: "VolunteerTaskUser"
				id: string
				userId: string
				volunteerTaskId: string
				createdAt: string
				updatedAt: string
				owner?: string | null
				creatorId?: string | null
			} | null>
			nextToken?: string | null
		} | null
		bookmarks?: {
			__typename: "ModelBookmarkConnection"
			items: Array<{
				__typename: "Bookmark"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		likes?: {
			__typename: "ModelLikeConnection"
			items: Array<{
				__typename: "Like"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		comments?: {
			__typename: "ModelCommentConnection"
			items: Array<{
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
		owner?: string | null
	} | null
}

export type OnDeleteUserSubscriptionVariables = {
	filter?: ModelSubscriptionUserFilterInput | null
	owner?: string | null
}

export type OnDeleteUserSubscription = {
	onDeleteUser?: {
		__typename: "User"
		id: string
		selfie?: string | null
		firstName: string
		lastName: string
		email: string
		phone?: string | null
		type: UserType
		status: UserStatus
		stripeCustomerId?: string | null
		createdAnnouncements?: {
			__typename: "ModelAnnouncementConnection"
			items: Array<{
				__typename: "Announcement"
				id: string
				title: string
				body: string
				images?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdClasses?: {
			__typename: "ModelClassConnection"
			items: Array<{
				__typename: "Class"
				id: string
				title: string
				description?: string | null
				startDateTime: string
				endDateTime?: string | null
				recurring: boolean
				daysOfWeek?: Array<DayType> | null
				creatorId: string
				instructorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdCommittees?: {
			__typename: "ModelCommitteeConnection"
			items: Array<{
				__typename: "Committee"
				id: string
				title: string
				description?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdGatherings?: {
			__typename: "ModelGatheringConnection"
			items: Array<{
				__typename: "Gathering"
				id: string
				title: string
				description?: string | null
				type: GatheringType
				startDate: string
				endDate?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdFundraisingCampaigns?: {
			__typename: "ModelFundraisingCampaignConnection"
			items: Array<{
				__typename: "FundraisingCampaign"
				id: string
				title: string
				description?: string | null
				featureImage?: string | null
				type: FundraisingCampaignType
				currentAmount: number
				goal: number
				goalDate: string
				currency: string
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdMonthlyPrayerSchedules?: {
			__typename: "ModelMonthlyPrayerScheduleConnection"
			items: Array<{
				__typename: "MonthlyPrayerSchedule"
				id: string
				year: number
				month: number
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdMosques?: {
			__typename: "ModelMosqueConnection"
			items: Array<{
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdResources?: {
			__typename: "ModelResourceConnection"
			items: Array<{
				__typename: "Resource"
				id: string
				title: string
				description?: string | null
				type: ResourceType
				url: string
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdServices?: {
			__typename: "ModelServiceConnection"
			items: Array<{
				__typename: "Service"
				id: string
				type: ServiceType
				description?: string | null
				documents?: Array<string | null> | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdVolunteerTasks?: {
			__typename: "ModelVolunteerTaskConnection"
			items: Array<{
				__typename: "VolunteerTask"
				id: string
				name: string
				description?: string | null
				startDate: string
				endDate?: string | null
				creatorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		donations?: {
			__typename: "ModelDonationConnection"
			items: Array<{
				__typename: "Donation"
				id: string
				amount: number
				currency: string
				isAnonymous: boolean
				donorId: string
				fundraisingCampaignId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		committees?: {
			__typename: "ModelCommitteeMembersConnection"
			items: Array<{
				__typename: "CommitteeMembers"
				id: string
				committeeId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		gatherings?: {
			__typename: "ModelGatheringAttendeesConnection"
			items: Array<{
				__typename: "GatheringAttendees"
				id: string
				gatheringId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		instructingClasses?: {
			__typename: "ModelClassConnection"
			items: Array<{
				__typename: "Class"
				id: string
				title: string
				description?: string | null
				startDateTime: string
				endDateTime?: string | null
				recurring: boolean
				daysOfWeek?: Array<DayType> | null
				creatorId: string
				instructorId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		mosques?: {
			__typename: "ModelMosqueFollowersConnection"
			items: Array<{
				__typename: "MosqueFollowers"
				id: string
				mosqueId: string
				userId: string
				createdAt: string
				updatedAt: string
				creatorId?: string | null
				owner?: string | null
			} | null>
			nextToken?: string | null
		} | null
		purchasedSubscriptions?: {
			__typename: "ModelMosqueSubscriptionConnection"
			items: Array<{
				__typename: "MosqueSubscription"
				id: string
				status: MosqueSubscriptionStatus
				startDate: string
				endDate?: string | null
				stripeSubscriptionId: string
				purchaserId: string
				mosqueId: string
				createdAt?: string | null
				updatedAt?: string | null
			} | null>
			nextToken?: string | null
		} | null
		volunteerTasks?: {
			__typename: "ModelVolunteerTaskUserConnection"
			items: Array<{
				__typename: "VolunteerTaskUser"
				id: string
				userId: string
				volunteerTaskId: string
				createdAt: string
				updatedAt: string
				owner?: string | null
				creatorId?: string | null
			} | null>
			nextToken?: string | null
		} | null
		bookmarks?: {
			__typename: "ModelBookmarkConnection"
			items: Array<{
				__typename: "Bookmark"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		likes?: {
			__typename: "ModelLikeConnection"
			items: Array<{
				__typename: "Like"
				id: string
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		comments?: {
			__typename: "ModelCommentConnection"
			items: Array<{
				__typename: "Comment"
				id: string
				text: string
				parentCommentId?: string | null
				announcementId: string
				creatorId: string
				mosqueId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
		owner?: string | null
	} | null
}

export type OnCreateVolunteerTaskSubscriptionVariables = {
	filter?: ModelSubscriptionVolunteerTaskFilterInput | null
	creatorId?: string | null
}

export type OnCreateVolunteerTaskSubscription = {
	onCreateVolunteerTask?: {
		__typename: "VolunteerTask"
		id: string
		name: string
		description?: string | null
		startDate: string
		endDate?: string | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		volunteers?: {
			__typename: "ModelVolunteerTaskUserConnection"
			items: Array<{
				__typename: "VolunteerTaskUser"
				id: string
				userId: string
				volunteerTaskId: string
				createdAt: string
				updatedAt: string
				owner?: string | null
				creatorId?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type OnUpdateVolunteerTaskSubscriptionVariables = {
	filter?: ModelSubscriptionVolunteerTaskFilterInput | null
	creatorId?: string | null
}

export type OnUpdateVolunteerTaskSubscription = {
	onUpdateVolunteerTask?: {
		__typename: "VolunteerTask"
		id: string
		name: string
		description?: string | null
		startDate: string
		endDate?: string | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		volunteers?: {
			__typename: "ModelVolunteerTaskUserConnection"
			items: Array<{
				__typename: "VolunteerTaskUser"
				id: string
				userId: string
				volunteerTaskId: string
				createdAt: string
				updatedAt: string
				owner?: string | null
				creatorId?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type OnDeleteVolunteerTaskSubscriptionVariables = {
	filter?: ModelSubscriptionVolunteerTaskFilterInput | null
	creatorId?: string | null
}

export type OnDeleteVolunteerTaskSubscription = {
	onDeleteVolunteerTask?: {
		__typename: "VolunteerTask"
		id: string
		name: string
		description?: string | null
		startDate: string
		endDate?: string | null
		creatorId: string
		creator: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		mosqueId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		volunteers?: {
			__typename: "ModelVolunteerTaskUserConnection"
			items: Array<{
				__typename: "VolunteerTaskUser"
				id: string
				userId: string
				volunteerTaskId: string
				createdAt: string
				updatedAt: string
				owner?: string | null
				creatorId?: string | null
			} | null>
			nextToken?: string | null
		} | null
		createdAt?: string | null
		updatedAt?: string | null
	} | null
}

export type OnCreateCommitteeMembersSubscriptionVariables = {
	filter?: ModelSubscriptionCommitteeMembersFilterInput | null
	creatorId?: string | null
	owner?: string | null
}

export type OnCreateCommitteeMembersSubscription = {
	onCreateCommitteeMembers?: {
		__typename: "CommitteeMembers"
		id: string
		committeeId: string
		userId: string
		committee: {
			__typename: "Committee"
			id: string
			title: string
			description?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			members?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		user: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		createdAt: string
		updatedAt: string
		creatorId?: string | null
		owner?: string | null
	} | null
}

export type OnUpdateCommitteeMembersSubscriptionVariables = {
	filter?: ModelSubscriptionCommitteeMembersFilterInput | null
	creatorId?: string | null
	owner?: string | null
}

export type OnUpdateCommitteeMembersSubscription = {
	onUpdateCommitteeMembers?: {
		__typename: "CommitteeMembers"
		id: string
		committeeId: string
		userId: string
		committee: {
			__typename: "Committee"
			id: string
			title: string
			description?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			members?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		user: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		createdAt: string
		updatedAt: string
		creatorId?: string | null
		owner?: string | null
	} | null
}

export type OnDeleteCommitteeMembersSubscriptionVariables = {
	filter?: ModelSubscriptionCommitteeMembersFilterInput | null
	creatorId?: string | null
	owner?: string | null
}

export type OnDeleteCommitteeMembersSubscription = {
	onDeleteCommitteeMembers?: {
		__typename: "CommitteeMembers"
		id: string
		committeeId: string
		userId: string
		committee: {
			__typename: "Committee"
			id: string
			title: string
			description?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			members?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		user: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		createdAt: string
		updatedAt: string
		creatorId?: string | null
		owner?: string | null
	} | null
}

export type OnCreateGatheringAttendeesSubscriptionVariables = {
	filter?: ModelSubscriptionGatheringAttendeesFilterInput | null
	creatorId?: string | null
	owner?: string | null
}

export type OnCreateGatheringAttendeesSubscription = {
	onCreateGatheringAttendees?: {
		__typename: "GatheringAttendees"
		id: string
		gatheringId: string
		userId: string
		gathering: {
			__typename: "Gathering"
			id: string
			title: string
			description?: string | null
			type: GatheringType
			startDate: string
			endDate?: string | null
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			attendees?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		user: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		createdAt: string
		updatedAt: string
		creatorId?: string | null
		owner?: string | null
	} | null
}

export type OnUpdateGatheringAttendeesSubscriptionVariables = {
	filter?: ModelSubscriptionGatheringAttendeesFilterInput | null
	creatorId?: string | null
	owner?: string | null
}

export type OnUpdateGatheringAttendeesSubscription = {
	onUpdateGatheringAttendees?: {
		__typename: "GatheringAttendees"
		id: string
		gatheringId: string
		userId: string
		gathering: {
			__typename: "Gathering"
			id: string
			title: string
			description?: string | null
			type: GatheringType
			startDate: string
			endDate?: string | null
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			attendees?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		user: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		createdAt: string
		updatedAt: string
		creatorId?: string | null
		owner?: string | null
	} | null
}

export type OnDeleteGatheringAttendeesSubscriptionVariables = {
	filter?: ModelSubscriptionGatheringAttendeesFilterInput | null
	creatorId?: string | null
	owner?: string | null
}

export type OnDeleteGatheringAttendeesSubscription = {
	onDeleteGatheringAttendees?: {
		__typename: "GatheringAttendees"
		id: string
		gatheringId: string
		userId: string
		gathering: {
			__typename: "Gathering"
			id: string
			title: string
			description?: string | null
			type: GatheringType
			startDate: string
			endDate?: string | null
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			attendees?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		user: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		createdAt: string
		updatedAt: string
		creatorId?: string | null
		owner?: string | null
	} | null
}

export type OnCreateMosqueFollowersSubscriptionVariables = {
	filter?: ModelSubscriptionMosqueFollowersFilterInput | null
	creatorId?: string | null
	owner?: string | null
}

export type OnCreateMosqueFollowersSubscription = {
	onCreateMosqueFollowers?: {
		__typename: "MosqueFollowers"
		id: string
		mosqueId: string
		userId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		user: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		createdAt: string
		updatedAt: string
		creatorId?: string | null
		owner?: string | null
	} | null
}

export type OnUpdateMosqueFollowersSubscriptionVariables = {
	filter?: ModelSubscriptionMosqueFollowersFilterInput | null
	creatorId?: string | null
	owner?: string | null
}

export type OnUpdateMosqueFollowersSubscription = {
	onUpdateMosqueFollowers?: {
		__typename: "MosqueFollowers"
		id: string
		mosqueId: string
		userId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		user: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		createdAt: string
		updatedAt: string
		creatorId?: string | null
		owner?: string | null
	} | null
}

export type OnDeleteMosqueFollowersSubscriptionVariables = {
	filter?: ModelSubscriptionMosqueFollowersFilterInput | null
	creatorId?: string | null
	owner?: string | null
}

export type OnDeleteMosqueFollowersSubscription = {
	onDeleteMosqueFollowers?: {
		__typename: "MosqueFollowers"
		id: string
		mosqueId: string
		userId: string
		mosque: {
			__typename: "Mosque"
			id: string
			name: string
			description: string
			images: Array<string | null>
			address: {
				__typename: "Address"
				addressLine1: string
				addressLine2?: string | null
				addressLine3?: string | null
				city: string
				province: string
				postalCode: string
				country: string
				latitude: number
				longitude: number
			}
			hours?: {
				__typename: "Hours"
			} | null
			contactInfo: {
				__typename: "ContactInfo"
				phone?: string | null
				email?: string | null
				website?: string | null
			}
			liveVideoUrl?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			followers?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			announcements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			classes?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			fundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			monthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			resources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			services?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			subscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		user: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		createdAt: string
		updatedAt: string
		creatorId?: string | null
		owner?: string | null
	} | null
}

export type OnCreateVolunteerTaskUserSubscriptionVariables = {
	filter?: ModelSubscriptionVolunteerTaskUserFilterInput | null
	owner?: string | null
	creatorId?: string | null
}

export type OnCreateVolunteerTaskUserSubscription = {
	onCreateVolunteerTaskUser?: {
		__typename: "VolunteerTaskUser"
		id: string
		userId: string
		volunteerTaskId: string
		user: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		volunteerTask: {
			__typename: "VolunteerTask"
			id: string
			name: string
			description?: string | null
			startDate: string
			endDate?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			volunteers?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt: string
		updatedAt: string
		owner?: string | null
		creatorId?: string | null
	} | null
}

export type OnUpdateVolunteerTaskUserSubscriptionVariables = {
	filter?: ModelSubscriptionVolunteerTaskUserFilterInput | null
	owner?: string | null
	creatorId?: string | null
}

export type OnUpdateVolunteerTaskUserSubscription = {
	onUpdateVolunteerTaskUser?: {
		__typename: "VolunteerTaskUser"
		id: string
		userId: string
		volunteerTaskId: string
		user: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		volunteerTask: {
			__typename: "VolunteerTask"
			id: string
			name: string
			description?: string | null
			startDate: string
			endDate?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			volunteers?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt: string
		updatedAt: string
		owner?: string | null
		creatorId?: string | null
	} | null
}

export type OnDeleteVolunteerTaskUserSubscriptionVariables = {
	filter?: ModelSubscriptionVolunteerTaskUserFilterInput | null
	owner?: string | null
	creatorId?: string | null
}

export type OnDeleteVolunteerTaskUserSubscription = {
	onDeleteVolunteerTaskUser?: {
		__typename: "VolunteerTaskUser"
		id: string
		userId: string
		volunteerTaskId: string
		user: {
			__typename: "User"
			id: string
			selfie?: string | null
			firstName: string
			lastName: string
			email: string
			phone?: string | null
			type: UserType
			status: UserStatus
			stripeCustomerId?: string | null
			createdAnnouncements?: {
				__typename: "ModelAnnouncementConnection"
				nextToken?: string | null
			} | null
			createdClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			createdCommittees?: {
				__typename: "ModelCommitteeConnection"
				nextToken?: string | null
			} | null
			createdGatherings?: {
				__typename: "ModelGatheringConnection"
				nextToken?: string | null
			} | null
			createdFundraisingCampaigns?: {
				__typename: "ModelFundraisingCampaignConnection"
				nextToken?: string | null
			} | null
			createdMonthlyPrayerSchedules?: {
				__typename: "ModelMonthlyPrayerScheduleConnection"
				nextToken?: string | null
			} | null
			createdMosques?: {
				__typename: "ModelMosqueConnection"
				nextToken?: string | null
			} | null
			createdResources?: {
				__typename: "ModelResourceConnection"
				nextToken?: string | null
			} | null
			createdServices?: {
				__typename: "ModelServiceConnection"
				nextToken?: string | null
			} | null
			createdVolunteerTasks?: {
				__typename: "ModelVolunteerTaskConnection"
				nextToken?: string | null
			} | null
			donations?: {
				__typename: "ModelDonationConnection"
				nextToken?: string | null
			} | null
			committees?: {
				__typename: "ModelCommitteeMembersConnection"
				nextToken?: string | null
			} | null
			gatherings?: {
				__typename: "ModelGatheringAttendeesConnection"
				nextToken?: string | null
			} | null
			instructingClasses?: {
				__typename: "ModelClassConnection"
				nextToken?: string | null
			} | null
			mosques?: {
				__typename: "ModelMosqueFollowersConnection"
				nextToken?: string | null
			} | null
			purchasedSubscriptions?: {
				__typename: "ModelMosqueSubscriptionConnection"
				nextToken?: string | null
			} | null
			volunteerTasks?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			bookmarks?: {
				__typename: "ModelBookmarkConnection"
				nextToken?: string | null
			} | null
			likes?: {
				__typename: "ModelLikeConnection"
				nextToken?: string | null
			} | null
			comments?: {
				__typename: "ModelCommentConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
			owner?: string | null
		}
		volunteerTask: {
			__typename: "VolunteerTask"
			id: string
			name: string
			description?: string | null
			startDate: string
			endDate?: string | null
			creatorId: string
			creator: {
				__typename: "User"
				id: string
				selfie?: string | null
				firstName: string
				lastName: string
				email: string
				phone?: string | null
				type: UserType
				status: UserStatus
				stripeCustomerId?: string | null
				createdAt?: string | null
				updatedAt?: string | null
				owner?: string | null
			}
			mosqueId: string
			mosque: {
				__typename: "Mosque"
				id: string
				name: string
				description: string
				images: Array<string | null>
				liveVideoUrl?: string | null
				creatorId: string
				createdAt?: string | null
				updatedAt?: string | null
			}
			volunteers?: {
				__typename: "ModelVolunteerTaskUserConnection"
				nextToken?: string | null
			} | null
			createdAt?: string | null
			updatedAt?: string | null
		}
		createdAt: string
		updatedAt: string
		owner?: string | null
		creatorId?: string | null
	} | null
}
