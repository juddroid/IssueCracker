import React from 'react';
import ProgressBar from '../../../common/ProgressBar';
import { Text as S } from '../../../styles/CommonStyles';
import { MilestoneStateProps } from '../../../../utils/types/commonTypes';
import styled from 'styled-components';

const MilestoneContent = ({
  checkedMilestone,
}: MilestoneStateProps): JSX.Element => {
  return (
    <>
      <ProgressBox>
        {checkedMilestone && checkedMilestone[0] && <ProgressBar value={0} />}
      </ProgressBox>
      <TextBox>
        <S.TextSmall>
          {checkedMilestone && checkedMilestone[0]?.title}
        </S.TextSmall>
      </TextBox>
    </>
  );
};

export default MilestoneContent;

const ProgressBox = styled.div`
  margin-bottom: 5px;
`;

const TextBox = styled.div`
  margin-left: 2px;
`;
