import * as React from "react";
import { Image } from "@chakra-ui/react";
import type { ImageProps } from "@chakra-ui/react";

const Logo: React.FC<ImageProps> = (props) => {
  return <Image {...props} />;
};

export default Logo;
