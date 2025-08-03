import { Home } from '@/components/Home';
import {
  countdownTimerFlag,
  premiumPromoFlag,
  summerDiscountFlag,
  summerHeroFlag,
} from '@/flags';

export default async function Page() {
  const showSummerHero = await summerHeroFlag();
  const showDiscount = await summerDiscountFlag();
  const showPremiumPromo = await premiumPromoFlag();
  const showCountdown = await countdownTimerFlag();

  return (
    <Home
      showSummerHero={showSummerHero}
      showDiscount={showDiscount}
      showPremiumPromo={showPremiumPromo}
      showCountdown={showCountdown}
    />
  );
}
