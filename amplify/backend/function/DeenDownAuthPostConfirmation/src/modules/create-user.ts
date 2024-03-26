import { ENVS } from "@deendown/common-layer/configs"
import { DynamoDBService } from "@deendown/common-layer/services"
import { API } from "@deendown/common-layer/types"

import type { Event } from "../event"

const _ddbService = new DynamoDBService()

export default async (event: Event) => {
	const {
		request: {
			userAttributes: {
				sub: userId,
				email,
				name,
				"custom:user_type": userType,
			},
		},
	} = event

	const now = Date.now().toString()
	const user: API.User = {
		__typename: "User",
		id: userId,
		email: email,
		name: name,
		status: API.UserStatus.ACTIVE,
		type:
			userType === API.UserType.ADMIN
				? API.UserType.ADMIN
				: API.UserType.PLAYER,
		updatedAt: now,
		createdAt: now,
	}

	await _ddbService.createItem({
		tableName: ENVS.DYNAMODB_TABLES.User,
		item: user,
	})

	return event
}
