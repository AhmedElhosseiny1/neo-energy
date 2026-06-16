import Image from "next/image";

interface NeoLogoProps {
  className?: string;
  color?: string;
}

export function NeoLogo({ className = "" }: NeoLogoProps) {
  return (
    <Image
      src="/images/neo-logo.png"
      alt="Neo Energy logo"
      width={2296}
      height={1032}
      className={className}
      priority
    />
  );
}
