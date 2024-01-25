import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import styled, { css } from 'styled-components';

export const TopUpButton = styled(BaseButton)`
  ${(props) =>
    props.type === 'default' &&
    css`
      color: var(--text-secondary-color);
    `};
`;
