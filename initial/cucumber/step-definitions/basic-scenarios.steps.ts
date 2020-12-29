import { loadFeature, defineFeature } from 'jest-cucumber'

defineFeature(loadFeature('cucumber/features/basic-scenarios.feature'), (test) => {
	test('Entering a correct password', ({ given, when, then }) => {
		given('I have previously created a password', () => {
			pending()
		})
		when('I enter my password correctly', () => {
			pending()
		})
		then('I should be granted access', () => {
			pending()
		})
	})
})
