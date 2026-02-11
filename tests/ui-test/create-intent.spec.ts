import { test, expect } from '@playwright/test';
import { createIntentPage } from '../../page-objects/create-intent';


test.describe('Create Intent Functionality', () => {

  test('Create successfull Intent', async ({ page }) => {

    const createIntent = new createIntentPage(page);
    await createIntent.navigateTo('http://localhost:3000/');
    await createIntent.enterAmount ('50');
    await createIntent.selectCurrency('EUR')
    await createIntent.enterCustomerId('customer_automation_01');
    await createIntent.selectPaymentMethod('pm_fake_mastercard')
    await createIntent.selectCaptureMethod('automatic');
    await createIntent.enterOrderId('ORD-010101010101');
    await createIntent.clickCreateIntent();

  });

})