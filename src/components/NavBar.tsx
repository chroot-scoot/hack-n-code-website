import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { twMerge } from 'tailwind-merge';

export function NavBar() {
  return (
    <div className={twMerge('')}>
      <Avatar>
        <AvatarImage src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/2a/2abf4e66714d660e9dc0dd8583e092d7cd7cb2e7_full.jpg" />
        <AvatarFallback>P</AvatarFallback>
      </Avatar>
    </div>
  );
}
