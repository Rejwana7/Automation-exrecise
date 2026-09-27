import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly signupLoginLink: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly loggedInText: Locator;

    constructor(page: Page) {
        this.page = page;

        this.signupLoginLink = page.getByRole('link', {
            name: 'Signup / Login'
        });

        this.emailInput = page.locator('[data-qa="login-email"]');
        this.passwordInput = page.locator('[data-qa="login-password"]');

        this.loginButton = page.getByRole('button', {
            name: 'Login'
        });

        this.loggedInText = page.getByText('Logged in as');
    }

    async openLoginPage() {
        await this.signupLoginLink.click();
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async verifyLoginSuccessful() {
        await expect(this.loggedInText).toBeVisible();
    }
}