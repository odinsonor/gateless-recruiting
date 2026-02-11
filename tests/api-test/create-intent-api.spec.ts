import { test, expect } from '@playwright/test';

// Define the shape of a user object for type safety
interface Intent {
  amount: number;
  currency: string;
  customer_id: string;
  payment_method_id: string;
  capture_method: string;
  metadata: Metadata;
}

interface Metadata {
    orderId: string;
}

test.describe('Create Intent API', () => {

    test('Create Intent through the API endpoint', async ({ request }) => {
        
        const metadata: Metadata = {
            orderId: 'ORD-020202020202',
        };

        const newIntent: Intent = {
            amount: 1234,
            currency: 'USD',
            customer_id: 'customer_automation_02',
            payment_method_id: 'pm_fake_mastercard',
            capture_method: 'automatic',
            metadata: metadata
        };

        const response = await request.post('http://localhost:3001/payment_intents',{
            data:newIntent,
            headers: {'Authorization': 'Bearer test_key',
                      'Idempotency-Key': '550e8400-e29b-41d4-a716-446655440000',
                      'Content-Type': 'application/json'}
        });

        // Assert that the response status is OK (200-299 range)
        await expect(response).toBeOK();

        // Parse the response body as JSON and assert its structure
        const responseBody: Intent = await response.json();
        expect(responseBody).toHaveProperty('id');
    });
});