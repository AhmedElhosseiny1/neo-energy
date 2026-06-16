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
      width={160}
      height={88}
      className={className}
      priority
    />
  );
}
