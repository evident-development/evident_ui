import { RightBarWrapper } from './style';
import { useAppSelector } from '@/documentation/actions/redux';

export const RightBar = () => {
  const { componentsGroupId } = useAppSelector(
    (state) => state.componentsGroupId
  );
  switch (componentsGroupId) {
    case 'buttons':
      return (
        <RightBarWrapper>
          <h2>Buttons</h2>
        </RightBarWrapper>
      );
    case 'inputs':
      return (
        <RightBarWrapper>
          <h2>Inputs</h2>
        </RightBarWrapper>
      );
    default:
      return (
        <RightBarWrapper>
          <h2>Cards</h2>
        </RightBarWrapper>
      );
  }
};
