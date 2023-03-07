import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

interface BaseModalProps {
  title: string;
  content: string;
  onCancel: () => void;
  onConfirm: () => void;
  onClose: () => void;
  isOpen: boolean;
  children?: ReactNode;
}

export function BaseModal(props: BaseModalProps) {
  const { title, content, onCancel, onConfirm, onClose, isOpen, children } = props;

  return (
    <>
      {isOpen && (
        <StyledOverlay>
          <StyledModal>
            <StyledHeader>
              <StyledTitle>{title}</StyledTitle>
              <StyledCloseButton onClick={onClose}>
                <span className="sr-only">Close</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </StyledCloseButton>
            </StyledHeader>
            <StyledContent>
              {content} {children}
            </StyledContent>
            <StyledFooter>
              <StyledButton onClick={onConfirm}>Confirm</StyledButton>
              <StyledButton onClick={onCancel}>Cancel</StyledButton>
            </StyledFooter>
          </StyledModal>
        </StyledOverlay>
      )}
    </>
  );
}

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

const StyledOverlay = styled.div`
  position: fixed;
  z-index: 60;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledModal = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  max-height: 90vh;
  overflow-y: auto;
  width: 90%;
  max-width: 50rem;

  /* Hide scrollbar in WebKit-based browsers */
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d1d5db;
    border-radius: 0.25rem;
  }

  /* Hide scrollbar in non-WebKit-based browsers */
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const StyledHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const StyledTitle = styled.div`
  color: rgba(0, 0, 0, 0.85);
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.6;
  margin-top: 0;
  margin-bottom: 0;
`;

const StyledCloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: rgba(0, 0, 0, 0.45);
  cursor: pointer;
  padding: 0;
  transition: color 0.15s ease-in-out;
  &:hover {
    color: rgba(0, 0, 0, 0.75);
  }
`;

const StyledContent = styled.div`
  padding: 1rem;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.85);
`;

const StyledFooter = styled.div`
  align-items: center;
  border-top: 1px solid #e5e5e5;
  display: flex;
  justify-content: flex-end;
  padding: 1.5rem;
`;

const StyledButton = styled.button`
  background-color: #2563eb;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  margin-left: 1rem;
  padding: 0.75rem 1.5rem;
  transition: background-color 0.15s ease-in-out;
  &:hover {
    background-color: #1d4ed8;
  }
`;
