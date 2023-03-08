import styled from '@emotion/styled';
import React, { useState } from 'react';
import { ComponentCard, SimpleTextInput, Text } from './base';
import { Button } from './base/button';

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  background-color: #222;
  padding: 10px;
`;
export const DemoComponents = () => {
  const [textInputValue, setTextInputValue] = useState<string>('');
  // const [selectOption, setSelectOption] = React.useState<string>('');
  // const [tagSelectOption, setTagSelectOption] = React.useState<string>('');
  // const [checkboxValue, setCheckboxValue] = React.useState<boolean>(false);

  return (
    <StyledContainer>
      <ComponentCard title="Button">
        <Button
          large
          preset="primary"
          text="Confirm"
          onClick={() => console.log('Button clicked')}
        />
        <Button
          large
          preset="secondary"
          text="Confirm"
          onClick={() => console.log('Button clicked')}
        />
        <Button preset="primary" text="Confirm" onClick={() => console.log('Button clicked')} />
        <Button preset="secondary" text="Confirm" onClick={() => console.log('Button clicked')} />

        <Button preset="secondary" fetching text="Loading" />
      </ComponentCard>
      <ComponentCard title="Text">
        <div className="flex">
          <div>
            <div className="flex">
              <Text m2 preset="h1" text="H1" />
              <Text m2 preset="h1p" text="H1+" />
            </div>
            <div className="flex">
              <Text m2 preset="h2" text="H2" />
              <Text m2 preset="h2p" text="H2+" />
            </div>
            <div className="flex">
              <Text m2 preset="h3" text="H3" />
              <Text m2 preset="h3p" text="H3+" />
            </div>
            <div className="flex">
              <Text m2 preset="h4" text="H4" />
              <Text m2 preset="h4p" text="H4+" />
            </div>
          </div>
          <div>
            <div className="flex">
              <Text m2 preset="p1" text="p1" />
              <Text m2 preset="p1p" text="p1+" />
            </div>
            <div className="flex">
              <Text m2 preset="p2" text="p2" />
              <Text m2 preset="p2p" text="p2+" />
            </div>
            <div className="flex">
              <Text m2 preset="p3" text="p3" />
              <Text m2 preset="p3p" text="p3+" />
            </div>
            <div className="flex">
              <Text m2 preset="p4" text="p4" />
              <Text m2 preset="p4p" text="p4+" />
            </div>
            <Text m2 preset="error" text="error" />
            <Text m2 preset="ls" text="Link small" />
            <Text m2 preset="lm" text="Link medium" />
            <Text m2 preset="ll" text="Link large" />
          </div>
        </div>
      </ComponentCard>
      <ComponentCard title="SimpleTextInput">
        <SimpleTextInput
          label="Label"
          placeholder="Enter your text here"
          value={textInputValue}
          onChange={e => setTextInputValue(e.target.value)}
        />
        <SimpleTextInput
          label="Label"
          multiline
          placeholder="Enter your text here"
          value={textInputValue}
          onChange={e => setTextInputValue(e.target.value)}
          error="Error message"
        />
      </ComponentCard>
    </StyledContainer>
  );
};
