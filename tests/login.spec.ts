import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { loginData } from '../test_data/loginData';

test('User can login successfully', async ({ page }) => {

    // Launch website
    await page.goto('https://www.automationexercise.com/');

    const loginPage = new LoginPage(page);

    // Navigate to Login page
    await loginPage.openLoginPage();

    // Login
    await loginPage.login(
        loginData.email,
        loginData.password
    );

    // Verify successful login
    await loginPage.verifyLoginSuccessful();
});