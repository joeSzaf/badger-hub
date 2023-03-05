import BigButtonWrapper from './BigButton.style';

interface BigButtonProp {
  copy: string;
}

const BigButton = ({ copy }: BigButtonProp) => {
  return (
    <BigButtonWrapper
      disableRipple
      style={{ width: 400, height: 96, borderRadius: 32, fontSize: 36 }}
      variant='contained'
    >
      {copy}
    </BigButtonWrapper>
  );
};

export default BigButton;
