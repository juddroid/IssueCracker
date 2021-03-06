import React from 'react';
import styled from 'styled-components';
import SideBar from '../../../../common/sideBar/SideBar';

const IssueAddSidebar = (): JSX.Element => {
  return (
    <IssueAddSidebarStyle>
      <React.Suspense fallback={null}>
        <SideBar />
      </React.Suspense>
    </IssueAddSidebarStyle>
  );
};

export default IssueAddSidebar;

const IssueAddSidebarStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  min-width: 300px;
  padding: 10px;
`;
