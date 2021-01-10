import * as ReactIcons from "react-icons/fa";
import type { IconType } from "react-icons/lib";
import siteConfig from "~/site-config";

export function useSocials() {
  const socials: { href: string; icon: IconType; name: string }[] = Object.keys(
    siteConfig.socials,
  ).map((accountName) => {
    return {
      href: siteConfig.socials[accountName],
      icon: ReactIcons[`Fa${accountName}`],
      name: accountName,
    };
  });
  return socials;
}

export function useMainSocials() {
  return useSocials().filter((e) => siteConfig.mainSocials.includes(e.name));
}
