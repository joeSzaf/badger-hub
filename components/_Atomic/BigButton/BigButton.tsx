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
      style={{ width: 400, height: 96, borderRadius: 32, fontSize: 36 }}
      variant='contained'
      LinkComponent={Link}
      href={href}
    >
      {copy}
    </BigButtonWrapper>
  );
};

export default BigButton;
