import { loadFeature, defineFeature } from 'jest-cucumber'
import { PasswordValidator } from '../../src/password-validator'

defineFeature(loadFeature('cucumber/features/basic-scenarios.feature'), (test) => {
	const passwordValidator = new PasswordValidator()
	let accessGranted = false

	test('Entering a correct password', ({ given, when, then }) => {
		given('I have previously created a password', () => {
			passwordValidator.setPassword('1234')
		})
		when('I enter my password correctly', () => {
			accessGranted = passwordValidator.validatePassword('1234')
		})
		then('I should be granted access', () => {
			expect(accessGranted).toBe(true)
		})
	})
})
