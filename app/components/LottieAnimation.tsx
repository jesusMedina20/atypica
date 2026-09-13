import { useLottie } from "lottie-react";
import type { LottieOptions } from "lottie-react";

interface Props {
  animationData: LottieOptions["animationData"];
  className?: string;
}

export default function LottieAnimation({ animationData, className }: Props) {
  const { View } = useLottie({
    animationData,
    loop: true,
    autoplay: true,
  });

  return <div className={className}>{View}</div>;
}