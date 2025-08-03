import { flag } from 'flags/next';

export const summerHeroFlag = flag({
  key: 'summer-hero-2025',
  defaultValue: true,
  decide() {
    return Math.random() < 0.5; // Randomly enable or disable the hero section
  },
});

export const summerDiscountFlag = flag({
  key: 'summer-discount-banner',
  decide() {
    return Math.random() < 0.5; // Randomly enable or disable the discount banner
  },
});

export const premiumPromoFlag = flag({
  key: 'premium-summer-promo',
  decide() {
    return Math.random() < 0.5; // Randomly enable or disable the premium promo
  },
});

export const countdownTimerFlag = flag({
  key: 'countdown-timer',
  decide() {
    return Math.random() < 0.5; // Randomly enable or disable the countdown timer
  },
});
