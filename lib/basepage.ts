import { Page, Locator} from '@playwright/test';

export default abstract class BasePage {
  protected page: Page;
  protected readonly defaultTimeout = 15000;

  /**
   * @param page Playwright Page object
   */
  protected constructor(page: Page) {
    this.page = page;
  }

  /**
   * Click on web element
   */
  async click(locator: Locator, waitForPageLoad = false): Promise<void> {
    await locator.focus();
    await locator.click();
    if (waitForPageLoad) { // to wait for page load after click
      await this.page.waitForLoadState('networkidle');
    }
  }

  /**
   * Type text into web element
   */
  async type(locator: Locator, text: string, waitForPageLoad = false): Promise<void> {
    await locator.focus();
    await locator.fill('');
    await locator.fill(text);
    if (waitForPageLoad) { // to wait for page load after entering the value
      await locator.press('Tab');
      await this.page.waitForLoadState('networkidle');
    }
  }
 
  /**
   * Select value from dropdown in <Select>
   */
  async selectOption(locator: Locator, value: string): Promise<void> {
    await locator.waitFor({ state: 'visible', timeout: this.defaultTimeout });
    await locator.selectOption({ value });
  }
}