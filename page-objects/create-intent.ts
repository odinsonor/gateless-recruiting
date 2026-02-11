import { Locator, Page } from "@playwright/test";
import BasePage from "../lib/basepage.ts";

export class createIntentPage extends BasePage {

     readonly amountBox: Locator;
     readonly currencySelection: Locator;
     readonly customerID: Locator;
     readonly paymentMethod: Locator;
     readonly captureMethod: Locator;
     readonly orderID: Locator;
     readonly createPaymentIntent: Locator;


     constructor(page: Page) {
        super(page);
        
        this.amountBox = page.getByRole('textbox', { name: 'amount' });
        this.currencySelection = page.getByRole('combobox', { name: 'currency' });
        this.customerID = page.locator('#customer_id');
        this.paymentMethod = page.locator('#payment_method');
        this.captureMethod = page.locator('#capture_method');
        this.orderID = page.locator('#order_id');
        this.createPaymentIntent = page.locator('//*[@id="root"]/div/main/div[2]/div/div/form/div[6]/button' );
        
    }

    /**
     * Navigate to Create Intent page
     */
    async navigateTo(url: string) {
        await this.page.goto(url);
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Enter amount field
     */
    async enterAmount(amount: string) {
        await this.type(this.amountBox, amount);
    }

    /**
     * Select currency field
     */
    async selectCurrency(currency: string) {
        await this.selectOption(this.currencySelection, currency);
    }

    /**
     * Enter Customer ID field
     */
    async enterCustomerId(customerid: string) {
        await this.type(this.customerID, customerid);
    }

    /**
     * Select Payment Method field
     */
    async selectPaymentMethod(payment: string) {
        await this.selectOption(this.paymentMethod, payment);
    }

    /**
     * Select Capture Method field
     */
    async selectCaptureMethod(capture: string) {
        await this.selectOption(this.captureMethod, capture);
    }

    /**
     * Enter amount field
     */
    async enterOrderId(orderid: string) {
        await this.type(this.orderID, orderid);
    }

    /**
     * Click Create Payment Intent button
     */
    async clickCreateIntent() {
        await this.click(this.createPaymentIntent);
    }
}