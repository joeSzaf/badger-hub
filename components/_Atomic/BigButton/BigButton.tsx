import Link from 'next/link';
import BigButtonWrapper from './BigButton.style';

interface BigButtonProp {
  copy: string;
  href: string;
}

const BigButton = ({ copy, href }: BigButtonProp) => {
  return (
    <BigButtonWrapper
      disableRipple
      variant='contained'
      LinkComponent={Link}
      href={href}
    >
      {copy}
    </BigButtonWrapper>
  );
};

export default BigButton;
