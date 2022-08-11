import React from 'react';
import styled from '@emotion/styled';
import OFcstWater from '../Organisms/OFcstWater';
import OFcstWave from '../Organisms/OFcstWave';
import AsyncBoundaryWithQuery from '$components/Boundary/AsyncBoundaryWithQuery';
import SkeletonOthers from '$components/Molecules/SkeletonOthers';

const TemplateRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap-reverse;
  @media (max-width: ${props => props.theme.deviceSizes.mobileSE}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const TmplWater = ({ beachCode }: { beachCode: number }) => {
  return (
    <TemplateRight>
      <AsyncBoundaryWithQuerypendingFallback={<SkeletonOthers />}>
        <OFcstWater beachCode={beachCode} />
      </AsyncBoundaryWithQuery>
      <AsyncBoundaryWithQuery pendingFallback={<SkeletonOthers />}>
        <OFcstWave beachCode={beachCode} />
      </AsyncBoundaryWithQuery>
    </TemplateRight>
  );
};

export default TmplWater;
