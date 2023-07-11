import { uid } from 'uid';

export const paymentMethodsResponse = {
  id: uid(21),
  object: 'payment_method',
  billing_details: {
    address: {
      city: null,
      country: null,
      line1: null,
      line2: null,
      postal_code: null,
      state: null,
    },
    email: null,
    name: null,
    phone: null,
  },
  card: {
    brand: 'visa',
    checks: {
      address_line1_check: null,
      address_postal_code_check: null,
      cvc_check: 'unchecked',
    },
    country: 'US',
    exp_month: 8,
    exp_year: 2024,
    fingerprint: '35j5m4qN0XCkMq7u',
    funding: 'credit',
    generated_from: null,
    last4: '4242',
    networks: {
      available: ['visa'],
      preferred: null,
    },
    three_d_secure_usage: {
      supported: true,
    },
    wallet: null,
  },
  created: 1681406647,
  customer: null,
  livemode: false,
  metadata: {},
  type: 'card',
};
