import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  position: relative;
  border-radius: 5px;
  background: ${({ theme }) => theme.palette.LAYOUT.BUTTON};
  outline: none;
  align-items: center;
  align-self: flex-start;
  border: 1px solid ${({ theme }) => theme.palette.GENERAL.SECONDARY};
  padding: 12px 20px;
  cursor: pointer;
  svg {
    align-self: center;
  }
`;

export const Text = styled.p`
  font-family: 'Poppins';
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.GENERAL.SECONDARY};

  &:hover {
    color: ${(props) =>
      transparentize(0.25, props.theme.palette.GENERAL.SECONDARY)};
  }
`;
