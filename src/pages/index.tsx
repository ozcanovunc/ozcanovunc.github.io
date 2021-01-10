import * as React from "react";
import { Button, Heading, Icon, Stack, Wrap, WrapItem } from "@chakra-ui/react";
import Logo from "@/components/logo";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { useMainSocials } from "@/hooks/app";
import siteConfig from "~/site-config";

const HomePage: NextPage = () => {
  const mainSocials = useMainSocials();

  return (
    <>
      <NextSeo title={siteConfig.title} titleTemplate="%s" />
      <Stack alignItems="center" px={8} spacing={4} textAlign="center" w="full">
        <Logo borderRadius="full" boxSize="125px" src={siteConfig.profileUrl} />
        <Heading size="2xl">{siteConfig.title}</Heading>
        <Heading fontWeight="normal" pb={8} size="md">
          {siteConfig.description}
        </Heading>

        <Wrap justify="center" spacing={4}>
          {mainSocials.map(({ href, icon, name }) => {
            return (
              <WrapItem key={name}>
                <Button
                  as="a"
                  href={href}
                  leftIcon={<Icon as={icon} />}
                  target="_blank"
                >
                  {name}
                </Button>
              </WrapItem>
            );
          })}
        </Wrap>
      </Stack>
    </>
  );
};

export default HomePage;
